// const eve_logo = document.getElementById("id_eve_logo");
// const style_logo = eve_logo.style.display
const str_role = "Tehnical Artist at : "
const str_none = ""
function open_close_shelve() {
    let eve_logo = document.getElementById('id_eve_logo');
    let h2_doing = document.getElementById('h2_doing');
    h2_doing.textContent = str_role;
    eve_logo.style.display = str_none;
}


function doing_open_close_shelve_cond() {
    // var style_logo = eve_logo.style.display
    let eve_logo = document.getElementById('id_eve_logo');
    
    if ( eve_logo.style.display == 'none' ) {
        eve_logo.style.display = 'block';
        h2_doing.textContent = str_role;
    }
    else {
        eve_logo.style.display = 'none';
        h2_doing.textContent = str_none;
    }
}

function done_open_close_shelve_cond() {
    // var style_logo = eve_logo.style.display
    let bu_logo = document.getElementById('id_bu_logo');
    
    if ( bu_logo.style.display == 'none' ) {
        bu_logo.style.display = 'block';
        h2_done.textContent = str_role;
    }
    else {
        bu_logo.style.display = 'none';
        h2_done.textContent = str_none;
    }
    
}

function contact_open_close_shelve_cond() {
    // var style_logo = eve_logo.style.display
    let cont_sec = document.getElementById('id_sec_contact');
    
    if ( cont_sec.style.display == 'none' ) {
        cont_sec.style.display = 'block';
        // h2_done.textContent = str_role;
    }
    else {
        cont_sec.style.display = 'none';
        // h2_done.textContent = str_none;
    }
    
}

function go_to_doing(){
    document.getElementById('id_doing').scrollIntoView();
}

function go_to_done(){
    document.getElementById('id_done').scrollIntoView();
}