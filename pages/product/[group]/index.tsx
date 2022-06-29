import React from 'react'
import { useRouter } from 'next/router'
import { NextLink } from 'src/components/link'
import Layout from 'src/components/layout'
import Sidenav from 'src/components/sidenav'

const ProductGroup = () => {
  const router = useRouter()
  const { group } = router.query
  return (
    <Layout title="Home" description={`施工實驗中...`}>
      <Sidenav />
      <div>ProductGroup</div>
      <div>group: {group}</div>
      <NextLink href="/">Home</NextLink>
    </Layout>
  )
}

export default ProductGroup
