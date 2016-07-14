using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PlayerHealth : MonoBehaviour 
{
	public Transform explosionPrefab;
	public GameObject player;
	public Slider healthBar;

	public int health;

	// Use this for initialization
	void Start () {
		health = (int)GameObject.FindWithTag ("HealthBar").transform.GetComponent<Slider> ().maxValue;
	}

	public void ReduceHealth(){
		health = health - 1;
		healthBar.value = health; 
		if (health <= 0) {
			//			player.GetComponent<Animator> ().SetTrigger ("isDead"); 
			Instantiate(explosionPrefab, player.transform.position, player.transform.rotation);
			Destroy (player, 0);

			// Show Game Over message
			GameObject gameOverUI = GameObject.FindWithTag ("Canvas").transform.GetChild (2).gameObject;
			gameOverUI.GetComponent<UnityEngine.UI.Text>().text = "GAME  OVER \n\n SCORE  " + GameObject.FindWithTag("PlayerManager").GetComponent<ManageScore>().currentScore;;
			gameOverUI.SetActive (true);
		}
	}

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown ("1")) {
			ReduceHealth ();
		}
	}
}
