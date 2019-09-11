const fs = require('fs')

function renderData(count) {
  const result = []
  for(let i =0; i < count; i++) {
    result.push(Math.floor(Math.random()*(count-0)+0))
  }
  return result
}

fs.writeFile('./data.js',`const data=[${JSON.parse(JSON.stringify(renderData(10000000)))}]`,() => {
  console.log('创建完成')
})