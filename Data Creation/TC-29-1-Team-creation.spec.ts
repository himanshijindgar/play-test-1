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


// ============================================================
// 1. VARIABLES
// ============================================================

let teamName = "";


// ============================================================
// 2. RIGHT-CLICK EXPLORER
// ============================================================

// ai-studio-step-id: pw1ckz7qw0
await leapwork.step(
    "Right-click the explorer list",
    async () => {

        const explorerList = page.locator(
            "div.explorer-list"
        );

        await expect(
            explorerList
        ).toBeVisible();

        await page.waitForTimeout(5000);

        await explorerList.click({
            button: "right"
        });

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);


// ============================================================
// 3. CLICK NEW TEAM
// ============================================================

// ai-studio-step-id: pwaynfz500
await leapwork.step(
    "Click New team in the context menu",
    async () => {

        const newTeamMenuItem = page
            .locator(
                '[aria-label="Context menu"]'
            )
            .getByText(
                "New team",
                {
                    exact: true
                }
            );

        await expect(
            newTeamMenuItem
        ).toBeVisible();

        await newTeamMenuItem.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);


// ============================================================
// 4. GENERATE DYNAMIC TEAM NAME
// ============================================================

// ai-studio-step-id: pw1t47yw60
await leapwork.step(
    "Enter dynamic team name",
    async () => {

        const randomNumber = Math.floor(
            Math.random() * (99999999 - 1000 + 1)
        ) + 1000;

        teamName = `Team${randomNumber}`;

        logInfo(
            `Creating team: ${teamName}`
        );

        await page.keyboard.type(
            teamName
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "input"
    }
);


// ============================================================
// 5. CREATE TEAM
// ============================================================

// ai-studio-step-id: pwl6oc9l00
await leapwork.step(
    `Create team "${teamName}"`,
    async () => {

        await page.keyboard.press(
            "Enter"
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "keydown"
    }
);


// ============================================================
// 6. VALIDATE CREATED TEAM
// ============================================================

// ai-studio-step-id: pw1ba4r040
await leapwork.step(
    `Validate that team "${teamName}" is displayed`,
    async () => {

        const createdTeam = page
            .locator(
                `.explorer-panel span.explorer-item-name[title="${teamName}"]`
            )
            .first();

        await expect(
            createdTeam
        ).toBeVisible({
            timeout: 30000
        });

        logInfo(
            `Successfully created team: ${teamName}`
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "validate"
    }
);


// ============================================================
// 7. STORE CREATED TEAM NAME
// ============================================================

leapwork.variables.set(
    "createdTeamName",
    teamName,
    leapwork.storage.LOCAL
);

logInfo(
    `Stored createdTeamName: ${teamName}`
);