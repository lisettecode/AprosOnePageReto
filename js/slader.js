$(document).ready(init);

var currentSection = null;
var currentSec = null;


function init() {
    currentSection = $('#section-1');
    $('#btn-sect1').click(onClickBtnFirst);
    $('#btn-sect2').click(onClickBtnSecond);
    $('#btn-sect3').click(onClickBtnThree);
    $('#btn-sect4').click(onClickBtnFour);
    $('#btn-sect5').click(onClickBtnFive);


    //TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnFirst() {

    gotoSection('section-1');
}

function onClickBtnSecond() {

    gotoSection('section-2');
}

function onClickBtnThree() {

    gotoSection('section-3');
}

function onClickBtnFour() {

    gotoSection('section-4');
}

function onClickBtnFive() {

    gotoSection('section-5');
}

function gotoSection(_identificadorDeSeccion) {
    if(currentSection.hasClass('visible')){
       currentSection.removeClass('visible');
    }else{
        currentSection.addClass('visible');
    }
    
    var nextSection = $('#' + _identificadorDeSeccion);
    nextSection.addClass('visible animated fadeInLeft'); 

    //TweenMax.from(nextSection, 1, {scale:0.2, opacity:0, ease:Elastic.easeOut});
    currentSection = nextSection;
}

$('.btn-cambio1').click(function (evt) {
    var seccion = '#' + currentSection.attr('id') + ' .col-xs-8';
    console.log($(seccion));
    $(' .texto').removeClass('visible');
    $('.carrusel').removeClass('visible');
    $('.titulo').removeClass('visible');
    var contenido = '<div class="row" style="font-size: 0.90em">' +
        '<div class="col-xs-12">' +
        '<p><b>Abono</b> mejorado para suelos</p>' +
        '</div>' +
        '</div>' +
        '<div class="row" style="font-size: 0.75em">' +
        '<div class="col-xs-12">' +
        '<h1>Cocoa</h1>' +
        '</div>' +
        '</div>' +
        '<div class="row" style="font-size: 0.75em">' +
        '<div class="col-xs-6" style="font-size: 0.75em">' +
        '<div class="imagenPrueba"></div>' +
        '</div>' +
        '<div class="col-xs-6" style="font-size: 0.80em">' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in consequuntur velit laudantium nulla dicta, illo voluptates voluptatem. Natus ipsum culpa pariatur autem nemo soluta, hic qui, veniam? Hic, culpa.</p>' +
        '<button style="font-size: 0.80em">Ver Estadisticas</button>' +
        '</div>' +
        '</div>';
        
    $(seccion).html(contenido).addClass('animated fadeInRight');
    
    evt.preventDefault();
});