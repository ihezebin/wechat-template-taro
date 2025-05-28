import { useLaunch, useError } from '@tarojs/taro'

// 全局样式
import './app.scss'

const App = ({ children }) => {
  useLaunch(() => {
    // todo
  })

  useError((error) => {
    console.error('error:', error)
  })

  return children
}

export default App
