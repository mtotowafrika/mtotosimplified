import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [PageBannerComponent, RouterModule],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent {

}