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
function string_to_float(__string) {
    let seek = parseFloat(__string);
    return seek;
}

function open_in_new_tab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function calc_window_size() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let ratio = width / height;
    return ratio;
}