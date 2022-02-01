function open_close_shelve (){
    let app: HTMLElement = document.getElementById("id_eve_logo");
    let app_style_disp: string = app.style.display;

    if ( app_style_disp == 'block' ) {
        app_style_disp = 'none';
    }
    else {
        app_style_disp = 'block';
    }
}