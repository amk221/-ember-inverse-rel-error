import Model, { attr, belongsTo } from '@ember-data/model';

export default class ParentModel extends Model {
  @attr() name;
  @attr() avatarURL;

  @belongsTo('child', { async: false }) child;
}
