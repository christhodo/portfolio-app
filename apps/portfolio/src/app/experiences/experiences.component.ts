import { Component, OnInit } from '@angular/core';
import { Experience } from '../common/models/experience';

const emptyExperience: Experience = {
  id: null,
  title: '',
  description: '',
  current: false,
};

@Component({
  selector: 'portfolio-app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  experiences = [
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

  selectedExperience = emptyExperience;
  originalTitle = '';

  constructor() {}

  ngOnInit(): void {}

  selectExperience(experience) {
    this.selectedExperience = { ...experience };
    this.originalTitle = experience.title;
  }

  saveExperience(experience) {
    console.log('save experience', experience);
  }

  deleteExperience(experienceId) {
    console.log('delete experience', experienceId);
  }

  reset() {
    this.selectExperience({ ...emptyExperience });
  }
}
