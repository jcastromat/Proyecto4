 #pragma strict
var Spawn : Transform;
var Missle : Rigidbody;
var waitTime : int;
var speed : int;


function Update () {

    if((Input.GetKeyDown(KeyCode.Space)) && (Missle.GetComponent.<WhenHit>().activeMissle) )
    {	
    	var instance : Rigidbody = Instantiate(Missle, Spawn.position, Spawn.rotation);
    	Physics.IgnoreCollision(instance.GetComponentInChildren.<MeshCollider>(), gameObject.transform.parent.GetComponent.<BoxCollider>());
        instance.velocity = Spawn.forward * speed;
    }

}