describe('A test for App', () => {
  beforeEach(() => {
    page = mountReactAppAt('/');
  });
  it('should pass', () => {
    console.log(page.text())
    expect(true).toEqual(true)
  })
})
