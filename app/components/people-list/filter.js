import Component from '@glimmer/component';

export default class PeopleListFilterComponent extends Component {
  get results() {
    let { people, role, framework } = this.args;

    if (role) {
      people = people.filter(developer => developer.role.toLowerCase().includes(role.toLowerCase()));
    }

    if (framework) {
      people = people
        .filter(developer => developer.framework
                                        .some(el => el.toLowerCase().includes(framework.toLowerCase())));
    }

    return people;
  }
}
