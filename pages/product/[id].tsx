import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const DetailProduct = (props: Props) => {
     const {query} = useRouter();
     const id = query.id
  return (
     
    <div>DetailProduct {id}</div>
  )
}

export default DetailProduct