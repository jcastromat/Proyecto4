using UnityEngine;
using System.Collections;

public class ManageSpaceships : MonoBehaviour {

	public GameObject naveCaza;
	public GameObject naveRaptor;
	public GameObject naveExplorador;
	public GameObject naveCrucero;


	// Use this for initialization
	void Start () {
		if (PlayerPrefs.GetString ("nave") == "Nave Raptor") {
			naveCaza.SetActive (false);
			naveRaptor.SetActive (true);
		} 
		if (PlayerPrefs.GetString ("nave") == "Nave Explorador"){
			naveCaza.SetActive (false);
			naveExplorador.SetActive (true);
		}
		if (PlayerPrefs.GetString ("nave") == "Crucero"){
			naveCaza.SetActive (false);
			naveCrucero.SetActive (true);
		}
	}

	// Update is called once per frame
	void Update () {
	
	}
}
