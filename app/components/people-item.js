import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";

export default class PeopleItemComponent extends Component {
  @service peopleData;
  @tracked isShow = true;

  @action
  onClickFire() {
    this.peopleData.remove(this.args.person.id);
    this.isShow = false
  }
}
