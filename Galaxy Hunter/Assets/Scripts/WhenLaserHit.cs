using UnityEngine;
using System.Collections;

public class WhenLaserHit : MonoBehaviour {

	public Transform explosionTerrain;
	public Transform explosionEnemy;
	RaycastHit hit;

	// Update is called once per frame
	void Update () {
		if(Physics.Raycast(transform.position, transform.right, out hit, 500)){

			if (hit.collider.gameObject.name == "EnemyShip"){
				Instantiate(explosionEnemy, hit.point, transform.rotation);
				hit.collider.gameObject.transform.parent.GetComponent<EnemiesHealth> ().ReduceHealth ();
			}
			else{
				if ( hit.collider.gameObject.name == "Player") {
					Instantiate(explosionEnemy, hit.point, transform.rotation);
					hit.collider.gameObject.GetComponent<PlayerHealth>().ReduceHealth();

				}
				else{
					Instantiate(explosionTerrain, hit.point, transform.rotation);
				}

			}
		}
	}

}
