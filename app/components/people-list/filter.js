import Component from '@glimmer/component';

export default class PeopleListFilterComponent extends Component {
  get results() {
    let { people, role, framework } = this.args;

    if (role) {
      people = people.filter(developer => developer.role.includes(role));
    }

    if (framework) {
      people = people.filter(developer => developer.framework.join('').includes(framework));
    }

    return people;
  }
}
