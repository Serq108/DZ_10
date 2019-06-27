function falert() 
{
    alert( "Привет" );
}

function printTenNumbers() {
    for (var i = 0; i < 10; ++i) {
        console.log(i);
    }
    return 'OK';
}

function cc(){
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
    return c;
}

function printDivs() {
    var divs = document.querySelectorAll('div');
    var color;
    var ccc;
    for (var i = 0; i < divs.length; ++i) {
        //color = divs[i].hasAttribute('class');
        console.log(divs[i]);
        //ccc = cc();
        //console.log(ccc);
        divs[i].style.backgroundColor = cc();
    }
    return 'OK';
}
