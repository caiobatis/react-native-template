import { Dimensions, PixelRatio } from 'react-native'

type FNormalize = (size: number) => number

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

// Based on iPhone 11 Pro Max (2019) scale
const widthBaseScale = SCREEN_WIDTH / 414

const heightBaseScale = SCREEN_HEIGHT / 896

function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale

  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

// for width pixel
const widthPixel: FNormalize = size => {
  return normalize(size, 'width')
}

// for height pixel
const heightPixel: FNormalize = size => {
  return normalize(size, 'height')
}

// for font pixel
const fontPixel: FNormalize = size => {
  return heightPixel(size)
}

// for Margin and Padding vertical pixel
const pixelSizeVertical: FNormalize = size => {
  return heightPixel(size)
}

// for Margin and Padding horizontal pixel
const pixelSizeHorizontal: FNormalize = size => {
  return widthPixel(size)
}

export default {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal
}
