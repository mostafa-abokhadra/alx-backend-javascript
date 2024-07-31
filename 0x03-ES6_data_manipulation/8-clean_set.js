export default function cleanSet(set, startString) {
  const output = [];
  if (startString.length === 0 || typeof startString !== 'string') return '';
  set.forEach((elem) => {
    if (typeof elem === 'string' && elem.slice(0, startString.length) === startString) {
      output.push(elem.slice(startString.length));
    }
  });
  return output.join('-');
}
