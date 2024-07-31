export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filtered = arr.filter((obj) => obj.location === city);
  const graded = newGrades.map((gradeObj) => {
    const studentToAddTheGrade = filtered.find((current) => current.id === gradeObj.studentId);
    if (Object.prototype.hasOwnProperty.call(gradeObj, 'grade')) {
      studentToAddTheGrade.grade = gradeObj.grade;
    } else {
      studentToAddTheGrade.grade = 'N/A';
    }
    return studentToAddTheGrade;
  });
  return filtered.map((obj) => {
    if (graded.find((current) => current.id === obj.id) === undefined) {
      obj.grade = 'N/A';
    }
    return obj;
  });
}
