using UnityEngine;
using System.Collections;

public class Float : MonoBehaviour {

	float yPos;
	float speed = 1;
	float amplitude = 3;

	// Use this for initialization
	void Start () {
		yPos = transform.position.y;
	}
	
	// Update is called once per frame
	void Update () {
		Vector3 temp = transform.position;
		temp.y = yPos + amplitude * Mathf.Sin (speed * Time.time);
		transform.position = temp;
	}
}
