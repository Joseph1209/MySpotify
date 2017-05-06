import { NgspotifyPage } from './app.po';

describe('ngspotify App', () => {
  let page: NgspotifyPage;

  beforeEach(() => {
    page = new NgspotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
