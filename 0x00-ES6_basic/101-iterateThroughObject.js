export default function iterateThroughObject(reportWithIterator) {
  let index = 0;
  let names = ""

  for (const name of reportWithIterator) {
    if (index != reportWithIterator.length - 1) {
      names += `${name} | `;
    } else {
      names += name;
    }
    index += 1;
  };

  return names
}
