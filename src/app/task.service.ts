import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList = JSON.parse(localStorage.getItem('taskList')) || []; 
  constructor() { }
getTasks() {
return this.taskList;
}
addTask(task) {
this.taskList.push(task); // add new task to array 
this.saveChanges(); // save changes to localStorage
}
deleteTask(task) {
// find task index
const taskIndex = this.taskList.indexOf(task);
// check if element exists in array
if (taskIndex >= 0) {
// remove task by index 
this.taskList.splice(taskIndex, 1); // save changes to localStorage 
this.saveChanges();
} }
// save changes to localStorage
saveChanges() {
localStorage.setItem('taskList', JSON.stringify(this.taskList));
} }