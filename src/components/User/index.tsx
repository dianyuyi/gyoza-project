import React, { FC } from 'react'
// import Profile from './Profile'
import LinkButton from 'src/components/common/LinkButton'

const User: FC = () => {
  return (
    <>
      {/* <Profile profile={user.profile} isLoading={user.isLoading} /> */}
      <LinkButton href="/">Back</LinkButton>
    </>
  )
}

export default User
