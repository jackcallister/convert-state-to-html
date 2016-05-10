const scenarios = [{
  description: "Unstyled wrapper",
  html: `<span><span style="color:red;">red</span>notred</span>`,
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
}, {
  description: "Heading with inline styles",
  html: `<h1 class="header-one" style="font-size:22px;"><span style="color:red;">Red</span> Heading</h1>`,
  state: {
    "entityMap":{},
    "blocks":[{
      "key":"9nc73",
      "text":"Red Heading",
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
}, {
  description: "Multiple inline styles",
  html: `<p class="paragraph"><span style="color:red;font-style:italic;">reditalic</span></p>`,
  state: {
    "entityMap":{},
    "blocks":[{
      "key":"9nc73",
      "text":"reditalic",
      "type":"p",
      "depth":0,
      "inlineStyleRanges":[{
        "offset":0,
        "length":9,
        "style":"RED"
      }, {
        "offset":0,
        "length":9,
        "style":"ITALIC"
      }],
      "entityRanges":[]
    }]
  }
}]

export default scenarios
