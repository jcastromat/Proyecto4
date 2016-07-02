var plane : Transform;

public var item0 : GUIContent = GUIContent("");
public var item1 : GUIContent = GUIContent("");
public var item2 : GUIContent = GUIContent("Alt...");
private var item7value = true;
public var guiSkin : GUISkin; 
var Alt:int;
var Spd:int;
var Weapon:String;
function OnGUI(){ 
	GUI.skin = guiSkin;
	GUI.Box(Rect(0, Screen.height-100, 220, 100),"Nave");
	GUI.Box(Rect(90, Screen.height-80, 120, 70), item0);
	GUI.Box(Rect(10, Screen.height-80, 70, 70), item1);
	GUI.Label(Rect(15, Screen.height-80, 100, 50), "Altura");
	GUI.Label(Rect(15, Screen.height-60, 100, 50), "Velicidad");
	GUI.Label(Rect(15, Screen.height-40, 100, 50), "Arma");
	GUI.Label(Rect(100, Screen.height-80, 100, 50), Alt.ToString());
	GUI.Label(Rect(100, Screen.height-60, 100, 50), Spd.ToString());
	GUI.Label(Rect(100, Screen.height-40, 100, 50), Weapon);
}
function Update(){
Alt=plane.transform.position.y;
Spd=plane.GetComponent.<Rigidbody>().velocity.magnitude;
Weapon=plane.GetComponent.<WeaponSwitching>().currentWeapon;
}