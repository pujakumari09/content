import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'country', 'slogan', 'head_qua', 'website'];
  dataSource !: any;

  p: number = 1;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.appService.list(this.p).subscribe(data => {
      console.log("------------", data);
      this.dataSource = data
    })
  }

}
