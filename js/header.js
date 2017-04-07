function myFunction() {
    var x = document.getElementById("navegacionPrincipal");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#videoPublicitario").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#modalVideo").on('hide.bs.modal', function(){
        $("#videoPublicitario").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#modalVideo").on('show.bs.modal', function(){
        $("#videoPublicitario").attr('src', url);
    });
});