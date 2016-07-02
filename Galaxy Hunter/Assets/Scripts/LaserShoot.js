#pragma strict

var Spawn : Transform;
var Laser : GameObject;
var waitTime : int;
var speed : int;

function Update () {

    if(Input.GetKeyDown(KeyCode.Space))
    {	
    	var instance : GameObject = Instantiate(Laser, Spawn.position, Spawn.rotation);
    	instance.transform.Rotate(0, -90, 0);
    	instance.transform.parent = Spawn.transform;
    	Destroy(instance, 2f);
    	//Physics.IgnoreCollision(instance.GetComponentInChildren.<MeshCollider>(), gameObject.transform.parent.GetComponent.<BoxCollider>());
        //instance.velocity = Spawn.forward * speed;
    }

}