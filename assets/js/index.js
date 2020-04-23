let Hanilidades = 
[
    "Html", "JavaScript", "Css",
    "NodeJs", "VueJs", "ReactJs",
    "React Native", "C++", "C#",
    "PHP", "Laravel", "MongoDB",
    "Postgresql", "MySQL", "SQL",
    "Java", "Spring Boot"
];

let Valor = 
[
    4, 4, 3,
    3, 4, 3,
    2, 3, 3,
    3, 3, 2,
    2, 4, 3,
    3, 1
]

// let tabla = document.getElementById();
agregarFila();
function agregarFila(){
    let x = "";
    for(let i = 0;  i < Hanilidades.length; i++) {
        x = "cam"+i;
        document.getElementById("table-id").insertRow(-1).innerHTML = '<tr><td class="pl-5 ml-5">'+ Hanilidades[i] +'</td>'
        +'<td id="cam'+i+'"><div class="ajustar"></div></td></tr>';
        let miVal = agregarValor(x, Valor[i]);
    }
}

function agregarValor(idTr, cant){
    //contenedor div y asignacion del atributo
    for(let i = 0;  i < cant; i++) {
        let divcontenedora = document.createElement("div");
        let atributo= document.createAttribute("class");
        atributo.value="circulo";
        divcontenedora.setAttributeNode(atributo);
        let miVal1 = document.getElementById(idTr);
        miVal1.appendChild(divcontenedora);
    }

    for(let i = 0;  i < 6-cant; i++) {
        let divcontenedora = document.createElement("div");
        let atributo= document.createAttribute("class");
        atributo.value="circulo-vacio";
        divcontenedora.setAttributeNode(atributo);
        let miVal1 = document.getElementById(idTr);
        miVal1.appendChild(divcontenedora);
    }
}