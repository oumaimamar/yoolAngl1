import { Component } from '@angular/core';

@Component({
  selector: 'app-linkedin-portfolio',
  standalone: false,
  templateUrl: './linkedin-portfolio.component.html',
  styleUrl: './linkedin-portfolio.component.css'
})
export class LinkedinPortfolioComponent {
  name = "Oumy Mar";
  title = "Développeur Full Stack | Angular | Node.js";
  location = "Casablanca, Maroc";
  connections = 500;
  about = "Développeur passionné avec 5 ans d'expérience dans le développement web. Expert en Angular et Node.js avec une solide expérience dans la création d'applications évolutives et performantes.";

  experiences = [
    {
      companyLogo: 'assets/img/cs.jpg',
      position: 'Développeur Full Stack',
      company: 'Tech Solutions Inc.',
      type: 'Temps plein',
      duration: 'Jan 2020 - Présent',
      location: 'Rabat, Maroc',
      description: 'Développement et maintenance d\'applications web avec Angular et Node.js.'
    },
    {
      companyLogo: 'assets/img/cs.jpg',
      position: 'Développeur Frontend',
      company: 'Web Innovations',
      type: 'Temps plein',
      duration: 'Mai 2018 - Déc 2019',
      location: 'Fes, Maroc',
      description: 'Création d\'interfaces utilisateur avec Angular et mise en place de tests unitaires.'
    }
  ];

  education = [
    {
      schoolLogo: 'assets/img/cs.jpg',
      school: 'Université Casa-Saclay',
      degree: 'Master en Informatique',
      duration: '2016 - 2018'
    }
  ];

  skills = [
    'Angular', 'TypeScript', 'Node.js', 'JavaScript',
    'HTML/CSS', 'Bootstrap', 'Git', 'REST APIs',
    'MongoDB', 'SQL', 'Agile Methodologies'
  ];




  // Edit Methods
  editCoverPhoto() {
    // Implement cover photo edit logic
    console.log('Edit cover photo clicked');
  }

  editProfilePicture() {
    // Implement profile picture edit logic
    console.log('Edit profile picture clicked');
  }

  editAbout() {
    // Implement about section edit logic
    console.log('Edit about clicked');
    // This would typically open a modal or inline editor
  }

  // Experience Methods
  addExperience() {
    // Implement add experience logic
    console.log('Add experience clicked');
  }

  editExperience(index: number) {
    // Implement edit experience logic
    console.log('Edit experience at index:', index);
  }

  deleteExperience(index: number) {
    // Implement delete experience logic
    if (confirm('Are you sure you want to delete this experience?')) {
      this.experiences.splice(index, 1);
    }
  }

  // Education Methods
  addEducation() {
    // Implement add education logic
    console.log('Add education clicked');
  }

  editEducation(index: number) {
    // Implement edit education logic
    console.log('Edit education at index:', index);
  }

  deleteEducation(index: number) {
    // Implement delete education logic
    if (confirm('Are you sure you want to delete this education entry?')) {
      this.education.splice(index, 1);
    }
  }

  // Skills Methods
  openSkillsModal() {
    // Implement skills modal logic
    console.log('Open skills modal clicked');
  }

  deleteSkill(index: number) {
    // Implement delete skill logic
    this.skills.splice(index, 1);
  }
}
