import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

  async model() {
    const dataLS = localStorage.getItem('developers');
    const data = dataLS ? JSON.parse(dataLS).data : null;
    return data ? data.map(developer => ({id: developer.id, ...developer.attributes})) : []
  }
}
