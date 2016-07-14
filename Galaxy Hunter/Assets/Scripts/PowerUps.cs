using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PowerUps : MonoBehaviour {

	public GameObject powerUpsPanel; 
	int points;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		points = GameObject.FindWithTag ("Player").transform.GetComponentInChildren<ManageScore>().currentScore;
		powerUpsPanel.transform.GetChild (1).gameObject.GetComponent<UnityEngine.UI.Text> ().text = "Available Points: " + points;

	}

	public void DisplayPowerUpsMenu(){		
		powerUpsPanel.SetActive (true);
	}

	public void IncreaseHealthBar(){
		if (points < 100) {
			powerUpsPanel.transform.GetChild (4).gameObject.SetActive (true);
		} else {
			gameObject.transform.GetChild (0).gameObject.GetComponent<Slider> ().maxValue += 10;
			gameObject.transform.GetChild (0).gameObject.GetComponent<Slider> ().value += 10;
			Vector2 currentSize = gameObject.transform.GetChild (0).gameObject.GetComponent<RectTransform> ().sizeDelta;
			gameObject.transform.GetChild (0).gameObject.GetComponent<RectTransform> ().sizeDelta = new Vector2 (currentSize [0] += 10, currentSize [1]);
			GameObject.FindWithTag ("Player").transform.GetComponent<PlayerHealth> ().health += 10;
			GameObject.FindWithTag ("Player").transform.GetComponentInChildren<ManageScore> ().currentScore -= 100;
		}
	}

	public void ActivateImmunity(){
		if (points < 150) {
			powerUpsPanel.transform.GetChild (7).gameObject.SetActive (true);
		} else {
			GameObject.FindWithTag ("PlayerShip").GetComponent<BoxCollider> ().enabled = false;
			GameObject.FindWithTag ("Player").transform.GetComponentInChildren<ManageScore> ().currentScore -= 150;
			StartCoroutine(Immune(10.0F));
		}
	}

	IEnumerator Immune (float waitTime) {
		yield return new WaitForSeconds(waitTime);
		GameObject.FindWithTag ("PlayerShip").GetComponent<BoxCollider> ().enabled = true;
	}

	public void ExitMenu(){
		powerUpsPanel.transform.GetChild (4).gameObject.SetActive (false);
		powerUpsPanel.transform.GetChild (7).gameObject.SetActive (false);
		powerUpsPanel.SetActive (false);
	}
}
