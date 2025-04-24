import {Component, OnInit, ViewChild} from '@angular/core';
import {Route, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {ExperienceService} from '../services/experience.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Experience} from '../models/experience.model';
import {FormationService} from '../services/formation.service';
import {Formation} from '../models/formation.model';
import {SkillService} from '../services/skill.service';
import {Skill} from '../models/skill.model';
import {CertificationService} from '../services/certification.service';
import {Certification} from '../models/certification.model';

@Component({
  selector: 'app-linkedin-portfolio',
  standalone: false,
  templateUrl: './linkedin-portfolio.component.html',
  styleUrl: './linkedin-portfolio.component.css'
})
export class LinkedinPortfolioComponent implements OnInit {
  public experiences: any;
  public formations: any;
  public certifications: any;

  public skills: any;


  public dataSource: any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(  private router: Router,
                private experienceService:ExperienceService,
                private formationService: FormationService,
                private certificationService: CertificationService,
                private skillService: SkillService) {
  }

  name = "Oumy Mar";
  title = "Développeur Full Stack | Angular | Node.js";
  location = "Casablanca, Maroc";
  connections = 500;
  about = "Développeur passionné avec 5 ans d'expérience dans le développement web. Expert en Angular et Node.js avec une solide expérience dans la création d'applications évolutives et performantes.";




  ngOnInit() {
    this.loadExperiences();
    this.loadFormations();
    this.loadSkills();
    this.loadCertification();

  }

  loadExperiences() {
    this.experienceService.getAllExperiences().subscribe({
      next: (value) => {
        this.experiences = value;
        this.dataSource = new MatTableDataSource(this.experiences);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  loadFormations() {
    this.formationService.getAllFormations().subscribe({
      next: (value) => {
        this.formations = value;
        this.dataSource = new MatTableDataSource(this.formations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  loadSkills() {
    this.skillService.getAllSkill().subscribe({
      next: (value) => {
        this.skills = value;
        this.dataSource = new MatTableDataSource(this.skills);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  loadCertification() {
    this.certificationService.getAllCertification().subscribe({
      next: (value) => {
        this.certifications = value;
        this.dataSource = new MatTableDataSource(this.certifications);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


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
    this.router.navigateByUrl("/nav/experience-form")
  }
  editExperience(index: number) {
    // Implement edit experience logic
    console.log('Edit experience at index:', index);
  }
  deleteExperience(experience: Experience) {
    if (confirm(`Are you sure you want to delete ${experience.post} ${experience.entreprise}?`)) {
      if (experience.id != null) {
        this.experienceService.deleteExperience(experience.id).subscribe({
          next: () => {
            // Remove the deleted document from the local array
            this.experiences = this.experiences.filter((e: Experience) => e.id !== experience.id);
            this.dataSource.data = this.experiences;
            console.log('User deleted successfully');
          },
          error: (err) => {
            console.error('Error deleting user:', err);
          }
        });
      }
    }
  }


  // Formation Methods
  addFormation() {
    // Implement add education logic
    console.log('Add education clicked');
    this.router.navigateByUrl("/nav/formation-form")
  }
  editEducation(index: number) {
    // Implement edit education logic
    console.log('Edit education at index:', index);
  }
  deleteFormation(formation: Formation) {
    if (confirm(`Are you sure you want to delete ${formation.ecole} ${formation.diplome}?`)) {
      if (formation.id != null) {
        this.formationService.deleteFormation(formation.id).subscribe({
          next: () => {
            // Remove the deleted document from the local array
            this.formations = this.formations.filter((e: Experience) => e.id !== formation.id);
            this.dataSource.data = this.formations;
            console.log('User deleted successfully');
          },
          error: (err) => {
            console.error('Error deleting user:', err);
          }
        });
      }
    }
  }




  // Certification Methods
  addCertification() {
    // Implement add education logic
    console.log('Add education clicked');
    this.router.navigateByUrl("/nav/certification-form")
  }
  editCertification(index: number) {
    // Implement edit education logic
    console.log('Edit education at index:', index);
  }
  deleteCertification(certification: Certification) {
    if (confirm(`Are you sure you want to delete ${certification.titre} ${certification.organisation}?`)) {
      if (certification.id != null) {
        this.certificationService.deleteCertification(certification.id).subscribe({
          next: () => {
            // Remove the deleted document from the local array
            this.certifications = this.certifications.filter((c: Certification) => c.id !== certification.id);
            this.dataSource.data = this.certifications;
            console.log('Certification deleted successfully');
          },
          error: (err) => {
            console.error('Error deleting Certification:', err);
          }
        });
      }
    }
  }



  // Skills Methods
  openSkillsModal() {
    // Implement skills modal logic
    console.log('Open skills modal clicked');
    this.router.navigateByUrl("/nav/skill-form")
  }
  deleteSkill(skill: Skill) {
    if (confirm(`Are you sure you want to delete ${skill.name}`)) {
      if (skill.id != null) {
        this.skillService.deleteSkill(skill.id).subscribe({
          next: () => {
            // Remove the deleted document from the local array
            this.skills = this.skills.filter((c: Skill) => c.id !== skill.id);
            this.dataSource.data = this.skills;
            console.log('Certification deleted successfully');
          },
          error: (err) => {
            console.error('Error deleting Certification:', err);
          }
        });
      }
    }
  }

}
