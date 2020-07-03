<?php

namespace App\Http\Services;

use App\Models\Patient;

class PatientService
{
    public function all()
    {
        return Patient::all();
    }

    public function create($attributes)
    {
        return Patient::create($attributes);
    }

    public function update($attributes, $id)
    {
        return Patient::where('id', $id)->update($attributes);
    }

    public function delete($id)
    {
        return Patient::where('id', $id)->delete();
    }
}
