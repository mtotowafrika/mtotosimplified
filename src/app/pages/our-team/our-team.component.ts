import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../models/team-member.model';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Kiranda Mathew',
      title: 'Board Chairman',
      image: 'assets/images/team/matthew.jpg',
      social: { twitter: '', facebook: '', pinterest: '', linkedin: '', instagram: '' }
    },
    {
      name: 'Nabunnya Joan K.',
      title: 'Board Secretary',
      image: 'assets/images/team/joan.jpg',
      social: { twitter: '', facebook: '', pinterest: '', linkedin: '', instagram: '' }
    },
    {
      name: 'Joan Ainomugisha N.',
      title: 'Treasurer',
      image: 'assets/images/team/nassuna.jpg',
      social: { twitter: '', facebook: '', pinterest: '', linkedin: '', instagram: '' }
    },
    {
      name: 'Jessica Zarwango K.',
      title: 'Board Member',
      image: 'assets/images/team/Jessica.jpg',
      social: { twitter: '', facebook: '', pinterest: '', linkedin: '', instagram: '' }
    },
    {
      name: 'Charles Ondoga',
      title: 'Regional Co-ordinator Adjumani',
      image: 'assets/images/team/charles.png',
      social: { twitter: '', facebook: '', pinterest: '', linkedin: '', instagram: '' }
    },
    {
      name: 'Alice Gulua',
      title: 'Community Activities Coordinator - Adjumani',
      image: 'assets/images/team/alice.png',
      social: { twitter: '', facebook: '', pinterest: '', linkedin: '', instagram: '' }
    },
    {
      name: 'Alfred Ochola',
      title: 'IT Expert & Creative Arts Coordinator',
      image: 'assets/images/team/alfie.png',
      social: { twitter: '', facebook: '', pinterest: '', linkedin: '', instagram: '' }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
