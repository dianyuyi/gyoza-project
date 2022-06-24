import React from 'react'
import { useRouter } from 'next/router'
import { NextLink } from 'src/components/link'

const ProductItem = () => {
  const router = useRouter()
  const { group, id } = router.query
  return (
    <>
      <div>group: {group}</div>
      <div>id: {id}</div>
      <NextLink href="/">Home</NextLink>
    </>
  )
}

export default ProductItem
