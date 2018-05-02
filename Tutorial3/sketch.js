var playing = false;
var video; 
var playButton;

function setup(){
  //creates an html video element, and html button element and attaches a 
  //element specific event listener to the button
  video = createVideo('Resources/mouse.mov');
  button = createButton("Play Video!");
  //mousePressed takes a function as an argument
  button.mousePressed(toggleVid); 
}

function toggleVid(){
  if(playing){
    //pauses vid
    video.pause();
    //changes words on button
    button.html('play');
  }
  else{
    //allows the video to loop
    video.loop();
    button.html('pause');
  }
  playing = !playing;
}

function draw(){
  
}







