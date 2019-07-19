/**
 * Get the intersection of two arrays whose values ​​are Number or String
 * @param { Array<Number> | Array<String> } arr1
 * @param { Array<Number> | Array<String> } arr2
 */
function getIntersection(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

export default getIntersection;
