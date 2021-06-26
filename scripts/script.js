function clearPlaceHolders(){
    document.getElementById('rua').value = '';

    document.getElementById('bairro').value = '';
    
    document.getElementById('cidade').value = '';
    
    document.getElementById('estado').value = '';
    
    document.getElementById('ibge').value = '';
}

function postPlaceHolders(data){
    //Check if cep is not found.
    if(!('erro' in data))
    {
        //Fill cep request in form.
        document.getElementById('rua').value = data.logradouro;

        document.getElementById('bairro').value = data.bairro;
        
        document.getElementById('cidade').value = data.localidade;
        
        document.getElementById('estado').value = data.uf;
        
        document.getElementById('ibge').value = data.ibge;
        
    }
    else
    {
        //CEP Not found.
        clearPlaceHolders();
        alert("CEP não encontrado.");
    }
}

function getCEPinfo(value)
{
    let cep = value.replace(/\D/g, '');

        //Check if cep is fill.
        if (cep != "") 
        {

            //Regular expression for cep.
            let validacep = /^[0-9]{8}$/;

            //Validate cep format.
            if(validacep.test(cep)) 
            {

                //Fill field with "...", while request webservice.
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
                //cep invalid.
                clearPlaceHolders();
                alert("Formato de CEP inválido.");
            }
        }
        else
        {
            //cep not field.
            clearPlaceHolders();
        }
}
