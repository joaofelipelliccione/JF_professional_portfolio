import allProjectsArray from '../../data/projects_data';

const INITIAL_STATE = {
  projectsData: allProjectsArray,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PROJECTS_DATA':
    return {
      ...state,
      projectsData: action.data,
    };
  default:
    return state;
  }
};

export default reducer;

/* OBS:
- Estou criando esse Reducer com o intuito de salvar o array de objetos 'projects_data' na Store da aplicação, caso venha à precisar no futuro.
- Tendo em vista que, à princípio, o array de objetos 'projects_data' não será alterado dependendo da interação do usuário [mapDispatchToProps], não será necessário criar uma Action Creator.
- Nesse momento, eu só precisarei realizar a leitura do array de objetos 'projects_data' [mapStateToProps].
*/
