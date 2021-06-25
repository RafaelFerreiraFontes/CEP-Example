function clearPlaceHolders(){
    document.getElementById('rua').value = '';

    document.getElementById('bairro').value = '';
    
    document.getElementById('cidade').value = '';
    
    document.getElementById('estado').value = '';
    
    document.getElementById('ibge').value = '';
}

function postPlaceHolders(data){
    //Checando se o cep foi encontrado.
    if(!('erro' in data))
    {
        //Preenchedo os dados coletados.
        document.getElementById('rua').value = data.logradouro;

        document.getElementById('bairro').value = data.bairro;
        
        document.getElementById('cidade').value = data.localidade;
        
        document.getElementById('estado').value = data.uf;
        
        document.getElementById('ibge').value = data.ibge;
        
    }
    else
    {
        //CEP não Encontrado.
        clearPlaceHolders();
        alert("CEP não encontrado.");
    }
}

function getCEPinfo(value)
{
    let cep = value.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") 
        {

            //Expressão regular para validar o CEP.
            let validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) 
            {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value= "...";

                document.getElementById('bairro').value= "...";
                
                document.getElementById('cidade').value= "...";
                
                document.getElementById('estado').value= "...";
                
                document.getElementById('ibge').value= "...";
                
                let script = document.createElement('script');
                
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=postPlaceHolders';

                document.body.appendChild(script);
            }
            else
            {
                //cep é inválido.
                clearPlaceHolders();
                alert("Formato de CEP inválido.");
            }
        }
        else
        {
            //cep sem valor, limpa formulário.
            clearPlaceHolders();
        }
}
