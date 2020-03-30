import Model, { attr }from '@ember-data/model';

export default class PersonModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr id;
  @attr framework;
}
