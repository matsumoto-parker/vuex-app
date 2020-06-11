import { actions } from '../../../../store/modules/todos/actions';

describe('store/modules/todos/actionのテスト', () => {
  const createMockContext = (callbackForCommit) => {
    return {
      commit: callbackForCommit
    };
  }

  it('complete　のテスト', () => {
    let mutationType;
    let committedPayload;
    const context = createMockContext((type, payload) => {
      mutationType = type;
      committedPayload = payload;
    });
    const payload = { id: 999 };
    actions.complete(context, payload);

    expect(mutationType).toEqual('completeTodo');
    expect(committedPayload).toEqual(payload);
  });

  it('init　のテスト', (done) => {
    let mutationType;
    let committedPayload;
    const context = createMockContext((payload) => {
      mutationType = payload.type;
      committedPayload = payload;
    });
    const payload = { id: 999 };
    actions.init(context, payload);

    setTimeout(() => {
      expect(mutationType).toEqual('initTodo');
      expect(committedPayload).toEqual({
        ...payload,
        type: mutationType
      });

      done();
    }, 1050);
  });
});