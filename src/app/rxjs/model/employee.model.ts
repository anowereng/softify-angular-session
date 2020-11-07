import { first } from 'rxjs/operators';

export class EmployeeRxModel{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname =  lastname;
    }
    firstname:string;
    lastname:string;
}