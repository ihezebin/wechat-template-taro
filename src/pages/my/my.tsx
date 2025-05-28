import { View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'

import createErrorBoundary from '../../utils/createErrorBoundary'

import styles from './my.module.scss'

const My = () => {
  const router = useRouter()
  console.log('router', router.params)

  return (
    <View className={styles.my}>
      <View>我的</View>
    </View>
  )
}

export default createErrorBoundary(My)
