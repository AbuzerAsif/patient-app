<?php

namespace App\Http\Services;

use App\Models\Patient;

class PatientService
{
    public function all($attributes)
    {
        $search = $attributes['search'];

        return Patient::where('id', $search)
            ->orWhere('pasNumber', 'LIKE', "%$search%")
            ->orWhere('forenames', 'LIKE', "%$search%")
            ->orWhere('surname', 'LIKE', "%$search%")
            ->get();
    }

    public function details($id)
    {
        return Patient::where('id', $id)->first();
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
