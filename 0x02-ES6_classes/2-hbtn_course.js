export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length
    this.students = students;
  }

  set name(name) {
    if (typeof name === 'String') {
      this._name = name;
    } else {
      throw new TypeError();
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'Number') {
      this._length = length;
    } else {
      throw new TypeError();
    }
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }

  get students() {
    return this._students;
  }
}
