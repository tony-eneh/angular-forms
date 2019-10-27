import { Component } from '@angular/core';
// import { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Forms';
  jobs = [{title: 'Senior Blablaler', company: 'xyz Corporation'}, {title: 'Executive Gbasgboser', company: 'Ewoo Nigeria Limited'}];
  newJob = {};
}
