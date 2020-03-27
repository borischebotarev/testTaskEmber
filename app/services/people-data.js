import Service from '@ember/service';
const KEY_LOCAL_STORAGE =  'developers2';

export default class PeopleDataService extends Service {
  constructor(...params) {
    super(...params);
    const dataLS = localStorage.getItem(KEY_LOCAL_STORAGE);
    this.items = dataLS ? JSON.parse(dataLS) : [];
    const itemWithMaxIndex = this.items.reduce((prev, cur) => {
      if (prev.b > cur.b) return prev;
      return cur
    }, 0);
    this.maxIndex = itemWithMaxIndex ? itemWithMaxIndex.id : 0;
  }

  getAllItems() {
    return this.items;
  }

  getItemById(id) {
    return this.items.find(developer => developer.id === id);
  }

  add(newItem) {
    this.items.push(newItem);
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.items))
  }

  remove(id) {
    this.items = this.items.filter(developer =>  developer.id !== id);
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.items))
  }

  update(item) {
    let updatedItem = this.items.find(developer => developer.id === item.id);
    updatedItem.firstName = item.firstName;
    updatedItem.lastName = item.lastName;
    updatedItem.role = item.role;
    updatedItem.framework = item.framework;
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.items))
  }
}
