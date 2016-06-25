 #pragma strict
var Spawn : Transform;
var Missle : Rigidbody;
var waitTime : int;
var speed : int;
var isMissleActive : boolean;


function Start(){
	isMissleActive = true;
}

function Update () {

    if((Input.GetKeyDown(KeyCode.Space)) && isMissleActive)
    {	
    	var instance : Rigidbody = Instantiate(Missle, Spawn.position, Spawn.rotation);
        instance.velocity = Spawn.forward * speed;
    }
//ray = Camera.main.ScreenPointToRay(Input.mousePosition);
//
//    if(Physics.Raycast(ray, hit)){
//    var point: Vector3 = hit.point;
//
//        Spawn.transform.LookAt(point);
//    }
}