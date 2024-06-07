let FazAlturaWin = function(){
    let vh = $(window).height();
    let jogos = vh/2;
    $('#scene, .layer.principal').height(vh);
    $('#scene .col a, #scene .col').height(jogos);
}
$(document).ready(function(){
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);
    makeWinHeight();
});

$(window).resize(function(){
    FazAlturaWin();
});