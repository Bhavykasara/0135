/*img="";
statusa="";
ans=[];

function preload() {
    //img=loadImage("https://th.bing.com/th/id/OIP.ilkkyRL3ff4I0kIlb735UwHaJm?pid=ImgDet&rs=1");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.size(380,380);
    vedio.hide();

    od=ml5.objectDetector("cocossd",modalLoaded);
}

function draw() {
    image(vedio,0,0,640,420);
    r=random(125);
    b=random(125);
    g=random(125);
    if(statusa!=""){
        od.detect(vedio,gotResults);
        for(i=0;i<ans.length; i++) {
            fill(r,g,b);
            percent=floor(ans[i].confidence*100);
            text(ans[i].label+ " "+percent+"% ", ans[i].x,ans[i].y);
            noFill();
            stroke(r,g,b);
            rect(ans[i].x,ans[i].y,ans[i].width,ans[i].height);
        }
    }
}

function modalLoaded() {
    statusa=true;
    console.log("modal is loaded");
    
}

function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        ans=results;
    }
}

function back() {
    window.location="index.html";
}*/

ans=[];
statusa="";
res="";

function preload() {

}

function setup() {
    canvas=createCanvas(480,360);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.size(480,360);
    vedio.hide();

    od=ml5.objectDetector("cocossd",modalLoaded);
}

function modalLoaded() {
    console.log("modal is loaded");
    statusa=true;
}

function draw() {
    image(vedio,0,0,480,360);
    r=random(125);
    b=random(125);
    g=random(125);
    if(statusa!=""){
        od.detect(vedio,gotResults);
        for(i=0;i<ans.length; i++) {
            if(ans[i].label==res) {
                document.getElementById("fa").innerHTML=res+" is found";
            }
            document.getElementById("sta").innerHTML="Status : Detection Complete";
            fill(r,g,b);
            percent=floor(ans[i].confidence*100);
            text(ans[i].label+ " "+percent+"% ", ans[i].x,ans[i].y);
            noFill();
            stroke(r,g,b);
            rect(ans[i].x,ans[i].y,ans[i].width,ans[i].height);
        }
    }
}

function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        ans=results;
    }
}

function starto() {
    res=document.getElementById("input").value;
    document.getElementById("fa").innerHTML=res+" not is found";
}