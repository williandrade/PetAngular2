import { PetAngular2Page } from './app.po';

describe('pet-angular2 App', () => {
  let page: PetAngular2Page;

  beforeEach(() => {
    page = new PetAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
