import React from 'react'
// import PropTypes from 'prop-types'
import Image from 'next/image'
import { Box } from './styled'

interface Props {
  alt: string
  src: string
  width: number | string
  height: number | string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  quality?: number
}

export const FillImage = ({
  alt,
  src,
  width,
  height,
  objectFit = 'none',
  quality = 75,
  ...restProps
}: Props) => {
  return (
    <Box width={width} height={height}>
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit={objectFit}
        quality={quality}
        {...restProps}
      ></Image>
    </Box>
  )
}
