<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $fillable = [
        'pasNumber',
        'forenames',
        'surname',
        'dateOfBirth',
        'sexCode',
        'homeTelephoneNumber',
        'nokName',
        'nokRelationshipCode',
        'nokAddressLine1',
        'nokAddressLine2',
        'nokAddressLine3',
        'nokAddressLine4',
        'nokPostcode'
    ];
}
