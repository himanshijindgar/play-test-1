import { leapwork } from "./leapwork";

// ai-studio-step-id: pw13b15j80
await leapwork.step("Click the Checkout button in the cart footer", async () => {
    // Click button "Checkout"
    await page.getByRole('button', { name: 'Checkout' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"checkoutButton\"]" });