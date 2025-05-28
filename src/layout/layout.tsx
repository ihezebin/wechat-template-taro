import { Tabbar } from '@taroify/core'
import { View } from '@tarojs/components'
import { Search, SettingOutlined } from '@taroify/icons'

import createErrorBoundary from '../utils/createErrorBoundary'
import { useStore } from '../store'
import IconFont from '../components/IconFont'
import Index from '../pages/home'
import Logs from '../pages/logs'
import My from '../pages/my'

import styles from './layout.module.scss'

interface TabbarItem {
  key: string
  text: string
  icon: React.ReactNode
  selectedIcon: React.ReactNode
}

const tabbars: TabbarItem[] = [
  {
    key: 'home',
    text: '首页',
    icon: <IconFont name="home" />,
    selectedIcon: <IconFont name="home" />,
  },
  {
    key: 'logs',
    text: '日志',
    icon: <Search />,
    selectedIcon: <Search />,
  },
  {
    key: 'my',
    text: '我的',
    icon: <SettingOutlined />,
    selectedIcon: <SettingOutlined />,
  },
]

const TabbarLayout = () => {
  // 读取根目录的 app.config.ts 下的 tabBar 配置
  const { tabKey = 'home', setTabKey } = useStore()

  const handleSwitchTab = (tabKey: string) => {
    console.log('tabKey', tabKey)
    setTabKey(tabKey)
  }

  return (
    <View className={styles.layout}>
      <View className={styles.content}>
        {tabKey === 'home' && <Index />}
        {tabKey === 'logs' && <Logs />}
        {tabKey === 'my' && <My />}
      </View>
      <Tabbar value={tabKey} onChange={handleSwitchTab} className={styles.tabbar}>
        {tabbars.map((item) => (
          <Tabbar.TabItem
            key={item.key}
            value={item.key}
            icon={item.key === tabKey ? item.selectedIcon : item.icon}>
            <View className={styles.tabbarItemText}>{item.text}</View>
          </Tabbar.TabItem>
        ))}
      </Tabbar>
    </View>
  )
}

export default createErrorBoundary(TabbarLayout)
