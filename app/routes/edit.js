import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditRoute extends Route {
  @service peopleData;

  model({ id }) {
    return this.peopleData.getItemById(+id);
  }
}
