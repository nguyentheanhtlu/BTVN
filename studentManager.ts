import {Student} from "./student";
export class StudentManager{
    student : Student[] = [];
    constructor() {
    }
    getAdd( student : Student){
       return this.student.push(student)
    }
    showList() : Student[]{
        return this.student;
    }
    toldStudent() : number{
        return this.student.length
    }
    showRank(){



    }
    searchName(name : string){
        let Name : string[] = []
        for ( let i = 0; i < this.student.length; i ++){
            if (this.student[i].name == name){
              Name.push(this.student[i].name)
            }
            return Name;
        }
    }
    searchGroup(group : string){
        let Group : string[] = [];
        for ( let j = 0; j < this.student.length;j++){
            if(this.student[j].group == group ){
                Group.push(this.student[j].group)
            }
            return Group
        }
    }
}
