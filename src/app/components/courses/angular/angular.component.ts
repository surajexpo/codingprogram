import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {
  constructor(private enrollService:EnrollService) {}
  ngOnInit(){
    this.enrollService.setCourse('Angular');
  }
}
