export class TopicType {
  constructor(public topicTypeId: number, public topicTypeName: string) {}
}
export class Topic {
  constructor(
    public topicId: number,
    public topicName: string,
    public topicType: string
  ) {}
}
