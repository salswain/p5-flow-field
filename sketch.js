var points = []

var r1 
var r2 
var g1 
var g2 
var b1 
var b2


function setup() {
    createCanvas(500, 500);
    pixelDensity(2)
    angleMode(DEGREES);
    noiseDetail(1)

    var density = 50
    
    for (var x = 0; x <= width; x += width / density) {
        for (var y = 0; y <= height; y += width / density) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10))
            points.push(p)
        }
    }
    
    background(0, 0, 0)
  
    shuffle(points, true)
    r1 = random(255)
    r2 = random(255)
    g1 = random(255)
    g2 = random(255)
    b1 = random(255)
    b2 = random(255)
  
    mult = random(0.002, 0.01)
  
}

function draw() {

    if (frameCount < 400) {
        noStroke()

        var mult = 0.005
        
        for (var j = 0; j < 1; j++) {
            for (var i = 0; i < points.length; i++) {
    
                var r = map(points[i].x, 0, width, r1, r2)
                var g = map(points[i].y, 0, height, g1, g2)
                var b = map(points[i].x, 0, width, b1, b2)
                var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 350, 400, 0)
        
                fill(r, g, b, alpha)
        
                var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
        
                points[i].add(createVector(cos(angle), sin(angle)))
                
                if (dist(width / 2, height / 2, points[i].x, points[i].y) < 200) {
                  ellipse(points[i].x, points[i].y, 1)
                }
                
              
            }
        }
    } 

}

function mouseClicked() {
  saveCanvas('flowfield', 'png')
  }