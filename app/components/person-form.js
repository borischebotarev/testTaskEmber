import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PersonFormComponent extends Component {
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
