import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import {LessonDetail} from "../model/lesson-detail";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: LessonDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log("Created LessonDetailComponent...");
  }

  ngOnInit() {
    this.lesson = this.route.snapshot.data['lesson'];
  }

  previous(lesson: any): void {
    this.router.navigate(['lessons', lesson.seqNo - 1], { relativeTo: this.route.parent });
  }

  next(lesson: any): void {
    this.router.navigate(['lessons', lesson.seqNo + 1], { relativeTo: this.route.parent });
  }
}
