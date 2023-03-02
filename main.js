function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/SAiNF0DTT/model.json", modelload);

}

function modelload(){
    classifier.classify(gotresult);

}

Backgroundnoise = 0;
    Barking = 0;
    Meowing = 0;
    Roar = 0;
    Mooing = 0;

function gotresult(error, result){
    if(error)
    console.error(error);
    else 
    console.log(result);
    
    random_color_r= Math.floor(Math.random()*255)+1;
    random_color_g= Math.floor(Math.random()*255)+1;
    random_color_b= Math.floor(Math.random()*255)+1;

document.getElementById("nooftimesanimalsoundheard").innerHTML = "Number of animal sound detected " + " Background noise: " + Backgroundnoise+" Barking: "+Barking+" Meowing: "+Meowing+" Roar: " +Roar+" Mooing: "+Mooing;
document.getElementById("Animalsoundfinal").innerHTML = "Name of animal: " + result[0].label;
document.getElementById("nooftimesanimalsoundheard").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+ ")";
document.getElementById("Animalsoundfinal").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+ ")";

image = document.getElementById("defaultimage");

if(result[0].label == "Barking"){
image.src="Barking.png";
Backgroundnoise=Backgroundnoise+1;
}
else if(result[0].label == "Meowing"){
    image.src="Meowing.jpg";
    Meowing=Meowing+1;
}
else if(result[0].label == "Roar"){
    image.src="Roar.jpg";
    Roar=Roar+1;
}
else{
    image.src="Mooing.jpg";
    Mooing=Mooing+1;
}
}
