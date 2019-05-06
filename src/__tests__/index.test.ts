import { actions } from '../index';

test('actions', () => {
  const result = actions.meth1();
  expect(result).toMatchSnapshot();

});
