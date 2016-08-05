#pragma strict

var UnlockedDesert : Sprite;
var UnlockedSpace : Sprite;
var LockedDesert : Sprite;
var LockedSpace : Sprite;

var levelReached1 : int = 0;
var levelReached2 : int = 0;
var levelReached3 : int = 0;




function Start () {

}

function Update () {
	levelReached1 = PlayerPrefs.GetInt("SavedLevel1");
	levelReached2 = PlayerPrefs.GetInt("SavedLevel2");
	levelReached3 = PlayerPrefs.GetInt("SavedLevel3");

	if(levelReached1 == 1){
			GameObject.FindWithTag("EscDesierto").GetComponent.<UnityEngine.UI.Image>().sprite =  UnlockedDesert;
			GameObject.FindWithTag("EscDesierto").GetComponent.<UnityEngine.UI.Button>().enabled = true;
	}else{
		GameObject.FindWithTag("EscDesierto").GetComponent.<UnityEngine.UI.Image>().sprite =  LockedDesert;
		GameObject.FindWithTag("EscDesierto").GetComponent.<UnityEngine.UI.Button>().enabled = false;
	}

	if(levelReached2 == 1){
			GameObject.FindWithTag("EscEspacio").GetComponent.<UnityEngine.UI.Image>().sprite =  UnlockedSpace;
			GameObject.FindWithTag("EscEspacio").GetComponent.<UnityEngine.UI.Button>().enabled = true;
	}else{
		GameObject.FindWithTag("EscEspacio").GetComponent.<UnityEngine.UI.Image>().sprite =  LockedSpace;
		GameObject.FindWithTag("EscEspacio").GetComponent.<UnityEngine.UI.Button>().enabled = false;
	}

}