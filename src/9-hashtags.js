export const hashtags = (text) => {
  //const pattern = /(#[a-z\d][\w-]*)/ig
  const pattern = /(#[a-z][\w]*)/ig
  text = text.match(pattern)
  return text
}
