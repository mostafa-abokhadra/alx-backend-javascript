interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
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

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);