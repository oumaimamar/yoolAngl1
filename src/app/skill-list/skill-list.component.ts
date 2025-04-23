import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CertificationService} from '../services/certification.service';
import {Router} from '@angular/router';
import {SkillService} from '../services/skill.service';
import {MatTableDataSource} from '@angular/material/table';
import {Certification} from '../models/certification.model';
import {Skill} from '../models/skill.model';

@Component({
  selector: 'app-skill-list',
  standalone: false,
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.css'
})
export class SkillListComponent implements OnInit {
  public skills: any;
  displayedColumns: string[] = ['id', 'name','userId','actions','share'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
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

  viewInfo(skill: Skill) {
    // this.router.navigateByUrl(`/test-2/${user.userId}`);
  }

  sendWarning(skill: Skill) {
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


  openAddCertificationDialog() {
    this.router.navigateByUrl("/nav/skill-form")
  }

}
