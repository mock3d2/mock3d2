
$(document).ready(function () {

    
    /**************** init checkbox according to default parameters ******************/
    
    var lightsOnlyElem = $('#lightsOnlySelect');
    initCheckbox(lightsOnly, lightsOnlyElem);

    var lightsPositionElem = $('#lightsPositionSelect');
    initCheckbox(lightsPosition, lightsPositionElem);

    var checkFresnelElem = $('#checkFresnelSelect');
    initCheckbox(checkFresnel, checkFresnelElem);
    

    if (lightsPosition ==1)
    {
        $('#lightPosition_container').css("display", "block");
    }else{
        $('#lightPosition_container').css("display", "none");
    }
    
    
    /**********************offcanvas.js********************/
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
      
      
    /**********************SliderBar********************************/
    
    /**Basic Image**/
    $("#styleControl_slider").slider({ min: 0, max: 1, value: [styleBright, styleDark], step: 0.01, focus: true });
    $("#styleControl_slider").on("slide", function(slideEvt) {
    	styleBright = slideEvt.value[0];
    	styleDark = slideEvt.value[1];
    });


    /**Alpha**/

    var alphaInRed_slider = $("#alphaInRed_slider");
    var alphaInRed_val = $("#alphaInRed_val");
    alphaInRed_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", alphaR).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (alphaInRed_slider, alphaInRed_val, "alphaR");

    var alphaInGreen_slider = $("#alphaInGreen_slider");
    var alphaInGreen_val = $("#alphaInGreen_val");
    alphaInGreen_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", alphaG).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (alphaInGreen_slider, alphaInGreen_val, "alphaG");

    var alphaInBlue_slider = $("#alphaInBlue_slider");
    var alphaInBlue_val = $("#alphaInBlue_val");
    alphaInBlue_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", alphaB).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (alphaInBlue_slider, alphaInBlue_val, "alphaB");


    /**Shadow**/
    $("#sha_sampleSize_slider").slider({min: 0, max: 1, value: 1, step: 0.01, focus: true});
    $("#sha_numberOfSample_slider").slider({min: 0, max: 1, value: 1, step: 0.01, focus: true});
    
    
    /**Ambient**/
    $("#amb_sampleSize_slider").slider({min: 0, max: 1, value: 1, step: 0.01, focus: true});
    $("#amb_numberOfSample_slider").slider({min: 0, max: 1, value: 1, step: 0.01, focus: true});


    /**Refraction**/
    
    var refr_slider = $("#refraction_slider");
    var refr_val = $("#refraction_val");
    refr_slider.attr("data-slider-min",-1).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", logIOR).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (refr_slider, refr_val, "logIOR");

    var refr_BGdis_slider = $("#refr_BGdis_slider");
    var refr_BGdis_val = $("#refr_BGdis_val");
    refr_BGdis_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", BGdis).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (refr_BGdis_slider, refr_BGdis_val, "BGdis");



    /**Fresnel**/

    var fresnel_intensity_slider = $("#fresnel_intensity_slider");
    var fresnel_intensity_val = $("#fresnel_intensity_val");
    fresnel_intensity_slider.attr("data-slider-min", -1).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", fresnelIntensity).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (fresnel_intensity_slider, fresnel_intensity_val, "fresnelIntensity");

    $("#fresnelControl_slider").slider({ min: 0, max: 1, value: [fresnelB, fresnelC], step: 0.01, focus: true });
    $("#fresnelControl_slider").on("slide", function(slideEvt) {
        fresnelB = slideEvt.value[0];
        fresnelC = slideEvt.value[1];
    });


    //$("#translucency_slider").slider({min: 0, max: 1, value: 1, step: 0.01, focus: true});
    
    /**Reflection**/
    
    //reflMap dropdown
    //init
    var way;
    if (reflMap == 1)
    {
        way = 'Plane ';
    }else if (reflMap == 2)
    {
        way = 'Hemisphere ';
    }
    var mystring = way + '<span class=\"caret\"></span>';
    $("#reflMap .btn").html(mystring);
    
        
    

    //events
    $("#reflMap").on("hide.bs.dropdown", function(){
        $("#reflMap .caret").removeClass("caret-up");
    });
    $("#reflMap").on("show.bs.dropdown", function(){
        $("#reflMap .caret").addClass("caret-up");
    });

    $("#reflMap_plane").click(function(){
        $("#reflMap .btn").html('Plane <span class="caret"></span>');
        reflMap = 1;
    })
    $("#reflMap_hemisphere").click(function(){
        $("#reflMap .btn").html('Hemisphere <span class="caret"></span>');
        reflMap = 2;
    })


    // $("#reflMap .btn").html('Hemisphere <span class="caret caret-up"></span>');


    var refl_FGdis_slider = $("#refl_FGdis_slider");
    var refl_FGdis_val = $("#refl_FGdis_val");
    refl_FGdis_slider.attr("data-slider-min", 0).attr("data-slider-max", 5).attr("data-slider-step", 0.01).attr("data-slider-value", FGdis).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (refl_FGdis_slider, refl_FGdis_val, "FGdis");


    var refl_FGshiftX_slider = $("#refl_FGshiftX_slider");
    var refl_FGshiftX_val = $("#refl_FGshiftX_val");
    refl_FGshiftX_slider.attr("data-slider-min", -1).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", FGshiftX).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (refl_FGshiftX_slider, refl_FGshiftX_val, "FGshiftX");

    var refl_FGshiftY_slider = $("#refl_FGshiftY_slider");
    var refl_FGshiftY_val = $("#refl_FGshiftY_val");
    refl_FGshiftY_slider.attr("data-slider-min", -1).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", FGshiftY).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (refl_FGshiftY_slider, refl_FGshiftY_val, "FGshiftY");

    var refl_FGscaleX_slider = $("#refl_FGscaleX_slider");
    var refl_FGscaleX_val = $("#refl_FGscaleX_val");
    refl_FGscaleX_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", FGscaleX).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (refl_FGscaleX_slider, refl_FGscaleX_val, "FGscaleX");

    var refl_FGscaleY_slider = $("#refl_FGscaleY_slider");
    var refl_FGscaleY_val = $("#refl_FGscaleY_val");
    refl_FGscaleY_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", FGscaleY).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParam (refl_FGscaleY_slider, refl_FGscaleY_val, "FGscaleY");


    $("#bluriness_slider").slider({min: 0, max: 1, value: 1, step: 0.01, focus: true});
    
    
    
    
    /*Quality**/
    $("#smQuality_slider").slider({min: 0, max: 1, value: 1, step: 0.01, focus: true});
    
    
     //collapse list +/- toggle	
    /*
     $(".myControlTitle collapsed").on("hide.bs.collapse", function(){
        $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Open');
      });
      $("#demo").on("show.bs.collapse", function(){
        $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Close');
    */	 

  
});//end of $(document).ready



////////////////functions/////////////

function setupLightFunctions(i)
{
    /////switch multiple lights - light on events
    var lightPanelName = '#lightPanel' + i;
    $(lightPanelName).on('shown.bs.collapse', function(){
        currentLight = i;
        console.log("current: " + currentLight);
    }).on('hidden.bs.collapse', function(){
        currentLight = null;
    })

    /////init checkbox

    //lightOn
  
    
    //////slider events

    //lightIntensity
    

    //pointLightDis
    

    //pointLightDecay
    
    var sliderName_highlightB = "#lightPanel" + i + "#highlightB_slider";
    var textareaName_highlightB = "#lightPanel" + i + " #highlightB_val";
    var highlightB_slider = $("#highlightB_slider");
    var highlightB_val = $("#highlightB_val");
    highlightB_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", highlightB[i]).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParamIndex (highlightB_slider, highlightB_val, "highlightB", i);
	
	
    var sliderName_highlightA = "#lightPanel" + i + "#highlightA_slider";
    var textareaName_highlightA = "#lightPanel" + i + " #highlightA_val";
    var highlightA_slider = $(sliderName_highlightA);
    var highlightA_val = $(textareaName_highlightA);
    highlightA_slider.attr("data-slider-min", 0).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", highlightA[i]).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParamIndex (highlightA_slider, highlightA_val, "highlightA", i);

   

	/**Height Light**/
    var sliderName_hLightDistance = "#lightPanel" + i + "#hLightDistance_slider";
    var textareaName_hLightDistance = "#lightPanel" + i + " #hLightDistance_val";
    var hLightDistance_slider = $("#hLightDistance_slider");
    var hLightDistance_val = $("#hLightDistance_val");
    hLightDistance_slider.attr("data-slider-min", -5).attr("data-slider-max", 5).attr("data-slider-step", 0.1).attr("data-slider-value", hLightDistance[i]).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParamIndex (hLightDistance_slider, hLightDistance_val, "hLightDistance", i);

    var sliderName_hLightIntensity = "#lightPanel" + i + "#hLightIntensity_slider";
    var textareaName_hLightIntensity = "#lightPanel" + i + " #hLightIntensity_val";
    var hLightIntensity_slider = $("#hLightIntensity_slider");
    var hLightIntensity_val = $("#hLightIntensity_val");
    hLightIntensity_slider.attr("data-slider-min", 1).attr("data-slider-max", 10).attr("data-slider-step", 0.1).attr("data-slider-value", hLightIntensity[i]).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParamIndex (hLightIntensity_slider, hLightIntensity_val, "hLightIntensity", i);

    var sliderName_hLightBack = "#lightPanel" + i + "#hLightBack_slider";
    var textareaName_hLightBack = "#lightPanel" + i + " #hLightBack_val";
    var hLightBack_slider = $("#hLightBack_slider");
    var hLightBack_val = $("#hLightBack_val");
    hLightBack_slider.attr("data-slider-min", 0.01).attr("data-slider-max", 1).attr("data-slider-step", 0.01).attr("data-slider-value", hLightBack[i]).attr("data-slider-tooltip","hide").slider({});
    bindSliderValParamIndex (hLightBack_slider, hLightBack_val, "hLightBack", i); 	
	


    ////init colorPicker & add events
    var colorPickerName = "#lightPanel" + i + " .colorPicker";
    var colorString = color2hex(lightColor[i]);
    $(colorPickerName).attr("value", colorString);
    
    var colorPickerName2 = "#lightPanel" + i + " .colorPicker";
    var colorString2 = color2hex(baseColor[i]);
    $(colorPickerName2).attr("value", colorString2);

    $(colorPickerName).minicolors({
        position: 'bottom right',
        theme: 'bootstrap',
        //defaultValue: colorString,
        change: function(value) {
            if( !value ) return;
            if( typeof console === 'object' ) {
                var rgbObject = $(this).minicolors('rgbObject');
                for (var i = 0; i < lightNum; i++)
                {
                    if (currentLight == i)
                    {
                        lightColor[i][0] =rgbObject.r / 255;
                        lightColor[i][1] =rgbObject.g / 255;
                        lightColor[i][2] =rgbObject.b / 255;
                        setLightMarkFill(i);//function in addLights.js
                    }
                }
                //add event: add border if it is white#ffffff;
                var addBorderElem = $(this).parent().find(".minicolors-swatch-color");
                if (value =="#ffffff")
                {
                    addBorderElem.addClass('colorPickerBorder');
                }else{
                    addBorderElem.removeClass('colorPickerBorder');
                }
            }
        },
    });
    $(colorPickerName2).minicolors({
        position: 'bottom right',
        theme: 'bootstrap',
        //defaultValue: colorString2,
        change: function(value) {
            if( !value ) return;
            if( typeof console === 'object' ) {
                var rgbObject = $(this).minicolors('rgbObject');
                for (var i = 0; i < lightNum; i++)
                {
                    if (currentLight == i)
                    {
                        baseColor[i][0] =rgbObject.r / 255;
                        baseColor[i][1] =rgbObject.g / 255;
                        baseColor[i][2] =rgbObject.b / 255;
                        setLightMarkFill(i);//function in addLights.js
                    }
                }
                //add event: add border if it is white#ffffff;
                var addBorderElem = $(this).parent().find(".minicolors-swatch-color");
                if (value =="#ffffff")
                {
                    addBorderElem.addClass('colorPickerBorder');
                }else{
                    addBorderElem.removeClass('colorPickerBorder');
                }
            }
        },
    });
    
    //init: add border if it is white#ffffff;
    if (colorString == "#ffffff")
    {
        $(colorPickerName).parent().find(".minicolors-swatch-color").addClass('colorPickerBorder');
    }
}


function initCheckbox(param, elem){
    if (param == 1) {
    elem.prop('checked', true);
    }else {
    elem.prop('checked', false);
    }
}

//for lights
function bindSliderValParamIndex(slider, val, param, index){
	//init textarea
	val.val(window[param][index]);

	//update textarea when in slide
	slider.on("slide", function(slideEvt) {
		window[param][index] = slideEvt.value;	
		val.val(window[param][index]);
	});
	
	//update slider when textarea change
	val.on("change", function(){
		window[param][index] = Number($(this).val());
		slider.slider("destroy").attr("data-slider-value", window[param][index]).attr("data-value", window[param][index]).attr("value", window[param][index]);
		slider.slider({});
		slider.on("slide", function(slideEvt) {
			window[param][index] = slideEvt.value;	
			val.val(window[param][index]);
		});
	});

	//textarea allSelected when on focus;
	val.focus(function() {
    	var $this = $(this);
    	$this.select();

    	// Work around Chrome's little problem
    	$this.mouseup(function() {
        // Prevent further mouseup intervention
        	$this.unbind("mouseup");
        	return false;
    	});
	});

	//textarea restrict only input number
	val.keydown(function(e){onlyNumber(e)});
}

//for others except lights
function bindSliderValParam(slider, val, param){
    //init textarea
    val.val(window[param]);

    //update textarea when in slide
    slider.on("slide", function(slideEvt) {
        window[param] = slideEvt.value;  
        val.val(window[param]);
    });
    
    //update slider when textarea change
    val.on("change", function(){
        window[param] = Number($(this).val());
        slider.slider("destroy").attr("data-slider-value", window[param]).attr("data-value", window[param]).attr("value", window[param]);
        slider.slider({});
        slider.on("slide", function(slideEvt) {
            window[param] = slideEvt.value;  
            val.val(window[param]);
        });
    });

    //textarea allSelected when on focus;
    val.focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
        // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });

    //textarea restrict only input number
    val.keydown(function(e){onlyNumber(e)});
}

function onlyNumber(e)
{
	var ctrlDown = e.ctrlKey||e.metaKey; // Mac support
	var code = e.keyCode || e.which;
    // Allow: delete, backspace, enter, leftarrow, rightarrow, "." and "-"s
    if ( ($.inArray(code, [46, 8, 13, 37, 39, 190, 173, 189]) !== -1) ||
         // Allow: Ctrl+A
        (code == 65 && ctrlDown === true) ||
         // Allow: Ctrl+C
        (code == 67 && ctrlDown === true) ||
         // Allow: Ctrl+V
        (code == 86 && ctrlDown === true) ||
         // Allow: Ctrl+X
        (code == 88 && ctrlDown === true) ||
         // Allow: home, end, left, right
        (code >= 35 && code <= 39)) {
             // let it happen, don't do anything
             return;
    };
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}

// Converts an color array to a hex string
function color2hex(color) {
    var hex = [
        (Math.round(color[0]*255)).toString(16),
        (Math.round(color[1]*255)).toString(16),
        (Math.round(color[2]*255)).toString(16)
    ];
    $.each(hex, function(nr, val) {
        if (val.length === 1) hex[nr] = '0' + val;
    });
    return '#' + hex.join('');
}







