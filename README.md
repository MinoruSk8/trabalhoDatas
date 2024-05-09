Trabalhando com Datas
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function compararDatas() {   
	--> Declarando uma função chamada compararDatas, sem nenhum parametro.
    
    data1 = new Date(document.getElementById('data1').value); 
    data2 = new Date(document.getElementById('data2').value);
    --> As duas linhas obtêm os valores dos elementos de entrada no HTML com os IDs 'data1' e 'data2'. Eles são inputs de tipo data 
    (<input type="date">).document.getElementById('data1').value e document.getElementById('data2').value recuperam as datas selecionadas	
    pelo usuário como strings. Essas strings são convertidas em objetos Date usando new Date(), para que possam ser manipuladas e comparadas como datas.
  
    if (data1 > data2) {
      document.getElementById('resultado').innerHTML = `Data maior: ${data1.toLocaleDateString()}`;
    } else {
      document.getElementById('resultado').innerHTML = `Data maior: ${data2.toLocaleDateString()}`;
    }
	--> data1 e data2 são comparadas usando o operador >. Se data1 for maior que data2, o if é executada, caso contrário, o else é executado. 
	Dentro de cada bloco, a função toLocaleDateString() é usada para formatar a data no formato local Brasil. Após formatada é inserida no HTML 
	com o ID 'resultado' usando document.getElementById('resultado').innerHTML.
  }
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function calcularIntervalo() {
	--> Declarando uma função chamada calcularIntervalo(), sem nenhum parametro.

    const data1 = new Date(document.getElementById('data1').value);    
    --> mesmo da função anterio, porem a variavel data1 é constante
    
    const data2 = new Date(document.getElementById('data2').value);    
    --> mesmo da função anterio, porem a variavel data2 é constante
  
    if (data1 > data2) {
      alert('A primeira data deve ser mais antiga que a segunda.');
      return;
    }
    --> Verifica se a data1 é maior que a data2. Se for as datas estão em ordem incorreta (a primeira data é depois da segunda), e uma mensagem de 
    alerta é exibida ao usuário informando que a primeira data deve ser mais antiga que a segunda. Após o alerta, a função é encerrada usando return.
  
    const diferenca = data2 - data1;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  --> Se as datas estiverem em ordem correta, o código continua aqui. Ela calcula a diferença de tempo entre data2 e data1 em milissegundos. 
	Em seguida, converte essa diferença para dias, horas, minutos e segundos.
	Após o cálculo é exibido no HTML, e é mostrado o intervalo de tempo entre as duas datas, em dias, horas, minutos e segundos.
 
    document.getElementById('resultado').innerHTML = `Intervalo: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
  --> Finalmente, o resultado do cálculo é exibido na página HTML. É mostrado o intervalo de tempo entre as duas datas, mostrando em dias, horas, minutos e segundos.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function obterDataAtual() {
	--> Declarando uma função chamada obterDataAtual(), sem nenhum parametro.

    const dataAtual = new Date();
	--> Essa linha cria um novo objeto Date, representando a data e hora atuais. Será usado para obter informações como hora, minutos, dia, mês e ano.

    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
	--> Aqui, diferentes métodos do objeto Date são usados para extrair informações específicas sobre a data atual. 
	getHours() retorna a hora, 
	getMinutes() retorna os minutos, 
	getDate() retorna o dia do mês, 
	getMonth() retorna o mês (sendo janeiro representado por 0, por isso é adicionado +1 para representar o mês corretamente), e 
	getFullYear() retorna o ano.
  
    document.getElementById('resultado').innerHTML = `Data atual: ${horas}:${minutos} - ${dia}/${mes}/${ano}`;
}
	--> Finalmente, o resultado obtido é exibido na página HTML. É mostrado a hora atual (formatada como horas:minutos) e a data atual (formatada do Brasil
	 como dia/mês/ano).
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function calcularIdade() {
	--> Declarando uma função chamada calcularIdade(), sem nenhum parametro.

    data1 = new Date(document.getElementById('data1').value);
    const dataAtual = new Date();
	--> Obtêm a data de nascimento fornecida pelo usuário no HTML com o ID 'data1'. É convertida em um objeto Date usando new Date(). 
	Em seguida, obtemos a data atual usando new Date(), atribuindo-a à variável dataAtual que é uma constante.
  
    const diferenca = dataAtual - data1;
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
	--> Calculando a diferença de tempo em milissegundos entre a data atual e a data de nascimento (dataAtual - data1). 
	Em seguida, a diferença é convertida para anos, dividindo pelo número aproximado de milissegundos em um ano e por fim arredondando para baixo usando o 
	método Math.floor().
  
    document.getElementById('resultado').innerHTML = `Idade: ${anos} anos`;
  }
	--> Por fim, o resultado do cálculo é exibido na página. É mostrado a idade calculada em anos.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
