import { DevopsDemoPage } from './app.po';

describe('devops-demo App', () => {
  let page: DevopsDemoPage;

  beforeEach(() => {
    page = new DevopsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
