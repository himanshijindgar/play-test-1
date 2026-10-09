import { leapwork } from "./leapwork";

import { LeashImport } from "@assets/leash import";

const baseUrl = leapwork.variables.get(
    "temp",
    leapwork.storage.GLOBAL
);

leapwork.variables.set("searchFoodToysCare", "willow nest", leapwork.storage.LOCAL);
const lw__searchFoodToysCare = leapwork.variables.get("searchFoodToysCare", leapwork.storage.LOCAL) as string;

leapwork.variables.set("recipientName", "himanshi", leapwork.storage.LOCAL);
const lw__recipientName = leapwork.variables.get("recipientName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("emailAddress", "hiji@leapwork.com", leapwork.storage.LOCAL);
const lw__emailAddress = leapwork.variables.get("emailAddress", leapwork.storage.LOCAL) as string;

// leapwork-file-variables:start
// Generated from File connector.
declare const require: (name: string) => any;
const XLSX = require("xlsx");

// FL-2
const filePath = leapwork.files.path("FL-2");
const workbook = XLSX.readFile(filePath);
const worksheet = workbook.Sheets["Sheet1"];
const dataRows = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: "A1:B2", raw: false, defval: "" }).slice(1);
const row = dataRows[0] ?? [];

leapwork.variables.set("temp", row[0] ?? "", leapwork.storage.LOCAL);
const lw__temp = leapwork.variables.get("temp", leapwork.storage.LOCAL) as string;

leapwork.variables.set("123", row[1] ?? "", leapwork.storage.LOCAL);
const lw__123 = leapwork.variables.get("123", leapwork.storage.LOCAL) as string;
// leapwork-file-variables:end

// await leapwork.step("Click the Products link in the primary navigation", async () => {
//     // Click link "Products"
//     await page.getByRole('link', { name: 'Products', exact: true }).click();
// }, { relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[1]" });

// ai-studio-step-id: ZYeZRuGZ
await leapwork.step("Click the Products link in the primary navigation", async () => {
    // Click link "Products"
    await page.getByRole('link', { name: 'Shyam', exact: true }).click();
}, { relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[1]" });

// await leapwork.step("Click the Search products field in the header", async () => {
//     // Click searchbox "Search products"
//     await page.getByRole('searchbox', { name: 'Search products' }).click();
// }, { action: "click", relativeXpath: "//*[@id=\"searchInput\"]" });



// await leapwork.step(`Fill the Search products field with "${lw__searchFoodToysCare}"`, async () => {
//     // Fill searchbox "Search products"
//     await page.getByRole('searchbox', { name: 'Search products' }).fill(String(lw__searchFoodToysCare));
// }, { action: "input", relativeXpath: "//*[@id=\"searchInput\"]" });



// await leapwork.step("Press Enter to submit the form", async () => {
//     // Press Enter on element
//     await page.keyboard.press("Enter");
// }, { action: "keydown" });



// await leapwork.step("Use test case: leash import", async () => {
//     await page.getByRole('button', { name: 'View details for Willow Nest' }).click();
//     return await LeashImport();
// }, { action: "asset_reference", linkedAssetType: "test-case" });



// ai-studio-step-id: eYoAKXbc
await leapwork.step(`Fill the Recipient name field with "${lw__recipientName}"`, async () => {
    // Fill textbox "Recipient name"
    await page.getByRole('textbox', { name: 'Recipient name' }).fill(String(lw__recipientName));
}, { action: "input", relativeXpath: "//*[@id=\"customerName\"]" });



// ai-studio-step-id: eawiFkhS
await leapwork.step("Click the Email address field in the checkout form", async () => {
    // Click textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"customerEmail\"]" });



// ai-studio-step-id: GoYxrvY7
await leapwork.step(`Fill the Email address field with ${lw__emailAddress}`, async () => {
    // Fill textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).fill(String(lw__emailAddress));
}, { action: "input", relativeXpath: "//*[@id=\"customerEmail\"]" });
