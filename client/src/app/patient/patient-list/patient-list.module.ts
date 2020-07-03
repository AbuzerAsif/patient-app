import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from 'src/app/material.module';
import { ConfirmDialogModule } from 'src/app/shared/components/confirm-dialog/confirm-dialog.module';
import { PatientListComponent } from './patient-list.component';

const routes: Routes = [
    {
        path: '',
        component: PatientListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, MaterialModule, NgxDatatableModule, ConfirmDialogModule],
    declarations: [PatientListComponent],
})
export class PatientListModule {}
