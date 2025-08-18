import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from '../../models/child.model';
import { ChildSponsorshipService } from '../../services/child-sponsorship.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-child-sponsorship',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './child-sponsorship.component.html',
  styleUrls: ['./child-sponsorship.component.scss']
})
export class ChildSponsorshipComponent implements OnInit {
  children$!: Observable<Child[]>;

  constructor(private childSponsorshipService: ChildSponsorshipService) { }

  ngOnInit(): void {
    this.children$ = this.childSponsorshipService.getChildren();
  }
}