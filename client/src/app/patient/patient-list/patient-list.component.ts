import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { SexCode } from 'src/app/shared/constants';

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
    patients = new Array<Patient>();

    @ViewChild('table', { static: true }) table: any;

    constructor(
        private patientService: PatientService,
        public matDialog: MatDialog,
        private matSnackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.busy = true;

        this.patientService.getList().subscribe((patients) => {
            this.patients = patients;
            this.busy = false;
        });
    }

    toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }

    edit(patient: Patient) {}

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
                    this.matSnackBar.open(`Patient ${patient.pasNumber} has been deleted successfully.`, null, {
                        duration: 2000,
                    });

                    this.loadData();
                });
            }
        });
    }
}
