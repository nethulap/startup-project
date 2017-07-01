import { AadarPage } from './app.po';

describe('aadar App', () => {
  let page: AadarPage;

  beforeEach(() => {
    page = new AadarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
