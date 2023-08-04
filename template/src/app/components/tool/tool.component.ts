import { Component } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent {

  public postType: number = 0;
  public forWho = 0;
  
  public step: number = 0;


  onPostType(type?: number, forWho?: number) {
    if (type) {
      this.postType = type;

    }
    if (forWho) {

      this.forWho = forWho;
    }
  }
  onNext(step: number) {
    this.step = step;
    
  }

}
