import { leapwork } from "./leapwork";

import { LoginFlow } from "@assets/ReusableFunctions/LoginFlow";

leapwork.configuration({
    enableSelfHeal: false
});

leapwork.variables.set("roleid", 0);

// ============================================================
// 1. LOGIN
// ============================================================

// ai-studio-step-id: 3420388d
await leapwork.step(
    "Use test case: LoginFlow",
    async () => {
        return await LoginFlow();
    },
    {
        action: "asset_reference",
        linkedAssetType: "test-case"
    }
);

await page.waitForTimeout(5000);

// ============================================================
// 2. CHECK TEAM COUNT
// ============================================================

// ai-studio-step-id: pweua73n00
await leapwork.step(
    "Check visible team count in explorer",
    async () => {
        const explorerPanel = page.locator(".explorer-panel");

        await expect(explorerPanel).toBeVisible();

        const teamButtons = explorerPanel.locator(
            "button[aria-label^='More actions for ']:visible"
        );

        const count = await teamButtons.count();

        logInfo(`Visible teams found: ${count}`);
    },
    {
        action: "validate"
    }
);

// ============================================================
// 3. DELETE ALL TEAMS EXCEPT PROTECTED ONES
// ============================================================

// ai-studio-step-id: pwfxb9us00
await leapwork.step(
    'Delete all teams except protected teams',
    async () => {

        const explorerPanel = page.locator(".explorer-panel");

        await expect(explorerPanel).toBeVisible();

        const protectedTeams = [
            "New Team",
            "New Team (Don't Delete)"
        ];

        let deletedCount = 0;

        while (true) {

            const teamButtons = explorerPanel.locator(
                "button[aria-label^='More actions for ']:visible"
            );

            const count = await teamButtons.count();

            logInfo(`Current visible teams: ${count}`);

            if (count === 0) {
                break;
            }

            let deletedThisIteration = false;

            for (let i = 0; i < count; i++) {

                const actionButton = teamButtons.nth(i);

                const ariaLabel = await actionButton.getAttribute(
                    "aria-label"
                );

                if (!ariaLabel) {
                    continue;
                }

                const prefix = "More actions for ";

                if (!ariaLabel.startsWith(prefix)) {
                    continue;
                }

                const teamName = ariaLabel
                    .substring(prefix.length)
                    .trim();

                logInfo(`Found team: '${teamName}'`);

                // ====================================================
                // SKIP PROTECTED TEAMS
                // ====================================================

                const lowerName = teamName.toLowerCase();
                const isProtected =
                lowerName.includes("new team") ||
                lowerName.includes("don't delete");

                if (isProtected) {
                    logInfo(
                        `Skipping protected team: '${teamName}'`
                    );
                    continue;
                }

                // ====================================================
                // HOVER TEAM
                // ====================================================

                const teamLocator = explorerPanel.locator(
                    `span.explorer-item-name[title="${teamName}"]`
                ).first();

                const visible = await teamLocator
                    .isVisible()
                    .catch(() => false);

                if (!visible) {
                    logInfo(
                        `Team not visible. Skipping: '${teamName}'`
                    );
                    continue;
                }

                await teamLocator.hover();

                await expect(actionButton).toBeVisible();

                // ====================================================
                // OPEN CONTEXT MENU
                // ====================================================

                await actionButton.click({
                    force: true
                });

                await page.waitForTimeout(1000);

                const deleteOption = page
                    .locator('[aria-label="Context menu"]')
                    .getByText("Delete", {
                        exact: true
                    });

                await expect(deleteOption).toBeVisible();

                logInfo(
                    `Deleting team: '${teamName}'`
                );

                await deleteOption.click();

                await page.waitForTimeout(1000);

                // ====================================================
                // CONFIRM DELETE
                // ====================================================

                const confirmDeleteButton = page.getByRole(
                    "button",
                    {
                        name: "Delete",
                        exact: true
                    }
                );

                await expect(
                    confirmDeleteButton
                ).toBeVisible();

                await confirmDeleteButton.click();

                await page.waitForTimeout(5000);

                deletedCount++;

                logInfo(
                    `Successfully deleted: '${teamName}'`
                );

                deletedThisIteration = true;

                // Re-read explorer after every delete
                break;
            }

            if (!deletedThisIteration) {
                logInfo(
                    "No more deletable teams found."
                );
                break;
            }
        }

        logInfo(
            `Finished. Deleted ${deletedCount} team(s). Protected teams were preserved.`
        );
    },
    {
        action: "click"
    }
);