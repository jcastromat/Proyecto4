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
	if ((SceneManagement.SceneManager.GetActiveScene().name == "Montana") && (destroyed >= 2)){
		GameObject.FindWithTag("Portal").GetComponent.<ParticleSystem>().Play();
		GameObject.FindWithTag("Portal").GetComponent.<ManagePortal>().EnablePortal();
	}
	if ((SceneManagement.SceneManager.GetActiveScene().name == "Desierto") && (destroyed >= 5)){
		GameObject.FindWithTag("Portal").GetComponent.<ParticleSystem>().Play();
		GameObject.FindWithTag("Portal").GetComponent.<ManagePortal>().EnablePortal();
	}
	if ((SceneManagement.SceneManager.GetActiveScene().name == "Espacio") && (destroyed >= 10)){
		GameObject.FindWithTag("Portal").GetComponent.<ParticleSystem>().Play();
		GameObject.FindWithTag("Portal").GetComponent.<ManagePortal>().EnablePortal();
	}

}