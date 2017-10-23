import { Component } from '@angular/core';
import "reflect-metadata";
import { Task } from './task';
const TASKS: Task[] = [
  { id: 1, name: '企画ロードマップ作成'},
  { id: 2, name: '山田さんにメール返信' },
  { id: 3, name: 'Angular2キャッチアップ' },
  { id: 4, name: 'ブログ更新' },
  { id: 5, name: '新卒技術研修' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo app';
  task: Task = {
    id: 1,
    name: '田中さんにメール'
  };
  tasks = TASKS;
  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
}
}
