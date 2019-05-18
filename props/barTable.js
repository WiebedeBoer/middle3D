class BarTable extends THREE.Group {

    init (){

        var dBar = this;
        loadOBJModel("models/bar_table/","model.obj","models/bar_table/","materials.mtl", (mesh) => {
            mesh.scale.set (10, 12, 10);
            dBar.position.x = this.pX;
            dBar.position.y = this.pY;
            dBar.position.z = this.pZ;
            dBar.rotation.x = this.pXr;
            dBar.rotation.y = this.pYr;
            dBar.rotation.z = this.pZr;
            dBar.add(mesh);
            //candle light
            addPointLight(dBar,0xf8eabb, -0.5,5.4,0, 0.7, 25); 
            var g = new THREE.BoxGeometry(1,1,1);
            var m = new THREE.MeshBasicMaterial({color: 0xf8eabb});
            dBar._meshLight = new THREE.Mesh(g, m);
            dBar._meshLight.position.set(-0.5,5.4,0);
            dBar._meshLight.visible = false;
            dBar.add(dBar._meshLight);
            //lantern light 
            addPointLight(dBar,0xf8eabb, -0.5,3.5,-2.4, 0.8, 30); 
            var gc = new THREE.BoxGeometry(1,1,1);
            var mc = new THREE.MeshBasicMaterial({color: 0xf8eabb});
            dBar._candleLight = new THREE.Mesh(gc, mc);
            dBar._candleLight.position.set(-0.5,3.5,-2.4);
            dBar._candleLight.visible = false;
            dBar.add(dBar._candleLight);  

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