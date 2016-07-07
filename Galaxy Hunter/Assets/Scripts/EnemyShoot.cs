using UnityEngine;
using System.Collections;

public class EnemyShoot : MonoBehaviour {

	public Transform spawn;
	public Rigidbody missle;
	public int waitTime;
	public int speed;
	private Ray ray;

	public void Shoot(){
		Rigidbody instance = Instantiate(missle, spawn.position, spawn.rotation) as Rigidbody;
		Physics.IgnoreCollision(instance.GetComponentInChildren<MeshCollider>(), gameObject.transform.parent.GetComponent<BoxCollider>());
		instance.velocity = spawn.forward * speed;
	}
}
