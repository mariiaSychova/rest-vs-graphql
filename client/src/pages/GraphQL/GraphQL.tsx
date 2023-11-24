import { FC, useState } from 'react'
import {GraphQLCon} from './GraphQL.ts';
import { IData } from '../../models/IData.ts';
import Content from '../../components/Content/Content.tsx';

interface Props{
    
}

const GraphQL : FC<Props> = ({}) => {

  const [data, setData] = useState<IData[]>([])

  return (
   <GraphQLCon className='container'>
    <Content data={data} />
   </GraphQLCon>
  )
}

export default GraphQL