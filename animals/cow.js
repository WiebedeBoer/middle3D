class Cow extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("cow/","Cow.obj","cow/","Cow.mtl", (mesh) => {
            mesh.scale.x = 1.3;
            mesh.scale.y = 1.3;
            mesh.scale.z = 1.3;
            dChurch.position.x = this.pX;
            dChurch.position.y = 0;
            dChurch.position.z = this.pZ;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.init();
    }
}