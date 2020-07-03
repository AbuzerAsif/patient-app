import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from 'src/app/material.module';
import { PatientService } from 'src/app/services/patient.service';
import { PatientListComponent } from './patient-list.component';
import { ConfirmDialogModule } from 'src/app/shared/components/confirm-dialog/confirm-dialog.module';

const routes: Routes = [
    {
        path: '',
        component: PatientListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, MaterialModule, NgxDatatableModule, ConfirmDialogModule],
    declarations: [PatientListComponent],
    providers: [PatientService],
})
export class PatientListModule {}
