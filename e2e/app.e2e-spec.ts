import { ResourceModulePage } from './app.po';

describe('resource-module App', () => {
  let page: ResourceModulePage;

  beforeEach(() => {
    page = new ResourceModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
