import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

const routes: Routes = [
    {
        path: 'list',
        loadChildren: './patient-list/patient-list.module#PatientListModule',
    },
    {
        path: 'add',
        loadChildren: './add-edit-patient/add-edit-patient.module#AddEditPatientModule',
    },
    {
        path: 'edit/:id',
        loadChildren: './add-edit-patient/add-edit-patient.module#AddEditPatientModule',
    },
    {
        path: '**',
        redirectTo: 'list',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    providers: [PatientService],
})
export class PatientModule {}
