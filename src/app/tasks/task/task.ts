import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskType } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
