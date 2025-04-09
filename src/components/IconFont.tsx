import { IconFont as NutuiIconFontComponent } from '@nutui/icons-react-taro'

type IconFontProps = {
  name: string
}

const IconFont = (props: IconFontProps) => {
  return (
    <NutuiIconFontComponent fontClassName="iconfont" classPrefix="icon-blog" name={props.name} />
  )
}

export default IconFont
