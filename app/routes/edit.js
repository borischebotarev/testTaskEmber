import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditRoute extends Route {
  @service router;
  model(params) {
    const appData = localStorage.getItem('developers');
    const person = appData ? JSON.parse(appData).data.find(developer => `${developer.id}` === params.id) : null;
    return person ? {id: person.id, ...person.attributes} : null;
  }
}
