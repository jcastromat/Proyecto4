#pragma strict

var destroyed : int;

function Start () {
	GameObject.FindWithTag("Portal").GetComponent.<ParticleSystem>().Stop();
	destroyed = 0; 
}

function Add() {
	destroyed += 1;
}

function Update(){
	if (destroyed >= 2){
		GameObject.FindWithTag("Portal").GetComponent.<ParticleSystem>().Play();
		GameObject.FindWithTag("Portal").GetComponent.<ManagePortal>().EnablePortal();
	}

}