import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PeopleListComponent extends Component {
  @tracked framework = '';
  @tracked role = '';
}
