import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { SexCode } from 'src/app/shared/constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PatientListComponent implements OnInit {
    ColumnMode = ColumnMode;
    SexCode = SexCode;

    busy = false;
    expanded = false;
    searchText = '';
    patients = new Array<Patient>();

    @ViewChild('table', { static: true }) table: any;

    constructor(
        private patientService: PatientService,
        public matDialog: MatDialog,
        private matSnackBar: MatSnackBar,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.busy = true;

        this.patientService.getList(this.searchText).subscribe((patients) => {
            this.patients = patients;
            this.busy = false;
        });
    }

    search() {
        this.loadData();
    }

    toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }

    add() {
        this.router.navigate(['/patient/add']);
    }

    edit(patient: Patient) {
        this.router.navigate(['/patient/edit', patient.id]);
    }

    delete(patient: Patient) {
        const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
            width: '250px',
            data: {
                title: 'Confirm delete',
                message: `Do you want to delete the patient ${patient.pasNumber}?`,
            },
        });

        dialogRef.afterClosed().subscribe((confirm) => {
            if (confirm) {
                this.patientService.delete(patient.id).subscribe(() => {
                    this.matSnackBar.open(`Patient ${patient.pasNumber} has been deleted successfully.`, 'Nice!', {
                        duration: 2000,
                        verticalPosition: 'top',
                    });

                    this.loadData();
                });
            }
        });
    }
}
