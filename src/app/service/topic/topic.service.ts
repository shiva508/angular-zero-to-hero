import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/model/modelfactory';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor(private httpClient: HttpClient) {}

  saveTopic(topic: Topic) {
    return this.httpClient.post('http://localhost:8084/api/topic/save', topic);
  }
}
