import { UtilsService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(
    public utils:UtilsService
  ) { }

  ngOnInit() {}

  router(url:string){
    this.utils.router.navigate([url])
  }
}
