#pragma strict

var Missle01 : GameObject;
var Missle02 : GameObject;
var Laser : GameObject;
var Plasma : GameObject;
var currentWeapon = "Misil";


function Update () {
	if(Input.GetKeyDown(KeyCode.Q)){
		SwapWeapons();
	}
}

function SwapWeapons(){
	if (Plasma.active == true){
		Plasma.SetActive(false);
		Missle01.SetActive(true);
		Missle02.SetActive(true);
		currentWeapon = "Misil";
	}
	else{
		if(Missle01.active == true){
			Laser.SetActive(true);
			Missle01.SetActive(false);
			Missle02.SetActive(false);
			currentWeapon = "Laser";
		}
		else{
			Plasma.SetActive(true);
			Laser.SetActive(false);
			currentWeapon = "Plasma";
		}
	}
}