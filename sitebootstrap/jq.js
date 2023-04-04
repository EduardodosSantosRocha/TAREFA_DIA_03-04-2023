
$(document).ready(function () {


    $("#im1").click(function () {
        $(this).attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb67U_Z3tQwlIWeh09VQbjBAQvfLMYEXYRg&usqp=CAU");
    });


    $("#im2").click(function () {
        $(this).attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb67U_Z3tQwlIWeh09VQbjBAQvfLMYEXYRg&usqp=CAU");

    });



    $("#im3").click(function () {
        $(this).attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb67U_Z3tQwlIWeh09VQbjBAQvfLMYEXYRg&usqp=CAU");
    });


    $("#bt").click(function () {

        console.log("chegou");

        var audio = new Audio("./mus/olha.mp3");
        audio.addEventListener('canplaythrough', function () {
            audio.play();
        });


        $("body").css("background-image", "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb67U_Z3tQwlIWeh09VQbjBAQvfLMYEXYRg&usqp=CAU " + ")");
        $(".imgmanoel").css("background-image", "url(" + "https://static.wixstatic.com/media/368834_fe09ceaea3ac4992b8d81bfed572de23~mv2.png/v1/fit/w_768%2Ch_768%2Cal_c%2Cq_80,enc_auto/file.jpg " + ")");
        
       
    

        $("#im1").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb67U_Z3tQwlIWeh09VQbjBAQvfLMYEXYRg&usqp=CAU");

        $("#im2").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb67U_Z3tQwlIWeh09VQbjBAQvfLMYEXYRg&usqp=CAU");

        $("#im3").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb67U_Z3tQwlIWeh09VQbjBAQvfLMYEXYRg&usqp=CAU");

    });






});




