import { FC, useState } from 'react'
import {RESTCon} from './REST.ts';
import { IData } from '../../models/IData.ts';
import Content from '../../components/Content/Content.tsx';

interface Props{
    
}

const REST : FC<Props> = ({}) => {

  const [data, setData] = useState<IData[]>([])

  return (
   <RESTCon className='container'>
    <Content data={data} />
   </RESTCon>
  )
}

export default REST