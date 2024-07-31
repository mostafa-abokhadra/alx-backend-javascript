export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  const len = startString.length;
  const arr = Array.from(set);
  const filtered = arr.filter((value) => {
    if (value.slice(0, len) === startString) {
      return value.slice(len);
    }
    return null;
  });
  const last = filtered.map((value) => value.substr(len));
  return last.join('-');
}
