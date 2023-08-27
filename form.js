function fMensagem(){
    var now = new Date
    var nome = document.querySelector("#iNome").value;
    var telefone = document.querySelector("#iTelefone").value;
    var email= document.querySelector("#iEmail").value;
    var mensagem = document.querySelector("#iMensagem").value;
    var mensagemfinal= "Data: "+now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()+"<br>Emissor: "+nome+"<br>Telefone: "+telefone+"<br>Email: "+email+ "<br>Mensagem: " +mensagem+" ";
    document.getElementById("dmensagem").innerHTML = mensagemfinal;


}