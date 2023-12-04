import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class EnrollService {
  constructor() {}
  courseName='';
  setCourse(name: string) {
   this.courseName=name;
  }
  getCourse() {
    return this.courseName;
  }
  
 
}
