import React from 'react'

import Layout from 'src/components/layout'
import Sidenav from 'src/components/sidenav'

const ProductPage = () => {
  return (
    <Layout title="Home" description={`施工實驗中...`}>
      <Sidenav />
      <div>Products</div>
      <div>testing</div>
    </Layout>
  )
}

export default ProductPage
