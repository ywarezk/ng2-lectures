/**
 * Created by yarivkatz on 11/01/2018.
 */


class Task {
  public id: number = 0;
  public title: string = '';
  public description: string = '';
  public group: string = '';
  public when: string = '';

  public getName(): string {
    return this.title + this.description;
  }
}
