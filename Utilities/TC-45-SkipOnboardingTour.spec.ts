import { leapwork } from "./leapwork";

// ai-studio-step-id: pw8hywsc00
await leapwork.step("Set \"I agree to the Leapwork Free Trial Agreement and acknowledge and accept the Leapwork Privacy Policy.\" checkbox", async () => {
    // Check checkbox "I agree to the Leapwork Free Trial Agreement and acknowledge and accept the Leapwork Privacy Policy."
    await page.getByRole('checkbox', { name: 'I agree to the Leapwork Free' }).check();
}, { action: "click"});

// ai-studio-step-id: pwh7otxp00
await leapwork.step("Click the \"Let me in already!\" button", async () => {
    // Click button "Let me in already!"
    await page.getByRole('button', { name: 'Let me in already!' }).click();
}, { action: "click" });

// ai-studio-step-id: pw3jll8u00
await leapwork.step("Click the Skip tour button", async () => {
    // Click button "Skip tour"
    await page.getByText('Skip tour').click();
}, { action: "click" });