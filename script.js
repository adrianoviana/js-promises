const promiseExample = new Promise((resolve, reject) => {
  // Simulando uma tarefa assíncrona (como buscar dados de uma API)
  setTimeout(() => {
    const success = false; // Indica se a tarefa foi concluída com sucesso
    if (success) {
      resolve("Dados obtidos com sucesso!"); // Resolvendo a Promise com sucesso
    } else {
      reject("Falha ao obter dados!"); // Rejeitando a Promise em caso de falha
    }
  }, 2000); // Simulando um atraso de 2 segundos
});


promiseExample
  .then((data) => {
    console.log(data); // Executa quando a Promise é resolvida
  },(erro)=> {
    console.log(erro); 
  })
  .catch((error) => {
    console.error(error); // Executa quando a Promise é rejeitada
  })
  .finally(() => {
    console.log("Finalizando..."); // Executa sempre, independentemente do resultado da Promise
  });
