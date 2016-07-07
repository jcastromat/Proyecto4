using UnityEngine;
using System.Collections;

public class WhenPlasmaHit : MonoBehaviour {

	public int radius = 50;

	// Use this for initialization
	void Update () {
		Collider[] hitColliders = Physics.OverlapSphere(transform.position, radius);
		foreach (Collider col in hitColliders){
			col.gameObject.transform.parent.GetComponent<EnemiesHealth> ().ReduceHealth ();
		}
	}

}
