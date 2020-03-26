import Component from '@glimmer/component';

export default class PeopleItemComponent extends Component {
  constructor(...a) {
    super(...a);
    console.log(a);
    console.log(this.args);
    console.log(this.args.person);
  }

}
