import { leapwork } from "./leapwork";

import { LeapImport } from "@assets/leap import";

 

// ai-studio-step-id: pwqevfzk00
await leapwork.step("Click the Add to cart button for Willow Nest Hideout", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productDialogContent\"]/div/div[2]/button" });

// ai-studio-step-id: pwtm493x00
await leapwork.step("Use test case: leap import", async () => {
    return await LeapImport();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1elpvli0
await leapwork.step("Click the Recipient name field in the Checkout form", async () => {
    // Click textbox "Recipient name"
    await page.getByRole('textbox', { name: 'Recipient name' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"customerName\"]" });