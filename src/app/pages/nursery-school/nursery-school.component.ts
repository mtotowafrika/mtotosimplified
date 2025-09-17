import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nursery-school',
  standalone: true,
  imports: [PageBannerComponent,RouterLink],
  templateUrl: './nursery-school.component.html',
  styleUrls: ['./nursery-school.component.scss']
})
export class NurserySchoolComponent {

}