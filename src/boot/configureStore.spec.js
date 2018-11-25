import configureStore from './configureStore';

describe('configureStore', () => {
  it('configures store without initial state', () => {
    expect(configureStore().store.getState())
      .toEqual(expect.objectContaining({ locales: { currentLocale: 'cs' } }));
  });

  it('configures store with initial state', () => {
    expect(configureStore({ locales: { currentLocale: 'en' } }).store.getState())
      .toEqual(expect.objectContaining({ locales: { currentLocale: 'en' } }));
  });
});
