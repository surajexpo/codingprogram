import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss']
})
export class DataStructureComponent {
  constructor(private enrollService:EnrollService) {}
  ngOnInit(){
    this.enrollService.setCourse('Data Structure');
  }
}
