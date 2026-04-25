import { expect, test } from "@playwright/test";

const pages = [
  { path: ".", heading: "WE TELL STORIES" },
  { path: "ourwork/", heading: "OUR WORK" },
  { path: "about/", heading: "ABOUT US" },
  { path: "copy-of-terms-and-conditions/", heading: "PRIVACY POLICY" },
  { path: "copy-2-of-donate/", heading: "TERMS AND CONDITIONS" },
  { path: "copy-of-privacy-policy/", heading: "REFUND POLICY" },
];

for (const pageInfo of pages) {
  test(`${pageInfo.path} renders`, async ({ page }) => {
    await page.goto(pageInfo.path);
    await expect(page.getByText(pageInfo.heading).first()).toBeVisible();
  });
}

test("navigation and videos are usable", async ({ page }) => {
  await page.goto(".");
  await page.getByRole("link", { name: "Our Work" }).first().click();
  await expect(page).toHaveURL(/\/HoM\/ourwork\/$/);
  await expect(page.locator("[data-video-source]")).toHaveCount(13);
  await expect(page.getByRole("link", { name: "Watch on YouTube" }).first()).toHaveAttribute(
    "href",
    /https:\/\/youtu\.be\//,
  );
});

test("contact submit is a mailto fallback", async ({ page }) => {
  await page.goto("about/");
  await expect(page.getByRole("button", { name: "SUBMIT" })).toBeVisible();
  await expect(page.locator("form")).toHaveAttribute(
    "action",
    /mailto:fran@heroesofmedicine\.org/,
  );
});
