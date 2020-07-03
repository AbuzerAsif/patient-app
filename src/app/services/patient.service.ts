import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { API_BASE_URL } from 'src/app/shared/constants';

@Injectable()
export class PatientService {
    private apiUrl = `${API_BASE_URL}/patient`;

    constructor(private httpClient: HttpClient) {}

    getList(search: string) {
        return this.httpClient.get<Array<Patient>>(this.apiUrl, { params: { search } });
    }

    getDetails(id: string) {
        return this.httpClient.get<Patient>(`${this.apiUrl}/${id}`);
    }

    save(patient: Patient) {
        if (patient.id) {
            return this.httpClient.put(`${this.apiUrl}/${patient.id}`, patient);
        } else {
            return this.httpClient.post(this.apiUrl, patient);
        }
    }

    delete(id: number) {
        return this.httpClient.delete(`${this.apiUrl}/${id}`);
    }
}
