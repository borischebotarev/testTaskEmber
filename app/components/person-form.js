import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import { inject as service } from '@ember/service';

const FRAMEWORKS = ['React', 'Angular', 'Vue', 'Ember'];
const ROLES = ['frontend', 'backend', 'fullstack'];

export default class PersonFormComponent extends Component {
  @service peopleData;

  @tracked firstName = this.args.editPerson ? this.args.editPerson.firstName : "";
  @tracked lastName = this.args.editPerson ? this.args.editPerson.lastName : "";
  @tracked role = this.args.editPerson ? this.args.editPerson.role : "";
  @tracked framework = this.args.editPerson ? this.args.editPerson.framework : "";

  frameworks = FRAMEWORKS;
  roles = ROLES;

  @action
  onClickHire() {
    const newData = {
      firstName: `${this.firstName}`,
      lastName: `${this.lastName}`,
      role: `${this.role}`,
      framework: this.framework.concat(),
      image: 'teaching-tomster.png',
      id: this.peopleData.maxIndex + 1,
    };
    this.peopleData.add(Object.assign({}, newData));
  }
  @action
  onClickFire() {
    this.peopleData.add(this.args.editPerson.id);
  }
  @action
  onClickSave() {
    const updateData = {
      firstName: `${this.firstName}`,
      lastName: `${this.lastName}`,
      role: `${this.role}`,
      framework: this.framework.concat(),
      id: this.args.editPerson.id,
    };
    this.peopleData.update(Object.assign({}, updateData));
  }

}
