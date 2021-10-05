var image1, image2, image3, image4, image5, image6;

var linkPrefix = "";
// init vars
var $container1 = $('#container1'),
	$container2 = $('#container2'),
	$container3 = $('#container3'),
	$container4 = $('#container4'),
	$container5 = $('#container5'),
	$container6 = $('#container6'),
    	$container7 = $('#container7');
/*sampleButtons = function()
{
	var exampleButtons = $(".main_button_container button");
	exampleButtons.on("click", function() {
		
		
		
		if($(this).text() ==="Bottle")
		{
			initParameters();
			
			//newBottle
			//alphaR = 0;
			//FGshiftX = -0.11;
			//FGshiftY = -0.0;
			//FGscaleX = 0.6;
			//FGscaleY = 0.67;
			//FGdis = 0.22;
			//mouseXY[0] = [0.34, -0.0746];
			//fresnelB = 0.3;
			//fresnelC = 0.53;
			//logIOR = 0.27;
			image1.src = "images/newBottle/diffuse.png"; //dark
			image2.src = "images/newBottle/diffuse_bright.png"; //bright
			image3.src = "images/newBottle/shape.png"; //shape map
			image4.src = "images/newBottle/reflect.jpg";  //reflection
			image5.src = "images/newBottle/bg.png";//refraction
			image6.src = "images/newBottle/alpha.png";
		}

		if($(this).text() ==="JarTable")
		{
			initParameters();
			
			//Escher/eye
			alphaR = 1;
			FGshiftX = -0.11;
			FGshiftY = -0.0;
			FGscaleX = 0.6;
			FGscaleY = 0.67;
			FGdis = 0.22;
			mouseXY[0] = [0.34, -0.0746];
			//fresnelIntensity = 1;
			image1.src = "images/Links/dark.png"; //dark
			image2.src = "images/Links/bright.png"; //bright
			image3.src = "images/Links/shape.png"; //shape map
			image4.src = "images/reflmap.png";  //reflection
			image5.src = "images/himlaya.png";//refraction
			image6.src = "images/Links/alpha.png";

		}

		if($(this).text() ==="EscherSphere")
		{
			initParameters();
			
			//Escher/handWithSphere

			
			//reflectIntensity = 1.0;
			fresnelIntensity = 1.0;
    
			alphaR = 1;
			FGshiftX = -0.11;
			FGshiftY = -0.0;
			FGscaleX = 0.6;
			FGscaleY = 0.67;
			FGdis = 0.81;
			mouseXY[0] = [0.34, -0.0746];
			image1.src = "images/Escher/handWithSphere/dark.jpg"; //dark
			image2.src = "images/Escher/handWithSphere/bright.jpg"; //bright
			image3.src = "images/Escher/handWithSphere/shape.png"; //shape map
			image4.src = "images/Escher/handWithSphere/reflect2.jpg";  //reflection
			image5.src = "images/purprefl.png";//refraction
			image6.src = "images/Escher/handWithSphere/alpha2.png";
		}

		if($(this).text() ==="Fence")
		{
			initParameters();
			
			//underWater
			alphaR = 1;
			FGshiftX = -0.11;
			FGshiftY = -0.0;
			FGscaleX = 0.6;
			FGscaleY = 0.67;
			FGdis = 0.22;
			mouseXY[0] = [0.34, -0.0746];
			//fresnelIntensity = 1;
			image1.src = "images/Fence/dark.png"; //dark
			image2.src = "images/Fence/bright.png"; //bright
			image3.src = "images/Fence/shape.png"; //shape map
			image4.src = "images/reflmap.png";  //reflection
			image5.src = "images/himlaya.png";//refraction
			image6.src = "images/Fence/alpha.png";

		}
		/*if($(this).text() ==="Jar")
		{
			//initParameters();
			
			//underWater
			alphaR = 1;
			FGshiftX = -0.11;
			FGshiftY = -0.0;
			FGscaleX = 0.6;
			FGscaleY = 0.67;
			FGdis = 0.22;
			mouseXY[0] = [0.34, -0.0746];
			//fresnelIntensity = 1;
			image1.src = "images/Jar/dark.png"; //dark
			image2.src = "images/Jar/bright.png"; //bright
			image3.src = "images/Jar/shape.png"; //shape map
			image4.src = "images/Eye/1eye_foreground.png";  //reflection
			image5.src = "images/himlaya.png";//refraction
			image6.src = "images/Jar/alpha.png;

		}*/
		
		/*$("#container1image").append(image1);
		$("#container2image").append(image2);
		$("#container3image").append(image3);
		$("#container4image").append(image4);
		$("#container5image").append(image5);
		$("#container6image").append(image6);
		//$("#container7image").empty().append(image7);
		//$("#container8image").empty().append(image8);
		//$("#container9image").empty().append(image9);

		


    	//set thumb image size
		setThumbImgSize(image3);

		//update gl-canvas width and height
		updateCanvasSizeandStyle(image3);

		normalImage.src = image3.src;
    		lightImage.src = image2.src;
    		darkImage.src = image1.src;
    		refractImage.src = image5.src;
    		reflectImage.src = image4.src;
    		alphaImage.src = image6.src;
		//heightFieldImage.src = linkPrefix + image7.src;
		//envLightImage.src = linkPrefix + image8.src;
		//maskImage.src = linkPrefix + image9.src;
		
    	
    	 
    });

}*/




		


UPLOADinit = function()
{
	/******************* Initial Maps *********************/	

	image1 = new Image();
	image2 = new Image();
	image3 = new Image();
	image4 = new Image();
	image5 = new Image();	
	image6 = new Image();	
	
	initParameters();

	//Holmer only
	// image3.src = "images/Holmer/Holmer_shape.png"; //shape map
	// image1.src = "images/Holmer/Holmer_dark.png"; //dark
	// image2.src = "images/Holmer/Holmer_bright.png"; //bright
	// image4.src = "images/reflect_window2.png";//reflection
	// //image5.src = "images/dark.png";  //refraction
	// image5.src = "images/checker.jpg";//refraction
	// image6.src = "images/Holmer/Holmer_new_alphaControl.png";

	

	//Sphere for fresnel
		// alphaR = 0;
		// reflMap = 1;
		// fresnelB = 0.36;
		// fresnelC = 0.73;
		// image1.src = "images/dark.png"//dark
		// image2.src = "images/white.png"//bright
		// image3.src = "images/sphere.png";  //shape
		// image4.src = "images/trees.jpg";  //reflection
		// image6.src = "images/white.png"; //alpha
		// image5.src = "images/checker2.png";  //refraction	

	//newBottle for Fresnel
		// alphaR = 0;
		// reflMap = 1;
		// logIOR = 0.1;
		// mouseXY[0] = [0.32, -0.06];
		// fresnelB = 0.36;
		// fresnelC = 0.73;
		// FGshiftX = 0.1;
		// FGshiftY = -0.05;
		// FGscaleX = 0.92;
		// FGscaleY = 0.67;
		// FGdis = 0.27;
		// image1.src = "images/dark.png"//dark
		// image2.src = "images/white.png"//bright
		// //image3.src = "images/sphere.png";  //shape
		// image4.src = "images/indoor.jpg";  //reflection
		// image6.src = "images/white.png"; //alpha
		// image5.src = "images/checker2.png";  //refraction	
		// image3.src = "images/newBottleForFresnel.png"; //shape map
	

	//sphere for test
	// image1.src = "images/dark.png"//dark
	// image2.src = "images/white.png"//bright
	// image3.src = "images/sphere.png";  //shape
	// image4.src = "images/trees.png";  //reflection
	// //image4.src = "images/bg_artMuseum.jpg";  //reflection
	// //image4.src = "images/reflect_window2.png";//reflection
	// image6.src = "images/white.png"; //alpha

	// image5.src = "images/checker.jpg";//refraction
	// image5.src = "images/light.png";  //refraction


	

	//Holmer with bubble
	// image3.src = "images/Holmer/Holmer_new_shape.png"; //shape map
	// image1.src = "images/Holmer/Holmer_new_dark.png"; //dark
	// image2.src = "images/Holmer/Holmer_new_bright.png"; //bright
	// image4.src = "images/reflect_window2.png";//reflection
	// image5.src = "images/checker.jpg";  //refraction
	// image6.src = "images/Holmer/Holmer_new_alphaControl.png";
	 

	
	//Picasso

	// alphaR = 1;
	// image1.src = "images/Picasso/dark.jpg"; //dark
	// image2.src = "images/Picasso/bright.jpg"; //bright
	// image3.src = "images/Picasso/shape.png"; //shape map
	// image4.src = "images/dark.png";  //reflection
	// image5.src = "images/Picasso/original.jpg";  //refraction	
	// image6.src = "images/white.png"; //alpha


	


	

	//for fresnel test - newBottle
	// image1.src = "images/dark.png"; //dark
	// image2.src = "images/light.png"; //bright
	// image3.src = "images/newBottleForFresnel.png"; //shape map
	// image4.src = "images/white.png";  //reflection
	// image6.src = "images/white.png"; //alpha
	// image5.src = "images/checker2.png";//refraction
	

	//Escher/eye
	// alphaR = 1;
	// image1.src = "images/Escher/eye/dark.jpg"; //dark
	// image2.src = "images/Escher/eye/bright.jpg"; //bright
	// image3.src = "images/Escher/eye/shape.png"; //shape map
	// image4.src = "images/Escher/eye/reflect.png";  //reflection
	// image5.src = "images/checker.jpg";//refraction
	// image6.src = "images/Escher/eye/alphaControl.jpg";

	//Escher/handWithSphere

	// alphaR = 1;

	// alphaR = 0;
	// reflectIntensity = 1;
	// FGshiftX = -0.09;
	// FGshiftY = 0.08;
	// FGscaleX = 0.8;
	// FGscaleY = 0.52;
	// reflMap =1;
	// FGdis = 0.11;
	// image1.src = "images/Escher/handWithSphere/dark.jpg"; //dark
	// image2.src = "images/Escher/handWithSphere/bright.jpg"; //bright
	// image3.src = "images/Escher/handWithSphere/shape.png"; //shape map
	// image4.src = "images/Escher/handWithSphere/reflect2.jpg";  //reflection
	// image5.src = "images/checker.jpg";//refraction
	// image6.src = "images/Escher/handWithSphere/alphaControl.png";

	//newBottle
	alphaR = 1;
	//FGshiftX = -0.11;
	//FGshiftY = -0.0;
	//FGscaleX = 0.6;
	//FGscaleY = 0.67;
	//FGdis = 0.81;
	mouseXY[0] = [0.34, -0.0746];
	image1.src = "images/Escher/handWithSphere/dark.jpg"; //dark
	image2.src = "images/Escher/handWithSphere/bright.jpg"; //bright
	image3.src = "images/Escher/handWithSphere/shape.png"; //shape map
	image4.src = "images/Escher/handWithSphere/reflect2.jpg";  //reflection
	image5.src = "images/himlaya.png";//refraction
	image6.src = "images/Escher/handWithSphere/alpha.png";



	//underWater
	// alphaR = 0;
	// image1.src = "images/underWater/dark.jpg"; //dark
	// image2.src = "images/underWater/bright.jpg"; //bright
	// image3.src = "images/underWater/shape.jpg"; //shape map
	// image4.src = "images/white.png";  //reflection
	// image5.src = "images/underWater/BG.jpg";//refraction
	// image6.src = "images/underWater/alphaControl.jpg";


	//poly_girl
	// image1.src = "images/dark.png"; //dark
	// image2.src = "images/white.png"; //bright
	// image3.src = "images/polyGirl/original.jpg"; //shape map
	// image4.src = "images/dark.png";  //reflection
	// image5.src = "images/dark.png";  //refraction	
	// image6.src = "images/white.png"; //alpha


	//poly_fragFace
	// image1.src = "images/poly_fragFace/noise.jpg"; //dark
	// image2.src = "images/poly_fragFace/dot.jpg"; //bright
	// image3.src = "images/poly_fragFace/shape.jpg"; //shape map
	// image4.src = "images/dark.png";  //reflection
	// image5.src = "images/poly_fragFace/bg.jpg";  //refraction	
	// image6.src = "images/poly_fragFace/alpha.jpg"; //alpha
	
	//impossible_triangle
	// alphaR = 1;
	// image1.src = "images/impossible_triangle/dark.png"; //dark
	// image2.src = "images/impossible_triangle/bright.png"; //bright
	// image3.src = "images/impossible_triangle/shape.png"; //shape map
	// image4.src = "images/dark.png";  //reflection
	// image5.src = "images/dark.png";  //refraction	
	// image6.src = "images/white.png"; //alpha

	//impossible_stair
	// alphaR = 1;
	// image1.src = "images/impossible_stair/dark.png"; //dark
	// image2.src = "images/impossible_stair/bright.png"; //bright
	// image3.src = "images/impossible_stair/shape.png"; //shape map
	// image4.src = "images/dark.png";  //reflection
	// image5.src = "images/dark.png";  //refraction	
	// image6.src = "images/white.png"; //alpha

	//impossible_gradient
	// alphaR = 1;
	// image1.src = "images/dark.png"; //dark
	// image2.src = "images/white.png"; //bright
	// image3.src = "images/impossible_gradient/shape.png"; //shape map
	// image4.src = "images/dark.png";  //reflection
	// image5.src = "images/dark.png";  //refraction	
	// image6.src = "images/white.png"; //alpha























	//for fresnel test - cylinder
	// alphaR = 0;
	// logIOR = 1;
	// image1.src = "images/dark.png"; //dark
	// image2.src = "images/light.png"; //bright
	// image3.src = "images/cylinder.png"; //shape map
	// image4.src = "images/trees.png";  //reflection
	// image6.src = "images/white.png"; //alpha
	
	// image5.src = "images/dark.png";  //refraction	




	//eye
	// image1.src = "images/Eye/eye_dark.jpg"; //dark
	// image2.src = "images/Eye/eye_bright.jpg"; //bright
	
	// image3.src = "images/Eye/eye_shape_smooth.png"; //shape map
	// image4.src = "images/Eye/eye_foreground.png";  //reflection
	// image5.src = "images/checker.jpg";//refraction
	// image6.src = "images/eye/eye_alpha.jpg";
	




	// image1.src = "images/dark.png"; //dark
	// image2.src = "images/light.png"; //bright
	// image3.src = "images/bottle/shape.png"; //shape map
	// //image4.src = "images/stripe_s.jpg";  //reflection
	// image4.src = "images/reflect_red.png";  //reflection
	
	// image5.src = "images/checker.jpg";//refraction
	// image6.src = "images/white.png";

	//image2.src = "images/light.png"; //bright
	
	

	//image1.src = "images/dark_(alpha50).png"; //dark
	//image2.src = "images/light_(alpha50).png"; //bright
	


	//image3.src = "images/normal.png"; //shape map
	

	

	
	
	
	//for responsive display
	// image1.src = "images/solid.png";
	// image2.src = "images/solid.png";
	// image3.src = "images/solid.png";
	// image4.src = "images/solid.png";
	// image5.src = "images/solid.png";
	// image6.src = "images/solid.png";
	
	

	//image1.src = "images/Holmer/Holmer_dark.png"; //dark
	//image2.src = "images/Holmer/Holmer_bright.png"; //bright
	//image3.src = "images/Holmer/Holmer_shape.png"; //shape map
	

	//image4.src = "images/reflect_red.png";//reflection
	//image4.src = "images/dark.png";
	
	//image5.src = "images/dark.png";  //refraction
	//image5.src = "images/white.png";

	
	

	//image1.src = "images/bottle/dark.png"//dark
	//image2.src = "images/bottle/bright.png"//bright
	//image3.src = "images/bottle/shape.png"
	//image5.src = "images/bottle/bg.png"
	//image6.src = "images/eye/eye_alpha.jpg";
	


		
	//image6.src = "images/Holmer/Holmer_alphaControl.jpg";  //refraction
		

	//load default images in thumb
	
	initDefaultThumbImgSize(image1);
	initDefaultThumbImgSize(image2);
	initDefaultThumbImgSize(image3);
	initDefaultThumbImgSize(image4);
	initDefaultThumbImgSize(image5);
	initDefaultThumbImgSize(image6);

	initDefaultCanvasSize(image3);//canvas size based on Normal map
	
	$("#container1image").append(image1);
	$("#container2image").append(image2);
	$("#container3image").append(image3);
	$("#container4image").append(image4);
	$("#container5image").append(image5);
	$("#container6image").append(image6);
	//$("#container7image").append(image3);
		

	//key function
	addEventListeners();
}

function initDefaultThumbImgSize(_image){
	_image.addEventListener('load', function() {
		//set thumb image size
		setThumbImgSize(_image);
	});
	
}

function initDefaultCanvasSize(_image){
	_image.addEventListener('load', function() {
		//update gl-canvas width and height
		updateCanvasSizeandStyle(_image);
	});
	
}

function addEventListeners()
{
	// container1 DnD event
	var container1 = $container1[0];
	container1.addEventListener('dragover', cancel, false);
	container1.addEventListener('dragenter', cancel, false);
	container1.addEventListener('dragexit', cancel, false);
	container1.addEventListener('drop', dropFile, false);

	var container2 = $container2[0];
	container2.addEventListener('dragover', cancel, false);
	container2.addEventListener('dragenter', cancel, false);
	container2.addEventListener('dragexit', cancel, false);
	container2.addEventListener('drop', dropFile, false);
	
	var container3 = $container3[0];
	container3.addEventListener('dragover', cancel, false);
	container3.addEventListener('dragenter', cancel, false);
	container3.addEventListener('dragexit', cancel, false);
	container3.addEventListener('drop', dropFile, false);

	var container4 = $container4[0];
	container4.addEventListener('dragover', cancel, false);
	container4.addEventListener('dragenter', cancel, false);
	container4.addEventListener('dragexit', cancel, false);
	container4.addEventListener('drop', dropFile, false);

	var container5 = $container5[0];
	container5.addEventListener('dragover', cancel, false);
	container5.addEventListener('dragenter', cancel, false);
	container5.addEventListener('dragexit', cancel, false);
	container5.addEventListener('drop', dropFile, false);

	var container6 = $container6[0];
	container6.addEventListener('dragover', cancel, false);
	container6.addEventListener('dragenter', cancel, false);
	container6.addEventListener('dragexit', cancel, false);
	container6.addEventListener('drop', dropFile, false);
	
	var container7 = $container7[0];
	container6.addEventListener('dragover', cancel, false);
	container6.addEventListener('dragenter', cancel, false);
	container6.addEventListener('dragexit', cancel, false);
	container6.addEventListener('drop', dropFile, false);
}


/*
 * Handles when a file is dropped by
 * the user onto the container1
 */
function dropFile(event)
{
	var eventCaller = event.target.parentNode.parentNode.id;
		//from ".btn-file input" to ".btn-file" to "imgThumb_container", result is "#container1 2 3 4 5"
	//alert(event);

	// stop the browser doing
	// it's normal thing of going
	// to the item
	event.stopPropagation();
	event.preventDefault();
	
	// query what was dropped
	var files = event.dataTransfer.files;
	
	// if we have something
	if(files.length) {
		handleDropFile(files[0], eventCaller);
	}
	
	return false;
}

/**
 * Handles the uploaded file (drop file and selected file)
 */
function handleDropFile(file, eventCaller)
{
	var fileReader 			= new FileReader();
	//fileReader.onloadend	= fileUploaded;
	fileReader.onloadend = function(event) {
		if(event.target.result.match(/^data:image/))
		{
			return fileUploaded.call(this, event, eventCaller);
		}else{
			// time to whinge
			alert("Umm, images only? ... Yeah");
		}
	}
	fileReader.readAsDataURL(file);
}

/************* Selected file to upload (not drag and drop) -start**************/
//load selected file to container
function handleSelectedFile(fileSelected, container)
{
	var fileToLoad = fileSelected[0];
     if (fileToLoad.type.match("image.*"))
     {
         var fileReader = new FileReader();
         fileReader.onload = function(event) 
         {
             return fileUploaded.call(this, event, container);
         };
     }else{
		alert("Umm, images only? ... Yeah");
	}
	fileReader.readAsDataURL(fileToLoad);
}
/************* Selected file to upload (not drag and drop) - end **************/


/**
 * File upload handled
 */
function fileUploaded(event, elemName)
{
	var image;
	var $container = $('#' + elemName);
	
	// check it's an image
	
	$container.addClass('live');
	
	if(elemName === "container1")
	{
		image1 = new Image();
		image1.src 	= event.target.result;
		image = image1;

		//set thumb image size
		setThumbImgSize(image1);
		
		// Update WebGL texture.
		darkImage.src = image1.src;
	}
	else if(elemName === "container2")
	{
		image2 = new Image();
		image2.src 	= event.target.result;
		image = image2;
		
		//set thumb image size
		setThumbImgSize(image2);

		// Update WebGL texture.
		lightImage.src = image2.src;
	}
	else if(elemName === "container3")
	{
		image3 = new Image();
		image3.src 	= event.target.result;
		image = image3;

		//set thumb image size
		setThumbImgSize(image3);
		//update gl-canvas width and height
		//updateCanvasSizeandStyle(image3);
		updateCanvasSizeandStyle(image3);
		
		// Update WebGL texture.
		normalImage.src = image3.src;
		//updateCanvasSizeandStyle(image3);

	}
	else if(elemName === "container4")
	{
		image4 = new Image();
		image4.src 	= event.target.result;
		image = image4;

		//set thumb image size
		setThumbImgSize(image4);

		// Update WebGL texture.
		reflectImage.src = image4.src;
	}
	else if(elemName === "container5")
	{
		image5 = new Image();
		image5.src 	= event.target.result;
		image = image5;

		//set thumb image size
		setThumbImgSize(image5);

		// Update WebGL texture.
		refractImage.src = image5.src;

 
	}
	else if(elemName === "container6")
	{
		image6 = new Image();
		image6.src 	= event.target.result;
		image = image6;

		//set thumb image size
		setThumbImgSize(image6);

		// Update WebGL texture.
		alphaImage.src = image6.src;
	}
	else if(elemName === "container7")
	{
		//image3 = new Image();
		//image3.src 	= event.target.result;
		//image = image3;

		//set thumb image size
		//setThumbImgSize(image3);
		//updateCanvasSizeandStyle(image3);

		// Update WebGL texture.
		SizeImage.src = image3.src;
	}
	
	// create the image object
	imageManip(elemName, image);
	
}


function cancel(event)
{
	if(event.preventDefault)
		event.preventDefault();
	
	return false;
}

function imageManip(elemName, image)
{
	$('#' + elemName + 'image').empty();
	$('#' + elemName + 'image').append(image);
}

function setThumbImgSize(_image)
{
	_image.style.width = "auto";
	_image.style.height = "auto";
	
	if(_image.width>=_image.height){
		_image.style.width = "100px";
	}else{
		_image.style.height = "100px";
	}
}


function updateCanvasSizeandStyle(_image)
{
	var canvas = document.getElementById("gl-canvas");
	var canvasContainer = $('.canvas_container');
	var ratioImage = _image.width / _image.height;
	var ratioContainer = canvasContainer.width() / canvasContainer.height();
	
	var lightPostionContainer = $('#lightPosition_container');
	
	if(ratioImage>=ratioContainer){
		canvas.width = canvasContainer.width();
		canvas.height = canvas.width * _image.height / _image.width;
		canvas.style.width = "100%";
		canvas.style.height = "auto";
		$(lightPostionContainer).css("width", "100%");
		$(lightPostionContainer).css("height", "auto");
		
		
	}else{
		canvas.height = canvasContainer.height() ;
		canvas.width = canvas.height * _image.width / _image.height;
		canvas.style.height = "100%";
		canvas.style.width = "auto";
		$(lightPostionContainer).css("height", "100%");
		$(lightPostionContainer).css("width", "auto");
		
	}
	
	$(lightPostionContainer).attr("width", canvas.width) ;
	$(lightPostionContainer).attr("height", canvas.height);
	var viewbox = "0 0 " + canvas.width + " " + canvas.height;
	$(lightPostionContainer).attr("viewBox", viewbox);
	
	gl = WebGLUtils.setupWebGL( canvas );
 	gl.viewport( 0, 0, canvas.width, canvas.height );
 	gl.clearColor( 0.05, 0.05, 0.05, 1.0 );

}




/************* Selected file to upload (not drag and drop) set listener**************/
/************* and drag and drop UPLOADinit **************/


//hover image with image name label show up
$(document).on('change', '.btn-file :file', function() {
  	var input = $(this);
  	var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
 	input.trigger('fileselect', [label]);
});

$(document).ready( function() {

	UPLOADinit();
	//sampleButtons();

    $('.btn-file :file').on('fileselect', function(event) {
    	var elemName = event.target.id;
    	var containerName = event.target.parentNode.parentNode.id;
		var filesSelected = document.getElementById(elemName).files;
		handleSelectedFile(filesSelected, containerName);
    });
});
