import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [ConfirmDialogComponent],
    entryComponents: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {}
