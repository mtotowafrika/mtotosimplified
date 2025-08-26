import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mungusi-women',
  standalone: true,
  imports: [PageBannerComponent,RouterModule],
  templateUrl: './mungusi-women.component.html',
  styleUrls: ['./mungusi-women.component.scss']
})
export class MungusiWomenComponent {

}