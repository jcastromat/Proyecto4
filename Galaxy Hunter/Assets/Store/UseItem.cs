﻿using UnityEngine;
using System.Collections;

public class UseItem : MonoBehaviour {


	public static void Use (string itemName) {

		Debug.Log ("Custom item usage executing for item: " + itemName);

		PlayerPrefs.SetString ("nave", itemName);

		/* 
		 * TODO implement your own custom code for what happens when an item is used
		 * 
		 * EXAMPLE USAGE:
		 * 
		if (itemName == "Unlock All Vehicles") {
			YourOwnScript.UnlockVehicles();
		}

		if (itemName == "Extra Life") {
			YourOwnScript.addLives(1);
		}
		*/

	}

}
