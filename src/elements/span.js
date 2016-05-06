import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default function span(props) {
  return renderToStaticMarkup(
    <span style={props.style} dangerouslySetInnerHTML={{ __html: props.content }} />
  )
}
