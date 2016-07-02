#pragma strict

var Missle01 : GameObject;
var Missle02 : GameObject;
var Laser : GameObject;
var currentWeapon = "Misil";


function Update () {
	if(Input.GetKeyDown(KeyCode.Q)){
		SwapWeapons();
	}
}

function SwapWeapons(){
	if (Laser.active == true){
		Laser.SetActive(false);
		Missle01.SetActive(true);
		Missle02.SetActive(true);
		currentWeapon = "Misil";
	}
	else{
		Laser.SetActive(true);
		Missle01.SetActive(false);
		Missle02.SetActive(false);
		currentWeapon = "Laser";
	}
}