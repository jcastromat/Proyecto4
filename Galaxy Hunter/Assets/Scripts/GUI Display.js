var plane : Transform;

public var item0 : GUIContent = GUIContent("");
public var item1 : GUIContent = GUIContent("");
public var item2 : GUIContent = GUIContent("Alt...");
private var item7value = true;
public var guiSkin : GUISkin; 
var Alt:int;
var Spd:int;
function OnGUI(){ 
	GUI.skin = guiSkin;
	GUI.Box(Rect(0, Screen.height-100, 200, 100),"Plane");
	GUI.Box(Rect(70, Screen.height-80, 120, 70), item0);
	GUI.Box(Rect(10, Screen.height-80, 50, 70), item1);
	GUI.Label(Rect(20, Screen.height-80, 100, 50), "Alt...");
	GUI.Label(Rect(15, Screen.height-60, 100, 50), "Speed");
	GUI.Label(Rect(80, Screen.height-80, 100, 50), Alt.ToString());
	GUI.Label(Rect(80, Screen.height-60, 100, 50), Spd.ToString());
}
function Update(){
Alt=plane.transform.position.y;
Spd=plane.GetComponent.<Rigidbody>().velocity.magnitude;
}