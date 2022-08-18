import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  experiences: Experience[] = [
    {
      id: '1',
      title: 'Store Manager Trainer',
      description: 'Trained Starbucks Store Managers to be awesome! ',
      current: false,
    },
    {
      id: '2',
      title: 'District Sales Manager',
      description: 'Managed multiple retail locations across the US ',
      current: false,
    },
  ];
}
