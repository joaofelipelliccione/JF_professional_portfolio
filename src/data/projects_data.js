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

const skillPack1 = 'HTML 5, CSS 3 & Vanilla JS';
const skillPack2 = 'React JS';
const skillPack3 = 'React JS with Redux';

const projects = {
  withInterface: [
    {
      id: 'foundationToDoList',
      title: 'To Do List',
      description: 'Development of a To Do List with some extra features. ',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/05_todo-list/index.html',
      gifPath: toDoGIF,
      startDate: '17/08/2021',
      timeInProg: '1 month and 5 days',
    },
    {
      id: 'foundationTrybewartsForm',
      title: 'Trybewarts Wizarding School Form',
      description: 'Development of a Trybewarts School of Magic form page. The theme of this project was based on the work "Harry Potter", by J.K. Rowling.',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/06_trybewarts/index.html',
      gifPath: trybewartsGIF,
      startDate: '25/08/2021',
      timeInProg: '1 month and 13 days',
    },
    {
      id: 'foundationOnlineShop',
      title: 'E-Commerce Introduction',
      description: 'Development of a fully dynamic shopping cart, based on data from the Mercado Livre® API.',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/09_shopping-cart-project/index.html',
      gifPath: onlineShop1GIF,
      startDate: '20/09/2021',
      timeInProg: '2 months and 8 days',
    },
    {
      id: 'foundationMathInMusic',
      title: 'Math in Music',
      description: 'Development of an application that informs different parameters of a specific searched song. Based on data from the Spotify® API, the program presents information such as danceability, energy, valence and more.',
      skills: skillPack1,
      URL: 'https://joaofelipelliccione.github.io/projetos-trybe/1-Fundamentos-Desenvolvimento-Web/11_math-in-music/index.html',
      gifPath: mathInMusicGIF,
      startDate: '30/09/2021',
      timeInProg: '2 months and 18 days',
    },
    {
      id: 'frontendSuperTrunfo',
      title: 'Super Trump Constructor',
      description: 'Development of an application that allows the creation of a super trump deck of cards.',
      skills: skillPack2,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_3-tryunfo/',
      gifPath: superTrunfoGIF,
      startDate: '14/10/2021',
      timeInProg: '3 months and 2 days',
    },
    {
      id: 'frontendTrybeTunes',
      title: 'Trybe Tunes',
      description: 'Development of an application capable of playing any song preview, from an artist or a band, registered on Itunes®. The users can also structure a list with their favorite tracks.',
      skills: skillPack2,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_4-trybetunes/',
      gifPath: trybeTunesGIF,
      startDate: '21/10/2021',
      timeInProg: '3 months and 9 days',
    },
    {
      id: 'frontendOnlineShop',
      title: 'E-Commerce 2.0',
      description: 'Development of a simplified version, without database persistence, of an online store. To structure the respective project, there was data consumption of the Mercado Livre® API.',
      skills: skillPack2,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_5-online_store/#/',
      gifPath: onlineShop2GIF,
      startDate: '29/10/2021',
      timeInProg: '3 months and 17 days',
    },
    {
      id: 'trybeWallet',
      title: 'Traveling Wallet',
      description: 'Development of an expense control application with a built-in currency converter. To structure the respective project, the Economy-Awesomeapi® API was used.',
      skills: skillPack3,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_6-trybewallet/#/',
      gifPath: trybeWalletGIF,
      startDate: '19/11/2021',
      timeInProg: '4 months and 7 days',
    },
    {
      id: 'trybeTrivia',
      title: 'Trivia Game',
      description: 'Development of a question-and-answer game. To structure the respective project, the Open Trivia® API was used.',
      skills: skillPack3,
      URL: 'https://joaofelipelliccione.github.io/trybe_frontend_7-trivia_game/#/',
      gifPath: triviaGIF,
      startDate: '24/11/2021',
      timeInProg: '4 months and 12 days',
    },
    {
      id: 'starWarsDataTable',
      title: 'Star Wars Planets',
      description: 'Development of a Star Wars planets table with filtering mechanism. To structure the respective project, there was consumption of the Planet List® API.',
      skills: 'React JS with focus on functional components, Context API and Hooks',
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
      title: 'Testing with React Testing Library (RTL)',
      description: 'Test development for a React JS application with Router, but without Redux.',
      skills: 'React Testing Library',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/2-Frontend/06-project-react-testing-library/src/tests',
      startDate: '08/11/2021',
      timeInProg: '3 months and 24 days',
    },
    {
      id: 'dockerToDo',
      title: 'Docker Introduction',
      description: 'Development of a project whose objectives range from the "containerization" of front-end, back-end and testing applications, to the structuring of a connection between them. Concepts such Dockerfile built, and container orchestration (Docker Compose) were encompassed.',
      skills: 'Docker',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/01_docker-to-do-app',
      startDate: '20/01/2022',
      timeInProg: '6 months and 4 days',
    },
    {
      id: 'modelingWithMySQL',
      title: 'MySQL - One For All',
      description: 'Development of a project whose initial objective was the normalization of tables and the creation of a previously modeled database. After that, countless queries were created to practice the use of MySQL.',
      skills: 'MySQL',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/03_MySQL-Database-Modeling',
      startDate: '04/02/2022',
      timeInProg: '6 months and 19 days',
    },
    // {
    //   id: 'CRUDApiWithoutORM',
    //   title: '1ª API RESTful',
    //   description: 'Desenvolvimento de uma CRUD API (Create, Read, Update e Delete) RESTful com endpoints voltados à leitura e edição de um banco de dados MySQL. Para estruturar o respectivo projeto, utilizou-se o Node.JS como ambiente de execução e o framework Express. Por fim, ainda foi necessário arquitetar testes unitários a partir do Sinon e Chai para, pelo menos, 35% das camadas da aplicação.',
    //   skills: 'Node.JS',
    //   URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/05_NodeJs-CRUD-API-SQL',
    //   startDate: '25/02/2022',
    //   timeInProg: '7 meses e 12 dias',
    // },
    {
      id: 'CRUDApiWithORM',
      title: 'RESTful API built with Sequelize',
      description: 'Development of a RESTful CRUD API with endpoints aiming the reading and editing of a MySQL database. To structure the respective project there were use of Node.JS, Express and the ORM Sequelize.',
      skills: 'Node.JS',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/06_NodeJs-CRUD-API-ORM',
      startDate: '11/03/2022',
      timeInProg: '7 months and 27 days',
    },
    {
      id: 'CRUDApiTypescriptWithORM',
      title: 'RESTful Typescript API built with Sequelize',
      description: 'Development of a RESTful CRUD API with endpoints aiming the reading and editing of a MySQL database. To structure the respective project there were use of Node.JS, Express, Typescript and the ORM Sequelize..',
      skills: 'Node.JS & Typescript',
      URL: 'https://github.com/joaofelipelliccione/joaofelipelliccione.github.io/tree/main/projetos-trybe/3-Backend/08_NodeJs-CRUD-API-Typescript-ORM',
      startDate: '29/03/2022',
      timeInProg: '8 months and 17 days',
    },
  ],
};

export default projects;
