export interface ITask {
    id: number;
    title: string;
    complete: boolean;
    deadline?: Date;
    important?: boolean;
  }