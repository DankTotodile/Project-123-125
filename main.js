nx = 0;
ny = 0;
rwx = 0;
rwy = 0;
diff = 0;
function preload()
{

}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(850, 250);
    video = createCapture('VIDEO');
    video.size(400, 400);
    video.position(250, 250);
    pn = ml5.poseNet(video, modelLoaded);
    pn.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Model has been loaded");
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        nx = results[0].pose.nose.x;
        ny = results[0].pose.nose.y;
        rwx = Math.floor(results[0].pose.rightWrist.x);
        lwx = Math.floor(results[0].pose.leftWrist.x);
        diff = lwx - rwx;
    }
}
function draw()
{   
    var d = diff + " px";
    fill("blue");
    background("white");
    textSize(diff);
    text(d, nx, ny)
}
