#pragma strict

var rotateSpeed = 75.0;
var speed = 50.0;

var yPos = 0.0f;
var floatingSpeed = 1;
var amplitude = 1;

function Start(){
	yPos = transform.position.y;
}
 
function Update() {
	var transAmount = speed * Time.deltaTime;
	var rotateAmount = rotateSpeed * Time.deltaTime;

	if (Input.GetKey("up")) {
		transform.Rotate(rotateAmount, 0, 0);	
	}
	if (Input.GetKey("down")) {
		transform.Rotate(-rotateAmount, 0, 0);	
	}
	if (Input.GetKey("left")) {
		transform.Rotate(0, -rotateAmount, 0);
	}
	if (Input.GetKey("right")) {
		transform.Rotate(0, rotateAmount, 0);
	}

	if (Input.GetKey ("z")) {
		transform.Rotate(0, 0, rotateAmount);
	}
	        
	if (Input.GetKey ("x")) {
		transform.Rotate(0, 0, -rotateAmount);
	}
	        
	if (Input.GetKey ("left shift") || (Input.GetKey("a"))) {
		transform.Translate(0, 0, (transAmount * 2));
		yPos = transform.position.y;
	} else
	{
		var temp = transform.position;
		temp.y = yPos + amplitude * Mathf.Sin (floatingSpeed * Time.time);
		transform.position = temp;
	}

}