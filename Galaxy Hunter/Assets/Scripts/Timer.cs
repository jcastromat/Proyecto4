using UnityEngine;
using System.Collections;

public class Timer : MonoBehaviour {

	public float maxTime;
	public float time;
	public float ellapsed = 0.5f;
	public float minutos = 0.0f;
	public float segundos = 0.0f;

	// Use this for initialization
	void Start () {
		maxTime = PlayerPrefs.GetFloat ("time");
		time= Time.time;
	}
	
	// Update is called once per frame
	void Update () {
	
//		GameObject menuP = GameObject.FindGameObjectWithTag("ScriptMenuPrincipal");
//		MenuPrincipal menu = menuP.GetComponent<MenuPrincipal>();
//		maxTime = menu.min;

		ellapsed = Time.time - time;

		if (PlayerPrefs.GetString ("game") == "load") {
			ellapsed += PlayerPrefs.GetFloat ("ellapsedTime");
		}

		minutos = (ellapsed/60);
		segundos = ellapsed%60;

		if (maxTime <= minutos)
			Application.LoadLevel ("MenuPrincipal");

	}

	void OnGUI(){
		GUI.Box(new Rect(Screen.width/2 -100, 0, 350, 50), "Minutes: " +(int)minutos +" Seconds: " +(int)segundos);

	}
}

