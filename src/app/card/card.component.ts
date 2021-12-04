import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()  data!: any;
  countries :any;
  checked=false;
  constructor(private dataService : DataService) { 
  }

  ngOnInit(): void {
    this.dataService.getCountries().subscribe(data => this.countries=data);
  }

  onClick() {
    this.checked= !this.checked;
  }
  

}
