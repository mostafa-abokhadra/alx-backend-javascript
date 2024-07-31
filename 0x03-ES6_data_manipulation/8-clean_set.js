export default function cleanSet(set, startString) {
  const output = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((elem) => {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      output.push(s.slice(startString.length));
    }
  });
  return output.join('-');
}
