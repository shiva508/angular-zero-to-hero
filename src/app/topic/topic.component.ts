import { Component, OnInit } from '@angular/core';
import { Topic, TopicType } from '../model/modelfactory';
import { TopicTypeService } from '../service/topictype/topic-type.service';
import { TopicService } from '../service/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  topics: Topic[] = [];
  topicTypes: TopicType[] = [];
  fetching: boolean = false;
  constructor(
    private topicService: TopicService,
    private topicTypeService: TopicTypeService
  ) {}
  ngOnInit(): void {
    this.getTopicType();
    this.getTopics();
  }

  getTopics() {
    this.topicService.getAllTopics().subscribe((response) => {
      this.topics = response;
    });
  }

  onCreateNewTopic(topicForm: { topicName: string; topicType: string }) {
    this.topicService
      .saveTopic(new Topic(0, topicForm.topicName, topicForm.topicType.trim()))
      .subscribe((response) => {
        this.getTopics();
      });
  }
  getTopicType() {
    this.fetching = true;
    this.topicTypeService.getAllTopicTypes().subscribe((response) => {
      this.topicTypes = response;
      this.fetching = false;
    });
  }
  deleteTopic(topicId: number) {
    this.topicService.deleteTopic(topicId).subscribe((response) => {
      this.getTopics();
    });
  }
}
