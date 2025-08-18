import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-our-history',
  standalone: true,
  imports: [PageBannerComponent, CommonModule],
  templateUrl: './our-history.component.html',
  styleUrls: ['./our-history.component.scss']
})
export class OurHistoryComponent {
  showAdditionalContent: boolean = false;

  toggleAdditionalContent(): void {
    this.showAdditionalContent = !this.showAdditionalContent;
  }
}