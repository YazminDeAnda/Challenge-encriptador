const texArea = document.getElementById("inicioTexarea");
const resultado = document.getElementById("reusltadoFinal");
const button = document.querySelectorAll("button");


function onlyContainsLowercase(str) {
    return /^[a-z0-9/ /ñ:;,.¿?¡!]+$/.test(str);
}

function encriptar() {
    const chars = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"        
    }

    if (onlyContainsLowercase(texArea.value)) {
        let encriptarText = texArea.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("primeraVista").style.display = "none";
        document.getElementById("vistaResultado").style.display = "block";
        resultado.textContent = encriptarText;
        } 
        else {
            alert("Recuerda, sólo letras minúsculas y sin acentos");
        }
}

function desencriptar() {
    const chars = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"        
    }

    if (onlyContainsLowercase(texArea.value)) {
        let desencriptarText = texArea.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("primeraVista").style.display = "none";
        document.getElementById("vistaResultado").style.display = "block";
        resultado.textContent = desencriptarText;
        }
        else {
            alert("Recuerda, sólo letras minúsculas y sin acentos");
        }
}

function copiar() {
    let copyText = resultado.innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("copy").style.display = "block";
}
