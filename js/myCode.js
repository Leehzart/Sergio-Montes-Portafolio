


function cambiarTexto() {
    document.getElementById("txtCmb").innerHTML = "Buscar";
}

function desaparecer() {
    let fadeOutTween = KUTE.to('#txtOpacidad', { opacity: 0 }).start();
}

function aparecer() {
    let fadeInTween = KUTE.to('#txtOpacidad', { opacity: 1 }).start();
}

function morfo() {
    
    var tween = KUTE.fromTo('#cuadro', { path: '#cuadro' }, { path: '#palabra' }).start();
}