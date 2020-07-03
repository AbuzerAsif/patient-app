import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { SexCode } from 'src/app/shared/constants';

@Component({
    selector: 'app-add-edit-patient',
    templateUrl: './add-edit-patient.component.html',
    styleUrls: ['./add-edit-patient.component.scss'],
})
export class AddEditPatientComponent implements OnInit {
    SexCode = SexCode;

    busy = false;
    busySave = false;
    maxDate = new Date();
    patient = new Patient();

    get isEditMode() {
        return this.patient.id;
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private patientService: PatientService,
        private router: Router,
        private matSnackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(({ id }) => {
            if (id) {
                this.loadData(id);
            }
        });
    }

    loadData(patientId: string) {
        this.busy = true;

        this.patientService.getDetails(patientId).subscribe((patient) => {
            this.patient = patient;

            this.busy = false;
        });
    }

    navigateToListPage() {
        this.router.navigate(['/patient/list']);
    }

    save(ngForm: NgForm) {
        if (ngForm.valid) {
            this.busySave = true;

            this.patientService.save(this.patient).subscribe(
                (patient) => {
                    this.busySave = false;

                    this.matSnackBar.open(`Patient ${this.patient.pasNumber} has been saved successfully.`, 'Nice!', {
                        duration: 2000,
                        verticalPosition: 'top',
                    });

                    this.navigateToListPage();
                },
                (error) => {
                    this.busySave = false;
                }
            );
        }
    }
}
