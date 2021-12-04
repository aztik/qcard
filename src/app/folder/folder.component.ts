import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  countries: any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
     this.dataService.getCountries().subscribe(data => this.countries = data);

  }

}
