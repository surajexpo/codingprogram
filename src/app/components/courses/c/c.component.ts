import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent {
  constructor(private enrollService:EnrollService) {}
  ngOnInit(){
    this.enrollService.setCourse('C');
  }

}
