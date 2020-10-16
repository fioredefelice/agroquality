// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// //components
// import Table from './component/table/Table';
// import Button from './component/button/Button'

// ReactDOM.render(
//   <React.StrictMode>
//     <Table />
//     <Button />
//   </React.StrictMode>,
//   document.getElementById('app')
// );

const lista = JSON.parse(localStorage.getItem("lista")) || [];

lista.forEach(mostrar);

function mostrar(item, i){
    console.log("item", item);
    console.log("i", i);
    let muestreoElement = document.getElementById("muestreo");
    muestreoElement.innerHTML += `
    <tr>
        <td scope="row">${i+1}</td>
        <td>${item.leves}</td>
        <td>${item.menores}</td>
        <td>${item.mayores}</td>
        <td>${item.heridas}</td>
        <td>${item.palolargo}</td>
        <td>${item.arrancado}</td>
        <td>${item.oleo}</td>
        <td>${item.cancro}</td>
        <td>${item.manchanegra}</td>
        <td>${item.melanosis}</td>
        <td>${item.ramaleo}</td>
        <td>${item.botritys}</td>
        <td>${item.chico}</td>
        <td>${item.verde}</td>
        <td>${item.grande}</td>
        <td>${item.otros}</td>
    </tr>`;
}

function agregarNuevo(){
    let leves = document.getElementById("leves").value;
    let menores = document.getElementById("menores").value;
    let mayores = document.getElementById("mayores").value;
    let heridas = document.getElementById("heridas").value;
    let palolargo = document.getElementById("palolargo").value;
    let arrancado = document.getElementById("arrancado").value;
    let oleo = document.getElementById("oleo").value;
    let cancro = document.getElementById("cancro").value;
    let manchanegra = document.getElementById("manchanegra").value;
    let melanosis = document.getElementById("melanosis").value;
    let ramaleo = document.getElementById("ramaleo").value;
    let botritys = document.getElementById("botritys").value;
    let chico = document.getElementById("chico").value;
    let verde = document.getElementById("verde").value;
    let grande = document.getElementById("grande").value;
    let otros = document.getElementById("otros").value;
    
    let muestreoElement = document.getElementById("muestreo");
    muestreoElement.innerHTML += `
    <tr>
        <td>${leves}</td>
        <td>${menores}</td>
        <td>${mayores}</td>
        <td>${heridas}</td>
        <td>${palolargo}</td>
        <td>${arrancado}</td>
        <td>${oleo}</td>
        <td>${cancro}</td>
        <td>${manchanegra}</td>
        <td>${melanosis}</td>
        <td>${ramaleo}</td>
        <td>${botritys}</td>
        <td>${chico}</td>
        <td>${verde}</td>
        <td>${grande}</td>
        <td>${otros}</td>
    </tr>`;

    lista.push({
        leves: leves,
        menores: menores,
        mayores: mayores,
        heridas: heridas,
        palolargo: palolargo,
        arrancado: arrancado,
        oleo: oleo,
        cancro: cancro,
        manchanegra: manchanegra,
        melanosis: melanosis,
        ramaleo: ramaleo,
        botritys: botritys,
        chico: chico,
        verde: verde,
        grande: grande,
        otros: otros
    });

    localStorage.setItem("lista", JSON.stringify(lista))

    document.getElementById("leves").value = "";
    document.getElementById("menores").value = "";
    document.getElementById("mayores").value = "";
    document.getElementById("heridas").value = "";
    document.getElementById("palolargo").value = "";
    document.getElementById("arrancado").value = "";
    document.getElementById("oleo").value = "";
    document.getElementById("cancro").value = "";
    document.getElementById("manchanegra").value = "";
    document.getElementById("melanosis").value = "";
    document.getElementById("ramaleo").value = "";
    document.getElementById("botritys").value = "";
    document.getElementById("chico").value = "";
    document.getElementById("verde").value = "";
    document.getElementById("grande").value = "";
    document.getElementById("otros").value = "";
}
