import { View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { Calendar } from '@nutui/nutui-react-taro'

import createWithConfigProvider from '../../utils/configProvider'
import createErrorBoundary from '../../utils/createErrorBoundary'

import styles from './my.module.scss'

const My = () => {
  const router = useRouter()
  console.log('router', router.params)

  return (
    <View className={styles.my}>
      <View>我的</View>
      <Calendar visible={true} />
    </View>
  )
}

export default createWithConfigProvider(createErrorBoundary(My))
