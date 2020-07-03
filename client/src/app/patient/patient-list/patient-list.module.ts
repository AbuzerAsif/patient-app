import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list.component';
import { MaterialModule } from 'src/app/material.module';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
    {
        path: '',
        component: PatientListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, MaterialModule, NgxDatatableModule],
    declarations: [PatientListComponent],
})
export class PatientListModule {}
