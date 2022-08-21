import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebhookService {

  constructor(
    private http: HttpClient
  ) { }

  webhookPostInfo(data: {}) {

    var url = `https://webhook.site/307f99f8-aae9-44ef-8f93-f80bb3c6222e`
    return this.http.post(url, data).toPromise().then(data => data)
  }
}