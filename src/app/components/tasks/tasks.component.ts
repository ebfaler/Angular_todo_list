import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
// import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task'; //where Task is a ts interface

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //subscribing to an observable
    this.taskService.getTasks().subscribe((tasks) =>   //getting the return value, which is tasks
      this.tasks = tasks);
  }

  deleteTask(task: Task) {
    //here i can call the service method
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id)) //setting tasks NOT equal to the id of the task that we deleted
      );
  }


  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    // calling taskService to update the api
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    console.log(task);
    //calling the addTask service
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

}

// filter() method creates a new array with all elements that pass the test implemented by the provided function.

