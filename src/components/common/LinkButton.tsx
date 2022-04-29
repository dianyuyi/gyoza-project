import React, { FC, MouseEvent, AnchorHTMLAttributes } from 'react'
import Link, { LinkProps as NextLinkProps } from 'next/link'
import { isExternalLink } from 'src/utils/url'
import tw, { styled, css } from 'twin.macro'

interface StyleProps {
  bgColor?: string
  fontColor?: string
  hoverBg?: string
  hoverColor?: string
}
const StyledLink = styled.a(({ bgColor, fontColor, hoverBg, hoverColor }: StyleProps) => [
  tw`px-8 py-16 text-black  rounded text-center`,
  // The common button styles added with the tw import
  tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,
  bgColor && [
    css`
      background-color: bgColor;
    `,
  ],
  fontColor && [
    css`
      background-color: fontColor;
    `,
  ],
  hoverBg && [
    css`
      background-color: hoverBg;
    `,
  ],
  hoverColor && [
    css`
      background-color: hoverColor;
    `,
  ],
  css`
    background-color: #222222;
    border: none;
    padding: 8px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-family: '微軟正黑體';
    line-height: 24px;
    float: none;
    color: #fff;
    &:hover {
      padding: 8px 20px;
      font-size: 18px;
      background-color: #4d4d4d;
    }
  `,
])

export interface Props
  extends NextLinkProps,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'> {
  openInNewTab?: boolean
  title?: string
  onClick?: (e: MouseEvent) => void
  className?: string
  bgColor?: string
  fontColor?: string
  hoverBg?: string
  hoverColor?: string
}

const LinkButton: FC<Props> = ({
  href,
  title,
  target,
  onClick,
  className,
  children,
  bgColor,
  fontColor,
  hoverBg,
  hoverColor,
  ...restProps
}) => {
  const openInNewTab = target === '_blank'
  const isExternal = isExternalLink(href)
  const rel = openInNewTab ? 'noreferrer noopener' : undefined

  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (isExternal || openInNewTab) {
    return (
      <StyledLink
        className={className}
        href={href as string}
        title={title}
        target={target}
        rel={rel}
        onClick={handleClick}
        bgColor={bgColor}
        fontColor={fontColor}
        hoverBg={hoverBg}
        hoverColor={hoverColor}
      >
        {children}
      </StyledLink>
    )
  }

  return (
    <Link href={href} {...restProps} passHref>
      <StyledLink onClick={handleClick}>{children}</StyledLink>
    </Link>
  )
}

export default LinkButton
