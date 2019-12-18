export const obj = {
  clickOutside: {
    inserted(el, bindings, vnode){
      document.addEventListener('click', (e) => {
        console.log('123123123');
        if (e.target === el || el.contains(e.target)){
          return 
        }
        bindings.value();
      })
    },
    unbind() {
      console.log('do something');
    }
  }
}

export default {};