import { Component , OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  taskList = [
    {
      title:'',
      desc:'',
      done:false
    }
  ];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // get taskList from taskService
    this.taskList = this.taskService.getTasks(); }

  deleteTask(task) {
    // delete a task using taskService
    this.taskService.deleteTask(task); 
  }
}
