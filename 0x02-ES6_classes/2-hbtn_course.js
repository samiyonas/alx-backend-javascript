export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length
    this._students = students;
  }

  set _name(name) {
    if (typeof name === 'String') {
      this._name = name;
    } else {
      throw new TypeError();
    }
  }

  get _name() {
    return this._name;
  }

  set _length(length) {
    if (typeof length === 'Number') {
      this._length = length;
    } else {
      throw new TypeError();
    }
  }

  get _length() {
    return this._length;
  }

  set _students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError();
    }
  }

  get _students() {
    return this._students;
  }
}
