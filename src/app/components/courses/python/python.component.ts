import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent {
  constructor(private enrollService:EnrollService) {}
  ngOnInit(){
    this.enrollService.setCourse('Python');
  }

}
