document.addEventListener('DOMContentLoaded', function() {

    let saidaVazia = document.querySelector('.saida__vazia');
    let saidaResultado = document.querySelector('.saida__resultado');

    saidaVazia.style.display = 'block';
    saidaResultado.style.display = 'none';

    let inputTexto = document.querySelector('#entrada_texto');
    let outputTexto = document.querySelector('#saida_texto');

    document.getElementById('criptografar').addEventListener('click', botaoCripto);
    document.getElementById('descriptografar').addEventListener('click', botaoDescripto);
    document.getElementById('copiar').addEventListener('click', copiarTexto);


    function botaoCripto(){
        let textoEncriptado = criptografar(inputTexto.value);
        outputTexto.value = textoEncriptado;

        saidaVazia.style.display = 'none';
        saidaResultado.style.display = 'block';
    }

    function criptografar(stringEncriptada){
        let chaveCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase ();

        for (i = 0; i < chaveCodigo.length ; i++){
            if (stringEncriptada.includes (chaveCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(chaveCodigo[i][0], chaveCodigo[i][1]);
            }
        }

        return stringEncriptada;
    }

    function botaoDescripto(){
        let textoDescriptado = descriptografar(inputTexto.value);
        outputTexto.value = textoDescriptado; 
    
        saidaVazia.style.display = 'none';
        saidaResultado.style.display = 'block';
    }
    

    function descriptografar(stringDescriptada){
        let chaveCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
        
        chaveCodigo.sort((a, b) => b[1].length - a[1].length);
        stringDescriptada = stringDescriptada.toLowerCase ();
    
        for (let i = 0; i < chaveCodigo.length; i++) {
            let cripto = chaveCodigo[i][1];
            let decripto = chaveCodigo[i][0];
    
            stringDescriptada = stringDescriptada.replaceAll(cripto, decripto);
        }
    
        return stringDescriptada;
    }


    function copiarTexto(){
        outputTexto.select();
        outputTexto.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

});