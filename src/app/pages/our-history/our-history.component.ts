import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-our-history',
  standalone: true,
  imports: [PageBannerComponent, CommonModule],
  templateUrl: './our-history.component.html',
  styleUrls: ['./our-history.component.scss']
})
export class OurHistoryComponent implements OnInit, AfterViewInit {
  timelineEvents = [
    {
      year: '2013',
      title: 'The Founding',
      description: 'Mtoto W’afrika Child Care Ministries was founded in 2013 by Samuel Sekibejja.',
    },
    {
      year: '2014',
      title: 'NGO Status',
      description: 'In 2014, we received our fully incorporated NGO status.',
    },
    {
      year: 'Present',
      title: 'Our Mission Continues',
      description: 'Our path toward transformation is hinged on the willingness and hope to spread the unconditional love of Jesus Christ to the next generation of future leaders in the hard-to-reach communities in Uganda, South Sudan, and East Africa. We focus on making a child well-rounded by providing education, computers, farming, animal caretaking, sewing, and various other life skills opportunities. Mtoto W’afrika Child Care Ministries also provides medical care to the children, their families, and the communities that it serves. The dream to develop these future leaders will be achieved by empowering the children through spiritual, educational, and mental development growth. Currently, we have reached over 2,000 children in Uganda and South Sudan with these growth milestones.',
    }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const items = this.el.nativeElement.querySelectorAll('.timeline li');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'in-view');
        }
      });
    }, { threshold: 0.5 });

    items.forEach((item: any) => {
      observer.observe(item);
    });
  }
}