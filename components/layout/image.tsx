import NextImage, {ImageProps} from 'next/image'

import {cn} from '@/lib/utils'

type BlurImageProps = ImageProps & {
  className?: string
}

export default function Image({src, alt, className, ...props}: BlurImageProps) {
  return <NextImage src={src} alt={alt} {...props} loading="lazy" className={cn('object-cover', className)} />
}
