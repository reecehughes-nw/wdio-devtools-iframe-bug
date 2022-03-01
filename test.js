describe('iframe Test', () => {
  it('Hide iframe', async () => {
    await browser.url('http://localhost:8081/');

    await browser.pause(2000);
    await $('#hide').click();

    // This command fails.
    await browser.pause(2000);
    });
});

