document.getElementById('boton_presentacion').onclick = function () {
    console.log("Mi nombre es Regina Anderson, soy una apasionada de la cocina, disfruto mucho cuando estoy en mi zona de confort, y aprendo mucho mas de los desafíos. Estoy buscando insertarme laboralmente en España, para compartir lo que sé, y aprender de su cocina");
    document.getElementById("presentacion").innerHTML= "Mi nombre es Regina Anderson, soy una apasionada de la cocina, disfruto mucho cuando estoy en mi zona de confort, y aprendo mucho mas de los desafíos. Estoy buscando insertarme laboralmente en España, para compartir lo que sé, y aprender de su cocina.";
}
document.getElementById('boton_skills').onclick = function () {
    document.getElementById("presentacion").innerHTML= "Tengo buen manejo de trabajo en equipo y bajo presión. Puedo delegar y organizar la cocina. Me destaco en cocina asiática y sudamericana. Poseo buen manejo del Inglés y Portugués y estoy siempre dispuesta a aprender nuevos oficios";
}
document.getElementById('boton_estudios').onclick = function () {
    document.getElementById("presentacion").innerHTML= "Me gradué como Chef Profesional en la escuela Gato Dumas de la ciudad de Buenos Aires. Ingles intermedio con certificación oficial. Especialización en Sushi y Ceviche adquirida en Thinku Academy";
}
document.getElementById('boton_experiencia').onclick = function () {
    document.getElementById("presentacion").innerHTML= "Primo Restaurant 2009-2012. La Cava Restó 2012-2019. 4 de copas Bodegón 2019-2022";
}