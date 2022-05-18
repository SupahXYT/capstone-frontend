import { Component, OnInit } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Params, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-policy-search',
  templateUrl: './policy-search.component.html',
  styleUrls: ['./policy-search.component.css']
})
export class PolicySearchComponent implements OnInit {

  categoryMap: any = {
    0: "Personal identifers",
    1: "Device identifers",
    2: "Government records",
    3: "Protected characteristics",
    4: "Internet activity",
    5: "Commercial information",
    6: "Geolocation information",
    7: "Biometrics",
    8: "Employment information",
    9: "Education information",
    10: "Inferences"
  }

  displayedColumns: string[] = ['image', 'name', 'description', 'policy', 'actions'];
  cols = ['name', 'age']

  constructor(private router: Router, private searchService: SearchService) {
  }

  searchInput: any;
  searchResult: any;
  dis: string = "asdf";
  loading = false;

  public searchCompany(query: string) {

    this.router.navigate(
      [],
      { queryParams: { q: query } }
    )

    this.searchService.query(query)
      .subscribe(response => {
        this.searchResult = response;
        console.log(this.searchResult);
        this.loading = false;
      });

  }

  public addTask(uuid: string) {
    console.log('YOU LISTEN>ING?')
    this.searchService.addTask(uuid)
      .subscribe(response => console.log('yes' + uuid))
  }

  public submit(uuid: string) {
    this.searchService.queuePolicy(uuid)
      .subscribe(response => console.log('yes ' + uuid))
  }

  ngOnInit(): void {
  }
}

