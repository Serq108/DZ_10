function falert(){
    alert( "Привет" );
}

function printTenNumbers() {
    for (var i = 0; i < 10; ++i) {
        console.log(i);
    }
    return 'OK';
}

function cc(){
    var r = Math.floor(Math.random() * (256));
    var g = Math.floor(Math.random() * (256));
    var b = Math.floor(Math.random() * (256));
    var c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return c;
}

function printDivs() {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; ++i) {
        //color = divs[i].hasAttribute('class');
        console.log(divs[i]);
        //ccc = cc();
        //console.log(ccc);
        divs[i].style.backgroundColor = cc();
    }
    return 'OK';
}

// Not required!
// This is just to demo functionality.

//~ $("#add").on("click", function() {
    //~ $("Pellentesque ").appendTo(".content-inside");
    //~ console.log('OK');
//~ });

$(function()
{
   $('#add').click(function()
   {
     $("<p>Test</p>" ).insertBefore( ".push");
   });
});

//~ function addcont() {
//~ ("<p>Pellentesque habitant morbi tristique senectus et netus et \
  //~ malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat \
  //~ vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit \
  //~ amet quam egestas semper. Aenean ultricies mi vitae est. Mauris \
  //~ placerat eleifend leo.</p>").appendTo(".content-inside");
//~ }
