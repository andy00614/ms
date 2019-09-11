function binarySearch(array, value) {
  const sortedArray = array
  let low = 0
  let high = sortedArray.length - 1
  while(low < high) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
    // console.log(element)
    if(element > value) {
      high = mid 
    } else if(element < value) {
      low = mid
    } else {
      return mid
    }
  }
  return -1
}
const mockArr = (count) => {
  const result = []
  for(let i = 0; i < count; i++) {
    result.push(i)
  }
  return result
}
const testArr = mockArr(10000000)
console.log(binarySearch(testArr,5030))