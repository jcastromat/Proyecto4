using UnityEngine;
using System.Collections;

public class MenuPrincipal : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void StartGame(){
	
		//Application.loadedLevel (0);
	
	}

	public void NewGame(){
		Application.LoadLevel("Scene1");
	}

	public void Quit(){
	
		Application.Quit ();
		
	}
}
