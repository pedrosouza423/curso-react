//You can use a spread in array and object
const englishClass = ["Pedro","Lucas"];
const newStudents = ["Pai", "Luizinha"];

const totalClass = [...newStudents, ...englishClass]

console.log(totalClass)

const newClass = ["Mark", ...totalClass, "Harry"]

console.log(newClass)  