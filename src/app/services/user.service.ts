import { Injectable } from "@angular/core";
import { getFirestore, collection, doc, setDoc,getDoc, getCountFromServer, where,query, getDocs } from "firebase/firestore";
import "firebase/firestore";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}
  db = getFirestore();
  enrollCol = collection(this.db, "enroll");
  contactCol = collection(this.db, "contact");
  emailCol = collection(this.db, "subsriber");
  
  async enroll(data: any) {
    return await setDoc(doc(this.enrollCol), data);
  }
  async contact(data: any) {
    return await setDoc(doc(this.contactCol), data);
  }
  async subscribe(email: any) {
    return await setDoc(doc(this.emailCol), email);
  }
  
 
}
