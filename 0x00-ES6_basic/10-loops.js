export default function appendToEachArrayValue(array, appendString) {
    const arr = [];

    for (let item of array) {
      let value = item;
      arr.push(appendString + value);
    }

    return arr;
  }