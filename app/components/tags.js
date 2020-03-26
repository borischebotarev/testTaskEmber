import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';

export default class TagsComponent extends Component {
  @tracked tags = [];

  @action
  addTag(tag) {
    console.log(tag);
    this.tags.push(tag);
    console.log(this.tags);
  }

  @action
  removeTagAtIndex(index) {
    console.log(index);
    this.tags.removeAt(index);
  }
}
