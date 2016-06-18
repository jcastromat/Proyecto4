using UnityEngine;
using System.Collections;

public class Splash : MonoBehaviour {

	// Use this for initialization
	void Start () {
		StartCoroutine ("Countdown");

	}
	

	private IEnumerator Countdown(){
		yield return new WaitForSeconds (5);
		Application.LoadLevel ("MenuPrincipal");		
	}
}
