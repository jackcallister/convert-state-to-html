import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default function p(props) {
  return renderToStaticMarkup(
    <p dangerouslySetInnerHTML={{ __html: props.content }} />
  )
}
