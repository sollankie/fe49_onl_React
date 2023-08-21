// ####  Homework 33
// ============


// #### Задачи: 

// С ниже приведенным объектом решить следующие задачи:

//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


// ```javascript
    const subjects = {
        mathematics: {
            students: 200,
            teachers: 6
        },
        biology: {
            students: 120,
            teachers: 6
        },
        geography: {
            students: 60,
            teachers: 2
        },
        chemistry: {
            students: 100,
            teachers: 3
        }
    }



    // Задача 1
const subjectNames = Object.keys(subjects).join(', ');

// Задача 2
let totalStudents = 0;
let totalTeachers = 0;

for (const subject of Object.values(subjects)) {
    totalStudents += subject.students;
    totalTeachers += subject.teachers;
}

// Задача 3
const subjectCount = Object.keys(subjects).length;
const averageStudentsPerSubject = totalStudents / subjectCount;

// Задача 4
const subjectArray = Object.entries(subjects).map(([subjectName, subjectData]) => ({
    name: subjectName,
    students: subjectData.students,
    teachers: subjectData.teachers
}));

// Задача 5
const sortedSubjectsByTeachers = subjectArray.slice().sort((a, b) => b.teachers - a.teachers);