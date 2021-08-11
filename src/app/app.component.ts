import { Component } from '@angular/core';
import {PotterapiService} from './potterapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skill4';
  dataSource={};
  displayedColumns: string[] = ['Name','School','Role','House','Blood-Status','Species'];
  constructor(private ps: PotterapiService)
  {
    ps.getData().subscribe((data)=>{
      console.log(data),
      this.dataSource=data;
    });
  }
}
