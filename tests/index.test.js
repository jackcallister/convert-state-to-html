import { convertFromRaw } from 'draft-js'
import convertStateToHTML from '../src/index.js'
import test from 'tape'
import scenarios from './scenarios'

const inlineStyleMap = {
  RED: {
    color: 'red'
  },
  ITALIC: {
    fontStyle: 'italic'
  }
}

function blockAttrFn(contentBlock) {
  switch(contentBlock.getType()) {
    case 'header-one':
      return {
        className: 'header-one',
        style: {
          fontSize: '22px'
        }
      }
    case 'p':
      return {
        className: 'paragraph',
      }
    default:
      return {}
  }
}

test('convertStateToHTML', (t) => {
  t.plan(scenarios.length)

  scenarios.forEach((scenario) => {
    const {
      description,
      state,
      html
    } = scenario

    const contentState = convertFromRaw(state)
    const options = { inlineStyleMap, blockAttrFn }
    const stateToHTML = convertStateToHTML(contentState, options)

    t.equal(stateToHTML, html)
  })
})
