document.write("<!DOCTYPE html>\n<!--\n\tNOTES:\n\t1. All tokens are represented by '$' sign in the template.\n\t2. You can write your code only wherever mentioned.\n\t3. All occurrences of existing tokens will be replaced by their appropriate values.\n\t4. Blank lines will be removed automatically.\n\t5. Remove unnecessary comments before creating your template.\n-->\n<html>\n<head>\n<script>\n    document.write('<script src=\"'+ (window.API_URL || 'https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js?bv='+ Math.random()) +'\"><\\/script>');\n</script>\n<meta charset=\"UTF-8\">\n<meta name=\"authoring-tool\" content=\"Adobe_Animate_CC\">\n<title>index</title>\n<!-- write your code here -->\n<style>\n  #animation_container {\n\tposition:absolute;\n\tmargin:auto;\n\tleft:0;right:0;\n\ttop:0;bottom:0;\n  }\n</style>\n<script src=\"https://code.createjs.com/createjs-2015.11.26.min.js\"></script>\n<script src=\"index.js\"></script>\n<script>\nvar canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;\nfunction init() {\n\tcanvas = document.getElementById(\"canvas\");\n\tanim_container = document.getElementById(\"animation_container\");\n\tdom_overlay_container = document.getElementById(\"dom_overlay_container\");\n\tvar comp=AdobeAn.getComposition(\"74C11B18F33A48F9905187298DB96078\");\n\tvar lib=comp.getLibrary();\n\tvar loader = new createjs.LoadQueue(false);\n\tloader.addEventListener(\"fileload\", function(evt){handleFileLoad(evt,comp)});\n\tloader.addEventListener(\"complete\", function(evt){handleComplete(evt,comp)});\n\tvar lib=comp.getLibrary();\n\tloader.loadManifest(lib.properties.manifest);\n}\nfunction handleFileLoad(evt, comp) {\n\tvar images=comp.getImages();\t\n\tif (evt && (evt.item.type == \"image\")) { images[evt.item.id] = evt.result; }\t\n}\nfunction handleComplete(evt,comp) {\n\t//This function is always called, irrespective of the content. You can use the variable \"stage\" after it is created in token create_stage.\n\tvar lib=comp.getLibrary();\n\tvar ss=comp.getSpriteSheet();\n\tvar queue = evt.target;\n\tvar ssMetadata = lib.ssMetadata;\n\tfor(i=0; i<ssMetadata.length; i++) {\n\t\tss[ssMetadata[i].name] = new createjs.SpriteSheet( {\"images\": [queue.getResult(ssMetadata[i].name)], \"frames\": ssMetadata[i].frames} )\n\t}\n\texportRoot = new lib._200x200();\n\tstage = new lib.Stage(canvas);\t\n\t//Registers the \"tick\" event listener.\n\tfnStartAnimation = function() {\n\t\tstage.addChild(exportRoot);\n\t\tcreatejs.Ticker.setFPS(lib.properties.fps);\n\t\tcreatejs.Ticker.addEventListener(\"tick\", stage);\n\t}\t    \n\t//Code to support hidpi screens and responsive scaling.\n\tAdobeAn.makeResponsive(false,'both',false,2,[canvas,anim_container,dom_overlay_container]);\t\n\tAdobeAn.compositionLoaded(lib.properties.id);\n\tfnStartAnimation();\n}\n</script>\n<!-- write your code here -->\n</head>\n<body onload=\"init();\" style=\"margin:0px;\">\n\t<div class=\"click-layer\" id=\"clickLayer\">\n    <div id=\"animation_container\" style=\"background-color:rgba(255, 255, 255, 1.00); width:200px; height:200px\">\n\t\t<canvas id=\"canvas\" width=\"200\" height=\"200\" style=\"position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);\"></canvas>\n\t\t<div id=\"dom_overlay_container\" style=\"pointer-events:none; overflow:hidden; width:200px; height:200px; position: absolute; left: 0px; top: 0px; display: block;\">\n\t\t</div>\n\t</div>\n    </div>\n<script>\n var clickArea = document.getElementById('clickLayer');\n clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');\n landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');\n clickArea.onclick = function() {\n window.open(clickTAGvalue,landingpagetarget);\n }\n</script>\n</body>\n</html>");