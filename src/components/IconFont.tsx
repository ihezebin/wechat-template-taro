import { Icon } from '@taroify/icons'
import '../assets/iconfont/iconfont.css'

type IconFontProps = {
  name: string
  size?: number
}

const IconFont = (props: IconFontProps) => {
  return <Icon classPrefix="blog" name={props.name} size={props.size} />
}

export default IconFont
