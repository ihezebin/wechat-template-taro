import { Icon } from '@taroify/icons'

type IconFontProps = {
  name: string
}

const IconFont = (props: IconFontProps) => {
  return <Icon classPrefix="icon-blog" name={props.name} />
}

export default IconFont
