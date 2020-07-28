 export class Patient {
     patientId: number;
     referenceNo: number;
     firstName: string;
     midName: string;
     lastName: string;
     parentage: string;
     phoneNo: string;
     age: number;
     weight: number;
     gender: Gender;
     address: string;     
 }

 export enum Gender {
     Male = 1,
     Female = 0
 }
