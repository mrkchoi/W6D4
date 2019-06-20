let DOMNodeCollection = require('./dom_node_collection.js');

// Create $1 function on global namespace

window.$l = function(sel) {
  if(typeof sel === "string"){
    let nodes = Array.from(document.querySelectorAll(sel));
    return new DOMNodeCollection(nodes);
  } else if (sel instanceof HTMLElement){
    // if (nodes.length === 1) {
    //   return new DOMNodeCollection(nodes[0]);
    // } else {
    //   return new DOMNodeCollection(sel);
    // }
    return new DOMNodeCollection([sel]);
  }
};



// #1
// DOMNodeCollection
// $('.class')
// $('#id')

// #2
// HTML Element
// $('li')



// empty
// remove
// attr
// addClass
// removeClass
// html
// find
// children
// parent