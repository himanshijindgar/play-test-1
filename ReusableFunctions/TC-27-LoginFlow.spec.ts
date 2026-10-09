import { leapwork } from "./leapwork";

leapwork.variables.set("enterYourEmail", "automation@leapwork.com", leapwork.storage.LOCAL);
const lw__enterYourEmail = leapwork.variables.get("enterYourEmail", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pwbp06e000
await leapwork.step("Click the Email field on the Leapwork Play login form", async () => {
    // Click textbox "Email*"
    await page.getByRole('textbox', { name: 'Email*' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });



// ai-studio-step-id: pw1n3pjo20
await leapwork.step(`Fill the Email field with "${lw__enterYourEmail}"`, async () => {
    // Fill textbox "Email*"
    await page.getByRole('textbox', { name: 'Email*' }).fill(String(lw__enterYourEmail));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pw8efb3x00
await leapwork.step("Click the Continue button on the login form", async () => {
    // Click button "Continue"
    await page.getByRole('button', { name: 'Continue' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1bx7cfm0
await leapwork.step("Click the password field for automation@leapwork.com", async () => {
    // Click textbox "Enter the password for automation@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pwz4qitz00
await leapwork.step("Fill the password field for automation@leapwork.com", async () => {
    // Change textbox "Enter the password for automation@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for' }).fill(leapwork.variables.getSecret("pwd_F5C4TQUu"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pw1yjdrsg0
await leapwork.step("Click the Sign in button on the Microsoft login page", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: pw1n5fem30
await leapwork.step("Set \"Don't show this again\" checkbox", async () => {
    const donTShowThisAgainCheckbox = page.getByRole('checkbox', { name: "Don't show this again", exact: true });
    await expect(donTShowThisAgainCheckbox).toHaveCount(1);
    await donTShowThisAgainCheckbox.setChecked(true, { force: true });
}, { action: "click", relativeXpath: "//*[@id=\"KmsiCheckboxField\"]", continueOnFailure: true });

// ai-studio-step-id: pw9pmv5q00
await leapwork.step("Click the Yes button on the Microsoft sign-in prompt", async () => {
    // Click button "Yes"
    await page.getByRole('button', { name: 'Yes' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]", continueOnFailure: true });