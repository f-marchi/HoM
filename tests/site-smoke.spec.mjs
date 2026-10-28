import { expect, test } from "@playwright/test";

const pages = [
  { path: ".", heading: "WE TELL STORIES" },
  { path: "ourwork/", heading: "OUR WORK" },
  { path: "about/", heading: "ABOUT US" },
  { path: "privacy/", heading: "PRIVACY POLICY" },
  { path: "terms/", heading: "TERMS AND CONTENT NOTICE" },
];

// Site checks stay independent of YouTube; real playback is checked before publication.
test.beforeEach(async ({ page }) => {
  await page.route("https://www.youtube-nocookie.com/embed/**", (route) =>
    route.fulfill({ contentType: "text/html", body: "<!doctype html><title>YouTube player</title>" }),
  );
});

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

test("home features both current videos", async ({ page }) => {
  await page.goto(".");
  await expect(page.locator(".video-card iframe")).toHaveCount(2);
  await expect(page.locator(".video-card").first().getByRole("link", { name: "Watch on YouTube" }))
    .toHaveAttribute("href", "https://youtu.be/EreWrvjHKzU");
  await expect(page.locator(".video-card").last().getByRole("link", { name: "Watch on YouTube" }))
    .toHaveAttribute("href", "https://youtu.be/PG0yp9Fyl2s");
});

test("navigation reaches the complete video library", async ({ page }) => {
  await page.goto(".");
  await page.getByRole("link", { name: "Our Work" }).first().click();
  await expect(page).toHaveURL(/\/ourwork\/$/);
  await expect(page.locator(".video-card iframe")).toHaveCount(17);
  await expect(page.getByRole("link", { name: "Watch on YouTube", exact: true })).toHaveCount(17);
  await expect(page.getByText("Film reupload in progress")).toHaveCount(0);
  await expect(page.locator("#legacy-stories").getByRole("heading", { name: "A Graduation Surrounded by Love" }))
    .toBeVisible();
  await expect(page.locator("#community-stories .video-card")).toHaveCount(1);
  await page.getByRole("link", { name: "COMMUNITY", exact: true }).click();
  await expect(page).toHaveURL(/#community-stories$/);
  await expect(page.getByRole("heading", { name: "Finding Meaning in Streetlight" })).toBeVisible();
  await page.getByRole("link", { name: "INTERVIEWS", exact: true }).click();
  await expect(page).toHaveURL(/#two-minute-medical-interviews$/);
  await expect(page.locator("#two-minute-medical-interviews .video-card")).toHaveCount(5);
});

test("video players fit the page and allow keyboard navigation", async ({ page }) => {
  await page.goto("ourwork/");
  for (const player of await page.locator(".video-card iframe").all()) {
    const box = await player.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(200);
    expect(box.height).toBeGreaterThanOrEqual(200);
    await expect(player).toHaveAttribute("title", /.+ \| .+/);
    await expect(player).toHaveAttribute("allowfullscreen", "");
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const firstCard = page.locator(".video-card").first();
  await firstCard.locator("iframe").focus();
  await expect(firstCard.locator("iframe")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(firstCard.getByRole("link", { name: "Watch on YouTube" })).toBeFocused();
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
