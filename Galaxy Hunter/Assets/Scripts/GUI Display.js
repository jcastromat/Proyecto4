#pragma strict

var plane : Transform;

private var item7value = true;
public var guiSkin : GUISkin; 
var Alt:int;
var Destroyed:int;
var Weapon:String;
function OnGUI(){ 
	GUI.skin = guiSkin;
	GUI.Box(Rect(0, Screen.height-100, 220, 100),"Ship Stats");
	GUI.Box(Rect(90, Screen.height-80, 120, 70), "");
	GUI.Box(Rect(10, Screen.height-80, 70, 70), "");
	GUI.Label(Rect(15, Screen.height-80, 100, 50), "Height");
	GUI.Label(Rect(15, Screen.height-60, 100, 50), "Destroyed");
	GUI.Label(Rect(15, Screen.height-40, 100, 50), "Weapon");
	GUI.Label(Rect(100, Screen.height-80, 100, 50), Alt.ToString());
	GUI.Label(Rect(100, Screen.height-60, 100, 50), Destroyed.ToString());
	GUI.Label(Rect(100, Screen.height-40, 100, 50), Weapon);
}


function Update(){

	Alt=plane.transform.position.y;
	Destroyed=GameObject.FindWithTag("PlayerManager").GetComponent.<ManageDestroyed>().destroyed;
	Weapon=plane.GetComponent.<WeaponSwitching>().currentWeapon;

	var score = GameObject.FindWithTag("Score").GetComponent.<UnityEngine.UI.Text>();
	score.text= "SCORE:   " + GameObject.FindWithTag("PlayerManager").GetComponent.<ManageScore>().currentScore;

}

