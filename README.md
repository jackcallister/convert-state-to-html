# Convert State To HTML

Given a `ContentState` object from a Draft JS editor, output an HTML string.

### convertStateToHTML(contentState, { inlineStyleMap, blockStyleFn })

Options must contain `inlineStyleMap` and `blockAttrFn`. Here's an example:

```
const raw = {
  "entityMap":{},
  "blocks":[{
    "key":"9nc73",
    "text":"redandnotred",
    "type":"header-one",
    "depth":0,
    "inlineStyleRanges":[{
      "offset":0,
      "length":3,
      "style":"RED"
    }],
    "entityRanges":[]
  }]
}

const inlineStyleMap = {
  RED: {
    color: 'red'
  }
}

function blockAttrFn(contentBlock) {
  switch(contentBlock.getType()) {
    case 'header-one':
      return {
        className: 'custom-class',
        style: {
          fontSize: '22px'
        }
      }
    default:
      return {}
  }
}

const contentState = convertFromRaw(raw)
const options = { inlineStyleMap, blockAttrFn }
const stateToHTML = convertStateToHTML(contentState, options)

```

The output of `convertStateToHTML` will be `<h1 class='custom-class'><span style='color:red;'>red</span>andnotred</h1>`.
