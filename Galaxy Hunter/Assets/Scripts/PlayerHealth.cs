using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class PlayerHealth : MonoBehaviour 
{
	public Transform explosionPrefab;
	public GameObject player;
	public Slider healthBar;

	public static int health = 100;

	// Use this for initialization
	void Start () {
		health = 100;
	}

	public void ReduceHealth(){
		health = health - 5;
		healthBar.value = health; 
		if (health <= 0) {
			//			player.GetComponent<Animator> ().SetTrigger ("isDead"); 
			Instantiate(explosionPrefab, player.transform.position, player.transform.rotation);
			Destroy (player, 0);
		}
	}

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown ("1")) {
			ReduceHealth ();
		}
	}
}
