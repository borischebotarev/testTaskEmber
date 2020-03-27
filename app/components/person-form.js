import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

const FRAMEWORKS = ['React', 'Angular', 'Vue', 'Ember'];
const ROLES = ['frontend', 'backend', 'fullstack'];

export default class PersonFormComponent extends Component {
  @tracked firstName = this.args.editPerson ? this.args.editPerson.firstName : "";
  @tracked lastName = this.args.editPerson ? this.args.editPerson.lastName : "";
  @tracked role = this.args.editPerson ? this.args.editPerson.role : "";
  @tracked framework = this.args.editPerson ? this.args.editPerson.framework : "";

  frameworks = FRAMEWORKS;
  roles = ROLES;

  @action
  onClickHire() {
    // this.transitionTo('index');
    console.log('onClickHire');
  }
  @action
  onClickFire() {
    console.log('onClickFire');
  }
  @action
  onClickSave() {
    console.log('onClickSave');
  }

}
