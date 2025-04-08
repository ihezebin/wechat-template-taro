import { useEffect } from 'react'
import { useDidShow, useDidHide, useLaunch, useError } from '@tarojs/taro'
// 全局样式
import './app.scss'

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    // todo
  })

  // 对应 onShow
  useDidShow(() => {
    // todo
  })

  useLaunch(() => {
    // todo
  })

  useError((error) => {
    console.error('error:', error)
  })

  // 对应 onHide
  useDidHide(() => {
    // todo
  })

  return props.children
}

export default App
