export default class HolbertonCourse {
    constructor(name, length, students){
        if (typeof(name) === String) {
            this._name = name;
        } else {
            throw new TypeError("Name must be a string");
        }
        if (typeof(length) === Number) {
            this._length = length;
        } else {
            throw new TypeError("Length must be a number");
        }
        if (students instanceof Array){
            this._students = students;
        } else {
            throw new TypeError("Students must be an array");
        }
    }
    setName(name){
        if (typeof(name) === String) {
            this._name = name;
        } else {
            throw new TypeError("Name must be a string");
        }
    }
    setLength(length){
        if (typeof(length) === Number) {
            this._length = length;
        } else {
            throw new TypeError("Length must be a number");
        }
    }
    setStudents(students){
        if (students instanceof Array){
            this._students = students;
        } else {
            throw new TypeError("Students must be an array");
        }
    }
    getName(){
        return this._name;
    }
    getLength(){
        return this._length;
    }
    getStudents(){
        return this._students;
    }
}