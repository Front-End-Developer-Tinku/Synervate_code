import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FirstFle, SectFle } from './students.json';

interface Student{
  id: number;
  name: string;
  email: string;
  gender: string;
}
interface StudentTwo{
  id: number;
  name: string;
  email: string;
  gender: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Angular Project';
  students: Student[] = FirstFle;
  studenttwomy: StudentTwo[] = SectFle;

  constructor(
  private titleService: Title,
  private meta: Meta
  ) {}

  ngOnInit() {
      this.titleService.setTitle(this.title);
      this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});
      this.meta.addTag({name: 'description', content: 'Angular project training on rsgitech.com'});
      this.meta.addTag({name: 'author', content: 'rsgitech'});
      this.meta.addTag({name: 'robots', content: 'index, follow'});
      window.scrollTo(0, 0)

  }
}
