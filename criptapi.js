

//VARIABLES

const mostrar = document.querySelector("#mostrar");

 

//EVENTOS

 

document.addEventListener("DOMContentLoaded", buscarCripto);

 

//FUNCIONES

async function buscarCripto() {

  let url = "https://api.coincap.io/v2/assets/";

  try {

    const respuestaRaw = await fetch(url);

    const criptomonedas = await respuestaRaw.json();

 

    imprimir(criptomonedas.data);

  } catch (error) {

    console.log(error);

  }
s
}

 

function imprimir(arregloPuro) {

    mostrar.innerHTML = arregloPuro.map((cripto)=>{

        return `

        <div class="card">

        <h3>${cripto.id}</h3>

        <h3>${cripto.rank}</h3>

        <h3>${cripto.priceUsd.substr(0,8)}</h3>

        </div>

        `

    }).join(`<hr />`)

}