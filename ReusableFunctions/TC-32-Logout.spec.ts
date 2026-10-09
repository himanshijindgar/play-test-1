import { leapwork } from "./leapwork";

import { LoginFlow } from "@assets/ReusableFunctions/LoginFlow";

leapwork.configuration({
    timeoutMs: Number(
        leapwork.team.settings.get("timeoutMs")
        ?? leapwork.workspace.settings.get("timeoutMs")
    ) || 5000,

    enableSelfHeal:
        (leapwork.team.settings.get("enableSelfHeal")
            ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});


// ============================================================
// 1. CLICK ACCOUNT MENU
// ============================================================

// ai-studio-step-id: pwzpf8gh00
await leapwork.step(
    "Click the Play Automation (Personal) button",
    async () => {

        const accountButton = page.getByRole(
            "button",
            {
                name: "Play Automation (Personal)"
            }
        );

        await expect(accountButton).toBeVisible();

        await accountButton.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);


// ============================================================
// 2. LOG OUT
// ============================================================

// ai-studio-step-id: pw1siv5zk0
await leapwork.step(
    "Click the Log out link",
    async () => {

        const logout = page.getByText(
            "Log out",
            {
                exact: true
            }
        );

        await expect(logout).toBeVisible();

        await logout.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);


// ============================================================
// 3. VALIDATE LOGIN TO CONTINUE PAGE
// ============================================================

// ai-studio-step-id: pw1xbp1k10
await leapwork.step(
    'Validate that the "Login to continue" heading is displayed',
    async () => {

        const loginHeading = page.getByRole(
            "heading",
            {
                name: "Login to continue",
                exact: true
            }
        );

        await expect(loginHeading).toHaveCount(1);
        await expect(loginHeading).toBeVisible();

        await page.waitForTimeout(5000);
    },
    {
        action: "validate"
    }
);