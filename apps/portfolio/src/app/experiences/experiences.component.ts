import { Component, OnInit } from '@angular/core';
import { Experience } from '../common/models/experience';
import { ExperiencesService } from '../common/services/experiences.service';

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
  experiences = [];
  selectedExperience = emptyExperience;
  originalTitle = '';

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.experiences = this.experiencesService.experiences;
  }

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
