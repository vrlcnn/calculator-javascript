//if you don't want to use klavye you can delete document.onkeydown = klavye; and klavye function.


document.onkeydown = klavye;

/*
    if user use keyboard this function will run.
*/
function klavye( key )
{
     if( key.which >= 96 && key.which <=105 )
    {
        
    }
    else if( key.which == 107 )
    {
        toplama( "+" , 1 );
    }
    else if( key.which == 106 )
    {
        toplama( "*" , 1 );
    }
    else if( key.which == 109 )
    {
        toplama( "-" , 1 );
    }
    else if( key.which == 111 )
    {
        toplama( "/" , 1 );
    }
    else if( key.which == 13 )
    {
        toplama( "=" , 1 );
    }
    else{
 
    } 

}

/*

    In this function calculator creating.

*/
function hesap_makinesi()
{

    if( document.getElementById( "araclar" ).style.display == "none" )
    {
        document.getElementById( "araclar" ).style.height = "230px";
        document.getElementById( "araclar" ).style.width = "300px";
        document.getElementById( "araclar" ).style.backgroundColor = "#2d2d2d";
        document.getElementById( "araclar" ).style.border = "1px solid #2a2a2a";
        document.getElementById( "araclar" ).style.position = "fixed";
        document.getElementById( "araclar" ).style.color = "white";
        document.getElementById( "araclar" ).style.left = "150px";
        document.getElementById( "araclar" ).style.bottom = 0;
        document.getElementById( "araclar" ).style.display = "";

        var x = document.getElementById( "araclar" );
                
        var innerDiv = document.createElement('div');
        innerDiv.style="background-color:#2a2a2a;color:#fa8d12;font-weight:bold;padding:10px;";//calculator header's properties.
        innerDiv.id = 'hesap_makinesi';
        innerDiv.innerHTML = "Hesap Makinesi";//this is the header of calculator

        x.appendChild( innerDiv );

        var input1 = document.createElement( 'input' );
        input1.id = "sayi_text";
        input1.type="text";
        input1.placeholder = "sayı gir";
        input1.style = "color:#000000;width:100%;padding-top:10px;padding-bottom:10px;border:none;font-size:20px;";//textbox's properties

        x.appendChild( input1 );

        var table1 = document.createElement( 'table' );
        table1.style="color:black;width:100%;border:none;text-align:center;";
        table1.className = "table-responsive hesap_makinesi_table_td";
        table1.id = "hesap_makinesi_table_td";

               
        var table1_tr = document.createElement( 'tr' );
        var table2_tr = document.createElement( 'tr' );
        var table3_tr = document.createElement( 'tr' );
        var table4_tr = document.createElement( 'tr' );

        var table1_td = document.createElement( 'td' );
        var table2_td = document.createElement( 'td' );
        var table3_td = document.createElement( 'td' );
        var table4_td = document.createElement( 'td' );
        var table5_td = document.createElement( 'td' );
        var table6_td = document.createElement( 'td' );
        var table7_td = document.createElement( 'td' );
        var table8_td = document.createElement( 'td' );
        var table9_td = document.createElement( 'td' );
        var table10_td = document.createElement( 'td' );
        var table11_td = document.createElement( 'td' );
        var table12_td = document.createElement( 'td' );
        var table13_td = document.createElement( 'td' );
        var table14_td = document.createElement( 'td' );
        var table15_td = document.createElement( 'td' );
        var table16_td = document.createElement( 'td' );

        var btn = document.createElement( 'input' );

        btn.type="button";
               

        table7_td.dataHtml="true";
        table7_td.innerHTML="<input type='button' class='btn btn-primary' onclick='yaz(7);' value='7' style='width:100%;' />";

        table8_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(8);' value='8' style='width:100%;' />";

        table9_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(9);' value='9' style='width:100%;' />";

        table13_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='hesap_makinesi_sil();' value='AC' style='width:100%;background-color:#434343;' />";

        table4_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(4);' value='4' style='width:100%;' />";

        table5_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(5);' value='5' style='width:100%;' />";

        table6_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(6);' value='6' style='width:100%;' />";

        table12_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='toplama( " + '  "+" ' + " , 0 );' value='+' style='width:100%;background-color:#434343;' />";

        table1_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(1);' value='1' style='width:100%;' />";
        table2_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(2);' value='2' style='width:100%;' />";
        table3_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(3);' value='3' style='width:100%;' />";
        table11_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='toplama( " + '  "-" ' + " , 0 );' value='-' style='width:100%;background-color:#434343;' />";

        table10_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='yaz(0);' value='0' style='width:100%;' />";
        table14_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='toplama( " + '  "=" ' + " , 0 );' value='=' style='width:100%;background-color:#434343;' />";
        table15_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='toplama( " + '  "/" ' + " , 0 );' value='/' style='width:100%;background-color:#434343;' />";
        table16_td.innerHTML = "<input type='button' class='btn btn-primary' onclick='toplama( " + '  "*" ' + " , 0 );' value='*' style='width:100%;background-color:#434343;' />";

        table1_tr.appendChild( table7_td );
        table1_tr.appendChild( table8_td );
        table1_tr.appendChild( table9_td );
        table1_tr.appendChild( table13_td );

        table2_tr.appendChild( table4_td );
        table2_tr.appendChild( table5_td );
        table2_tr.appendChild( table6_td );
        table2_tr.appendChild( table12_td );

        table3_tr.appendChild( table1_td );
        table3_tr.appendChild( table2_td );
        table3_tr.appendChild( table3_td );
        table3_tr.appendChild( table11_td );

        table4_tr.appendChild( table10_td );
        table4_tr.appendChild( table14_td );
        table4_tr.appendChild( table15_td );
        table4_tr.appendChild( table16_td );

        table1.appendChild( table1_tr );
        table1.appendChild( table2_tr );
        table1.appendChild( table3_tr );
        table1.appendChild( table4_tr );

        x.appendChild( table1 );




    }
    else{
        
        var x = document.getElementById( "araclar" );

        x.removeChild( document.getElementById( "hesap_makinesi" ) );
        x.removeChild( document.getElementById( "sayi_text" ) );

        x.removeChild( document.getElementById( "hesap_makinesi_table_td" ) );
        document.getElementById( "araclar" ).style.display = "none";
        
    }


}
function yaz( id )
{
    document.getElementById( "sayi_text" ).value = document.getElementById( "sayi_text" ).value + id;
}
function hesap_makinesi_sil()
{
    document.getElementById( "sayi_text" ).value = "";

}

/*

    isaret  :  + , - , / , = , *
    kontrol : 0 , 1 ( it will check keyboard and mouse event. if user use keyboard it will be 1 ) 

*/
function toplama( isaret , kontrol )
{
    var deger = document.getElementById( "sayi_text" ).value;
    let i=0,sayici=0,olay;

                
    for( i=1; i<deger.length; i++ )
    {
        if( deger.charAt( i ) == "+" || deger.charAt( i ) == "-" || deger.charAt( i ) == "/" || deger.charAt( i ) == "*" ){

            sayici++;

            olay = deger.charAt( i );

        }
    
    }

    if( sayici >= 1 )
    {
        let toplanacak = deger.split( olay );

        if( olay == "+" )
        {
            document.getElementById( "sayi_text" ).value =parseInt( toplanacak[ 0 ] ) + parseInt( toplanacak[ 1 ] ) ;
        }
        else if( olay == "-" )
        {
            document.getElementById( "sayi_text" ).value =parseInt( toplanacak[ 0 ] ) - parseInt( toplanacak[ 1 ] );
        }
        else if( olay == "*" )
        {
            document.getElementById( "sayi_text" ).value =parseInt( toplanacak[ 0 ] ) * parseInt( toplanacak[ 1 ] ) ;
        }
        else if( olay == "/" )
        {
            document.getElementById( "sayi_text" ).value =parseInt( toplanacak[ 0 ] ) / parseInt( toplanacak[ 1 ] );
        }


        if( isaret != "=" && kontrol == 0 )
        {
            document.getElementById( "sayi_text" ).value = document.getElementById( "sayi_text" ).value + isaret;
        }

    }
    else
    {
        //check user use keyboard. if user use mouse it will add string to isaret variable.
        if( kontrol == 0 )
            document.getElementById( "sayi_text" ).value = document.getElementById( "sayi_text" ).value + isaret;
    }

}