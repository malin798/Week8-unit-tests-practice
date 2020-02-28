export const hashtags = (text) => {
  
  const substring = text.match(/#\S+/gi)

 return substring
}
