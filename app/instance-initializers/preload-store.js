export function initialize(appInstance) {
  const store = appInstance.lookup('service:store');
  const myService = appInstance.lookup('service:my-service');

  store.pushPayload('parent', {
    parent: {
      id: 1,
      name: 'Parent 1',
      avatarURL: 'parent.jpg',
      child: 1
    }
  });

  store.pushPayload('child', {
    child: {
      id: 1,
      name: 'Child 1',
      avatarURL: 'child.jpg'
    }
  });

  myService.parent = store.peekRecord('parent', 1);
}

export default {
  initialize
};
