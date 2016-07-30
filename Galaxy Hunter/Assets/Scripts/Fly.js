#pragma strict

public var explosionPrefab : GameObject;
public var playerShip : GameObject;
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
		if (transform.position.y > 20) {
			GetComponent.<Rigidbody>().Sleep();
			var temp = transform.position;
			temp.y = yPos + amplitude * Mathf.Sin (floatingSpeed * Time.time);
			transform.position = temp;
		}
	}

}

function OnCollisionEnter (col : Collision)
{
    if( (col.gameObject.name == "Terrain") && (col.impulse.magnitude > 10000))
    {
        Instantiate(explosionPrefab, gameObject.transform.position, gameObject.transform.rotation);
		Destroy (playerShip, 0);
		GetComponent.<Rigidbody>().isKinematic = true; 

		var gameOverUI = GameObject.FindWithTag ("Canvas").transform.GetChild (2).gameObject;
		gameOverUI.GetComponent.<UnityEngine.UI.Text>().text = "GAME  OVER \n\n SCORE  " + GameObject.FindWithTag("PlayerManager").GetComponent.<ManageScore>().currentScore;
		gameOverUI.SetActive (true);
    }
}