import { Ng2TodoPage } from './app.po';

describe('ng2-todo App', () => {
  let page: Ng2TodoPage;

  beforeEach(() => {
    page = new Ng2TodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
