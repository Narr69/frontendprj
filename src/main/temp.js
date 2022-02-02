function fn_transition(__id) {
    let seek = document.getElementById(__id);
    if (seek.style.opacity == '1') {
        seek.style.opacity = '0';
    }
    else {
        seek.style.opacity = '1';
    }
}
function fn_go_to(__id) {
    document.getElementById(__id).scrollIntoView();
}
