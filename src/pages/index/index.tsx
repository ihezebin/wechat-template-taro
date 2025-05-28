import { View, Button } from '@tarojs/components'
import Taro, { usePullDownRefresh } from '@tarojs/taro'
import { Button as TaroifyButton } from '@taroify/core'
import { SmileCommentOutlined } from '@taroify/icons'
import React, { useEffect } from 'react'

import api from '../../api'
import { useStore } from '../../store'
import createErrorBoundary from '../../utils/createErrorBoundary'
import IconFont from '../../components/IconFont'

import styles from './index.module.scss'

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
    <View className={styles.index}>
      <View>欢迎使用 React 开发 Taro 多端项目。</View>
      <Button
        onClick={() => {
          Taro.switchTab({
            url: '/pages/my/my',
          })
          console.log('switchTab')
        }}>
        Taro Button
      </Button>

      <TaroifyButton color="primary" size="small">
        主要按钮
      </TaroifyButton>
      <SmileCommentOutlined size={40} />
      <IconFont name="home" size={40} />
    </View>
  )
}

export default createErrorBoundary(Index)
