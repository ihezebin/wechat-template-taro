import { useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'

const My = () => {
  const router = useRouter()
  console.log('router', router.params)

  return <View>我的</View>
}

export default My
