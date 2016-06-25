using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class EnemiesHealth : MonoBehaviour {

	public Transform explosionPrefab;
	public GameObject player;
	public Slider healthBar;

	public static int health = 100;

	// Use this for initialization
	void Start () {
		health = 100;
	}

	public void ReduceHealth(){
		health = health - 10;
		healthBar.value = health; 
		if (health <= 0) {
//			player.GetComponent<Animator> ().SetTrigger ("isDead"); 
			Instantiate(explosionPrefab, player.transform.position, player.transform.rotation);
			Destroy (player, 0);
		}
	}

}
