// const eve_logo = document.getElementById("id_eve_logo");
// const style_logo = eve_logo.style.display

function open_close_shelve() {
    let eve_logo = document.getElementById('id_eve_logo');
    let h2_doing = document.getElementById('h2_doing');
    h2_doing.textContent = "Technical Aritst : ";
    eve_logo.style.display = 'block';
}


function doing_open_close_shelve_cond() {
    // var style_logo = eve_logo.style.display
    let eve_logo = document.getElementById('id_eve_logo');
    
    if ( eve_logo.style.display == 'none' ) {
        eve_logo.style.display = 'block';
        h2_doing.textContent = "Technical Aritst : ";
    }
    else {
        eve_logo.style.display = 'none';
        h2_doing.textContent = "";
    }
}

function done_open_close_shelve_cond() {
    // var style_logo = eve_logo.style.display
    let bu_logo = document.getElementById('id_bu_logo');
    
    if ( bu_logo.style.display == 'none' ) {
        bu_logo.style.display = 'block';
        h2_done.textContent = "Technical Artist : ";
    }
    else {
        bu_logo.style.display = 'none';
        h2_done.textContent = "";
    }
    
}