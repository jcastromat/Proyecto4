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
			Vector3 position = new Vector3(Random.Range(900f, 1100f), Random.Range(60f, 80f), Random.Range(900f, 1000f));
			GameObject instance = Instantiate (enemyShip, position , spawn.rotation) as GameObject;

		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
