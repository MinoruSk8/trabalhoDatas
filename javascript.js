function compararDatas() {
    data1 = new Date(document.getElementById('data1').value);
    data2 = new Date(document.getElementById('data2').value);
  
    if (data1 > data2) {
      document.getElementById('resultado').innerHTML = `Data maior: ${data1.toLocaleDateString()}`;
    } else {
      document.getElementById('resultado').innerHTML = `Data maior: ${data2.toLocaleDateString()}`;
    }
  }
  
  function calcularIntervalo() {
    const data1 = new Date(document.getElementById('data1').value);
    const data2 = new Date(document.getElementById('data2').value);
  
    if (data1 > data2) {
      alert('A primeira data deve ser mais antiga que a segunda.');
      return;
    }
  
    const diferenca = data2 - data1;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
    document.getElementById('resultado').innerHTML = `Intervalo: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }
  
  function obterDataAtual() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
  
    document.getElementById('resultado').innerHTML = `Data atual: ${horas}:${minutos} - ${dia}/${mes}/${ano}`;
  }

function calcularIdade() {
    data1 = new Date(document.getElementById('data1').value);
    const dataAtual = new Date();
  
    const diferenca = dataAtual - data1;
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  
    document.getElementById('resultado').innerHTML = `Idade: ${anos} anos`;
  }