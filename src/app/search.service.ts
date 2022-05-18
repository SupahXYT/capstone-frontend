import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private host = "http://localhost:5000";
  private searchPath = "/api/company/search";
  private queuePath = "/api/queue/";
  private taskPath = "/api/task/"
  private searchUrl = `${this.host}${this.searchPath}`;
  private queueUrl = `${this.host}${this.queuePath}`
  private taskUrl = `${this.host}${this.taskPath}`

  query(name: string) {
    return this.http.get(this.searchUrl, {
      params: new HttpParams({ fromObject: { q: name } })
    });
  }

  queuePolicy(uuid: string) {
    return this.http.get(this.queueUrl + uuid);
  }

  getDataBrokers() {
    return this.http.get('/assets/data-brokers.json')
  }

  addTask(uuid: string) {
    return this.http.post(this.taskUrl + uuid, {})
  }

  constructor(private http: HttpClient) { }
}
