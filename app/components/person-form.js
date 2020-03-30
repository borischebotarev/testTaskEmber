import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import { inject as service } from '@ember/service';

const FRAMEWORKS = ['React', 'Angular', 'Vue', 'Ember'];
const ROLES = ['frontend', 'backend', 'fullstack'];

export default class PersonFormComponent extends Component {
  @service peopleData;
  @service router;

  @tracked firstName = this.args.editPerson ? this.args.editPerson.firstName : "";
  @tracked lastName = this.args.editPerson ? this.args.editPerson.lastName : "";
  @tracked role = this.args.editPerson ? this.args.editPerson.role : "";
  @tracked framework = this.args.editPerson ? this.args.editPerson.framework : "";

  frameworks = FRAMEWORKS;
  roles = ROLES;

  @action
  onClickHire() {
    if (!this.validateForm()) return false;
    const newData = {
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role,
      framework: this.framework,
      image: `avatar${this.getRandomNumber()}.png`,
      id: this.peopleData.maxIndex + 1,
    };
    this.peopleData.add(newData);
    this.router.transitionTo('index');
  }
  @action
  onClickFire() {
    this.peopleData.remove(this.args.editPerson.id);
    this.router.transitionTo('index');
  }
  @action
  onClickSave() {
    if (!this.validateForm()) return false;
    const updateData = {
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role,
      framework: this.framework,
      image: this.args.editPerson.image,
      id: this.args.editPerson.id,
    };
    this.peopleData.update(updateData);
    this.router.transitionTo('index');
  }

  validateForm() {
    if (!this.firstName.trim().length || !this.lastName.trim().length) {
      const invalidFields = [];
      if (!this.firstName.trim().length) {
        invalidFields.push("First Name");
      }
      if (!this.lastName.trim().length) {
        invalidFields.push("Last Name");
      }
      alert(`${invalidFields.join(' and ')} field${invalidFields.length === 1 ? '' : 's'} ${invalidFields.length === 1 ? 'is' : 'are'} required. Only spaces are not allowed`);
      return false;
    }
    return true;
  }

  getRandomNumber() {
    return Math.floor(1 + Math.random() * 3);
  }
}
