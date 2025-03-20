let vNode = {
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    "i am string",
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
// 把上诉虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>

function render(vNode) {
  if(typeof vNode === 'number') {
    vNode = String(vNode)
  }
  if(typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }
  let dom = document.createElement(vNode.tag)
  if(vNode.attrs) {
    Object.keys(vNode.attrs).forEach(key => {
      let value = vNode.attrs[key]
      dom.setAttribute(key, value)
    })
  }
  vNode.children.forEach(item => {
    dom.appendChild(render(item))
  })
  return dom
}

const dom = render(vNode)
console.log(dom)

document.addEventListener("DOMContentLoaded", () => {
  document.body.append(dom)
})
