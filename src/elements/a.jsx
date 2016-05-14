import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default function a(props) {
  return renderToStaticMarkup(
    <a {...props.attrs}
        dangerouslySetInnerHTML={{ __html: props.content }} />
  )
}
