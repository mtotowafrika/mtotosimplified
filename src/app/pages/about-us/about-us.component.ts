import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    PageBannerComponent,
    RouterModule
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  whoWeAre = {
    title: 'Who We Are',
    text: `Mtoto W’afrika Child Care Ministries was founded in 2013 by Samuel Sekibejja. In 2014, we received our fully incorporated NGO status. Our path toward transformation is hinged on the willingness and hope to spread the unconditional love of Jesus Christ to the next generation of future leaders in the hard-to-reach communities in Uganda, South Sudan, and East Africa.
    <br><br>
    This has been the greatest motivation behind the beautiful journey of the organization. Additionally, we focus on making a child well-rounded by providing education, computers, farming, animal caretaking, sewing, and various other life skills opportunities. Mtoto W’afrika Child Care Ministries also provides medical care to the children, their families, and the communities that it serves. The dream to develop these future leaders will be achieved by empowering the children through spiritual, educational, and mental development growth. Currently, we have reached over 2,000 children in Uganda and South Sudan with these growth milestones.`,
    image: 'assets/images/staff.jpg'
  };

  missionVision = {
    mission: {
      title: 'Our Mission',
      text: 'Restoring hope, Inspiring talents, & Grooming exceptional, intentional & generational African children while offering support through bringing resources closer to community reach.',
      icon: 'icon-mission' // Placeholder for icon class
    },
    vision: {
      title: 'Our Vision',
      text: 'A brighter future for every African child, raised to be resilient, resourceful and a Godly community leader.',
      icon: 'icon-vision' // Placeholder for icon class
    }
  };

  focusAreas = [
    {
      title: 'Leadership Development',
      text: 'Training and mentoring programs to equip children with leadership skills, values, and character.',
      icon: 'icon-leadership' // Placeholder for icon class
    },
    {
      title: 'Spiritual Growth',
      text: 'Nurturing spiritual development, faith, and values in children to become Godly leaders.',
      icon: 'icon-spiritual' // Placeholder for icon class
    },
    {
      title: 'Community Engagement',
      text: 'Building relationships and partnerships with local communities to understand their needs and empower them.',
      icon: 'icon-community' // Placeholder for icon class
    }
  ];
}