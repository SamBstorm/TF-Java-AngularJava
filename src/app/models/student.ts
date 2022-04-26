import { IStudent } from "./istudent";

export class Student implements IStudent{
    public className : string;
    public firstname : string;
    public lastname : string;
    public birthdate : Date;

    constructor(className : string, firstname:string, lastname : string, birthdate : Date){
        this.className = className;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }

    public Saluer():void{
        alert(`Bonjour je m\'appelle ${this.firstname}.`)
    }
}
