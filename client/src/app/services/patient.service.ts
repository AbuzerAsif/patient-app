import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/models/patient';

@Injectable()
export class PatientService {
    private apiUrl = 'http://localhost:8000/api/patient';

    constructor(private httpClient: HttpClient) {}

    getList() {
        return this.httpClient.get<Array<Patient>>(this.apiUrl);
    }

    delete(id: number) {
        return this.httpClient.delete(`${this.apiUrl}/${id}`);
    }
}
