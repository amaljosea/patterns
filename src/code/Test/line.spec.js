import {testFunction} from './line'

describe('line', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should retun correct value', () => {
    testFunction()
  });
});
