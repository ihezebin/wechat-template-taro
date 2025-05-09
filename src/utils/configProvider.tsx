import enUS from '@nutui/nutui-react-taro/dist/es/locales/en-US'
import zhCN from '@nutui/nutui-react-taro/dist/es/locales/zh-CN'
import { ConfigProvider } from '@nutui/nutui-react-taro'
import type { NutCSSVariables } from '@nutui/nutui-react-taro'

const createWithConfigProvider = (
  Page: React.ComponentType,
  theme?: Record<string | NutCSSVariables, string>,
) => {
  const themeConfig: Record<string | NutCSSVariables, string> = {
    // nutuiColorPrimary: '#303133',
    // nutuiColorPrimaryStop1: '#303133',
    // nutuiColorPrimaryStop2: '#606266',
    // nutuiButtonPrimaryBorderColor: '#303133',
    // nutuiButtonPrimaryColor: '#303133',
    ...(theme || {}),
  }

  return (props: any) => {
    return (
      // eslint-disable-next-line no-constant-condition
      <ConfigProvider theme={themeConfig} locale={true ? zhCN : enUS}>
        <Page {...props} />
      </ConfigProvider>
    )
  }
}

export default createWithConfigProvider
