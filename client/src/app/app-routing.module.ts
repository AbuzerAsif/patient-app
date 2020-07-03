import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'patient',
        loadChildren: './patient/patient.module#PatientModule',
    },
    {
        path: '**',
        redirectTo: 'patient'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
