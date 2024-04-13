document.addEventListener("DOMContentLoaded", function () {
	const editor = document.getElementById("editor");
	const preview = document.getElementById("preview");

	editor.value = `
  # Maradona
  ## Messi
  ### Riquelme
  #### Kempes
  ##### Milito
  ###### Fillol
  
  [Himno Argentino](https://www.youtube.com/watch?v=OqSQo2aifAA&ab_channel=AnabelaEspenan) || 
  [Himno Argentino - Remix](https://www.youtube.com/watch?v=O8G9ytZg-bM&ab_channel=ArielSebastian) || 
  [Himno Argentino - Acústico](https://www.youtube.com/watch?v=gm3jomzFEpk&ab_channel=ComodorodePrimera)

  Top 3 artistas:
  - Los Piojos
  - Callejeros
  - Soda Stereo
  
  > ⭐⭐⭐

  
 Las Malvinas son ~~inglesas~~ argentinas hasta la muerte.

Argentina es:

- [ ] Pobre
- [ ] Corrupta
- [X] Campeona del mundo
  


  ![Markdown Image](https://media.gettyimages.com/id/102168659/es/foto/johannesburg-south-africa-diego-maradona-head-coach-of-argentina-talks-with-lionel-messi-of.jpg?s=612x612&w=gi&k=20&c=2QCX1OYUSvDLQBbsXwoLayKVQwexFjxm4SBgGyXEeR8=)

**Frases memorables argentinas:**

>"La pelota no se mancha" - Diego Maradona

>"Qué meas sentado? Yo también" - Lionel Messi

>"La vida es una tombola" - Serú Girán

>"No llores por mí Argentina" - Madonna

>"La vida es un carnaval" - Celia Cruz

>"No te toques más" - Callejeros

>"No hay 2 sin 3" - Los Piojos

>"Traigan vino, hoy juega la Acadé" - Racing Club

>"No hay mal que por bien no venga" - Charly García

>"No hay plata para el pan" - Todos los argentinos

>"Más amargo que la cancha de Independiente" - yo

>"Aguante Boca" - nadie

>"Ahí lo tenés al pelotudo" - Luis Brandoni

>"Esto es una ME-SA-ZA" - Mirtha Legrand

>"No te hagas la paja" - mi mamá

>"No te hagas el vivo" - mi abuela

>"No te hagas el lindo" - mi novia

>"Esto está peor que una patada en las pelotas" - mi jefe

>"La vida es un vino espumante" - Carlos Gardel

>"La vida es un tango" - Anónimo

>"La patria es el otro" - Diego Maradona

>"La única verdad es la realidad" - Juan Domingo Perón

>"Soy argentino, es un sentimiento, no puedo parar" - Fito Páez

>"El que depositó dólares, recibirá dólares" - Eduardo Duhalde

>"No los voy a defraudar" - Carlos Saúl Menem

>"La inflación es un fenómeno multicausal" - Axel Kicillof

>"Viva la libertad, carajo!" - Javier Milei

>"Es un Elissir" - Alfio "Coco" Basile

>"No me arrepiento de este amor" - Gilda

>"Juanceto01, sai che sarai il primo ad essere bannato dal stream?" - Gerónimo "Momo" Benavidez

  `;

	function updatePreview() {
		preview.innerHTML = marked(editor.value);
	}

	updatePreview();
	editor.addEventListener("input", updatePreview);
});
