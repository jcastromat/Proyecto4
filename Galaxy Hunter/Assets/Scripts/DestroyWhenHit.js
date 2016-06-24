
var explosionPrefab : Transform;

function OnCollisionEnter(collision : Collision) {


    var contact = collision.contacts[1];
    var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
    var pos = contact.point;
    Instantiate(explosionPrefab, pos, rot);

    if (collision.gameObject.name == "EnemyShip"){
		collision.gameObject.GetComponent("PlayerManager").ReduceHealth();
    }

}