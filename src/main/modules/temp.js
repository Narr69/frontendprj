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

function summary_open_close_shelve_cond(){
    let summary_sub = document.getElementById('id_summary_sub');

    if (summary_sub.style.opacity == '1') {
        summary_sub.style.opacity = '0';
    }
    else{
        summary_sub.style.opacity = '1';
    }
}

function fn_transition(__id) {
    let seek = document.getElementById(__id);
    if ( seek.style.opacity == '1') {
        seek.style.opacity = '0';
    }
    else {
        seek.style.opacity = '1';
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

function fn_go_to(__id){
    document.getElementById(__id).scrollIntoView();
}


function go_to_doing(){
    document.getElementById('id_doing').scrollIntoView();
}

function go_to_done(){
    document.getElementById('id_done').scrollIntoView();
}
function go_to_learning(){
    document.getElementById('id_learning').scrollIntoView();
}
function go_to_contact(){
    document.getElementById('id_sec_contact').scrollIntoView();
}