import { Component } from '@angular/core';
import { TypewriterModule, TypewriterContent, TypewriterService } from "ng2-typewriter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  hobbies: TypewriterContent[] = [];
  isDone: boolean = false;
  constructor(private tws: TypewriterService) {
    this.hobbies = this.tws.format(['Java.', 'Javascript.', 'Angular2.', 'Animation.', 'Symphony Music.', 'Movies.'])
  }

    ngOninit():void{
    
    }

    onDone( isDone: boolean ): void {
      if(isDone){
        this.name = 'The typewriter is done.'
        setTimeout(() => this.isDone = isDone, 1500)
      }
    }
}
