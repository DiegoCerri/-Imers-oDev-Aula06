var combate = "https://st2.depositphotos.com/3228285/6014/i/600/depositphotos_60149069-stock-photo-pirate-crossed-sabers.jpg";
var trofeu = "https://img1.gratispng.com/20190630/ssb/kisspng-trophy-portable-network-graphics-image-neet-transp-win-vector-trophy-transparent-amp-png-clipart-fr-5d193657752178.3658372115619333994798.jpg"
var rafa = {nome: "Rafa",vitorias: 3,empates: 5,derrotas: 6,pontos: 0, imagem: combate};
var paulo = { nome: "Paulo", vitorias: 4, empates: 5, derrotas: 1, pontos: 0, imagem: combate};
var gui = {nome: "Gui", vitorias: 2, empates: 5, derrotas: 1, pontos: 0, imagem: combate};
var jogadores = [rafa, paulo, gui]

function calcularPontos(jogador) {
    return jogador.vitorias * 3 + jogador.empates;
}

//rafa.pontos=calcularPontos(rafa)
//paulo.pontos=calcularPontos(paulo)
//gui.pontos=calcularPontos(gui)

function exibeJogadoresNaTela(jogadores){
  var elemento = ""
  for (var i=0; i<jogadores.length;i++){
    elemento = elemento + 
        `<tr>
          <td>${jogadores[i].nome}</br><img src=${jogadores[i].imagem} width="30" height="30"></td>
          <td>${jogadores[i].vitorias}</td>
          <td>${jogadores[i].empates}</td>
          <td>${jogadores[i].derrotas}</td>
          <td>${jogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>`
  }
  return elemento
}

function adicionarVitoria(item){
  //window.alert("Adcionar vitória item:" + jogadores[item].nome + item)
  jogadores[item].vitorias++
  jogadores[item].pontos=calcularPontos(jogadores[item])
  quemEstaGanhando()
  document.getElementById("tabelaJogadores").innerHTML=exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(item){
  //window.alert("Adcionar empate item:" + jogadores[item].nome + item)
  jogadores[item].empates++
  jogadores[item].pontos=calcularPontos(jogadores[item])
  quemEstaGanhando()
  document.getElementById("tabelaJogadores").innerHTML=exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(item){
  //window.alert("Adcionar derrota item:" + jogadores[item].nome + item)
  jogadores[item].derrotas++
  jogadores[item].pontos=calcularPontos(jogadores[item])
  quemEstaGanhando()
  document.getElementById("tabelaJogadores").innerHTML=exibeJogadoresNaTela(jogadores)
}

function quemEstaGanhando(){
  for (var i=0;i<jogadores.length;i++){jogadores[i].imagem=combate}
  var itemMaior=0;
  jogadores[0].imagem=trofeu;
  for (var i=0;i<jogadores.length;i++){
    if (jogadores[i].pontos>jogadores[itemMaior].pontos){
      jogadores[itemMaior].imagem=combate;
      itemMaior=i; //Trofeu troca de mão
      jogadores[itemMaior].imagem=trofeu;
    }
  }
}

function limparTabela(){
  for (var i=0;i<jogadores.length;i++){
    jogadores[i].vitorias=0;
    jogadores[i].empates=0;
    jogadores[i].derrotas=0;
    jogadores[i].pontos=0;
    jogadores[i].imagem=combate;
    document.getElementById("tabelaJogadores").innerHTML=exibeJogadoresNaTela(jogadores)    
  }
}

rafa.pontos=calcularPontos(rafa)
paulo.pontos=calcularPontos(paulo)
gui.pontos=calcularPontos(gui)
quemEstaGanhando()
document.getElementById("tabelaJogadores").innerHTML=exibeJogadoresNaTela(jogadores)