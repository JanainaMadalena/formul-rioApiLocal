function buscar(){
    var viacep = document.getElementById("cep").value;

    var server = new XMLHttpRequest();

    server.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var change = JSON.parse(this.responseText);

            if(change.erro){
                document.getElementById("logradouro").value = "";
                document.getElementById("bairro").value = "";
                document.getElementById("localidade").value = "";
                document.getElementById("uf").value = "";
                alert("CEP não encontrado, favor digite um cep válido")
            }else{
                document.getElementById("logradouro").value = change.logradouro;
                document.getElementById("complemento").value = change.complemento;
                document.getElementById("bairro").value = change.bairro;
                document.getElementById("localidade").value = change.localidade;
                document.getElementById("uf").value = change.uf;
            }
        }
    };

    server.open("GET", "https://viacep.com.br/ws/"+viacep+"/json/", true)
    server.send();
}
