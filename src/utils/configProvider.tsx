import enUS from '@nutui/nutui-react-taro/dist/es/locales/en-US'
import zhCN from '@nutui/nutui-react-taro/dist/es/locales/zh-CN'
import { ConfigProvider } from '@nutui/nutui-react-taro'
import type { NutCSSVariables } from '@nutui/nutui-react-taro'
const createWithConfigProvider = (Component: React.ComponentType) => {
  const themeConfig: Record<string | NutCSSVariables, string> = {
    nutuiColorPrimary: '#30a9de',
    nutuiColorPrimaryStop1: '#30a9de',
    nutuiColorPrimaryStop2: 'rgb(22, 119, 255)',
    nutuiButtonPrimaryBorderColor: '#30a9de',
    nutuiButtonPrimaryColor: '#30a9de',
  }

  return (props: any) => {
    return (
      // eslint-disable-next-line no-constant-condition
      <ConfigProvider theme={themeConfig} locale={true ? zhCN : enUS}>
        <Component {...props} />
      </ConfigProvider>
    )
  }
}

export default createWithConfigProvider
