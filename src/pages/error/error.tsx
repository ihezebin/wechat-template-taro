import { View } from '@tarojs/components'
import { Empty } from '@taroify/core'

import styles from './error.module.scss'

type ErrorProps = {
  error?: Error | null
}

const Error = ({ error }: ErrorProps) => {
  return (
    <View className={styles.error}>
      <Empty>
        <Empty.Image src="error" />
        <Empty.Description>{error?.message || '发生未知错误'}</Empty.Description>
      </Empty>
    </View>
  )
}

export default Error
