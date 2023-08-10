import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopicType } from 'src/app/model/modelfactory';

@Injectable({
  providedIn: 'root',
})
export class TopicTypeService {
  constructor(private httpClient: HttpClient) {}
  saveTopicType(topicType: TopicType) {
    return this.httpClient.post(
      'http://localhost:8084/api/topictype/save',
      topicType
    );
  }
  getAllTopicTypes() {
    return this.httpClient.get<TopicType[]>(
      'http://localhost:8084/api/topictype/all',
      { headers: new HttpHeaders({ username: 'shiva' }) }
    );
  }

  deleteTopicType(topicTypeId: number) {
    return this.httpClient.delete(
      'http://localhost:8084/api/topictype/delete/' + topicTypeId
    );
  }
}
