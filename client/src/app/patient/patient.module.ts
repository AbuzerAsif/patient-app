import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'list',
        loadChildren: './patient-list/patient-list.module#PatientListModule',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
})
export class PatientModule {}
