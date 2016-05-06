import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default function h1(props) {
  return renderToStaticMarkup(
    <h1 dangerouslySetInnerHTML={{ __html: props.content }} />
  )
}
