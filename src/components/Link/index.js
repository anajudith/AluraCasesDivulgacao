import React from 'react'
import NextLink from 'next/link'

export default function Link({children, href}) {
  return (
    <NextLink href={href}><h1> {children}</h1></NextLink>
  )
}
