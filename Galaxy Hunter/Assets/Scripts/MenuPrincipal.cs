using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class MenuPrincipal : MonoBehaviour {

	public float min = 0.0f;
	public float seg = 0.0f;
	public string scene = "";

	public static MenuPrincipal menuP;

	void Awake(){
	
		if (menuP == null) {
			menuP = this;
			DontDestroyOnLoad (gameObject);
		} else
			Destroy (gameObject);
	
	}

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
		//Application.LoadLevel(scene);
		PlayerPrefs.SetString("game", "new");
		UnityEngine.SceneManagement.SceneManager.LoadScene(scene);
	}

	public void LoadGame(){
		PlayerPrefs.SetString("game", "load");
		UnityEngine.SceneManagement.SceneManager.LoadScene(PlayerPrefs.GetString("scene"));
	}

	public void Quit(){
	
		Application.Quit ();
		
	}

	public void cinco(){
	
		min = 5f;

	}

	public void dies(){
	
		min = 10f;

	}

	public void quince(){
	
		min = 15f;
	
	}

	public void PrincipalScene(){

		scene = "Desierto";
	
	}

	public void MontainScene(){

		scene = "Montana";
	
	}

	public void MultiplayerScene(){

		scene = "Multiplayer";

	}



}
