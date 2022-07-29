import React, { Suspense } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

import { getHomeImagesAPI, getStoreInfoAPI, getProductsAPI } from 'server/sheets/'
import { useHasMounted } from 'src/hook'

import Layout from 'src/components/layout'
// import About from 'src/components/blocks/about'
import Home from 'src/components/blocks/home'
import HotProducts from 'src/components/blocks/hotProducts'

interface Props {
  storeInfos: SheetGlobal.StoreInfos | null
  homeImages: SheetGlobal.HomeImages | null
  products: SheetGlobal.Products | null
}

// const DynamicHome = dynamic(() => import('src/components/blocks/home'), {
//   ssr: false,
// })
// const DynamicHotProducts = dynamic(() => import('src/components/blocks/hotProducts'), {
//   ssr: false,
// })
const DynamicAbout = dynamic(() => import('src/components/blocks/about'), {
  ssr: false,
})

const Index = ({ storeInfos, homeImages, products }: Props): JSX.Element => {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  return (
    <Layout store={storeInfos[0]} pageType="首頁">
      <main>
        <Suspense fallback="loading...">
          <Home store={storeInfos[0]} homeImages={homeImages} />
        </Suspense>
        <DynamicAbout />
        <Suspense fallback="loading...">
          <HotProducts products={products} />
        </Suspense>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const storeInfos = await getStoreInfoAPI()
  const homeImages = await getHomeImagesAPI()
  const products = await getProductsAPI()

  return {
    props: {
      storeInfos,
      homeImages,
      products,
    },
    revalidate: 10,
  }
}

export default Index
