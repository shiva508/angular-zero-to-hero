import { Component, OnInit } from '@angular/core';
import { TopicType } from '../model/modelfactory';
import { HttpClient } from '@angular/common/http';
import { TopicTypeService } from '../service/topictype/topic-type.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  topicTypes: TopicType[] = [];
  constructor(
    private httpClient: HttpClient,
    private topicTypeService: TopicTypeService
  ) {}
  ngOnInit(): void {
    this.getTopicType();
  }

  getTopicType() {
    this.topicTypeService.getAllTopicTypes().subscribe((response) => {
      this.topicTypes = response;
    });
  }
}
