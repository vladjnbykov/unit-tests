export const hackerSpeak = (words) => {
  const letters = {
    a:4, e:3, i:1, o:0, s:5
  }
  words = words.replace(/a/gi,"4").replace(/e/gi,"3").replace(/i/gi,"1").replace(/o/gi,"0").replace(/s/gi,"5")
  
  
  return words
}
