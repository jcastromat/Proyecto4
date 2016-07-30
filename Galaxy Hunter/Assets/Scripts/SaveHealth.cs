using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class SaveHealth : MonoBehaviour {

	public Slider healthBar;

	// Use this for initialization
	void Start () {
		if(PlayerPrefs.GetString ("game") == "load") 
			LoadGame();
	}
	
	// Update is called once per frame
	void Update () {

	}

	void SaveGame(){		
		PlayerPrefs.SetInt ("health", GameObject.FindWithTag ("Player").transform.GetComponent<PlayerHealth> ().health);
	}

	void LoadGame(){
		GameObject.FindWithTag ("Player").transform.GetComponent<PlayerHealth> ().health = PlayerPrefs.GetInt ("health");
		healthBar.value = PlayerPrefs.GetInt ("health");
	}
}
