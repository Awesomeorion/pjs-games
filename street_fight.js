var street_fighters = "

        // credit to @loyaltyKA for the font
        // p1: wasd move; q kick; e punch
        // p2: arrow keys move; / kick; . punch
        
        //[
        var palette = {
            "0": color(0, 0, 0), //black
            "1": color(230, 182, 133), //skin
            "2": color(201, 22, 22), //dark red
            "3": color(255, 255, 255), // white
            "4": color(24, 129, 199), //blue
            "5": color(255, 0, 0), //red
            "6": color(255, 230, 0), //yellow
            "7": color(0, 166, 255), //light blue
            "8": color(255, 162, 0), //orange
            "9": color(122, 86, 24), //brown
            "a": color(214, 134, 4), //light brown
            "b": color(57, 138, 52), //green
            "c": color(217, 156, 91), //dark skin
            "d": color(171, 146, 63), //dpants
            "e": color(149, 219, 64), //light green
            "f": color(150, 150, 150), //grey
        };
        var fighters = {
            ryu: {
                normal: [
        "..........00",
        ".....000000000",
        "..0000000000000",
        "..0000000000000.000",
        ".000000000000500550",
        ".000000000555055000",
        ".0000005555500550",
        "..0555555500000550",
        "..0055550000110550",
        "...000100330010000",
        "...0301001101100",
        "...01111111110330",
        "....0100011003300",
        "...030111101103110",
        "...003000011110110",
        "..0503011011115110",
        ".0111030100115510",
        ".0110033033005110",
        ".011100030000000",
        "..000030000030",
        "....03003330030",
        "...0330330330330",
        "...033330.033330",
        ".0011330...0331100",
        "01111110...01111110",
        "0011000.....0001100",
        ],
                face: [
        "fffffffffffffffffff",
        "ffffffffff00fffffff",
        "fffff000000000fffff",
        "ff0000000000000ffff",
        "ff0000000000000f000",
        "f000000000000500550",
        "f000000000555055000",
        "f0000005555500550ff",
        "ff0555555500000550f",
        "ff0055550000110550f",
        "fff000100330010000f",
        "fff0301001101100fff",
        "fff01111111110330ff",
        "ffff0100011003300ff",
        "fff030111101103110f",
        "fff003000011110110f",
        "ff0503011011115110f",
        ],
            },
            chunli: {
                normal: [
        "........000.......000",
        ".......033300000.03330",
        "......03309999990333330",
        "......03099999990333330",
        "......03099999999333330",
        ".......0999999999033300",
        ".......09909999099000330",
        "........0909999909903030",
        ".......09990900990093300",
        ".......0000100300110030",
        "........030100301010.00",
        "000.....011111111100",
        "01100..07010011100770",
        ".1101007770111100788700",
        ".01110008770000707787110",
        ".01110308078778770770110",
        "..0100007008778700003010",
        "...030011030000000100010",
        "...00011003333301111030",
        "......000a00333301110000",
        ".......0aaa8448a0000000",
        "......00aaa8448aaaa30",
        "......03aa084480a3330",
        ".....033300888800330",
        "...0033330.000003333000",
        "..03333000.....00033330",
        ],
                face: [
        "fffffffffffffffffff",
        "fff000fffffff000fff",
        "ff033300000f03330ff",
        "f03309999990333330f",
        "f03099999990333330f",
        "f03099999999333330f",
        "ff0999999999033300f",
        "ff09909999099000330",
        "fff0909999909903030",
        "ff09990900990093300",
        "ff0000100300110030f",
        "fff030100301010f00f",
        "fff011111111100ffff",
        "ff07010011100770fff",
        "007770111100788700f",
        "0008770000707787110",
        "0308078778770770110",
        ],
                punch:[
        "...........000.......000",
        "..........033300000.03330",
        ".........03309999990333330",
        ".........03099999990333330",
        ".........03099999999333330",
        "..........0999999999033300",
        "..........09909999099000330",
        "...........0909999909903030",
        "..........09990900990093300",
        "..........0000100300110030",
        "...........030100301010.00",
        "...........011111111100",
        "...0.00...07010011100770",
        ".0010030007770111100788700",
        "011100001178770000707787110",
        ".01103001178078778770770110",
        "..0110000007008778700003010",
        "...00......0030000000100010",
        "...........033333301111030",
        ".........000000333301110000",
        ".........0aaaa8778a0000000",
        "........0aaaa08778aaa00",
        ".......03aa00087780aa30",
        ".......03330.08888003330",
        ".....0033330..0000.0333300",
        "....03333000........0033330",
                ],
                kick:[
        ".............000.......000",
        "............033300000.03330",
        "...........03309999990333330",
        "...........03099999990333330",
        "...........03099999999333330",
        "............0999999990003300",
        "............09909999011100330",
        ".............0909999011030030",
        "............09990900900300300",
        "............0000100300001030",
        ".............03010030101100",
        "...........000111111110110",
        "..........0870100111008710",
        ".........07787011110077870",
        ".........0778070000707700",
        ".....00.000000787787700",
        ".00.0aa00aaa0a08778700",
        "03303aaaaaaaaa00000000",
        "03333aaaaaaaaaa08770",
        "03330aa0aaaa00a408770",
        ".000.00.0000.04a087770",
        ".........0110.0aa08880",
        "..........00...033000",
        "................033330",
        ".................0333300",
        ".................0003330",
                ],
            },
        };
        var infinity = [
        "..3333..3333",
        ".388883388883",
        "38833883833883",
        "383..3883..383",
        "383..3883..383",
        "38833838833883",
        ".388883388883",
        "..3333..3333",
        ];
        var imageGen = function(art, x, y, pixSize) {
            noStroke();
            pushMatrix();
            translate(x, y);
            for(var i = 0; i<art.length; i++) {
                for(var j = 0; j<art[i].length; j++) {
                    var pixel = art[i][j];
                    
                    if (art[i][j] !== ".") {
                    fill(palette[pixel]);
                    rect(j*pixSize, i*pixSize, pixSize+0.8, pixSize+0.8);
                    }
                }
            }
            popMatrix();
        };
        var createImg = function(img, size,reverse) {
            pushMatrix();
            background(0, 0, 0, 0);
            var sx = size*50;
            if(reverse){
                scale(-1,1);
                translate(-115,0);
            }
            imageGen(img, 0, 0, size, 10);
            popMatrix();
            return get(0, 0, sx, sx);
        };
        var images = {
            ryu: {
                ryu: createImg(fighters.ryu.normal,4,2),
                face: createImg(fighters.ryu.face,4,2),
            },
            chun_li: {
                idlel: createImg(fighters.chunli.normal,4,1),
                idler: createImg(fighters.chunli.normal,4),
                face: createImg(fighters.chunli.face,4),
                punchl: createImg(fighters.chunli.punch,4,1),
                punchr: createImg(fighters.chunli.punch,4),
                kickl: createImg(fighters.chunli.kick,4,1),
                kickr: createImg(fighters.chunli.kick,4),
            },
            infinity: createImg(infinity,3),
        };
        //] Pixel Art
        
        smooth();
        size(600,400,P2D);
        
        var time = 100;
        var time = time.toString();
        
        var drawTxt = function(txt, x, y, s){
            var bitmap = [];
            pushMatrix();
            translate(x, y);
            switch(txt){
                case 'A':bitmap = [' XXX ','X   X','X   X','XXXXX','X   X','X   X','X   X'];break;case 'B':bitmap = ['XXXX ','X   X','X   X','XXXX','X   X','X   X','XXXX'];break;case 'C':bitmap = ['  XXX',' X   ','X    ','X    ','X    ',' X   ','  XXX'];break;case 'D':bitmap = ['XXX  ','X  X ','X   X','X   X','X   X','X  X ','XXX  '];break;case 'E':bitmap = ['XXXXX','X    ','X    ','XXX  ','X    ','X    ','XXXXX'];break;case 'F':bitmap = ['XXXXX','X    ','X    ','XXX  ','X    ','X    ','X    '];break;case '':bitmap = ['     ','     ','     ','     ','     ','     ','     '];break;case 'G':bitmap = ['  XXX',' X   ','X    ','X  XX','X   X',' X  X','  XXX'];break;case 'H':bitmap = ['X   X','X   X','X   X','XXXXX','X   X','X   X','X   X'];break;case 'I':bitmap = ['XXXXX','  X  ','  X  ','  X  ','  X  ','  X  ','XXXXX'];break;case 'J':bitmap = ['XXXXX','  X  ','  X  ','  X  ','  X  ','X X  ',' X   '];break;case 'K':bitmap = ['X   X','X  X ','X X  ','XX   ','X XX ','X   X','X   X'];break;case 'L':bitmap = ['X    ','X    ','X    ','X    ','X    ','X    ','XXXXX'];break;case 'M':bitmap = [' X X ','X X X','X X X','X X X','X   X','X   X','X   X'];break;case 'N':bitmap = ['X   X','XX  X','X X X','X X X','X X X','X  XX','X   X'];break;case 'O':bitmap = [' XXX ','X   X','X   X','X   X','X   X','X   X',' XXX '];break;case 'P':bitmap = [' XXX ','X   X','X   X','XXXX ','X    ','X    ','X    '];break;case 'Q':bitmap = [' XXX ','X   X','X   X','X   X','X X X','X  XX',' XXX '];break;case 'R':bitmap = [' XXX ','X   X','X   X','XXXX ','X X  ','X  X ','X   X'];break;case 'S':bitmap = [' XXXX','X    ','X    ',' XXX ','    X','    X','XXXX'];break;case 'T':bitmap = ['XXXXX','  X  ','  X  ','  X  ','  X  ','  X  ','  X  '];break;case 'U':bitmap = ['X   X','X   X','X   X','X   X','X   X','X   X',' XXX '];break;case 'V':bitmap = ['X   X','X   X','X   X','X   X','X   X',' X X ','  X  '];break;case 'W':bitmap = ['X   X','X   X','X   X','X   X','X X X','X X X',' X X '];break;case 'X':bitmap = ['X   X','X   X',' X X ','  X  ',' X X ','X   X','X   X'];break;case 'Y':bitmap = ['X   X','X   X',' X X','  X  ','  X ','  X  ','  X  '];break;case 'Z':bitmap = ['XXXXX','    X','   X ','  X  ',' X   ','X    ','XXXXX'];break;case 'a':bitmap = ['     ','     ',' XXX ','X  X','X  X','X  X',' XXX '];break;case 'b':bitmap = ['X    ','X    ','X    ','X XX ','XX  X','X   X',' XXX '];break;case 'c':bitmap = ['     ','     ',' XXX ','X   X','X    ','X   X',' XXX '];break;case 'd':bitmap = ['    X','    X','    X',' XX X','X  XX','X   X',' XXX '];break;case 'e':bitmap = ['     ','     ',' XXX ','X   X','XXXX ','X    ',' XXXX'];break;case 'f':bitmap = [' XXX ','X   X','X    ','XXX  ','X    ','X    ','X '];break;case 'g':bitmap = ['     ','     ',' XXX ','X   X','X   X',' XXXX','    X','    X','X   X ',' XXX'];break;case 'h':bitmap = ['X    ','X    ','X XX ','XX  X','X   X','X   X','X   X'];break;case 'i':bitmap = ['     ','    ','  X ','    ','  X  ','  X  ','  X  '];break;case 'j':bitmap = ['     ','     ','   X','    ','   X','   X','   X' ,'   X','X  X',' XX '];break;case 'k':bitmap = ['X    ','X    ','X  X ','X X  ','XX    ','X X ','X  X'];break;case 'l':bitmap = ['  X  ','  X  ','  X  ','  X  ','  X  ','  X  ','  X  '];break;case 'm':bitmap = ['     ','     ',' X X ','X X X','X   X ','X   X','X   X'];break;case 'n':bitmap = ['     ','     ',' XXX ','X   X ','X   X ','X   X','X   X'];break;case 'o':bitmap = ['     ','     ',' XXX ','X   X','X   X ','X   X',' XXX'];break;case 'p':bitmap = ['     ','     ','XXXX ','X   X','XX  X','X XX ','X    ','X','X'];break;case 'q':bitmap = ['     ','     ',' XXXX','X   X','X  XX',' XX X','    X','    X','    X'];break;case 'r':bitmap = ['     ','     ',' XXX ','X   X','X    ','X   ','X'];break;case 's':bitmap = ['     ','     ',' XXXX','X    ',' XXX','    X','XXXX'];break;case 't':bitmap = ['  X  ','  X  ',' XXX ','  X  ','  X   ','  X  ','   X'];break;case 'u':bitmap = ['     ','     ','X   X','X   X','X   X ','X   X',' XXX'];break;case 'v':bitmap = ['     ','     ','X   X ','X   X','X   X ',' X X','  X '];break;case 'w':bitmap = ['     ','     ','X   X ','X   X','X   X ','X X X',' X X'];break;case 'x':bitmap = ['     ','     ','X   X',' X X ','  X   ',' X X ','X   X'];break;case 'y':bitmap = ['     ','     ','X   X ','X   X','X   X ','X   X',' XXXX','    X','X   X',' XXX'];break;case 'z':bitmap = ['     ','     ','XXXXX','   X ','  X   ',' X   ','XXXXX'];break;case '1':bitmap = [' XX  ','X X  ','  X  ','  X  ','  X  ','  X  ','XXXXX'];break;case '2':bitmap = [' XXX ','X   X','    X','   X ','  X  ',' X   ','XXXXX'];break;case '3':bitmap = [' XXX ','X   X','    X','  XX ','    X','X   X',' XXX '];break;case '4':bitmap = ['X  X ','X  X','X  X ','XXXXX ','   X ','   X ','   X '];break;case '5':bitmap = ['XXXXX','X    ','X    ','XXXX ','    X','    X','XXXX '];break;case '6':bitmap = [' XXX ','X   X','X    ','X XX ','XX  X','X   X',' XXX '];break;case '7':bitmap = ['XXXXX','    X','   X ','   X','  X ','  X ',' X'];break;case '8':bitmap = [' XXX ','X   X','X   X',' XXX ','X   X','X   X',' XXX '];break;case '9':bitmap = [' XXX ','X   X','X   X',' XXX ','    X','X   X',' XXX '];break;case '0':bitmap = [' XXX ','X   X','X  XX','X X X ','XX  X','X   X',' XXX '];break;case ',':bitmap = ['     ','     ','     ','     ','     ','  X  ','  X  ',' X '];break;case '.':bitmap = ['     ','     ','     ','     ','     ',' XX  ',' XX  '];break;case '/':bitmap = ['    X','    X ','   X ','  X  ',' X   ','X    ','X  '];break;case '?':bitmap = [' XXX ','X   X','   X ','  X  ','  X  ','     ','  X  '];break;case ':':bitmap = ['     ',' XX  ',' XX  ','     ',' XX  ',' XX  ','     '];break;case '\"':bitmap = [' X X ',' X X ','     ','     ','     ','     ','     '];break;case '\'':bitmap = ['  X  ','  X  ','     ','     ','     ','     ','     '];break;case '~':bitmap = ['     ','     ',' X   ','X X X ','   X ','     ','     '];break;case '!':bitmap = ['  X  ','  X  ','  X  ','  X   ','     ','     ','  X  '];break;case '@':bitmap = [' XXX ','X   X','X XXX','X X X','X XX ','x    ',' XXXX'];break;case '#':bitmap = ['  X X','  X X','XXXXX ',' X X ','XXXXX','X X  ','X X   '];break;case '$':bitmap = ['  X  ',' XXX ','X X  ',' XXX ','  X X',' XXX','  X '];break;case '%':bitmap = ['XX  X','XX  X ','   X ','  X  ',' X   ','X  XX','X  XX'];break;case '&':bitmap = [' XX  ','X  X ','X  X',' XX  ','X X X','X  X ',' XX X'];break;case '(':bitmap = ['  X  ',' X   ','X   ','X    ','X    ',' X   ','  X  '];break;case ')':bitmap = ['  X  ','   X ','    X','    X','    X','   X ','  X  '];break;case '-':bitmap = ['     ','     ','     ',' XXX ','     ','     ','     '];break;case '[':bitmap = ['XXX  ','X   ','X   ','X   ','X   ','X   ','XXX  '];break;case ']':bitmap = ['  XXX','    X','    x','    x','    x','    x','  xxX  '];break;case '\\':bitmap = ['X ','X    ',' X   ','  X  ','   X ','    x','    X  '];break;
                }
            for(var col = 0; col < bitmap.length; col++){
                for(var row = 0; row < bitmap[col].length; row++){
                    if(bitmap[col][row]!==' '){
                        noStroke();
                        rect((row*s), (col*s), s, s);
                    }
                }
            }
            popMatrix();
        };
        var pixelText = function(txt, x, y, s, align){
            var space = 0;
            var lineDis = 0;
            if(align==='center'){
                for(var i = 0; i < txt.length; i++){
                    var c = txt[i];
                    if(c!=='\n'){
                        drawTxt(c, (space + x) - ((s*6)*txt.length/2-i), lineDis+y, s);
                        space+=s*6;
                    }
                    if(c==='\n'){
                        lineDis+=s*9;
                        space = 0;
                    }
                }
            }
            else{
                for(var i = 0; i < txt.length; i++){
                    var c = txt[i];
                    if(c!=='\n'){
                        drawTxt(c, space+x, lineDis+y, s);
                        space+=s*6;
                    }
                    if(c==='\n'){
                        lineDis+=s*9;
                        space = 0;
                    }
                }
            }
        };
        
        var keys = {};
        keyPressed = function() {
              keys[keyCode] = keys[key.toString().toLowerCase()] = true;
            };
        keyReleased = function() { 
              delete keys[keyCode];
              delete keys[key.toString().toLowerCase()];
            };
        
        var p1;
        var p2;
        
        var rectcollide = function(obj1, obj2) {
            return(obj1.x + obj1.w > obj2.x && obj1.y + obj1.h > obj2.y && obj1.x < obj2.x + obj2.w && obj1.y < obj2.y + obj2.h);    
        };
        
        var player1 = function(x,y) {
        this.x = x;
        this.y = y;
        this.facing = 1;
        this.strength = 1;
        this.speed = 5;
        this.gravity = 0;
        this.pos = "idle";a

";
