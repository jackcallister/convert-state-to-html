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
}, {
  description: "Link",
  html: `<h1 class="header-one" style="font-size:22px;"><a href="http://url.com"><span style="color:red;">URL</span></a></h1>`,
  state: {
    "entityMap": {
      "0": {
        "type": "LINK",
        "mutability": "MUTABLE",
        "data": {
          "url": "http://url.com"
        }
      }
    },
    "blocks": [{
      "key": "b0lic",
      "text": "URL",
      "type": "header-one",
      "depth": 0,
      "inlineStyleRanges": [{
        "offset":0,
        "length":3,
        "style":"RED"
      }],
      "entityRanges": [{
        "offset": 0,
        "length": 3,
        "key": 0
      }]
    }]
  }
}]

export default scenarios
