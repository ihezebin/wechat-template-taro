import { Tabbar } from '@nutui/nutui-react-taro'
import { IconFont } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { useState } from 'react'

import Logs from '../pages/logs/logs'
import My from '../pages/my/my'
import Index from '../pages/index'

import styles from './layout.module.scss'

const Layout = () => {
  const [tab, setTab] = useState(0)

  return (
    <View className={styles.layout}>
      <View className={styles.main}>
        {tab === 0 && <Index />}
        {tab === 1 && <Logs />}
        {tab === 2 && <My />}
      </View>
      <Tabbar
        fixed
        inactiveColor="#3c4858"
        activeColor="#30a9de"
        value={tab}
        onSwitch={(value) => setTab(value)}>
        <Tabbar.Item
          title="首页"
          icon={<IconFont fontClassName="iconfont" classPrefix="icon-blog" name="home-red" />}
        />
        <Tabbar.Item
          title="日志"
          icon={<IconFont fontClassName="iconfont" classPrefix="icon-blog" name="tag-green" />}
        />
        <Tabbar.Item
          title="我的"
          icon={<IconFont fontClassName="iconfont" classPrefix="icon-blog" name="camera" />}
        />
      </Tabbar>
    </View>
  )
}

export default Layout
