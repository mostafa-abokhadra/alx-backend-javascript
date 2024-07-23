export default function appendToEachArrayValue(array, appendString) {
  const arr = [];

  for (const item of array) {
    const value = item;
    arr.push(appendString + value);
  }

  return arr;
}
