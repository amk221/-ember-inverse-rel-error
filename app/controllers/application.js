import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get avatar() {
    console.log(`avatar getter`);
    console.log(`child.isDestroying = ${this.model.isDestroying}`);
    console.log(`child.parent = ${this.model.belongsTo('parent').value()}`);

    return this.model.parent.avatarURL;
  }

  willDestroy() {
    console.log('controller willDestroy');
  }
}
