import React, { FC } from 'react'
import {ButtonCon} from './Button'

interface Props {
  text: string
  disabled?: boolean
  onClick: any
  className?: string
}

const Button: FC<Props> = ({text, className, ...props}) => {
  return (
    <ButtonCon className={className} {...props}>{text}</ButtonCon>
  )
}

export default Button