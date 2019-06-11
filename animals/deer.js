class Deer extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("animals/deer/","deer.obj","animals/deer/","deer.mtl", (mesh) => {
            mesh.scale.x = 45.7;
            mesh.scale.y = 45.7;
            mesh.scale.z = 45.7;
            dChurch.position.x = this.pX-35;
            dChurch.position.y = 17;
            dChurch.position.z = this.pZ+1;
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