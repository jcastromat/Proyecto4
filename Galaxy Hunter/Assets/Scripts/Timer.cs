using UnityEngine;
using System.Collections;

public class Timer : MonoBehaviour {

	public float maxTime;
	public float time;
	private float nextTime = 0.5f;
	private float minutos = 0.0f;
	private float segundos = 0.0f;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
		GameObject menuP = GameObject.FindGameObjectWithTag("ScriptMenuPrincipal");
		MenuPrincipal menu = menuP.GetComponent<MenuPrincipal>();
		maxTime = menu.min;

		nextTime = Time.time;
		minutos = (nextTime/60);
		segundos = nextTime%60;

		if (maxTime <= minutos)
			Application.LoadLevel ("MenuPrincipal");

	}

	void OnGUI(){
		GUI.Box(new Rect(Screen.width/2 -100, 0, 350, 50), "Minutos: " +(int)minutos +" Segundos " +(int)segundos);

	}
}

