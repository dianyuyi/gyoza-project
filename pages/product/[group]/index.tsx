import React from 'react'
import { useRouter } from 'next/router'
import { NextLink } from 'src/components/link'

const ProductGroup = () => {
  const router = useRouter()
  const { group } = router.query
  return (
    <>
      <div>ProductGroup</div>
      <div>group: {group}</div>
      <NextLink href="/">Home</NextLink>
    </>
  )
}

export default ProductGroup
