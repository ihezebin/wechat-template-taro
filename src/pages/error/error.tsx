import { Image, View } from '@tarojs/components'
import { Empty } from '@nutui/nutui-react-taro'

import SleepCat from '../../assets/images/cat/sleep.png'

import styles from './error.module.scss'

type ErrorProps = {
  error?: Error | null
}

const Error = ({ error }: ErrorProps) => {
  return (
    <View className={styles.error}>
      <Empty
        description={`出现错误：${error?.message}`}
        image={<Image style={{}} src={SleepCat} />}
      />
    </View>
  )
}

export default Error
