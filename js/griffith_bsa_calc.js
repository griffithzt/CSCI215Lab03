function calculate() {

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;

    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;

    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );

    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm

    // ==========================================
    // Todo: Perform conversion calculations here
    kg = weight * .454;
    meter =  height * 0.0254;
   	cm = height * 2.54;
	//weight = kg;
	//height = cm;
    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    var BSA = 0;

    // ==========================================
    // Todo: Perform BSA calculation here
    numBSA = (kg * cm);
    denBSA = 3600;
    calcBSA = Math.sqrt((numBSA / denBSA));
    BSA = calcBSA;
    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------

    var IBW = 0;

    if ( female ) {

        // ==========================================
        // Todo: Perform female IBW calculation here
    	x = 45.5;
    	y = 2.3;
    	z = 60;
    	female = x + y * (height - z)
		IBW = female;


    } else if ( male ) {

        // ==========================================
        // Todo: Perform male IBW calculation here
        var a = 50;
        var b = 2.3;
        var c = 60;
        male = a + b * (height - c)
		IBW = male;
    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------

    var BMI = 0;

    // ==========================================
    // Todo: Perform BMI calculation here
	numBMI = kg;
	denomBMI = Math.pow( meter, 2 ) ;
	calcBMI = numBMI / denomBMI;
	BMI = calcBMI;

    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}