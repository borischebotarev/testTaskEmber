import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service router;
  @service peopleData;

  get isRoot() {
    return this.url === 'Developers';
  }

  get url() {
    const urlString = this.router.currentURL.slice(1);
    const indexSlash = urlString.indexOf('/') + 1;
    const personData = indexSlash ? this.peopleData.getItemById(+urlString.slice(indexSlash)) : null;
    return personData ? `${personData.firstName} ${personData.lastName}` : urlString || 'Developers';
  }
}
