import {StudentManager} from "./studentManager";
import {Student} from "./student";
let student1 = new Student('anh','C08',10,10);

let a = new StudentManager();

a.getAdd(student1);
console.log(a.searchName('anh'))
