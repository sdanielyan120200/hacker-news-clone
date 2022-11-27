import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrontPageService {

  constructor(private http: HttpClient) { }

  loadItems(size: number) {
    return this.http
      .get(`${environment.baseApi}api/v1/search?tags=front_page&hitsPerPage=${size}`)
  }

  getPage(size: number, index: number) {
    return this.http.get(`${environment.baseApi}api/v1/search?tags=front_page&hitsPerPage=${size}&page=${index}`)
  }

}
