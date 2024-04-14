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

>"No me gusta el fútbol, el asado, el mate ni el dulce de leche" - nadie

>"Noi siamo il disidente dil imperatore di Roma Tito Calderone" - Yo

>"No trates de entenderlo" - Claudio "Chiqui" Tapia

>"No me gusta el fútbol, pero soy de Boca" - cualquier bostero

>"Argentina robó en los mundiales" - cualquier inglés o mexicano

>"Verás que todo es mentira, verás que nada es amor, que al mundo nada le importa" - Fito Páez

>"Verón es un traidor" - cualquier hincha de Estudiantes de La Plata

>"BOOOOOCAAAAAAA" - cualquier bostero

>"La vida es como un partido de fútbol, nunca sabes cuándo te van a sacar tarjeta roja" - Anónimo

>"El fútbol es la dinámica de lo impensado" - César Luis Menotti

>"Yo soy de Ñuls" - Lionel Messi

>"Correr corre cualquiera" - Juan Román Riquelme

>"El fútbol es un deporte en el que juegan once contra once y siempre gana Argentina" - Diego Maradona

>"El fútbol es un juego de caballeros jugado por villanos" - Osvaldo Soriano

>"El fútbol es el opio del pueblo" - Carlos Bilardo

>"El fútbol es un ballet para el pueblo" - Carlos Tevez

>"El fútbol es un deporte que se juega con el corazón" - Gabriel Batistuta

>"El fútbol es un deporte que se juega con el alma" - Juan Sebastián Verón

>"El fútbol es un deporte que se juega con la pasión" - Martín Palermo

>"El fútbol es la cosa más importante de las cosas menos importantes" - Jorge Valdano

>"La pelota siempre al 10" - César Luis Menotti

>"El gol es el orgasmo del fútbol" - Jorge Valdano

>"El fútbol es un juego simple: 22 hombres corren detrás de una pelota durante 90 minutos y al final, los alemanes siempre ganan" - Gary Lineker

>"El fútbol es un deporte que inventaron los ingleses, juegan once contra once, y siempre gana Alemania" - Gary Lineker

>"El fútbol es un deporte que se juega con el cerebro" - Johan Cruyff

>"El fútbol es un juego de errores. Quien hace menos errores gana" - Johan Cruyff

>"El fútbol es un juego, pero es el juego más hermoso del mundo" - Johan Cruyff

>"En el fútbol, el peor ciego es el que solo ve la pelota" - Nelson Rodrigues
  `;

	function updatePreview() {
		preview.innerHTML = marked(editor.value);
	}

	updatePreview();
	editor.addEventListener("input", updatePreview);
});
