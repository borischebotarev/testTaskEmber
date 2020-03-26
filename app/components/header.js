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
    const name = indexSlash && appData ? JSON.parse(appData).find(developer => developer.id === urlString.slice(indexSlash)) : null;
    return name ? `${name.firstName} ${name.lastName}` : urlString || 'Developers';
  }
}
