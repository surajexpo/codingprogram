import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent {
  constructor(private enrollService:EnrollService) {}
  ngOnInit(){
    this.enrollService.setCourse('Core Java');
  }
}
