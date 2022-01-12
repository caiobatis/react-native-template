import 'styled-components'

import { responsive } from 'utils'

declare module 'styled-components' {
  export interface DefaultTheme {
    responsive: typeof responsive
  }
}
