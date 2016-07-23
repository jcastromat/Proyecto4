#pragma strict

var player: GameObject;

function Start () {
	if(PlayerPrefs.GetString ("game") == "load") 
		LoadGame();
}

function Update () {

}

function SaveGame(){

	PlayerPrefs.SetString("scene", SceneManagement.SceneManager.GetActiveScene().name);
	PlayerPrefs.SetFloat ("xpos", player.transform.position.x);
	PlayerPrefs.SetFloat ("ypos", player.transform.position.y);
	PlayerPrefs.SetFloat ("zpos", player.transform.position.z);
	PlayerPrefs.SetFloat ("xrot", player.transform.rotation.x);
	PlayerPrefs.SetFloat ("yrot", player.transform.rotation.y);
	PlayerPrefs.SetFloat ("zrot", player.transform.rotation.z);
	//PlayerPrefs.SetInt ("health", player.transform.GetComponent("PlayerHealth").health);
}

function LoadGame(){
	var pos = new Vector3(PlayerPrefs.GetFloat ("xpos"),PlayerPrefs.GetFloat ("ypos"),PlayerPrefs.GetFloat ("zpos"));
	player.transform.position = pos;
	player.transform.rotation = Quaternion.Euler(PlayerPrefs.GetFloat ("xrot"),PlayerPrefs.GetFloat ("yrot"),PlayerPrefs.GetFloat ("zrot"));
}