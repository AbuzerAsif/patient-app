import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
    rows = [];
    loadingIndicator = true;
    reorderable = true;

    columns = [
        { prop: 'pasNumber' },
        { name: 'forenames' },
        { name: 'surname' },
        { name: 'dateOfBirth' },
        { name: 'sexCode' },
        { name: 'homeTelephoneNumber' },
    ];

    ColumnMode = ColumnMode;

    constructor() {
        // this.fetch((data) => {
        //     this.rows = data;
        //     setTimeout(() => {
        //         this.loadingIndicator = false;
        //     }, 1500);
        // });
    }

    ngOnInit() {}
}
