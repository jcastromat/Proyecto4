var logoTexture : Texture2D;
var newSkin : GUISkin;
var PauseGame = false;


function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		PauseGame = !PauseGame;

		if (PauseGame == true) {
			Time.timeScale = 0;
	        DisplayMenu();
        }

        if (PauseGame == false) {
			Time.timeScale = 1;
	        DisplayMenu();
        }
	}
}


function DisplayMenu()
{
    if(PauseGame == true){
    GUI.BeginGroup(Rect(Screen.width / 2 - 150, 70, 300, 250));
		
		//the menu background box
		GUI.Box(Rect(0, 0, 300, 250), "");
		
		//logo picture
		GUI.Label(Rect(15, 10, 300, 68), logoTexture);

		if(GUI.Button(Rect(55, 50, 180, 40), "Save")) {
			gameObject.transform.GetComponent("Save").SaveGame();
		}

		//resume game
		if(GUI.Button(Rect(55, 100, 180, 40), "Continuar")) {
		    PauseGame = false;
		    Time.timeScale = 1;
            DisplayMenu();
		}

		//exit to main menu
        if(GUI.Button(Rect(55, 150, 180, 40), "Salir")) {
        	UnityEngine.SceneManagement.SceneManager.LoadScene("MenuPrincipal");
        	//Application.LoadLevel("MenuPrincipal");
            }
		
		//layout end
		GUI.EndGroup(); 
    }
}
function OnGUI () {
		//load GUI skin
		GUI.skin = newSkin;
		
		//show the mouse cursor
		Cursor.visible = true;
		
		// Menu Script
		DisplayMenu();
}