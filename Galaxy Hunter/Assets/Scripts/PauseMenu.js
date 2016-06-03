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
    GUI.BeginGroup(Rect(Screen.width / 2 - 150, 50, 300, 250));
		
		//the menu background box
		GUI.Box(Rect(0, 0, 300, 250), "");
		
		//logo picture
		GUI.Label(Rect(15, 10, 300, 68), logoTexture);

		//resume game
		if(GUI.Button(Rect(55, 100, 180, 40), "Continuar")) {
		    PauseGame = false;
		    Time.timeScale = 1;
            DisplayMenu();
		}

		//exit to main menu
        if(GUI.Button(Rect(55, 150, 180, 40), "Salir")) {
        	Application.LoadLevel("MenuPrincipal");
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