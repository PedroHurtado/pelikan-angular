import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pelikan-angular';
    @ViewChild('frm') form;
    private model=null;
    onSubmit = () => {
        console.log(this.model);
        console.log(this.form.form);
        
    }
}
