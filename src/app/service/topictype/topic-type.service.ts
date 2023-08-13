import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopicType } from 'src/app/model/modelfactory';

@Injectable({
  providedIn: 'root',
})
export class TopicTypeService {
  constructor(private httpClient: HttpClient) {}
  saveTopicType(topicType: TopicType) {
    return this.httpClient.post(
      'http://192.168.49.2:30008/api/topictype/save',
      topicType
    );
  }
  getAllTopicTypes() {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('name', 'shiva');
    httpParams = httpParams.append('age', '40');
    return this.httpClient.get<TopicType[]>(
      'http://192.168.49.2:30008/api/topictype/all',
      {
        headers: new HttpHeaders({ username: 'shiva' }),
        params: httpParams,
        responseType: 'json',
      }
    );
  }

  deleteTopicType(topicTypeId: number) {
    return this.httpClient.delete(
      'http://192.168.49.2:30008/api/topictype/delete/' + topicTypeId
    );
  }
}
