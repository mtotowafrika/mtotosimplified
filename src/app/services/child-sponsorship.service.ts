import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Child } from '../models/child.model';

@Injectable({
  providedIn: 'root'
})
export class ChildSponsorshipService {

  private children: Child[] = [
    {
      id: 'MW-001',
      name: 'Nabumba Shadia',
      yearOfBirth: 2016,
      picturePath: 'assets/images/students/shadia.jpg',
      grade: 'P.1',
      livesWith: 'Parents',
      numberOfSiblings: 2,
      school: 'Luweero Primary School',
      gender: 'Female',
      aspiration: '',
      dateOfBirth: '',
      status: 'unsponsored'
    },
    {
      id: 'MW-002',
      name: 'Senabulya Shadrack',
      yearOfBirth: 2015,
      picturePath: 'assets/images/students/shadrack.jpg',
      grade: 'P.2',
      livesWith: 'Grandmother',
      numberOfSiblings: 1,
      school: 'Luweero Primary School',
      gender: 'Male',
      aspiration: '',
      dateOfBirth: '',
      status: 'unsponsored'
    },
    {
      id: 'MW-003',
      name: 'Luutu Hakimu',
      yearOfBirth: 2014,
      picturePath: 'assets/images/students/luutu.jpg',
      grade: 'P.3',
      livesWith: 'Mother',
      numberOfSiblings: 3,
      school: 'Luweero Primary School',
      gender: 'Male',
      aspiration: '',
      dateOfBirth: '',
      status: 'unsponsored'
    },
    {
      id: 'MW-004',
      name: 'Nassozi Jazirah',
      yearOfBirth: 2017,
      picturePath: 'assets/images/students/nassozi.jpg',
      grade: 'Nursery',
      livesWith: 'Aunt',
      numberOfSiblings: 0,
      school: 'Luweero Primary School',
      gender: 'Female',
      aspiration: '',
      dateOfBirth: '',
      status: 'unsponsored'
    },
    {
      id: 'MW-005',
      name: 'Semakula Daniel',
      yearOfBirth: 2013,
      picturePath: 'assets/images/students/daniel.jpg',
      grade: 'P.4',
      livesWith: 'Parents',
      numberOfSiblings: 2,
      school: 'Luweero Primary School',
      gender: 'Male',
      aspiration: '',
      dateOfBirth: '',
      status: 'unsponsored'
    },
    {
      id: 'MW-006',
      name: 'Christabel Alera',
      yearOfBirth: 2021,
      picturePath: 'assets/images/students/christabel.jpg',
      grade: 'Nursery',
      livesWith: '',
      numberOfSiblings: 0,
      school: 'Mtoto W\'Afrika Nursery School',
      gender: 'Female',
      aspiration: 'Teacher',
      dateOfBirth: '28/02/2021',
      status: 'sponsored'
    },
    {
      id: 'MW-007',
      name: 'David Alema',
      yearOfBirth: 2022,
      picturePath: 'assets/images/students/david.jpg',
      grade: 'Nursery',
      livesWith: '',
      numberOfSiblings: 0,
      school: 'Mtoto W\'Afrika Nursery School',
      gender: 'Male',
      aspiration: '',
      dateOfBirth: '',
      status: 'unsponsored'
    },
    {
      id: 'MW-008',
      name: 'Ruth Anzoa',
      yearOfBirth: 2021,
      picturePath: 'assets/images/students/ruth.jpg',
      grade: 'Nursery',
      livesWith: '',
      numberOfSiblings: 0,
      school: 'Mtoto W\'Afrika Nursery School',
      gender: 'Female',
      aspiration: 'Teacher',
      dateOfBirth: '14/02/2021',
      status: 'unsponsored'
    }
  ];

  constructor() { }

  getChildren(): Observable<Child[]> {
    return of(this.children);
  }
}