let yPos = 25;


function setup()
{
    createCanvas(500, 500);
    background(0);
}

function draw()
{
    background(0, 20);

    
    ellipse(250, yPos, 50);
    
    yPos+=3;
    if(yPos>525)
    {
        yPos=-25;
    }
}

function mouseClicked()
{
    
    yPos = 25;
    fill(random(255), random(255), random(255));
}