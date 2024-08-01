interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
    [key: string | number]: any
}
interface Directors extends Teacher {
    numberOfReports: number
}
interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}
interface studentInterface {
    firstName: string,
    lastName: string
}
class StudentClass implements studentInterface{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
    }
    workOnHomework(): string {
        return `Currently working`;
    }
    displayName(): string {
        return `${this.firstName}`
    }
}