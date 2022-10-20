export class Student{
    name : string;
    group : string;
    soreHK1 : number;
    soreHK2 : number;
    constructor(name : string,
                group : string,
                soreHK1 : number,
                soreHK2 : number) {
    this.group = group;
    this.name = name;
    this.soreHK1 = soreHK1;
    this.soreHK2 = soreHK2;
    }
    AvgScore(){
        return (this.soreHK1+this.soreHK1)/2
    }
}



