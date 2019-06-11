class Deer extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("animals/deer/","deer.obj","animals/deer/","deer.mtl", (mesh) => {
            mesh.scale.x = 40.0;
            mesh.scale.y = 40.0;
            mesh.scale.z = 40.0;
            dChurch.position.x = this.pX;
            dChurch.position.y = 13;
            dChurch.position.z = this.pZ;
            dChurch.rotation.y = Math.PI / 2;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;
        this.pZ = pZ;
        this.init();
    }
}