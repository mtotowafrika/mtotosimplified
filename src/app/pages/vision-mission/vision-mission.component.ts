import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [RouterModule, PageBannerComponent],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.scss']
})
export class VisionMissionComponent {

}