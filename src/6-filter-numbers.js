export const filterNumbers = (array, largerThan) => {
  const filterFun = (array) => {
    return array <= largerThan
  }
  return array.filter(filterFun)
  
  
  
}
