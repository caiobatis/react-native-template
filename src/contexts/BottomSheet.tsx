import {
  createContext,
  FunctionComponent,
  useCallback,
  useEffect,
  useContext,
  useMemo,
  useRef,
  useState,
  ReactNode
} from 'react'

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints
} from '@gorhom/bottom-sheet'
import { View } from 'react-native'

type BottomSheetContextValues = {
  close(): void
  open(): void
  setContent(content: ReactNode): void
}

type ContentFunctionComponent = FunctionComponent<Pick<BottomSheetContextValues, 'close'>>

const generateModalKey = (() => {
  let count = 0

  return () => `${++count}`
})()

let currentKey: string

const BottomSheetContext = createContext<BottomSheetContextValues>({} as BottomSheetContextValues)

export const useBottomSheetContext = (content: ContentFunctionComponent) => {
  const { close, ...context } = useContext(BottomSheetContext)

  const key = useMemo(generateModalKey, [])

  // was used `useMemo` to avoid re-renders
  const cachedContent = useMemo(
    () =>
      content({
        close
      }),
    [close, content]
  )

  // whenever the `content` prop has any changes the content of bottom sheet component will be rendered again
  useEffect(() => {
    if (key === currentKey) {
      context.setContent(cachedContent)
    }
  }, [cachedContent, context, key])

  return {
    close,
    open: () => {
      // we have `currentKey` to make it possible to call `useBottomSheetContext` many times in the same component
      currentKey = key

      context.setContent(cachedContent)

      context.open()
    }
  }
}

export const BottomSheetProvider: FunctionComponent = ({ children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const [content, setContent] = useState<ReactNode>()

  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])

  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints)

  const close = useCallback(() => bottomSheetRef.current?.close(), [])

  const open = useCallback(() => bottomSheetRef.current?.expand(), [])

  const renderBackdrop = useCallback(
    props =>
      content ? (
        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.7} />
      ) : (
        <View />
      ),
    [content]
  )

  const contextValues = useMemo(
    () => ({
      close,
      open,
      setContent
    }),
    [close, open]
  )

  return (
    <BottomSheetContext.Provider value={contextValues}>
      {children}
      <BottomSheet
        backdropComponent={renderBackdrop}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        handleHeight={animatedHandleHeight}
        index={-1}
        ref={bottomSheetRef}
        snapPoints={animatedSnapPoints}
      >
        <BottomSheetView onLayout={handleContentLayout}>{content}</BottomSheetView>
      </BottomSheet>
    </BottomSheetContext.Provider>
  )
}
