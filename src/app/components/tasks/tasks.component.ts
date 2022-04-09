import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskSerivce: TaskService) {}

  ngOnInit(): void {
    this.taskSerivce.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.taskSerivce.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskSerivce.updateTaskReminder(task).subscribe();
  }
}
