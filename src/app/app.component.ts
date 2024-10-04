import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItemComponent } from './task-item/task-item.component';
import { ITask } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TaskItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

  tasks:ITask[]=[
    {id: 1, title : "Hit the gym", complete : false ,deadline: new Date(2024, 0, 1)},
    {id: 2, title : "Pey bills", complete : true, deadline: new Date(2023, 7, 10)},
    {id: 3, title : "Meet John", complete : false},
    {id: 4, title : "Buy eggs", complete : false},
    {id: 5, title : "Read a book", complete : false, deadline: new Date(2012, 3, 30)},
    {id: 6, title : "Organize office", complete : false},
    {id: 7, title : "Eat dinner", complete : false},
    {id: 8, title : "Buy apples", complete : false, deadline: new Date(2020, 11, 15)},
    {id: 9, title : "Meet George", complete : false},
    {id: 10, title : "Feed the cat", complete : true},
    {id: 11, title : "Write a letter", complete : false},
    {id: 12, title : "Run 1 km", complete : false},
  ]
}
