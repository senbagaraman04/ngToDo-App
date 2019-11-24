import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'toDoApp';
  toDoContain = []; //Initialize an empty array 
  returnMessage = null;
  submitToDo(inputString){

    console.log("Entered Input String");
    console.log(inputString)      
   this.toDoContain.push(inputString);
   this.returnMessage = "Your Input has been received";  
   
  }
}
