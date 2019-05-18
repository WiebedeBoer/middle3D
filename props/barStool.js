class BarStool extends THREE.Group {

    init (){

        var dBar = this;
        loadOBJModel("models/bar_stool/","stool.obj","models/bar_stool/","stool.mtl", (mesh) => {
            mesh.scale.set (1.4, 2, 1.4);
            dBar.position.x = this.pX;
            dBar.position.y = this.pY;
            dBar.position.z = this.pZ;
            dBar.rotation.x = this.pXr;
            dBar.rotation.y = this.pYr;
            dBar.rotation.z = this.pZr;
            dBar.add(mesh);
            
        });
    }    
            
    constructor(pX,pY,pZ,pXr,pYr,pZr){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.pXr = pXr;
        this.pYr = pYr;
        this.pZr = pZr;
        this.init();
    }
}