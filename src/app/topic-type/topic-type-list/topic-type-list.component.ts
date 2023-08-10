import { Component, Input, OnInit } from '@angular/core';
import { TopicType } from 'src/app/model/modelfactory';

@Component({
  selector: 'app-topic-type-list',
  templateUrl: './topic-type-list.component.html',
  styleUrls: ['./topic-type-list.component.css'],
})
export class TopicTypeListComponent implements OnInit {
  @Input('topicTypes') topicTypes: TopicType[] = [];
  constructor() {}
  ngOnInit(): void {}
}
