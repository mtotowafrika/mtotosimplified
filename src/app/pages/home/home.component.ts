import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// Declare $ as any to avoid TypeScript errors if Bootstrap's JS is loaded globally
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('youtubeVideo') youtubeVideo!: ElementRef;

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const videoModalElement = document.getElementById('videoModal');
      if (videoModalElement) {
        videoModalElement.addEventListener('hidden.bs.modal', () => {
          if (this.youtubeVideo && this.youtubeVideo.nativeElement) {
            this.youtubeVideo.nativeElement.src = 'about:blank'; // Stop video playback
          }
        });
        videoModalElement.addEventListener('shown.bs.modal', () => {
          if (this.youtubeVideo && this.youtubeVideo.nativeElement) {
            const videoSrc = this.youtubeVideo.nativeElement.getAttribute('data-src');
            if (videoSrc) {
              this.youtubeVideo.nativeElement.src = videoSrc; // Start video playback
            }
          }
        });
      }
    }
  }
}