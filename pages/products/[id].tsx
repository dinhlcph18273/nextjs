import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

type ProductsProps = {
  product: any
}

const DetailProduct = ({product}: ProductsProps) => {
  return (
     
    <div>DetailProduct {product.name}</div>
  )
}

export const getStaticPaths: GetStaticPaths<ProductsProps> = async() => {
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
  const paths = data.map(item => (
    {params: {id: item.id}}
    )
  )
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params.id}`)).json();
  return {
    props: {
      product: data,
      revalidate: 60
    }
  }
}

export default DetailProduct