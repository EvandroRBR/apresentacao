import React from 'react';
import './style.css';
import './App.css';

import header from './assets/header.jpeg';
import viagem from './assets/viagem.jpeg';
import banda from './assets/banda.jpg'
import hotel from './assets/hotel.jpg'
import dina from './assets/dina.jpg'
import por from './assets/por.jpg'
import restaurante from './assets/restaurante.jpg'
import poker1 from './assets/poker1.jpg'
import poker2 from './assets/poker2.jpg'
import ads from './assets/ads.jpg'
import anova from './assets/anova.jpg'
import flip from './assets/flip.png'
import amigos from './assets/amigos.jpg'
import neo from './assets/logo-neo.png'
import hobby from './assets/hobby.jpeg'


function App() {
  return (
    <div className="center">
      
      <header>
        <div className="apresentacao">          
          <h1>Olá</h1>
          <h3>Eu sou o Evandro, sou natural de São José dos Campos e tenho 29 anos. 
            Venho trabalhando na área de hotelaria desde os meus 18, porém decidi 
            mudar e estou cursando o segundo semestre em Análise e Desenvolvimento 
            de Sistemas pela Fatec.</h3>
        </div>
        <img className="imgHeader" src={header} alt="perfil"/>
        <div className="atalho">
          <a href="#resumo"><button>RESUMO</button></a> 
          {/* <a href="#viagem"><button>Viagem</button></a> */}
          <a href="#retorno"><button>RETORNO</button></a>
          <a href="#desistencia"><button>DESISTÊNCIA</button></a>
          <a href="#testes"><button>TESTES</button></a>
          <a href="#tecnologia"><button>TECNOLOGIA</button></a>
          <a href="#carreira"><button>CARREIRA</button></a>
          <a href="#fatec"><button>FATEC</button></a>
          <a href="#neo"><button>NEO</button></a>
        </div>
      </header>

      <div className="resumo" id="resumo">
        <h2>Um pouco da minha história e experiência profissional</h2>
        <h3>
        Nasci e cresci na Vila Industrial, onde tive uma infância normal sem grandes 
        acontecimentos. Com 18 anos consegui o meu primeiro trabalho como bartender 
        no Dunluce Irish Pub onde fiquei por um ano e meio e cheguei a ser chefe de 
        um dos bares; foi o meu primeiro contato com a hotelaria já que bares e 
        restaurantes entram nessa categoria.<br/><br/>   
        Em seguida consegui um trabalho como garçom em um hotel, Blue Tree Tower, 
        e com alguns meses trabalhando e me destacando como garçom surgiu uma vaga 
        na recepção; me candidatei, já que eu estudava inglês nessa época e 
        seria uma grande oportunidade para aperfeiçoar o idioma que estava aprendendo 
        e aprender assuntos mais técnicos da área. Fui aceito e, com isso, logo 
        passei para um cargo de auditoria do hotel, porém o meu grande sonho na 
        época era fazer um intercâmbio, mas com poucos recursos financeiros eu 
        encontrei uma oportunidade de trabalhar e viajar em um navio de Cruzeiros 
        e essa com certeza foi a experiência mais intensa da minha vida, muito 
        rabalho, muitos países visitados e muitas pessoas que eu conheci.
        </h3>
        <section className="viagem" id="viagem">
          <img src={viagem} alt="Viagem"/>
        </section>
      </div>

      <div className="retorno" id="retorno">
        <h2>Retorno para o Brasil e novos objetivos</h2>
        <div className="banda">
          <h3>
            Passei 9 meses trabalhando nesse navio como bar waiter e embora tivesse 
            a oportunidade de retornar ao navio na mesma função, eu decidi criar uma 
            banda e retornar ao Cruzeiro tocando, já que a música é um dos meus 
            hobbies e paixão.<br/><br/>
          </h3>
          <img className="imgBanda" src={banda} alt="banda"/>
        </div>

        <div className="hotel">
        <img className="imgHotel" src={hotel} alt="banda"/>
          <h3>
            Voltei para hotelaria para continuar com o meu sustento financeiro e 
            organizar melhor a ideia da banda, já que esse é um processo demorado. 
            Porém é muito difícil achar músicos dispostos a passar tanto tempo longe 
            de casa e que falem inglês, um dos requisitos para trabalhar embarcado.<br/><br/> 
            Esse tempo foi uma grande experiência e eu fui fazendo meu nome na hotelaria.
          </h3>
        </div>
        
      </div>

      <div className="desistencia" id="desistencia">
        <h2>Mas por que não continuar na hotelaria já que estava crescendo</h2>
        <h3>
          Eu realmente estava construindo uma carreira e teria oportunidades de 
          crescimento, mas no fundo eu sabia que não era o que eu queria e apesar 
          de eu estar relativamente estabilizado, eu decidi sair e fazer uma viagem 
          para refletir melhor o que eu realmente queria para o futuro.<br/><br/> 
          Passei 3 meses na Dinamarca e em Portugal, onde trabalhei um pouco como garçom.
        </h3>
        <div className="img">
          <img className="dina" src={dina} alt="Dinamarca"/>
          <img className="por" src={restaurante} alt="Restaurante"/>
          <img className="rest" src={por} alt="Portugal"/>
        </div>
      </div>

      <div className="testes" id="testes">
        <h2>Alguns testes</h2>
        <h3>
          Quando eu retornei novamente para o Brasil, resolvi empreender: Minha mãe 
          faz algumas artes lindas em madeira e como sei fazer também, resolvi abrir 
          uma loja em São Fancisco Xavier, porém o momento que o país se encontrava 
          e ainda se encontra não é favorável então busquei outra forma de sustento 
          além da loja.<br/><br/>
        </h3>
        <div className="poker">
          <img className="imgPoker" src={poker1} alt="Poker1"/>
          <h3 className="jogador">
            Resolvi usufruir de um outro hobby que tenho e que pode me gerar lucro: o 
            poker. Fiz um teste para participar de um time de poker e fui aprovado 
            para entrar no 4bet que é o maior time de poker do mundo, então enquanto 
            eu tinha a loja eu jogava profissionalmente e obtive bons resultados; o 
            melhor deles foi um campeonato que tinha mais de 90 mil jogadores e eu 
            fiquei em 16º, já ganhei outros em primeiro, mas esse é um dos maiores e 
            mais competitivos torneios do mundo.
          </h3>
          <img className="imgPoker" src={poker2} alt="Poker2"/>
        </div>
        
      </div>
      <div className="tecnologia" id="tecnologia">
        <h2>Interesse pela tecnologia</h2>
        <h3>
          Mais uma vez eu estava no caminho para a construção de uma carreira, dessa 
          vez como jogador, mas ainda sentia que faltava algo. Comecei a ter certo 
          contato com a área de tecnologia através do meu irmão que também é 
          desenvolvedor e estuda na Fatec. Prestei o vestibular, entrei na faculdade 
          e quando vi como funciona a programação, me encantei logo de cara e tive a 
          certeza de que era isso que eu queria.
        </h3>
        <section className="turma">
          <img className="ads" src={ads} alt="ads"/>
        </section>
        <h3>
          Atualmente estou no segundo semestre, me esforcando e me destacando, 
          não me vejo mais seguindo outro caminho. Depois de toda essa jornada, 
          finalmente encontrei o que eu amo fazer, que é desenvolvimento. Busco muitos 
          conhecimentos além do que é passado na faculdade e estou muito focado no 
          desenvolvimento web estudando com base nos cursos da Rocketseat.
        </h3>
      </div>

      <div className="carreira" id="carreira">
        <h2>Minha carreira até o presente momento</h2>  
        <div className="anova">
          <img className="imgAnova" src={anova} alt="anova"/>
          <h3>
            Logo no primeiro semestre eu conversei com um professor e disse que eu 
            gostaria muito de fazer um estágio, mesmo que não fosse remunerado, para 
            aprender os processos de uma empresa de tecnologia e ele conseguiu uma 
            oportunidade para mim na empresa Anova Sistemas no Parque Tecnológico. 
            Lá eu aprendi na prática alguns conceitos de metodologia ágil e tive a 
            oportunidade de trabalhar com algumas ferramentas, fiz algumas raspagens 
            de dados, web screaping, tive o meu primeiro contato com docker e a 
            oportunidade de migrar dados de um sistema antigo para um novo usando 
            Django.<br/><br/>
          </h3>
        </div>
        <div className="flip">
          <h3>
            No dia 04/05/2020, consegui meu primeiro estágio remunerado na empresa 
            Flip Flop Lab, fiz um teste criando uma página para venda de uma televisão 
            Samsung usando Docker, Postgres, Node e JavaScript, porém eu estava dando 
            suporte técnico em um sistema desenvolvido por eles. Na última semana 
            resolvi sair para conseguir me dedicar aos estudos do que realmente quero 
            para minha carreira, que é o desenvolvimento de projetos.
            
          </h3>
          <img className="imgFlip" src={flip} alt="flipflip"/>
        </div>
      </div>
        <div className="fatec" id="fatec">
          <h3>
            Além disso, tenho alguns projetos simples que criei na intenção de praticar 
            e aprender, também outros projetos desenvolvidos na Fatec.<br/><br/>
            No primeiro semestre ajudei a desenvolver um sistema de irrigação automático 
            com sensores de umidade, luminosidade e temperatura usando um arduino, 
            fiz um estudo sobre a evolução dos estrangeiros no ensino superior brasileiro 
            usando Python e hoje estou desenvolvendo uma ferramenta de Data Preparation 
            com a parceria da Fatec e do SPC.<br/><br/><br/>
          </h3>

          <h3>
            Minha experiência na fatec está sendo muito interessante pois além de ter 
            uma visão geral sobre as áreas que eu posso me desenvolver e alguns conceitos 
            sobre tecnologias no geral estou fazendo meu networking e com isso também 
            alguns amigos que eu tenho certeza que vou levar para o resto da minha vida
          </h3>
          <section className="secAmigos">
            <img className="imgAmigos" src={amigos} alt="amigos"/>
          </section>
        </div>
      

      <div className="neo" id="neo">
        
        <h2>Por que a</h2>
        <img className="imgNeo" src={neo} alt="amigos"/>
        <h3>
          Realmente o foco da minha carreira está no desenvolvimento de sistemas, 
          gosto muito das tecnologias usadas na NBP e o cuidado com que a empresa 
          tem com os estagiários é maravilhoso. Digo isso sem medo de errar, pois 
          uma grande amiga trabalha na empresa e faz muitos elogios. Para mim, seria 
          uma ótima oportunidade para realmente iniciar minha carreira na área de 
          desenvolvimento. Seria maravilhoso poder trabalhar com as tecnologias que 
          eu estudo, aprender muito, compartilhar conhecimentos e ter o privilégio 
          de crescer junto com a empresa.
        </h3>
      </div>

      <div className="hobby">

        <h2>Novo hobby</h2>
        <div className="divHobby">
          <h3>
            Finalmente depois desse resumo da minha vida profissional e pessoal, 
            quero dizer que desde a metade do ano passado estou extremamente focado 
            em me desenvolver nessa nova profissão, percebi que depois de passar por 
            algumas experiências profissionais que foram muito importantes para a 
            minha vida, com elas aprendi bem como lidar com pessoas e a responsabilidade 
            profissional, hoje eu tenho certeza que encontrei o meu caminho e que a 
            programação virou um grande hobby além de uma profissão 
          </h3>
          <img className="imgHobby" src={hobby} alt="hobby"/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
