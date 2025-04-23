import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormationService} from '../services/formation.service';
import {Router} from '@angular/router';
import {CertificationService} from '../services/certification.service';
import {MatTableDataSource} from '@angular/material/table';
import {Formation} from '../models/formation.model';
import {Experience} from '../models/experience.model';
import {Certification} from '../models/certification.model';

@Component({
  selector: 'app-certification-list',
  standalone: false,
  templateUrl: './certification-list.component.html',
  styleUrl: './certification-list.component.css'
})
export class CertificationListComponent implements OnInit {
  public certifications: any;
  displayedColumns: string[] = ['id', 'titre', 'organisation','dateDebut', 'dateFin','description','userId','actions','share'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private certificationService: CertificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
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


  viewInfo(certification: Certification) {
    // this.router.navigateByUrl(`/test-2/${user.userId}`);
  }

  sendWarning(certification: Certification) {
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


  openAddCertificationDialog() {
    this.router.navigateByUrl("/nav/certification-form")
  }


}
