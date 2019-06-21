
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
    let args = arguments;
    if(args.length === 1){
      let el = this.arr[0];
      return el.attributes[args[0]].value;
    }else{
      this.arr.forEach(el => el.attributes[args[0]].value = args[1]);

    }
  }

  

  addClass() {}
  removeClass() {}
}
// this.arr.append('<p>test</p>');


module.exports = DOMNodeCollection;