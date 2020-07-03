import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPatientComponent } from './add-edit-patient.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: AddEditPatientComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, MaterialModule],
    declarations: [AddEditPatientComponent],
})
export class AddEditPatientModule {}
