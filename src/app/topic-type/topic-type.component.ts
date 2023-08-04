import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopicType } from '../model/modelfactory';
import { TopicTypeService } from '../service/topictype/topic-type.service';

@Component({
  selector: 'app-topic-type',
  templateUrl: './topic-type.component.html',
  styleUrls: ['./topic-type.component.css'],
})
export class TopicTypeComponent implements OnInit {
  topicTypes: TopicType[] = [];
  constructor(
    private httpClient: HttpClient,
    private topicTypeService: TopicTypeService
  ) {}
  ngOnInit(): void {
    this.getTopicType();
  }
  addTopicType(formData: { topicTypeId: number; topicTypeName: string }) {
    this.topicTypeService
      .saveTopicType(new TopicType(0, formData.topicTypeName))
      .subscribe((response) => {
        console.log(response);
      });
  }

  getTopicType() {
    this.topicTypeService.getAllTopicTypes().subscribe((response) => {
      this.topicTypes = response;
    });
  }
  deleteTopicType(topicTypeId: number) {
    console.log(topicTypeId);
  }
}
