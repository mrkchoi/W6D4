
class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(text) {
    if (text === undefined) return this.arr[0].innerHTML;   
    this.arr.forEach(el => el.innerHTML = text);
  }

  empty() {
    this.html('');
  }
  
  append(arg) {
    this.arr.forEach(el => {
      if (typeof arg === 'string') {
        // String
        el.innerHTML += arg;
      } else if (arg instanceof HTMLElement) {
        // HTMLElement
        el.innerHTML += arg.outerHTML;
      } else {
        // Collection
        for (let i = 0; i < arg.length; i++) {
          // set outerHTML of arg[i] to innerHTML of el
          el.innerHTML += arg[i].outerHTML;          
        }   
      }
  });
}
  
  attr() {
    
  }

  addClass() {}
  removeClass() {}
}
// this.arr.append('<p>test</p>');


module.exports = DOMNodeCollection;