import localesReducer, { initialState, localesActions } from './localesReducer';

describe('localesReducer (store)', () => {
  it('returns default state', () => {
    expect(localesReducer()).toEqual(initialState);
  });

  it('handles UPDATE_LANGUAGE', () => {
    expect(initialState).toEqual({ currentLocale: 'cs' });
    const updatedState = localesReducer(undefined, localesActions.updateLocale('en'));
    expect(updatedState).toEqual({ currentLocale: 'en' });
  });
});
