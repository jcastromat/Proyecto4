#pragma strict

function Delete () {
	PlayerPrefs.DeleteAll();
	GameObject.FindWithTag("escenarios").transform.GetChild (5).gameObject.SetActive(false);
}

function ConfirmDelete(){
	GameObject.FindWithTag("escenarios").transform.GetChild (5).gameObject.SetActive(true);
}

function HideDelete(){
	GameObject.FindWithTag("escenarios").transform.GetChild (5).gameObject.SetActive(false);
}
