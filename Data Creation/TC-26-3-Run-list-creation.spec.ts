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
let runListName = "";


// ============================================================
// 2. WAIT FOR TEAM CREATION
// ============================================================

await page.waitForTimeout(5000);


// ============================================================
// 3. GET THE DYNAMIC TEAM NAME
// ============================================================

// ai-studio-step-id: pwqtkakn00
await leapwork.step(
    "Get the dynamically created team name",
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

            if (/^Team\d+$/i.test(itemName)) {

                detectedTeamName = itemName;

                logInfo(
                    `Detected dynamic team: ${detectedTeamName}`
                );

                break;
            }
        }

        if (!detectedTeamName) {
            throw new Error(
                "Could not determine the dynamically created team name from the explorer."
            );
        }

        teamName = detectedTeamName;

        logInfo(
            `Created team name detected: ${teamName}`
        );
    },
    {
        action: "validate"
    }
);


// ============================================================
// 4. GENERATE DYNAMIC RUN LIST NAME
// ============================================================

// ai-studio-step-id: pwtb6i8j00
await leapwork.step(
    "Generate dynamic run list name",
    async () => {

        const randomNumber = Math.floor(
            Math.random() * (99999999 - 1000 + 1)
        ) + 1000;

        runListName = `RunList${randomNumber}`;

        logInfo(
            `Creating run list: ${runListName}`
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "input"
    }
);


// ============================================================
// 5. CLICK CREATE NEW
// ============================================================

// ai-studio-step-id: pw19w005s0
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
// 6. CLICK NEW RUNLIST
// ============================================================

// ai-studio-step-id: pw1nl6uq70
await leapwork.step(
    `Click New runlist for team "${teamName}"`,
    async () => {

        const newRunlist = page
            .locator(
                '[aria-label="Context menu"]'
            )
            .getByText(
                "New runlist",
                {
                    exact: true
                }
            );

        await expect(
            newRunlist
        ).toHaveCount(1);

        await expect(
            newRunlist
        ).toBeVisible();

        await newRunlist.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);


// ============================================================
// 7. ENTER RUN LIST NAME
// ============================================================

// ai-studio-step-id: pw1l3dky60
await leapwork.step(
    `Enter run list name "${runListName}"`,
    async () => {

        await page.keyboard.type(
            runListName
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "input"
    }
);


// ============================================================
// 8. CREATE RUN LIST
// ============================================================

// ai-studio-step-id: pw1cfji050
await leapwork.step(
    `Create run list "${runListName}" under team "${teamName}"`,
    async () => {

        await page.keyboard.press("Enter");

        await page.waitForTimeout(5000);
    },
    {
        action: "keydown"
    }
);


// ============================================================
// 9. VALIDATE RUN LIST
// ============================================================

// ai-studio-step-id: pw1nqynar0
await leapwork.step(
    `Validate run list "${runListName}" under team "${teamName}"`,
    async () => {

        const runList = page
            .locator(
                `.explorer-panel span.explorer-item-name[title="${runListName}"]`
            )
            .first();

        await expect(
            runList
        ).toBeVisible({
            timeout: 30000
        });

        logInfo(
            `Successfully created run list "${runListName}" under team "${teamName}".`
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "validate"
    }
);


// ============================================================
// 10. STORE CREATED TEAM + RUN LIST
// ============================================================

leapwork.variables.set(
    "createdTeamName",
    teamName,
    leapwork.storage.LOCAL
);

leapwork.variables.set(
    "createdRunListName",
    runListName,
    leapwork.storage.LOCAL
);

logInfo(
    `Stored createdTeamName: ${teamName}`
);

logInfo(
    `Stored createdRunListName: ${runListName}`
);