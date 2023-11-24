import React, { FC } from 'react'
import {InputCon} from './Input'

interface Props{
    className?: string
    value: string
    setValue: (v: string) => void
    label?: string
    placeholder?: string
}
const Input : FC<Props> = ({className, value, setValue, label = '', ...props }) => {
  return (
    <InputCon className={className}>
      {label}
      <input type={'text'} value={value} onChange={e => setValue(e.target.value)} {...props} />
    </InputCon>
  )
}

export default Input