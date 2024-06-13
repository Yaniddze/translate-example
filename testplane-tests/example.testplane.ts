describe("test", () => {
  it("example", async ({ browser }) => {
    await browser.url("https://example.com/");

    const description = await browser.$("p");

    expect(description).toHaveTextContaining(
      "for use in illustrative examples in documents"
    );
  });
});
