export class WaysOfTimePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ways-of-time-app h1')).getText();
  }
}
