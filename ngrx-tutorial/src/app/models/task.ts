export interface ITask {
  id: number;
  title: string;
  description: string;
}

export class Task implements ITask {
  public title: string;
  public description: string;
  public id: number;

  constructor(json: ITask) {
    this.title = json.title || '';
    this.description = json.description || '';
    this.id = json.id || 0;
  }
}
