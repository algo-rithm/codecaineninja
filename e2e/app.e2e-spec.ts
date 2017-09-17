import { CodecaineNinjaPage } from './app.po';

describe('codecaine-ninja App', () => {
  let page: CodecaineNinjaPage;

  beforeEach(() => {
    page = new CodecaineNinjaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
