import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pwpc5ctf00
await leapwork.step("Add company in the company popup", async () => {
      const popup = page.getByRole('alertdialog', { name: 'Complete your profile' });
      await popup.waitFor({state: 'visible', timeout: 5000 }).catch();
      if (await popup.isVisible().catch(() => false)) {
          await popup.getByPlaceholder('Enter your company').fill('Leapwork');
          await popup.getByRole('button', { name: 'Save and continue' }).click();
      }
  }, { action: "input", continueOnFailure:true, timeoutMs: 10000 })