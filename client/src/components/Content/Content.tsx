import React, { FC } from 'react'
import { ContentCon } from './Content'
import { IData } from '../../models'

interface Props {
  data: IData[]
}

const Content: FC<Props> = ({ data }) => {
  return (
    <ContentCon>

    </ContentCon>
  )
}

export default Content