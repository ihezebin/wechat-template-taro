import { Switch, View } from '@tarojs/components'
import { Button, WaterMark } from '@nutui/nutui-react-taro'
import './index.scss'
import Taro, { usePullDownRefresh } from '@tarojs/taro'
import React, { useEffect } from 'react'

import api from '../../api'
import { useStore } from '../../store'
import createWithConfigProvider from '../../utils/configProvider'
import createErrorBoundary from '../../utils/createErrorBoundary'

const Index = () => {
  const { setToken } = useStore()

  useEffect(() => {
    api.get('https://www.hezebin.com/api/health').then((res) => {
      console.log('res', res)
    })

    setToken('123' + new Date().getTime())

    // throw new Error('test')
  }, [])

  usePullDownRefresh(() => {
    console.log('onPullDownRefresh')
    Taro.stopPullDownRefresh()
  })

  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View className="index">
        <Button
          fill="dashed"
          type="primary"
          className="btn"
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/my/my?id=2&type=test',
            })
            console.log('navigateTo')
          }}>
          NutUI React Button
        </Button>
        <Switch defaultChecked />
      </View>
      <WaterMark content="xxx" />
    </View>
  )
}

export default createWithConfigProvider(createErrorBoundary(Index))
