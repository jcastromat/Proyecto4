#pragma strict

var time :String;
var maxTime :float;

private var nextTime = 0.5;
private var minutos = 0;
private var segundos = 0;

function Update () {

	nextTime = Time.time;
	minutos = nextTime/60;
	segundos = nextTime%60;

}

function OnGUI(){
	GUI.Box(new Rect(Screen.width/2 -100, 0, 200, 50), "Minutes: " +minutos +" Seconds: " +segundos);

}