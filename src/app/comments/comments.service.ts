import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http
      .get(`${environment.baseApi}api/v1/search?query=bar&tags=comment`);
  }

}
