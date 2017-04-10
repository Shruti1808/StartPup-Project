import { StartpupPage } from './app.po';

describe('startpup App', function() {
  let page: StartpupPage;

  beforeEach(() => {
    page = new StartpupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
