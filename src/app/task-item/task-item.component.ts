import { Component, Input, input } from '@angular/core';
import { ITask } from '../task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input()
  task?: ITask;

  switch() {
    if (this.task)
      this.task.complete = !this.task.complete
  }

}
