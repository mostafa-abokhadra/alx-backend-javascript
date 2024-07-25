export default class Car {
    constructor(brand, motor, color){
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }
    set brand(b){
        if (typeof b !== 'string') {
            throw new TypeError("must be a string");
        }
        this._brand = b;
    }
    set motor(m){
        if (typeof m !== 'string') {
            throw new TypeError("must be a string");
        }
        this._motor = m;
    }
    set color(c){
        if (typeof c !== 'string') {
            throw new TypeError("must be a string");
        }
        this._color = c;
    }
    get brand(){
        return self._brand;
    }
    get motor(){
        return self._motor;
    }
    get color(){
        return self._color;
    }
    static get [Symbol.species]() {
        return this;
      }
    cloneCar(){
        const Species = this.constructor[Symbol.species];

        return new Species();
    }
}