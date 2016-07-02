using UnityEngine;
using System.Collections;

public class WhenLaserHit : MonoBehaviour {

	public Transform explosionTerrain;
	public Transform explosionEnemy;
	RaycastHit hit;

	// Update is called once per frame
	void Update () {
		if(Physics.Raycast(transform.position, transform.right, out hit, 500)){
			//print ("found something " + hit.collider.name );


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

//	IEnumerator FireLaser()
//	{
//
//		while(Input.GetKey(KeyCode.P))
//		{
//			
//
//			line.SetPosition(0, ray.origin);
//			if(Physics.Raycast(ray, out hit, 150))
//			{
//				line.SetPosition(1, hit.point);
//				if(hit.rigidbody)
//				{
//					hit.rigidbody.AddForceAtPosition(transform.forward * 10, hit.point);
//				}
//			}
//			else
//				line.SetPosition(1, ray.GetPoint(100));
//
//			yield return null;
//		}
//	}
//

}
