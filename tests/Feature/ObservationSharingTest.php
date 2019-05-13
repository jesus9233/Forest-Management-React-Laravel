<?php

namespace Tests\Feature;

use App\Observation;
use App\User;
use App\ShareToken;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Illuminate\Support\Str;

class ObservationSharingTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test share link returns forbidden for non-owners.
     *
     * @test
     */
    public function testShareLinkFailsForNonOwner()
    {
        $user = factory(User::class)->create();
        $owner = factory(User::class)->create();

        $observation = factory(Observation::class)->create([
            'user_id' => $owner->id,
        ]);

        $this->actingAs($user);

        $response = $this->get('/web/share/observation/' . $observation->id);

        $response->assertStatus(403);
    }

    /**
     * Test share link returns successful for owner.
     *
     * @test
     */
    public function testShareLinkSucceedsForOwner()
    {
        $user = factory(User::class)->create();

        $observation = factory(Observation::class)->create([
            'user_id' => $user->id,
        ]);

        $this->actingAs($user);

        $response = $this->get('/web/share/observation/' . $observation->id);

        $response->assertStatus(200);
    }

    /**
     * Test invalid token returns fuzzified location.
     *
     * @test
     */
    public function testInvalidTokenShowsInaccurateLocation()
    {
        $user = factory(User::class)->create();
        $owner = factory(User::class)->create();
        $observation = factory(Observation::class)->create([
            'user_id' => $owner->id,
        ]);

        $this->actingAs($user);

        $response = $this->get("/web/observation/$observation->id");

        $json = $response->json();

        $this->assertEquals($json['data']['location']['longitude'], $observation->longitude);
        $this->assertEquals($json['data']['location']['latitude'], $observation->latitude);

        //$this->assertEquals($json['data']['location']['longitude'], $observation->fuzzy_coords['longitude']);
        //$this->assertEquals($json['data']['location']['latitude'], $observation->fuzzy_coords['latitude']);

        $response->assertStatus(200);
    }

    /**
     * Test valid token returns correct location.
     *
     * @test
     */
    public function testValidTokenShowsAccurateLocation()
    {
        $user = factory(User::class)->create();
        $observation = factory(Observation::class)->create([
            'user_id' => $user->id,
        ]);

        $token_value = Str::random(60);

        $token = factory(ShareToken::class)->create([
            'user_id' => $user->id,
            'observation_id' => $observation->id,
            'value' => $token_value,
        ]);

        $this->actingAs($user);

        $response = $this->get("/web/observation/$observation->id?token=$token->value")->json();

        $json = $response->get();

        $this->assertEquals($json['data']['location']['longitude'], $observation->longitude);
        $this->assertEquals($json['data']['location']['latitude'], $observation->latitude);

        $response->assertStatus(200);
    }
}
