const ingresoTexto = document.getElementById
("ingresoTexto")

const btnEncriptar = document.getElementById
("btnEncriptar")

const btnDesencriptar = document.getElementById
("btnDesencriptar")

const btnCopiar = document.getElementById 
("btnCopiar")

const mensajeFinal = document.getElementById
("mensajeFinal")

const muñeco = document.getElementById 
("muñeco")

const infor = document.getElementById
("infor")

const right = document.getElementById
("right")


let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],

]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muñeco.classList.add("oculto");
    ingresoTexto.value = "";
    infor.style.display = "none";
    btnCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muñeco.classList.remove("oculto");
    infor.style.display = "block";
    btnCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}
 

btnEncriptar.addEventListener("click",() => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto !="") {
        function encriptar(newTexto) {
            for (let i = 0; i < remplazar.length; i++){
                if (newTexto.includes(remplazar[i][0])){
                    newTexto = newTexto.replaceAll(remplazar[i][0], remplazar[i][1]);
                };

            };
            return newTexto;
        };
    } else{
        alert("Ingrese Texto a Encriptar")
        reset();
    }
    
    //const textoEncriptado = encriptar(texto);//
    remplace(encriptar(texto));

});

btnDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != "") {
        function desencriptar(newTexto) {
            for (let i = 0; i < remplazar.length; i++){
                if (newTexto.includes(remplazar[i][1])) {
                    newTexto = newTexto.replaceAll(remplazar[i][1], remplazar [i][0]);
                 };
    
            };  
            return newTexto;
        };
    } else {
        alert("Ingrese Texto a Desencriptar")
        reset();
    }

    remplace(desencriptar(texto))

});

btnCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado"); 
    reset(); 
    

    
})
