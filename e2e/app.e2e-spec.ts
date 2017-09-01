import { FlipzonPage } from './app.po';

describe('flipzon App', () => {
  let page: FlipzonPage;

  beforeEach(() => {
    page = new FlipzonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
