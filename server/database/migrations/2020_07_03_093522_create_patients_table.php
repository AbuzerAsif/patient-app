<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('pasNumber');
            $table->string('forenames');
            $table->string('surname');
            $table->string('dateOfBirth');
            $table->string('sexCode');
            $table->string('homeTelephoneNumber');
            $table->string('nokName');
            $table->string('nokRelationshipCode');
            $table->string('nokAddressLine1');
            $table->string('nokAddressLine2');
            $table->string('nokAddressLine3');
            $table->string('nokAddressLine4');
            $table->string('nokPostcode');
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
