import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItemRequest } from 'src/redux/item/actions'
import ItemDetail from './item'
import LinkButton from 'src/components/common/LinkButton'

const Item: FC = () => {
  const item = useSelector((state: Store.RootState) => state.item)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!item.productItem) {
      dispatch(getItemRequest({ id: 'm12665837286' }))
    }
  }, [])

  return (
    <>
      <ItemDetail itemData={item.productItem} isLoading={item.isLoading} />
      <LinkButton href="/">Back</LinkButton>
    </>
  )
}

export default Item
