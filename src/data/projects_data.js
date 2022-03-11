import toDoGIF from '../gifs/gif-toDo.gif';
import trybewartsGIF from '../gifs/gif-trybewarts.gif';
import onlineShop1GIF from '../gifs/gif-onlineShop1.gif';
import mathInMusicGIF from '../gifs/gif-mathInMusic.gif';
import superTrunfoGIF from '../gifs/gif-superTrunfo.gif';
import trybeTunesGIF from '../gifs/gif-trybeTunes.gif';
import onlineShop2GIF from '../gifs/gif-onlineShop2.gif';
import trybeWalletGIF from '../gifs/gif-trybeWallet.gif';
import triviaGIF from '../gifs/gif-trivia.gif';
import starWarsGIF from '../gifs/gif-starWars.gif';

const skillPack1 = 'HTML, CSS e JS puro';
const skillPack2 = 'React puro';
const skillPack3 = 'React com Redux e Thunk';

const projects = {
  withInterface: [
    {
      id: 'foundationToDoList',
      title: 'To Do List',
      description: 'Desenvolvimento de um To Do List com alguns features extras.',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/05_todo-list/index.html',
      gifPath: toDoGIF,
      startDate: '17/08/2021',
      timeInProg: '1 mês e 5 dias',
    },
    {
      id: 'foundationTrybewartsForm',
      title: 'Trybewarts Wizarding School Form',
      description: 'Desenvolvimento de uma página de formulário da Escola de Magia Trybewarts. O tema desse projeto foi baseado na obra "Harry Potter", de J. K. Rowling.',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/06_trybewarts/index.html',
      gifPath: trybewartsGIF,
      startDate: '25/08/2021',
      timeInProg: '1 mês e 13 dias',
    },
    {
      id: 'foundationOnlineShop',
      title: 'E-Commerce Introduction',
      description: 'Desenvolvimento de um carrinho de compras totalmente dinâmico, a partir do consumo de dados oriundos da API do Mercado Livre®.',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/09_shopping-cart-project/index.html',
      gifPath: onlineShop1GIF,
      startDate: '20/09/2021',
      timeInProg: '2 meses e 8 dias',
    },
    {
      id: 'foundationMathInMusic',
      title: 'Math in Music',
      description: 'Desenvolvimento de uma aplicação que informa diversos parâmetros de uma determinada música pesquisada. A partir do consumo de dados oriundos da API do Spotify®, o programa apresenta dados como Dançabilidade, Energia, Valência e outros.',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/11_math-in-music/index.html',
      gifPath: mathInMusicGIF,
      startDate: '30/09/2021',
      timeInProg: '2 meses e 18 dias',
    },
    {
      id: 'frontendSuperTrunfo',
      title: 'Super Trunfo Constructor',
      description: 'Desenvolvimento de uma aplicação que possibilita a criação de um baralho no estilo Super Trunfo.',
      skills: skillPack2,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_3-tryunfo/',
      gifPath: superTrunfoGIF,
      startDate: '14/10/2021',
      timeInProg: '3 meses e 2 dias',
    },
    {
      id: 'frontendTrybeTunes',
      title: 'Trybe Tunes',
      description: 'Desenvolvimento de uma aplicação capaz de reproduzir previews de músicas, das mais variadas bandas e artistas, e ainda criar uma lista de favoritas. Para estruturar o respectivo projeto, houve consumo da API do Itunes®.',
      skills: skillPack2,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_4-trybetunes/',
      gifPath: trybeTunesGIF,
      startDate: '21/10/2021',
      timeInProg: '3 meses e 9 dias',
    },
    {
      id: 'frontendOnlineShop',
      title: 'E-Commerce 2.0',
      description: 'Desenvolvimento de uma versão simplificada, sem persistência no banco de dados, de uma loja online. Para estruturar o respectivo projeto, houve consumo da API do Mercado Livre®.',
      skills: skillPack2,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_5-online_store/#/',
      gifPath: onlineShop2GIF,
      startDate: '29/10/2021',
      timeInProg: '3 meses e 17 dias',
    },
    {
      id: 'trybeWallet',
      title: 'Traveling Wallet',
      description: 'Desenvolvimento de uma carteira de controle de gastos com conversor de moedas. Para estruturar o respectivo projeto, houve consumo da API Economia-Awesomeapi®.',
      skills: skillPack3,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_6-trybewallet/#/',
      gifPath: trybeWalletGIF,
      startDate: '19/11/2021',
      timeInProg: '4 meses e 7 dias',
    },
    {
      id: 'trybeTrivia',
      title: 'Trivia Game',
      description: 'Desenvolvimento, em equipe, de um jogo de perguntas e respostas baseado no programa "show do milhão". Para estruturar o respectivo projeto, houve consumo da API Open Trivia®.',
      skills: skillPack3,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_7-trivia_game/#/',
      gifPath: triviaGIF,
      startDate: '24/11/2021',
      timeInProg: '4 meses e 12 dias',
    },
    {
      id: 'starWarsDataTable',
      title: 'Star Wars Planets',
      description: 'Desenvolvimento de uma tabela, com filtros, dos planetas do universo de Star Wars. Para estruturar o respectivo projeto, houve consumo da API Planet List®.',
      skills: 'React com foco em componentes funcionais. Utilização de Context API e Hooks para controlar os estados globais.',
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_8-starwars_planets_search/',
      gifPath: starWarsGIF,
      startDate: '06/12/2021',
      timeInProg: '4 meses e 24 dias',
    },
  ],
  withoutInterface: [
    // {
    //   id: 'zooFunctions',
    //   title: 'Zoo System (ES6 & HOFs)',
    //   description: 'Desenvolvimento de um sistema, estruturado a partir de Higher Order Functions e ES6, para um Zoológico (que não existe).',
    //   skills: 'JS puro com ênfase em HOFs e ES6',
    //   URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/08_zoo-functions/src',
    //   startDate: '14/09/2021',
    //   timeInProg: '2 meses e 2 dias',
    // },
    {
      id: 'reactTestingLibrary',
      title: 'Testando com React Testing Library (RTL)',
      description: 'Desenvolvimento de testes para uma aplicação React com Router, porém sem Redux.',
      skills: 'React Testing Library',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/2-Frontend/06-project-react-testing-library/src/tests',
      startDate: '08/11/2021',
      timeInProg: '3 meses e 24 dias',
    },
    {
      id: 'dockerToDo',
      title: 'Introdução ao Docker',
      description: 'Desenvolvimento de um projeto cujos objetivos vão desde a "conteinerização" de aplicações de front-end, back-end e testes, até a estruturação de uma conexão entre elas. Conceitos como desenvolvimento de Dockerfiles e orquestração de containers (Docker Compose), foram englobados.',
      skills: 'Docker',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/01_docker-to-do-app',
      startDate: '20/01/2022',
      timeInProg: '6 meses e 4 dias',
    },
    {
      id: 'modelingWithMySQL',
      title: 'MySQL - One For All',
      description: 'Desenvolvimento de um projeto cujo objetivo inicial foi a normalização de tabelas e a criação de um banco de dados previamente modelado. Feito isso, inúmeras queries foram criadas a partir das principais funções e conceitos necessários para uma utilização avançada do MySQL.',
      skills: 'MySQL',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/03_MySQL-Database-Modeling',
      startDate: '04/02/2022',
      timeInProg: '6 meses e 19 dias',
    },
    {
      id: 'CRUDApiWithoutORM',
      title: '1ª API RESTful',
      description: 'Desenvolvimento de uma CRUD API (Create, Read, Update e Delete) RESTful com endpoints voltados à leitura e edição de um banco de dados MySQL. Para estruturar o respectivo projeto, utilizou-se o Node.JS como ambiente de execução e o framework Express. Por fim, ainda foi necessário arquitetar testes unitários a partir do Sinon e Chai para, pelo menos, 35% das camadas da aplicação.',
      skills: 'Node.JS',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/05_NodeJs-CRUD-API-SQL',
      startDate: '25/02/2022',
      timeInProg: '7 meses e 12 dias',
    },
    // {
    //   id: 'CRUDApiWithORM',
    //   title: 'API RESTful com Sequelize',
    //   description: 'Desenvolvimento de uma CRUD API (Create, Read, Update e Delete) RESTful com endpoints voltados à leitura e edição de um banco de dados MySQL. Para estruturar o respectivo projeto, utilizou-se o Node.JS como ambiente de execução, o framework Express e o ORM Sequelize.',
    //   skills: 'Node.JS',
    //   URL: 'COMPLETAR',
    //   startDate: '11/03/2022',
    //   timeInProg: '7 meses e 27 dias',
    // },
  ],
};

export default projects;
