export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  const type1 = typeof Array.isArray(stringArrayOrObject)
  if (type === 'string' | type1 === true) {
    //return stringArrayOrObject === ''
    if (stringArrayOrObject.length === 0) {
      return true
    } else {
      return false
    }

  }

  else {
    if (Object.keys(stringArrayOrObject).length === 0) {
      return true
    } else {
    return false 

    }
  }

  /*if (stringArrayOrObject.length === 0) {
    return true
  } else {
    return false
  } */
}
