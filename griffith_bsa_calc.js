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
    var lbs = (lbs - .546) * lbs
    var inch = (inh - 0.9746) * inch
    var in =n(in*2.54)*in;
    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    var BSA = 0;

    // ==========================================
    // Todo: Perform BSA calculation here
    var height = 0;
    var weight = 0;
    numerator = (height * weight);
    denomenator = 3600;
    fraction = numerator / denomenator;
    x = Math.sqrt(fraction);
    BSA = var x;
    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------

    var IBW = 0;

    if ( female ) {

        // ==========================================
        // Todo: Perform female IBW calculation here
    x = 45.5;
    y = 2.3;
    z = -60;
    var height = 0;
    female = x+y*(height-z)


    } else if ( male ) {

        // ==========================================
        // Todo: Perform male IBW calculation here
        a = 50;
        b = 2.3;
        c = -60;
        var height = 0;
        male = a+b*(height-c)
    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------

    var BMI = 0;

    // ==========================================
    // Todo: Perform BMI calculation here



    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}