function program() {
  
		    
    		    title("Joe Moyenne");
    		    size(600, 400);
    		    
    		    // All code goes here
    			smooth();
    			size(600, 400, P2D);
    			rectMode(CENTER);
    			textAlign(CENTER,CENTER);
    			
    			var scene = 1;
    			var gameIsRunning = !true;
    			
    			var btn = function(x,y,w,h,t,scen) {
    			    this.x = x;
    			    this.y = y;
    			    this.w = w;
    			    this.h = h;
    			    this.t = t;
    			    this.scen = scen;
    			};
    			btn.prototype.construct = function(){
    			    if(this.mouseIn()){
    			        fill(0, 0, 0,150);
    			        //cursor("pointer");
    			        if(mouseIsPressed){
    			            scene = this.scen;
    			        }
    			    }else {
    			        fill(0, 0, 0,100);
    			    }
    			    textAlign(CENTER,CENTER);
    			    rect(this.x,this.y,this.w,this.h,10);
    			    textFont(createFont("Trebuchet MS Bold"),20);
    			    fill(255, 255, 255);
    			    text(this.t,this.x,this.y);
    			};
    			btn.prototype.mouseIn = function() {
    			    return mouseX > this.x - this.w/2 &&
    			           mouseX < (this.x + this.w/2) &&
    			           mouseY > this.y - this.h/2 &&
    			           mouseY < (this.y + this.h/2);
    			};
    			
    			var playBtn = new btn(220,205,240,40,"Play",2);
    			var modesBtn = new btn(220,250,240,40,"Modes",2);
    			var shopBtn = new btn(220,295,240,40,"Customize",2);
    			var smallSettingsBtn = new btn(570,27,45,45,"⚙",2);
    			var smallShopBtn = new btn(570,76,45,45,"🛒",2);
    			
    			var grid = function() {
    			for(var i = 0; i < 1500; i += 150){
    			                for(var j = -275; j < 1225; j += 150){
    			                    stroke(0, 0, 0, 40);
    			                    strokeWeight(2);
    			                    fill(84, 138, 22);
    			                    rect(i,j,150,150);}}
    			};
    			
    			var stone = (function() {
    			    background(0,0);
    			    pushMatrix();
    			    scale(0.7);
    			stroke(0, 0, 0);
    			strokeWeight(4);
    			fill(199, 199, 199);
    			beginShape();
    			curveVertex(297, 94);
    			vertex(165, 158);
    			vertex(229, 119);
    			vertex(296, 155);
    			vertex(281, 237);
    			vertex(184, 245);
    			vertex(163, 158);
    			vertex(247, -18);
    			endShape();
    			noStroke();
    			translate(94,105);
    			scale(0.5);
    			fill(212, 212, 212);
    			beginShape();
    			curveVertex(297, 94);
    			vertex(165, 158);
    			vertex(229, 119);
    			vertex(296, 155);
    			vertex(281, 237);
    			vertex(184, 245);
    			vertex(163, 158);
    			vertex(247, -18);
    			endShape();
    			popMatrix();
    			
    			    return get();
    			})();
    			var hedge = (function() {
    			background(0,0);
    			pushMatrix();
    			scale(0.75);
    			stroke(0, 0, 0);
    			strokeWeight(3);
    			fill(46, 115, 39);
    			pushMatrix();
    			translate(-16,57);
    			beginShape();
    			curveVertex(178, 124);
    			vertex(178, 124);
    			vertex(160, 156);
    			vertex(192, 180);
    			vertex(210, 216);
    			vertex(254, 202);
    			vertex(294, 221);
    			vertex(318, 183);
    			vertex(355, 155);
    			vertex(326, 121);
    			vertex(323, 126);
    			endShape();
    			popMatrix();
    			pushMatrix();
    			translate(489,303);
    			scale(-1.0);
    			beginShape();
    			curveVertex(178, 124);
    			vertex(178, 124);
    			vertex(160, 156);
    			vertex(192, 180);
    			vertex(210, 216);
    			vertex(254, 202);
    			vertex(294, 221);
    			vertex(318, 183);
    			vertex(355, 155);
    			vertex(326, 121);
    			vertex(323, 126);
    			endShape();
    			popMatrix();
    			noStroke();
    			fill(111, 168, 113);
    			translate(141,107);
    			scale(0.4);
    			pushMatrix();
    			translate(-17,56);
    			beginShape();
    			curveVertex(178, 124);
    			vertex(178, 124);
    			vertex(160, 156);
    			vertex(192, 180);
    			vertex(210, 216);
    			vertex(254, 202);
    			vertex(294, 221);
    			vertex(318, 183);
    			vertex(355, 155);
    			vertex(326, 121);
    			vertex(323, 126);
    			endShape();
    			popMatrix();
    			pushMatrix();
    			translate(489,303);
    			scale(-1.0);
    			beginShape();
    			curveVertex(178, 124);
    			vertex(178, 124);
    			vertex(160, 156);
    			vertex(192, 180);
    			vertex(210, 216);
    			vertex(254, 202);
    			vertex(294, 221);
    			vertex(318, 183);
    			vertex(355, 155);
    			vertex(326, 121);
    			vertex(323, 126);
    			endShape();
    			popMatrix();
    			popMatrix();
    			
    			return get();
    			})();
    			var radioactive = function(x,y,size) {
    			    
    			    pushMatrix();
    			    translate(x,y);
    			    scale(size);
    			        translate(-100,-100);
    			        stroke(0, 0, 0);
    			        strokeWeight(3);
    			        fill(255, 247, 0);
    			        ellipse(104,98,43,43);
    			        
    			        stroke(255, 247, 0);
    			        
    			        strokeWeight(4);
    			        fill(0, 0, 0);
    			        arc(104,98,40,40,-65,5);
    			        arc(104,98,40,40,-180,-115);
    			        arc(104,98,40,40,-305,-235);
    			        
    			        strokeWeight(2.5);
    			        fill(0, 0, 0);
    			        ellipse(104,98,10,10);
    			    popMatrix();
    			    
    			    strokeWeight(1);
    			    noStroke();
    			};
    			var logo = function(x,y,size) {
    			    pushMatrix();
    			    translate(x,y);
    			    scale(size);
    			        textAlign(CORNER);
    			        translate(-290,-208);
    			        radioactive(200,208,1);
    			        radioactive(185,228,0.4);
    			        radioactive(220,228,0.4);
    			        fill(255, 255, 255);
    			        textFont(createFont("Trebuchet MS Bold"),20);
    			        text("FISTFIGHT.IO",240,200);
    			        textFont(createFont("Trebuchet MS"),13);
    			        text("OFFLINE BATTLE ROYALE",240,220);
    			    popMatrix();
    			    
    			    textAlign(CENTER,CENTER);
    			};
    			
    			var shop = (function() {
    			    
    			return get();
    			})();
    			
    			var rock = function(x,y) {
    			    this.x = x+random(1002);
    			    this.y = y+random(981);
    			};
    			rock.prototype.draw = function() {
    			    image(stone,this.x,this.y);
    			};
    			
    			var trees = [];
    			var rocks = [];
    			
    			for(var i=0;i<8;i++) {
    			    trees.push(new rock(random(), random(), random(), random()));
    			}
    			var rock1 = new rock (166, -42);
    			var rock2 = new rock (127, 155);
    			var rock3 = new rock (284, -55);
    			var rock4 = new rock (191, -234);
    			var rock5 = new rock (226, 68);
    			var rock6 = new rock (192, 215);
    			var rock7 = new rock (209, 153);
    			var rock8 = new rock (292, -292);
    			
    			var bush = function(x,y) {
    			    this.x = x+random(1000);
    			    this.y = y+random(985);
    			};
    			bush.prototype.draw = function() {
    			    image(hedge,this.x,this.y);
    			};
    			
    			var bush1 = new bush(0,-269);
    			var bush2 = new bush(51,38);
    			var bush3 = new bush(-62,-123);
    			var bush4 = new bush(64,-54);
    			var bush5 = new bush(-74,-102);
    			var bush6 = new bush(82,72);
    			var bush7 = new bush(83,-123);
    			var bush8 = new bush(-19,-139);
    			
    			var keys = [];
    			keyPressed = function() {
    			  keys[keyCode] = true;
    			};
    			keyReleased = function() {
    			  keys[keyCode] = false;
    			};
    			var cam = {
    			    x: 0,
    			    y: 0,
    			};
    			var skinColor;
    			var fistColor;
    			var currentSkin = 1;
    			var skinText;
    			var Player = function(x, y){
    			    this.angle = 0;
    			    this.x = x;
    			    this.y = y;
    			    this.speed = 5;
    			    this.fistpos1 = 20;
    			    this.fistpos2 = 20;
    			    this.fistIndex = 1;
    			    this.fistCooldown = 0;
    			
    			    this.draw = function() {
    			        pushMatrix();
    			        translate(this.x, this.y);
    			        rotate(-this.angle);
    			        stroke(43, 43, 43);
    			        //strokeWeight(1);
    			        noStroke();
    			        fill(skinColor);
    			        ellipse(0, 0, 45, 45);
    			        stroke(0, 0, 0);
    			        strokeWeight(2);
    			        fill(fistColor);
    			        ellipse(-17, this.fistpos1, 16, 16);
    			        ellipse(17, this.fistpos2, 16, 16);
    			        if(currentSkin === 5) {
    			            fill(255, 0, 0);
    			            rect(-1,-1,15,30,5);
    			        }
    			        popMatrix();
    			};
    			    this.move = function() {
    			    this.angle = atan2(mouseX - width/2, mouseY - height/2);
    			    this.x = constrain(this.x,-50,1400);
    			    this.y = constrain(this.y,-325,1130);
    			    if(keys[UP] || keys[87]){
    			        this.y -= this.speed;
    			    }
    			    if(keys[DOWN] || keys[83]){
    			        this.y += this.speed;
    			    }
    			    if(keys[LEFT] || keys[65]){
    			        this.x -= this.speed;
    			    }
    			    if(keys[RIGHT] || keys[68]){
    			        this.x += this.speed;
    			    }
    			};
    			    this.skins = function() {
    			        switch(currentSkin) {
    			            case 1:
    			                skinText = "Default";
    			                skinColor = color(255, 207, 125);
    			                fistColor = color(255, 207, 125);
    			            break;
    			            case 2:
    			                skinText = "Brown";
    			                skinColor = color(128, 81, 0);
    			                fistColor = color(150, 93, 0);
    			            break;
    			            case 3:
    			                skinText = "Albino";
    			                skinColor = color(222, 222, 222);
    			                fistColor = color(255, 255, 255);
    			            break;
    			            case 4:
    			                skinText = "Ghillie Suit";
    			                skinColor = color(84, 138, 22);
    			                fistColor = color(84, 138, 22);
    			            break;
    			            case 5:
    			                skinText = "DarkKnight";
    			                skinColor = color(0, 0, 0);
    			                fistColor = color(43, 43, 43);
    			            break;
    			        }
    			    };
    			    this.display = function() {
    			        this.move();
    			        this.draw();
    			        this.skins();
    			    };
    			};
    			var player = new Player(117, 1142);
    			
    			var x2 = 10;
    			var y2 = 90;
    			var minimap = function() {
    			noStroke();
    			fill(109, 173, 31,200);
    			rect(5,5,155,155);
    			fill(skinColor);
    			translate(x2,y2);
    			ellipse(5,60,5,5);
    			resetMatrix();
    			    if(keys[DOWN] && y2 < 97 || keys[83] && y2 < 97){
    			        y2 += 0.3;
    			    }
    			    if(keys[UP] && y2 > -53 || keys[87] && y2 > -53){
    			        y2 -= 0.3;
    			    }
    			    if(keys[RIGHT] && x2 < 153 || keys[68] && x2 < 153){
    			        x2 += 0.3;
    			    }
    			    if(keys[LEFT] && x2 > 2 || keys[65] && x2 > 7){
    			        x2 -= 0.3;
    			    }
    			};
    			var target = 1;
    			var crosshair = function() {
    			if (target === 1) {
    			fill(255, 255, 255);
    			pushMatrix();
    			translate(mouseX,mouseY);
    			cursor('none');
    			noStroke();
    			scale(0.7);
    			rect(-9,0,8,3,2);
    			rect(7,0,8,3,2);
    			rect(-1,-7,3,8,2);
    			rect(-1,8,3,8,2);
    			popMatrix();
    			}else if (target === 2) {
    			pushMatrix();
    			translate(mouseX,mouseY);
    			cursor('none');
    			noStroke();
    			scale(0.7);
    			noFill();
    			stroke(255, 255, 255);
    			strokeWeight(2);
    			ellipse(-15,-5,25,25);
    			fill(255, 255, 255);
    			ellipse(-15,-5,5,5);
    			popMatrix();
    			}else if (target === 3) {
    			cursor('crosshair');
    			}
    			};
    			var objects = function() {
    			rock1.draw();
    			rock2.draw();
    			rock3.draw();
    			rock4.draw();
    			bush1.draw();
    			bush2.draw();
    			bush3.draw();
    			bush4.draw();
    			rock5.draw();
    			rock6.draw();
    			rock7.draw();
    			rock8.draw();
    			bush5.draw();
    			bush6.draw();
    			bush7.draw();
    			bush8.draw();
    			};
    			var UI = function() {
    			fill(0, 0, 0,100);
    			rect(515,325,150,40,5);
    			rect(515,370,150,40,5);
    			
    			fill(255, 255, 255);
    			textFont(createFont("Trebuchet MS"),20);
    			text("1",455,325);
    			text("2",455,371);
    			
    			imageMode(CENTER);
    			image(shop,588,70,95,75);
    			imageMode(CORNER);
    			smallSettingsBtn.construct();
    			smallShopBtn.construct();
    			};
    			
    			var game = function() {
    			    if(gameIsRunning) {
    			        background(48, 48, 48);
    			        pushMatrix();
    			        translate(width/2-cam.x, height/2-cam.y);
    			        grid();
    			        player.display();
    			        objects();
    			        cam.x = player.x;
    			        cam.y = player.y;
    			        popMatrix();
    			        noStroke();
    			        UI();
    			        crosshair();
    			        //minimap();
    			        if(player.fistCooldown > 0) {
    			            player.fistCooldown --;
    			        }
    			        if(player.fistpos2 > 20) {
    			            player.fistpos2 -= 0.8;
    			        }
    			        if(player.fistpos1 > 20) {
    			            player.fistpos1 -= 0.8;
    			        }
    			    }
    			};
    			var settings = function() {
    			
    			};
    			var modes = function() {
    			
    			};
    			var shop = function() {
    			
    			};
    			var menu = function() {
    			pushMatrix();
    			scale(0.45);
    			grid();
    			objects();
    			popMatrix();
    			fill(0, 0, 0,100);
    			rect(220,110,240,140,10);
    			rect(427,180,150,275,10);
    			fill(229, 235, 112);
    			textFont(createFont("Trebuchet MS Bold"),100);
    			//text("fistfight.io", width/2, 100);
    			textSize(20);
    			textAlign(LEFT);
    			text("Still a wip. Might be finished by 2026", 360, 90,130,250);
    			textSize(30);
    			fill(255,255,255)
    			text("News", 360, 75);
    			textAlign(CENTER,CENTER);
    			fill(255, 255, 255);
    			textFont(createFont("courier"),18);
    			//text("v0.1",width/2+55, 150);
    			playBtn.construct();
    			modesBtn.construct();
    			shopBtn.construct();
    			smallSettingsBtn.construct();
    			cursor("auto");
    			logo(230,115,1);
    			};
    			
    			draw = function() {
    			    switch(scene) {
    			        case 1:
    			            menu();
    			        break;
    			        
    			        case 2:
    			            gameIsRunning = true;
    			            game();
    			        break;
    			        
    			        case 3:
    			            modes();
    			        break;
    			        
    			        case 4:
    			            settings();
    			        break;
    			        
    			        case 5:
    			            shop();
    			        break;
    			    }
    			    if(scene !== 2){gameIsRunning = !true;}
    			};
    			
    			mouseClicked = function() {
    			    
    			    if(player.fistCooldown === 0) {
    			        if(player.fistIndex === 1) {
    			            player.fistpos1 = 30;
    			            player.fistIndex = 2;
    			            player.fistpos2 = 20;
    			            player.fistCooldown = 20;
    			        }else {
    			            player.fistpos2 = 30;
    			            player.fistIndex = 1;
    			            player.fistpos1 = 20;
    			            player.fistCooldown = 20;
    			        }
    			    }
    			};

  
}
