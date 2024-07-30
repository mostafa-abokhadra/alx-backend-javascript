export default function getStudentsByLocation(arr, city) {
  return arr.filter((obj) => {
    if (obj.location === city) {
      return obj;
    }
  });
}
