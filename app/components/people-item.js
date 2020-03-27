import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PeopleItemComponent extends Component {
  @service peopleData;

  @action
  onClickFire() {
    this.peopleData.remove(this.args.person.id);
  }
}
