class MarketStall extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/marketstall/","marketstall.obj","buildings/marketstall/","marketstall.mtl", (mesh) => {
            mesh.scale.x = 31.2;
            mesh.scale.y = 31.8;
            mesh.scale.z = 31.2;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
            dChurch.rotation.y = this.yR;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ,yR){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.yR = yR;
        this.init();
       
    }
}