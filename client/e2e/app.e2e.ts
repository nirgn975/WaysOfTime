import { WaysOfTimePage } from './app.po';

describe('ways-of-time App', function() {
  let page: WaysOfTimePage;

  beforeEach(() => {
    page = new WaysOfTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ways-of-time works!');
  });
});
