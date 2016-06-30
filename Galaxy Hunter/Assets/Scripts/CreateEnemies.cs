using UnityEngine;
using System.Collections;

public class CreateEnemies : MonoBehaviour {

	public Transform spawn;
	public GameObject enemyShip;
	public int instanceCount = 5;

	private void CreateInstances() {

	}

	// Use this for initialization
	void Start () {
		for (int i = 0; i < instanceCount; ++i) {

			GameObject instance = Instantiate (enemyShip, spawn.position, spawn.rotation) as GameObject;

		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
