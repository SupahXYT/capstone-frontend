import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { DataSource } from '@angular/cdk/collections';

export interface DataBroker {
  uuid: string;
  name: string;
  email: string;
  website: string;
}

export interface RootResponse {
  brokers: DataBroker[];
}

// export class DataBrokerDataSource extends DataSource<DataBroker> {

//   data: DataBroker[] = DATABROKERS;

//   connect() {

//   }
// }

@Component({
  selector: 'app-broker-registry',
  templateUrl: './broker-registry.component.html',
  styleUrls: ['./broker-registry.component.css']
})
export class BrokerRegistryComponent implements OnInit {

  dataBrokers: DataBroker[] | null = null;
  displayedColumns: string[] = ['name', 'email', 'website']

  public getDataBrokers() {
    this.searchService.getDataBrokers()
      // .subscribe(r => console.log(r))
      .subscribe(response => this.dataBrokers = (<RootResponse>response).brokers)
  }

  constructor(private searchService: SearchService) {
    this.getDataBrokers()
  }

  ngOnInit(): void {
  }

}
