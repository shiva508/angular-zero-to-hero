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
  error: string = '';
  constructor(private topicTypeService: TopicTypeService) {}
  ngOnInit(): void {
    this.getTopicType();
  }
  addTopicType(formData: { topicTypeId: number; topicTypeName: string }) {
    this.topicTypeService
      .saveTopicType(new TopicType(0, formData.topicTypeName.trim()))
      .subscribe(
        (response) => {
          this.getTopicType();
        },
        (error) => {
          this.error = error.message;
        }
      );
  }

  getTopicType() {
    this.topicTypeService.getAllTopicTypes().subscribe(
      (response) => {
        this.topicTypes = response;
      },
      (error) => {
        console.log(error);
        this.error = error.message;
      }
    );
  }
  deleteTopicType(topicTypeId: number) {
    this.topicTypeService.deleteTopicType(topicTypeId).subscribe(
      (response) => {
        this.getTopicType();
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
