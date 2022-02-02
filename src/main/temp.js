function fn_transition(__id) {
    let seek = document.getElementById(__id);
    if (seek.style.opacity == '1') {
        seek.style.opacity = '0';
        seek.style.pointerEvents = 'none';
    }
    else {
        seek.style.opacity = '1';
        seek.style.pointerEvents = '';
    }
}
function fn_go_to(__id) {
    document.getElementById(__id).scrollIntoView();
}
function fn_disable_anchor(__id) {
    let seek = document.getElementById(__id);
}
