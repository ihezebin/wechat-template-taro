import { View } from '@tarojs/components'

import { useStore } from '../../store'

import styles from './logs.module.scss'

const Logs = () => {
  const { token } = useStore()

  return (
    <View className={styles.logs}>
      <View>日志页 {token}</View>
    </View>
  )
}

export default Logs
