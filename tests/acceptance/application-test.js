import { module, test } from 'qunit';
import { visit, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Pretender from 'pretender';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.server = new Pretender();

    this.server.get('/children/1', () => {
      return [
        200,
        {},
        JSON.stringify({
          child: {
            id: 1,
            name: 'Child 1',
            avatarURL: 'child.jpg',
            parent: 1
          },
          parents: [
            {
              id: 1,
              name: 'Parent 1',
              avatarURL: 'parent.jpg'
            }
          ]
        })
      ];
    });
  });

  hooks.afterEach(function () {
    this.server.shutdown();
  });

  test('visiting /', async function(assert) {
    assert.expect(1);

    await visit('/');

    assert.dom('img').hasAttribute('src', 'parent.jpg');

    await settled();

    console.log('----- end of test -----');
  });
});
