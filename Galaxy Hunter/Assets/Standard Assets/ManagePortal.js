#pragma strict

var active : boolean;
var player : GameObject;

function Start () {	
	active = false;
}

function Update () {
	player = GameObject.FindWithTag("Player");
	if ( (active == true) && (Vector3.Distance(transform.position, player.transform.position) < 100) ){
		var levelCompleteUI = GameObject.FindWithTag ("Canvas").transform.GetChild (5).gameObject;
		levelCompleteUI.SetActive (true);
		Invoke("Load", 3);

	}
}

function Load(){
	if(SceneManagement.SceneManager.GetActiveScene().name == "Montana"){
		PlayerPrefs.SetInt("SavedLevel1", 1);
		UnityEngine.SceneManagement.SceneManager.LoadScene("Desierto");
	}
	else{
		PlayerPrefs.SetInt("SavedLevel2", 1);
		UnityEngine.SceneManagement.SceneManager.LoadScene("Espacio");
	}
}

function EnablePortal(){
	active = true;
}