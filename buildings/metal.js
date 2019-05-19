class Metal extends THREE.Group {

  init (){

    var mCity = this;

        //city mesh
        var geometry = new THREE.CubeGeometry(1, 1, 1 );

        // translate the geometry to place the pivot point at the bottom instead of the center
        geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
    
        var comMaterials = [
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //LEFT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //RIGHT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //TOP
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //BOTTOM
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //FRONT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //BACK
      ];  
        var comMaterial = new THREE.MeshFaceMaterial(comMaterials);
        var buildingMesh = new THREE.Mesh(geometry,comMaterial);
      // put a position
      buildingMesh.position.x = this.xc; 
      buildingMesh.position.y = 0;
      buildingMesh.position.z = this.yc; 
      //put a rotation
      buildingMesh.rotation.y = 0.5*Math.PI*2;
      //building scale
      buildingMesh.scale.x = this.width;
      buildingMesh.scale.y = this.height;
      buildingMesh.scale.z = this.length;  
        //add to class
        mCity.add(buildingMesh); 

}

  //constructor: building type, front texture, back texture, right texture, left texture, building height
  constructor(xc, yc,build,width,height,length){
    super();
    this.xc = xc;
    this.yc = yc;
    this.build = build;
    this.width = width;
    this.height = height;
    this.length = length;
    this.init();
  }

}