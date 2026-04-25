import { expect, test } from "@playwright/test";

const pages = [
  { path: ".", heading: "WE TELL STORIES" },
  { path: "ourwork/", heading: "OUR WORK" },
  { path: "about/", heading: "ABOUT US" },
  { path: "privacy/", heading: "PRIVACY POLICY" },
  { path: "terms/", heading: "TERMS AND CONTENT NOTICE" },
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
  await expect(page).toHaveURL(/\/ourwork\/$/);
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

test("unknown routes show the 404 page", async ({ page }) => {
  await page.goto("missing-page/");
  await expect(page.getByRole("heading", { name: "PAGE NOT FOUND" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Privacy Policy" }).first()).toHaveAttribute(
    "href",
    "/privacy/",
  );
});
