function fn_transition(__id: string) {
    let seek = document.getElementById(__id);
    if ( seek.style.opacity == '1') {
        seek.style.opacity = '0';
    }
    else {
        seek.style.opacity = '1';
    }
}

function fn_go_to(__id: string){
    document.getElementById(__id).scrollIntoView();
}