import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      const nav = this.router.getCurrentNavigation();
      if (nav?.extras?.state) {
        this.data = (nav.extras.state as any).user;
        console.log(this.data);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
