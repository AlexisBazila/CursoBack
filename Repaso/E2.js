function NombreResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return "8K";
    }else if (ancho >= 3840 && alto >= 2160){
        return "4K";
    }else if (ancho >= 2560 && alto >= 1330){
        return "WQHD";
    }else if (ancho >= 1920 && alto >= 1080){
        return "FHD";
    }else if (ancho >= 1280 && alto >= 720){
        return "HD";
    }else{
        return "Resolucion no aceptada"
    }
}

let Resolucion=NombreResolucion(2560, 1330);
console.log(Resolucion);