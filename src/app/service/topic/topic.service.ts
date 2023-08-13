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
    return this.httpClient.post<Topic>(
      'http://192.168.49.2:30008/api/topic/save',
      topic
    );
  }
  getAllTopics() {
    return this.httpClient.get<Topic[]>(
      'http://192.168.49.2:30008/api/topic/all'
    );
  }
  deleteTopic(topicId: number) {
    return this.httpClient.delete(
      'http://192.168.49.2:30008/api/topic/delete?topicId=' + topicId
    );
  }
}
