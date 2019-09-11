const ipt = document.querySelector('#ipt')

ipt.oninput = debounce(function() {
  console.log(ipt.value)
},300)

function debounce(fn,time=200) {
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,arguments)
    }, time);
  }
}

