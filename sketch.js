var srithi, srithi_walking;
var dharmesh, dharmesh_walking;
var ground;
var sel;
function preload(){
  srithi_walking = loadAnimation("images/srithi_standing.jpeg, images/srithi_walking1.jpeg, images/srithi_walking2.jpeg, images/srithi_walking3.jpeg, srithi_walking4.jpeg, images/srithi_walking5.jpeg, images/srithi_pause.jpeg");
}
function setup(){
  createCanvas(500,500);
  srithi = new Level1(50,400,20,40);
  dharmesh = new Level1(110,400,20,40)

  ground = new Ground(10,440,480,50);

  
  
}

function draw(){
  background(0);
  //rect(200,200,20,20);
  srithi.display();
  dharmesh.display();
  ground.display();
}


function selOption(){
  if(srithi.isTouching(dharmesh)){
    textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('oil');
  sel.option('milk');
  sel.option('bread');
  sel.option('milk');  
  }
}