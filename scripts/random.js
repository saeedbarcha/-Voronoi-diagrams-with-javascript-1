
    imgs = ['ARTdesignArchitecture02','ARTdesignArchitecture03','ARTdesignArchitecture04','ARTdesignArchitecture05'];

    $('#ARTdesignArchitecture').mouseenter(function(){

        $( "#Title" ).remove();

        var rand = Math.floor(Math.random()*3)+1;

        $('#ARTdesignArchitecture').append('<img id="Title" src="images/Title Images"' + imgs[rand]  +'ARTdesignArchitecture02.png' + '>');

        console.log(imgs[rand]);
    });
