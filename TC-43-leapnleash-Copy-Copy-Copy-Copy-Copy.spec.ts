import { leapwork } from "./leapwork";

import { LeashImport } from "@assets/leash import";

leapwork.variables.set("searchFoodToysCare", "willow nest", leapwork.storage.LOCAL);
const lw__searchFoodToysCare = leapwork.variables.get("searchFoodToysCare", leapwork.storage.LOCAL) as string;

leapwork.variables.set("recipientName", "himanshi", leapwork.storage.LOCAL);
const lw__recipientName = leapwork.variables.get("recipientName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("emailAddress", "hiji@leapwork.com", leapwork.storage.LOCAL);
const lw__emailAddress = leapwork.variables.get("emailAddress", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: ZYeZRuGZ
await leapwork.step("Click the Products link in the primary navigation", async () => {
    // Click link "Products"
    await page.getByRole('link', { name: 'Products', exact: true }).click();
}, { relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[1]" });

// ai-studio-step-id: pwmc1iun00
await leapwork.step("Wait for 3 minutes", async () => {
    await page.waitForTimeout(180000);
}, { action: "wait" });

// ai-studio-step-id: S5NTa068
await leapwork.step("Click the Search products field in the header", async () => {
    // Click searchbox "Search products"
    await page.getByRole('searchbox', { name: 'Search products' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"searchInput\"]" });

// ai-studio-step-id: pwhyaz5l00
await leapwork.step("Wait for 3 minutes", async () => {
    await page.waitForTimeout(180000);
}, { action: "wait" });

// ai-studio-step-id: pwmelf5w00
await leapwork.step(`Fill the Search products field with "${lw__searchFoodToysCare}"`, async () => {
    // Fill searchbox "Search products"
    await page.getByRole('searchbox', { name: 'Search products' }).fill(String(lw__searchFoodToysCare));
}, { action: "input", relativeXpath: "//*[@id=\"searchInput\"]" });

// ai-studio-step-id: pw7i3cln00
await leapwork.step("Wait for 3 minutes", async () => {
    await page.waitForTimeout(180000);
}, { action: "wait" });

// ai-studio-step-id: pw1wid85v0
await leapwork.step("Press Enter to submit the form", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: 9ac13ba7
await leapwork.step("Wait for 3 minutes", async () => {
    await page.waitForTimeout(180000);
}, { action: "wait" });

// ai-studio-step-id: pwgdxfkk00
await leapwork.step("Use test case: leash import", async () => {
    await page.getByRole('button', { name: 'View details for Willow Nest' }).click();
    return await LeashImport();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1vu1tjb0
await leapwork.step("Wait for 3 minutes", async () => {
    await page.waitForTimeout(180000);
}, { action: "wait" });

// ai-studio-step-id: eYoAKXbc
await leapwork.step(`Fill the Recipient name field with "${lw__recipientName}"`, async () => {
    // Fill textbox "Recipient name"
    await page.getByRole('textbox', { name: 'Recipient name' }).fill(String(lw__recipientName));
}, { action: "input", relativeXpath: "//*[@id=\"customerName\"]" });

// ai-studio-step-id: pwqmv60400
await leapwork.step("Wait for 3 minutes", async () => {
    await page.waitForTimeout(180000);
}, { action: "wait" });

// ai-studio-step-id: eawiFkhS
await leapwork.step("Click the Email address field in the checkout form", async () => {
    // Click textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"customerEmail\"]" });

// ai-studio-step-id: pwi62xo600
await leapwork.step("Wait for 3 minutes", async () => {
    await page.waitForTimeout(180000);
}, { action: "wait" });

// ai-studio-step-id: GoYxrvY7
await leapwork.step(`Fill the Email address field with ${lw__emailAddress}`, async () => {
    // Fill textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).fill(String(lw__emailAddress));
}, { action: "input", relativeXpath: "//*[@id=\"customerEmail\"]" });