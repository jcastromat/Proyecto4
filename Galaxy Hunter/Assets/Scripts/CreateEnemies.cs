using UnityEngine;
using System.Collections;

public class CreateEnemies : MonoBehaviour {

	public Transform spawn;
	public GameObject enemyShip1;
	public GameObject enemyShip2;
	public int instanceCount = 5;

	private void CreateInstances() {

	}

	// Use this for initialization
	void Start () {
		for (int i = 0; i < instanceCount; i += 2) {
			//Random.insideUnitCircle * 500

			Vector3 position1 = new Vector3(Random.Range(spawn.position[0]-250, spawn.position[0]+250), Random.Range(spawn.position[1]-20, spawn.position[1]+20), Random.Range(spawn.position[2]-200, spawn.position[2]+200));
			GameObject instance1 = Instantiate (enemyShip1, position1 , spawn.rotation) as GameObject;

			Vector3 position2 = new Vector3(Random.Range(spawn.position[0]-250, spawn.position[0]+250), Random.Range(spawn.position[1]-20, spawn.position[1]+20), Random.Range(spawn.position[2]-200, spawn.position[2]+200));
			GameObject instance2 = Instantiate (enemyShip2, position2 , spawn.rotation) as GameObject;

		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
