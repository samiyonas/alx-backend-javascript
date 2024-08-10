export default function appendToEachArrayValue(array, appendString) {
  for (var idx of array) {
    idx = appendString + idx;
  }

  return array;
}
