using UnityEngine;
using System.Collections;

public class EnemyAI : MonoBehaviour {

	public Transform player;
	public float playerDistance; 
	public float rotationDamping;
	public float moveSpeed;
	bool waitAttack = false;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		playerDistance = Vector3.Distance (player.position, transform.position); 

		if (playerDistance < 80f) {
			lookAtPlayer ();
		}

		if ((playerDistance < 60f) && (playerDistance > 10f))  {
			chase ();
		}

		if (playerDistance < 20f) {
			attack ();
		}
	}

	void lookAtPlayer(){
		Quaternion rotation = Quaternion.LookRotation (player.position - transform.position);
		transform.rotation = Quaternion.Slerp (transform.rotation, rotation, Time.deltaTime * rotationDamping);
	}

	void chase(){
		transform.Translate (Vector3.forward * moveSpeed * Time.deltaTime);
	}

	void attack(){
		RaycastHit hit;
		if (Physics.Raycast (transform.position, transform.forward, out hit)){
			if ((hit.collider.gameObject.name == "Player") && (!waitAttack) ){
				Component[] spawns = gameObject.GetComponentsInChildren<EnemyShoot> ();
				foreach (EnemyShoot spawn in spawns) {
					spawn.Shoot ();
				}
				StartCoroutine(waitForNextAttack());
			}
		}
	}

	public IEnumerator waitForNextAttack() {
		waitAttack = true;
		yield return new WaitForSeconds(1f); // waits 1 second
		waitAttack = false;
	}
}