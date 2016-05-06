import { convertFromRaw } from 'draft-js'
import convertStateToHTML from '../src/index.js'
import test from 'tape'

const testCases = [{
  description: "Inline styles",
  html: `<p><span style="color:red;">red</span>notred</p>`,
  state: {
    "entityMap":{},
    "blocks":[{
      "key":"9nc73",
      "text":"rednotred",
      "type":"unstyled",
      "depth":0,
      "inlineStyleRanges":[{
        "offset":0,
        "length":3,
        "style":"RED"
      }],
      "entityRanges":[]
    }]
  }
}]

const styleMap = {
  RED: {
    color: 'red'
  }
}

test('convertStateToHTML', (t) => {
  t.plan(testCases.length)

  testCases.forEach((testCase) => {
    const {
      description,
      state,
      html
    } = testCase

    t.equal(convertStateToHTML(convertFromRaw(state), styleMap), html)
  })
})
