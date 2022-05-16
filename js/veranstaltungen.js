'use strict';

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function displayDate() {

    const now = new Date();


    let elm = document.getElementById("vonDatum");
    elm.value = now.toISOString().slice(0, 16);

}

function displayDateThree() {

    const now = new Date();


    let elm = document.getElementById("bisDatum");
    elm.setHours(elm.getHours() + 3);
    elm.value = now.toISOString().slice(0, 16);

}

if (displayDate.getTime() < displayDateThree.getTime()) {
    window.confirm("Vertausche die Daten!");
}

function sicht() {
    document.getElementById("sitPlatz").value = "";

}

let angaben = [
    {
        "zeitraum_von":"10.10.2020", "zeitraum_bis":"11.10.2020", "veranstaltung":"erste Veranstaltung",
        "preiskategorie":"Kleinkind", "sitzplatz":"55", "zusatzspende":"20"
    },

    {
        "zeitraum_von":"11.10.2020", "zeitraum_bis":"12.10.2020", "veranstaltung":"zweite Veranstaltung",
        "preiskategorie":"Kleinkind", "sitzplatz":"56", "zusatzspende":"200"
    },
    {
        "zeitraum_von":"12.10.2020", "zeitraum_bis":"13.10.2020", "veranstaltung":"dritte Veranstaltung",
        "preiskategorie":"Erwachsener", "sitzplatz":"57", "zusatzspende":"300"
    },
    {
        "zeitraum_von":"13.10.2020", "zeitraum_bis":"14.10.2020", "veranstaltung":"vierte Veranstaltung",
        "preiskategorie":"Kleinkind", "sitzplatz":"58", "zusatzspende":"120"
    },
    {
        "zeitraum_von":"14.10.2020", "zeitraum_bis":"15.10.2020", "veranstaltung":"fünfte Veranstaltung",
        "preiskategorie":"Schüler", "sitzplatz":"59", "zusatzspende":"70"
    },
    {
        "zeitraum_von":"15.10.2020", "zeitraum_bis":"16.10.2020", "veranstaltung":"sechste Veranstaltung",
        "preiskategorie":"Rentner", "sitzplatz":"60", "zusatzspende":"450"
    }

];

function teste() {


document.getElementById("teste").value ="hallo";}