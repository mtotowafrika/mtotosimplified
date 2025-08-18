import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule, PageBannerComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

}