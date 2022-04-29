import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getSheetRequest } from 'src/redux/sheet/actions'
import WorksDetail from './item'
import LinkButton from 'src/components/common/LinkButton'
import { getSheetList } from 'src/utils/sheet'

// interface Props {
//   sheetData: SheetGlobal.Works | null
//   isLoading: boolean
// }

const Works: FC = ({ sheetData }) => {
  // const sheet = useSelector((state: Store.RootState) => state.sheet)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (!sheet.sheetData) {
  //     dispatch(getSheetRequest({ sheetName: 'Sheet1' }))
  //   }
  // }, [])

  return (
    <>
      {/* <WorksDetail sheetData={sheet.sheetData} isLoading={sheet.isLoading} /> */}
      <WorksDetail />
      {JSON.stringify(sheetData)}
      <LinkButton href="/">Back</LinkButton>
    </>
  )
}
// export async function getStaticProps() {
//   const sheetName = 'Sheet1'
//   const data = await getSheetList(sheetName)
//   return {
//     props: {
//       sheetData: data, // remove sheet header
//     },
//   }
// }
export default Works
