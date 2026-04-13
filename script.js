async function buscarClima() {
  const cidade = document.getElementById("cidade").value;

  const url = `https://wttr.in/${cidade}?format=j1`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const temp = dados.current_condition[0].temp_C;
    const clima = dados.current_condition[0].weatherDesc[0].value;

    document.getElementById("resultado").innerHTML = `
      <p><strong>${cidade}</strong></p>
      <p>🌡️ ${temp}°C</p>
      <p>☁️ ${clima}</p>
    `;
  } catch (erro) {
    document.getElementById("resultado").innerHTML = "Erro ao buscar clima!";
  }
}