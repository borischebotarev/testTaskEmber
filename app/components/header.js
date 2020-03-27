import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service router;

  get isRoot() {
    return this.url === 'Developers';
  }

  get url() {
    const urlString = this.router.currentURL.slice(1);
    const indexSlash = urlString.indexOf('/') + 1;
    const appData = localStorage.getItem('developers');
    const person = indexSlash && appData ? JSON.parse(appData).data.find(developer => `${developer.id}` === urlString.slice(indexSlash)) : null;
    return person ? `${person.attributes.firstName} ${person.attributes.lastName}` : urlString || 'Developers';
  }
}
