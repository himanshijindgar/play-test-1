import { leapwork } from "./leapwork";

import { RandomTeam, passwords, microsoftUsers, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_65");

const userId = leapwork.variables.get("userId") as string;
const effectivePassword = passwords[leapwork.variables.get("passwordId") as string] || password;

leapwork.variables.set("emailOrPhoneNumber", microsoftUsers[userId], leapwork.storage.LOCAL);
const lw__emailOrPhoneNumber = leapwork.variables.get("emailOrPhoneNumber", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1byxzpd0
await leapwork.step(`click the My Team folder on the Leapwork AI Studio page`, async () => {
    const regression = page.locator('.explorer-list').getByText("My Team", { exact: true });
    await regression.click({force: true });
},{ action: "click"});

// ai-studio-step-id: pwxs5eb800
await leapwork.step("Click Create new in the asset menu", async () => {   
    const createNewButton = page.getByRole('button', { name: `Create new in My Team`, exact: true });
    await createNewButton.click({ force: true });
});

// ai-studio-step-id: pw1yxl9x40
await leapwork.step("Click New runlist in the Leapwork Play interface", async () => {
    // Click span
    await page.getByText('New runlist').click();
}, { action: "click" });

// ai-studio-step-id: pwgk5g2h00
await leapwork.step("Click the Run now button to start the runlist execution", async () => {
    // Click button "Run now"
    await page.getByRole('button', { name: 'Run now' }).click();
}, { action: "click" });

// ai-studio-step-id: pw17zfxuc0
await leapwork.step("Click the Collapse chat button in the Leapwork Play run log.", async () => {
    // Click button "Collapse chat"
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: pw1euef410
await leapwork.step("Wait for run status 1/1", async () => {
    await expect(page.locator("span.rl-run-pass"))
        .toHaveText("1/1");
}, { timeoutMs: 1800000 });

// ai-studio-step-id: pwt3utld00
await leapwork.step("Validate duration is more than 20 minutes", async () => {
    await expect(page.locator("span.rl-mono.rl-run-dur"))
        .toHaveText(/^(?:2[1-9]|[3-9]\d|\d{3,})m(?:\s+\d+s)?$/);
}, { action: "validate" });

// ai-studio-step-id: pw1xqns590
await leapwork.step("Right-click the New runlist", async () => {
    const renamed = page.locator('.explorer-list').getByText("New runlist", { exact: true });
    await renamed.click({ button: 'right', force: true });
});

// ai-studio-step-id: pwgowtzl00
await leapwork.step("Click the Delete option for the “New runlist” runlist", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Delete' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pwl35rm400
await leapwork.step("Click Delete to confirm deleting the “New runlist” runlist", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });