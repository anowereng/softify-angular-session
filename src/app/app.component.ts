import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'softify-angular-session';
  constructor(private toastr: ToastrService) {

  }
  showToaster() {
    this.toastr.success("Hello, I'm the toastr message.")
  }
}
