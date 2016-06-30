
var explosionTerrain : Transform;
var explosionEnemy : Transform;
var activeMissle : boolean;

function Start(){
	activeMissle = true;
}

function OnCollisionEnter(collision : Collision) {


    var contact = collision.contacts[1];
    var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
    var pos = contact.point;

    if ( collision.gameObject.name == "Enemy") {
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

    activeMissle = false;
    Destroy(gameObject);



}