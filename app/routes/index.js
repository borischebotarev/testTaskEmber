import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

  model() {
    // const data = localStorage.getItem('developers');
    // return data ? JSON.parse(data) : []
    return [
      {
        image: 'teaching-tomster.png',
        firstName: 'firstName1',
        lastName: 'lastName1',
        role: 'front',
        id: '1',
        framework: ['angular', 'react'],
      },
      {
        image: 'teaching-tomster.png',
        firstName: 'firstName2',
        lastName: 'lastName2',
        role: 'back',
        id: '2',
        framework: ['angular', 'react'],
      },
      {
        image: 'teaching-tomster.png',
        firstName: 'firstName3',
        lastName: 'lastName3',
        role: 'full',
        id: '3',
        framework: ['angular', 'react'],
      },
    ];
  }
}
