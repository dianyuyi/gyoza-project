import React from 'react'

import { Wrapper, Link } from './styled'

interface Props {
  href?: string
  children?: React.ReactNode
  target?: string
  onClick?: () => void
  className?: string
}

export const ViewMoreLink = ({
  href,
  target = '',
  children,
  onClick,
  className = '',
  ...restProps
}: Props) => {
  return (
    <Wrapper className={className}>
      <Link href={href} target={target} onClick={onClick}>
        View More
      </Link>
    </Wrapper>
  )
}
