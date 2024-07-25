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
            throw new TypeError("Length must be a number")
        }
        if (students instanceof Array){
            this._students = students;
        } else {
            throw new TypeError("Students must be an array")
        }
    }
    setName(name){
        this._name = name;
    }
    setLength(length){
        this._length = length;
    }
    setStudents(students){
        this._students = students;
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