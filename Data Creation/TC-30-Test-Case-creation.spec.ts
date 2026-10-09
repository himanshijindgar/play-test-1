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
let testCaseName = "";


// ============================================================
// 2. WAIT FOR TEAM CREATION
// ============================================================

// ai-studio-step-id: pwdnnlt200
await leapwork.step(
    "Wait for the team creation to complete",
    async () => {

        await page.waitForTimeout(5000);

    },
    {
        action: "wait"
    }
);


// ============================================================
// 3. GET THE TEAM CREATED BY TEAM CREATION
// ============================================================

// ai-studio-step-id: pw1ucoxlx0
await leapwork.step(
    "Get the team created by Team Creation",
    async () => {

        const explorerPanel = page.locator(
            ".explorer-panel"
        );

        await expect(
            explorerPanel
        ).toBeVisible();

        const teamActionButtons = explorerPanel.locator(
            "button[aria-label^='More actions for ']:visible"
        );

        const count = await teamActionButtons.count();

        logInfo(
            `Visible explorer items with More actions: ${count}`
        );

        if (count === 0) {
            throw new Error(
                "No visible explorer items with More actions were found."
            );
        }

        let detectedTeamName = "";

        for (let i = 0; i < count; i++) {

            const actionButton = teamActionButtons.nth(i);

            const ariaLabel =
                await actionButton.getAttribute("aria-label");

            if (!ariaLabel) {
                continue;
            }

            const prefix = "More actions for ";

            if (!ariaLabel.startsWith(prefix)) {
                continue;
            }

            const itemName = ariaLabel
                .substring(prefix.length)
                .trim();

            if (!itemName) {
                continue;
            }

            logInfo(
                `Found explorer item: ${itemName}`
            );

            // Team Creation generates names such as Team12345678
            if (/^Team\d+$/i.test(itemName)) {

                detectedTeamName = itemName;

                logInfo(
                    `Team created by Team Creation: ${detectedTeamName}`
                );

                break;
            }
        }

        if (!detectedTeamName) {
            throw new Error(
                "Could not determine the team created by Team Creation."
            );
        }

        teamName = detectedTeamName;

        // Store the same team name for later use
        leapwork.variables.set(
            "createdTeamName",
            teamName,
            leapwork.storage.LOCAL
        );

        logInfo(
            `Using created team: ${teamName}`
        );
    },
    {
        action: "validate"
    }
);


// ============================================================
// 4. GENERATE UNIQUE TEST CASE NAME
// ============================================================

// ai-studio-step-id: pw99m9du00
await leapwork.step(
    "Generate dynamic test case name",
    async () => {

        const randomNumber = Math.floor(
            Math.random() * (99999999 - 1000 + 1)
        ) + 1000;

        testCaseName = `TestCase${randomNumber}`;

        logInfo(
            `Creating test case: ${testCaseName}`
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "input"
    }
);


// ============================================================
// 5. CLICK CREATE NEW FOR THE CREATED TEAM
// ============================================================

// ai-studio-step-id: pwhk0x6l00
await leapwork.step(
    `Click Create new for team "${teamName}"`,
    async () => {

        const team = page
            .locator(
                `.explorer-panel span.explorer-item-name[title="${teamName}"]`
            )
            .first();

        await expect(
            team
        ).toBeVisible({
            timeout: 30000
        });

        await team.hover();

        const createButton = page.getByRole(
            "button",
            {
                name: `Create new in ${teamName}`,
                exact: true
            }
        );

        await expect(
            createButton
        ).toHaveCount(1);

        await expect(
            createButton
        ).toBeVisible();

        await createButton.click({
            force: true
        });

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);


// ============================================================
// 6. CLICK NEW TEST CASE
// ============================================================

// ai-studio-step-id: pw1dvsqko0
await leapwork.step(
    `Click New test case for team "${teamName}"`,
    async () => {

        const newTestCaseOption = page
            .locator(
                '[aria-label="Context menu"]'
            )
            .getByText(
                "New test case",
                {
                    exact: true
                }
            );

        await expect(
            newTestCaseOption
        ).toHaveCount(1);

        await expect(
            newTestCaseOption
        ).toBeVisible();

        await newTestCaseOption.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);


// ============================================================
// 7. ENTER TEST CASE NAME
// ============================================================

// ai-studio-step-id: pw1lix24h0
await leapwork.step(
    `Enter test case name "${testCaseName}"`,
    async () => {

        await page.keyboard.type(
            testCaseName
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "input"
    }
);


// ============================================================
// 8. CREATE TEST CASE
// ============================================================

// ai-studio-step-id: pw89j3fq00
await leapwork.step(
    `Create test case "${testCaseName}" under team "${teamName}"`,
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
// 9. VALIDATE CREATED TEST CASE
// ============================================================

// ai-studio-step-id: pw1dfnxlt0
await leapwork.step(
    `Validate test case "${testCaseName}" under team "${teamName}"`,
    async () => {

        const createdTestCase = page
            .locator(
                `.explorer-panel span.explorer-item-name[title="${testCaseName}"]`
            )
            .first();

        await expect(
            createdTestCase
        ).toBeVisible({
            timeout: 30000
        });

        logInfo(
            `Successfully created test case "${testCaseName}" under team "${teamName}".`
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "validate"
    }
);


// ============================================================
// 10. STORE CREATED TEST CASE NAME
// ============================================================

leapwork.variables.set(
    "createdTestCaseName",
    testCaseName,
    leapwork.storage.LOCAL
);

logInfo(
    `Stored createdTestCaseName: ${testCaseName}`
);