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
			//Random.insideUnitCircle * 500

			Vector3 position = new Vector3(Random.Range(spawn.position[0]-150, spawn.position[0]+150), Random.Range(spawn.position[1]-20, spawn.position[1]+20), Random.Range(spawn.position[2]-100, spawn.position[2]+100));
			//Vector3 position = new Vector3(Random.Range(800f, 1100f), Random.Range(50f, 90f), Random.Range(1000f, 1200f));
			GameObject instance = Instantiate (enemyShip, position , spawn.rotation) as GameObject;

		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
