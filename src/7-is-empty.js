import { transform } from "@babel/core"

export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  return (type === 'string' && stringArrayOrObject === '' ||
  stringArrayOrObject.length === 0 ||
  Object.entries(stringArrayOrObject).length === 0);

}