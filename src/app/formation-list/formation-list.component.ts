import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ExperienceService} from '../services/experience.service';
import {Router} from '@angular/router';
import {FormationService} from '../services/formation.service';
import {MatTableDataSource} from '@angular/material/table';
import {Experience} from '../models/experience.model';
import {Formation} from '../models/formation.model';

@Component({
  selector: 'app-formation-list',
  standalone: false,
  templateUrl: './formation-list.component.html',
  styleUrl: './formation-list.component.css'
})
export class FormationListComponent implements OnInit {
public formations: any;
  displayedColumns: string[] = ['id', 'ecole', 'diplome', 'domain_etude','dateDebut', 'dateFin','description','userId','actions','share'];
public dataSource: any;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

  constructor(
    private formationService: FormationService,
    private router: Router
) {}

  ngOnInit() {
    this.loadUsers();
  }


  loadUsers() {
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



  viewInfo(formation: Formation) {
    // this.router.navigateByUrl(`/test-2/${user.userId}`);
  }

  sendWarning(formation: Formation) {
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


  openAddDocumentDialog() {
    this.router.navigateByUrl("/nav/formation-form")
  }


}
