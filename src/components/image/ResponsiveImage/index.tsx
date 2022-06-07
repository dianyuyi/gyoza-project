import React, { FC } from 'react'
import Image from 'next/image'
import { Box } from './styled'

interface Props {
  alt: string
  src: string
  width: number
  height: number
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  quality?: number
}

export const ResponsiveImage: FC<Props> = ({
  alt,
  src,
  width,
  height,
  objectFit = 'none',
  quality = 75,
  ...restProps
}) => {
  return (
    <Box>
      <Image
        layout="responsive"
        alt={alt}
        src={src}
        width={width}
        height={height}
        objectFit={objectFit}
        quality={quality}
        {...restProps}
      ></Image>
    </Box>
  )
}
