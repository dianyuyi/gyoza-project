import React from 'react'
import { useRouter } from 'next/router'
import { NextLink } from 'src/components/link'

import Layout from 'src/components/layout'
import Sidenav from 'src/components/sidenav'

const ProductItemPage = () => {
  const router = useRouter()
  const { group, id } = router.query
  return (
    <Layout title="Home" description={`施工實驗中...`}>
      <Sidenav />
      <div>ProductGroup</div>
      <div>id: {id}</div>
      <NextLink href="/">Home</NextLink>
    </Layout>
  )
}

export default ProductItemPage
