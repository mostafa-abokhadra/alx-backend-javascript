interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}
interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}
class Director implements DirectorInterface {
    constructor(){}
    workFromHome(): string {
        return `Working from home`;
    }
    getToWork(): string {
        return `Getting a coffee break`;
    }
    workDirectorTasks(): string {
        return `Getting to director tasks`
    }
    getCoffeeBreak(): string{
        return `Getting a coffee break`;
    }
}
class Teacher  implements TeacherInterface {
    constructor(){}
    workFromHome(): string {
        return `Cannot work from home`;
    }
    workTeacherTasks(): string {
        return `Getting to work`
    }
    getCoffeeBreak(): string{
        return `Cannot have a break`;
    }
}
function createEmployee (salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return `Teaching Math`;
    }
    return `Teaching History`;
} 
