
var explosionTerrain : Transform;
var explosionEnemy : Transform;

function OnCollisionEnter(collision : Collision) {


    var contact = collision.contacts[1];
    var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
    var pos = contact.point;

    if ( collision.gameObject.name == "EnemyShip") {
     	Instantiate(explosionEnemy, pos, rot);
		collision.gameObject.GetComponent("EnemiesHealth").ReduceHealth();
    }
    else{
        if ( collision.gameObject.name == "Player") {
	     	Instantiate(explosionEnemy, pos, rot);
			collision.gameObject.GetComponent("PlayerHealth").ReduceHealth();

	    }
	    else{
    		Instantiate(explosionTerrain, pos, rot);
    	}

    }

//    Destroy(gameObject);

}