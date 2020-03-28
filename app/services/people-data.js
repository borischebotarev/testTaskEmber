import Service from '@ember/service';
const KEY_LOCAL_STORAGE =  'developers2';

export default class PeopleDataService extends Service {
  constructor(...params) {
    super(...params);
    this.connectToLS();
  }

  connectToLS() {
    const dataLS = localStorage.getItem(KEY_LOCAL_STORAGE);
    this.items = dataLS ? JSON.parse(dataLS) : [];
    this.sortArray();
    const itemWithMaxIndex = this.items.reduce((prev, cur) => {
      if (prev.b > cur.b) return prev;
      return cur
    }, 0);
    this.maxIndex = itemWithMaxIndex ? itemWithMaxIndex.id : 0;
  }

  sortArray() {
    this.items.sort((a, b) => a.id > b.id ? 1 : -1);
  }

  setLS() {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.items))
  }

  getAllItems() {
    this.connectToLS();
    return this.items;
  }

  getItemById(id) {
    return this.items.find(developer => developer.id === id);
  }

  add(newItem) {
    this.items.push(newItem);
    this.sortArray();
    this.setLS();
  }

  remove(id) {
    this.items = this.items.filter(developer =>  developer.id !== id);
    this.setLS();
    this.connectToLS();
  }

  update(item) {
    this.remove(item.id);
    this.add(item);
  }
}
