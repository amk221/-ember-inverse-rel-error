import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChildModel extends Model {
  @attr() name;
  @attr() avatarURL;

  @belongsTo('parent', { async: false }) parent;
}
