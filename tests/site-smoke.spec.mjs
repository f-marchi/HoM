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

test("home has a page heading", async ({ page }) => {
  await page.goto(".");
  await expect(page.getByRole("heading", { name: "Heroes of Medicine Foundation" })).toHaveCount(1);
});

test("navigation and video reupload notices are usable", async ({ page }) => {
  await page.goto(".");
  await page.getByRole("link", { name: "Our Work" }).first().click();
  await expect(page).toHaveURL(/\/ourwork\/$/);
  await expect(page.locator("[data-video-state='unavailable']")).toHaveCount(13);
  await expect(page.getByText("Film reupload in progress")).toHaveCount(13);
  await expect(page.locator("a[href*='youtu']")).toHaveCount(0);
});

test("contact uses a direct email link", async ({ page }) => {
  await page.goto("about/");
  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "EMAIL US" })).toHaveAttribute(
    "href",
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
