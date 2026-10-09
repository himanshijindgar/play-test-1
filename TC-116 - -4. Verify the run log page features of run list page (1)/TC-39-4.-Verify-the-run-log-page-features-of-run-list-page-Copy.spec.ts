import { leapwork } from "./leapwork";

import { Asset3RunListCreation } from "@assets/Data Creation/3- Run list creation";
import { Asset2TeamDeleation } from "@assets/Data Creation/2 - Team deleation";
import { Asset1TeamCreation } from "@assets/Data Creation/1 - Team creation";
import { TestCaseCreation } from "@assets/Data Creation/Test Case creation";
import { UpdatedTeamDeletion } from "@assets/Data Creation/UpdatedTeamDeletion";
import { Logout } from "@assets/ReusableFunctions/Logout";

leapwork.configuration({
    enableSelfHeal: false
});

// ============================================================
// 1. CREATE DYNAMIC TEAM + RUN LIST
// ============================================================

// ai-studio-step-id: pw1ggfez40
await leapwork.step(
    "Use test case: 2 - Team deleation",
    async () => {
        return await Asset2TeamDeleation();
    },
    {
        action: "asset_reference",
        linkedAssetType: "test-case"
    }
);

// ai-studio-step-id: pwr8rpz500
await leapwork.step(
    "Use test case: 1 - Team creation",
    async () => {
        return await Asset1TeamCreation();
    },
    {
        action: "asset_reference",
        linkedAssetType: "test-case"
    }
);

// ai-studio-step-id: pw1xwlc480
await leapwork.step(
    "Use test case: Test Case creation",
    async () => {
        return await TestCaseCreation();
    },
    {
        action: "asset_reference",
        linkedAssetType: "test-case"
    }
);

// ai-studio-step-id: pws5sppm00
await leapwork.step(
    "Use test case: 3 - Run list creation",
    async () => {
        return await Asset3RunListCreation();
    },
    {
        action: "asset_reference",
        linkedAssetType: "test-case"
    }
);

await page.waitForTimeout(5000);

// ============================================================
// 2. GET CREATED TEAM + RUN LIST
// ============================================================

const createdTeamName = leapwork.variables.get(
    "createdTeamName",
    leapwork.storage.LOCAL
) as string;

const createdRunListName = leapwork.variables.get(
    "createdRunListName",
    leapwork.storage.LOCAL
) as string;

if (!createdTeamName) {
    throw new Error(
        "createdTeamName was not found after Run List Creation."
    );
}

if (!createdRunListName) {
    throw new Error(
        "createdRunListName was not found after Run List Creation."
    );
}

logInfo(
    `Created team received by Main Flow: ${createdTeamName}`
);

logInfo(
    `Created run list received by Main Flow: ${createdRunListName}`
);

// ============================================================
// 3. VALIDATE CREATED TEAM
// ============================================================

// ai-studio-step-id: pw17gnefb0
await leapwork.step(
    `Validate team "${createdTeamName}" containing run list "${createdRunListName}"`,
    async () => {

        const team = page
            .locator(
                `.explorer-panel span.explorer-item-name[title="${createdTeamName}"]`
            )
            .first();

        await expect(team).toBeVisible({
            timeout: 30000
        });

        await page.waitForTimeout(5000);
    },
    {
        action: "validate"
    }
);

// ai-studio-step-id: pw19qqb0t0
await leapwork.step("Wait for 1 minute", async () => {
    await page.waitForTimeout(60000);
}, { action: "wait" });

// ============================================================
// 4. OPEN CREATED RUN LIST
// ============================================================

// ai-studio-step-id: pwrxgjny00
await leapwork.step(
    `Open run list "${createdRunListName}" under team "${createdTeamName}"`,
    async () => {

        const runList = page
            .locator(
                `.explorer-panel span.explorer-item-name[title="${createdRunListName}"]`
            )
            .first();

        await expect(runList).toBeVisible({
            timeout: 30000
        });

        await runList.dblclick();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ai-studio-step-id: pw3je7jz00
await leapwork.step("Wait for 1 minute", async () => {
    await page.waitForTimeout(60000);
}, { action: "wait" });

// ============================================================
// 5. COLLAPSE CHAT
// ============================================================

// ai-studio-step-id: pw16mo2zx0
await leapwork.step(
    `Collapse chat for "${createdRunListName}" under "${createdTeamName}"`,
    async () => {

        const collapseChat = page.getByRole(
            "button",
            {
                name: "Collapse chat",
                exact: true
            }
        );

        await expect(collapseChat).toBeVisible({
            timeout: 30000
        });

        await collapseChat.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ai-studio-step-id: pw1uk92g90
await leapwork.step("Wait for 1 minute", async () => {
    await page.waitForTimeout(60000);
}, { action: "wait" });

// ============================================================
// 6. OPEN SEVERITY FILTER
// ============================================================

// ai-studio-step-id: pwq6n96k00
await leapwork.step(
    `Open severity filter for "${createdRunListName}"`,
    async () => {

        const severityFilter = page.getByText(
            "Critical (S1) and Major (S2)",
            {
                exact: true
            }
        );

        await expect(severityFilter).toBeVisible({
            timeout: 30000
        });

        await severityFilter.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ai-studio-step-id: pw1wpdkwy0
await leapwork.step("Wait for 1 minute", async () => {
    await page.waitForTimeout(60000);
}, { action: "wait" });

// ============================================================
// 7. SELECT CRITICAL
// ============================================================

// ai-studio-step-id: pw1tzdjkz0
await leapwork.step(
    `Select Critical (S1) for "${createdRunListName}"`,
    async () => {

        const criticalOption = page
            .getByText(
                "Critical (S1)",
                {
                    exact: true
                }
            )
            .last();

        await expect(criticalOption).toBeVisible({
            timeout: 30000
        });

        await criticalOption.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ai-studio-step-id: pw1mt6y240
await leapwork.step("Wait for 1 minute", async () => {
    await page.waitForTimeout(60000);
}, { action: "wait" });

// ============================================================
// 8. SELECT MAJOR
// ============================================================

// ai-studio-step-id: pwzdfesm00
await leapwork.step(
    `Select Major (S2) for "${createdRunListName}"`,
    async () => {

        const majorOption = page
            .getByText(
                "Major (S2)",
                {
                    exact: true
                }
            )
            .last();

        await expect(majorOption).toBeVisible({
            timeout: 30000
        });

        await majorOption.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 9. SELECT MODERATE
// ============================================================

// ai-studio-step-id: pw1gomx510
await leapwork.step(
    `Select Moderate (S3) for "${createdRunListName}"`,
    async () => {

        const moderateOption = page
            .getByText(
                "Moderate (S3)",
                {
                    exact: true
                }
            )
            .last();

        await expect(moderateOption).toBeVisible({
            timeout: 30000
        });

        await moderateOption.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 10. VALIDATE MODERATE
// ============================================================

// ai-studio-step-id: pw181siri0
await leapwork.step(
    `Validate Moderate (S3) for "${createdRunListName}" in "${createdTeamName}"`,
    async () => {

        const severity = page
            .getByText(
                "Moderate (S3)",
                {
                    exact: true
                }
            )
            .first();

        await expect(severity).toBeVisible({
            timeout: 30000
        });

        await expect(severity).toHaveText(
            "Moderate (S3)"
        );

        await page.waitForTimeout(5000);
    },
    {
        action: "validate"
    }
);

// ============================================================
// 11. RUN NOW
// ============================================================

// ai-studio-step-id: pwz4ahpf00
await leapwork.step(
    `Run "${createdRunListName}" from team "${createdTeamName}"`,
    async () => {

        const runNowButton = page.getByRole(
            "button",
            {
                name: "Run now",
                exact: true
            }
        );

        await expect(runNowButton).toBeVisible({
            timeout: 30000
        });

        await runNowButton.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 12. VALIDATE RUN COMPLETION
// ============================================================



// ============================================================
// 13. CLICK FIRST FAILED RUN ID
// ============================================================

// ai-studio-step-id: pw1xv3wmp0
await leapwork.step(
    "Click the first failed run ID in the run log",
    async () => {

        const failedRun = page
            .locator(".rl-run")
            .filter({
                has: page.locator(
                    ".rl-run-status",
                    {
                        hasText: /^FAILED$/
                    }
                )
            })
            .first();

        await expect(failedRun).toBeVisible({
            timeout: 30000
        });

        const runId = failedRun.locator(
            ".rl-run-id"
        );

        await expect(runId).toBeVisible({
            timeout: 30000
        });

        const failedRunId =
            (await runId.textContent())?.trim() ?? "";

        logInfo(
            `First failed run ID: ${failedRunId}`
        );

        await runId.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 14. CLOSE RUN DETAILS
// ============================================================

// ai-studio-step-id: pwhizxjl00
await leapwork.step(
    `Close run details for "${createdRunListName}"`,
    async () => {

        const closeButton = page.getByRole(
            "button",
            {
                name: "Close",
                exact: true
            }
        );

        await expect(closeButton).toBeVisible({
            timeout: 30000
        });

        await closeButton.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 15. SELECT FIRST RUN
// ============================================================

// ai-studio-step-id: pwv224yp00
await leapwork.step(
    `Select the first run for "${createdRunListName}"`,
    async () => {

        const firstRun = page
            .locator(".rl-run")
            .first();

        await expect(firstRun).toBeVisible({
            timeout: 30000
        });

        const firstRunCheckbox = firstRun.getByRole(
            "checkbox"
        );

        await expect(firstRunCheckbox).toBeVisible({
            timeout: 30000
        });

        const isChecked =
            await firstRunCheckbox.getAttribute(
                "aria-checked"
            );

        if (isChecked !== "true") {
            await firstRunCheckbox.check();
        }

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 16. EXPORT PDF
// ============================================================

// ai-studio-step-id: pw170z0af0
await leapwork.step(
    `Export PDF for "${createdRunListName}"`,
    async () => {

        const exportPdf = page.getByRole(
            "button",
            {
                name: "Export PDF",
                exact: true
            }
        );

        await expect(exportPdf).toBeVisible({
            timeout: 30000
        });

        await exportPdf.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 17. GENERATE DASHBOARD
// ============================================================

// ai-studio-step-id: pwzvrtoy00
await leapwork.step(
    `Generate dashboard for "${createdRunListName}" in "${createdTeamName}"`,
    async () => {

        const generateDashboard = page.getByRole(
            "button",
            {
                name: "Generate Dashboard",
                exact: true
            }
        );

        await expect(generateDashboard).toBeVisible({
            timeout: 30000
        });

        await generateDashboard.click();

        await page.waitForTimeout(5000);
    },
    {
        action: "click"
    }
);

// ============================================================
// 18. VALIDATE REPORTING
// ============================================================



// ============================================================
// 19. OPEN REPORTING
// ============================================================



// ============================================================
// 20. VALIDATE PASS RATE = 0%
// ============================================================



// ============================================================
// 21. DELETE CREATED TEAM
// ============================================================

// ai-studio-step-id: pw1kb7mc20
await leapwork.step(
    "Use test case: UpdatedTeamDeletion",
    async () => {
        return await UpdatedTeamDeletion();
    },
    {
        action: "asset_reference",
        linkedAssetType: "test-case"
    }
);

// await leapwork.step(
//     "Use test case: UpdatedTeamDeletion",
//     async () => {
//         return await leapwork.asset("14236");
//     },
//     {
//         action: "asset_reference",
//         linkedAssetType: "test-case"
//     }
// );

// ============================================================
// 22. LOGOUT
// ============================================================

// ai-studio-step-id: pw1tm1x0v0
await leapwork.step(
    "Use test case: Logout",
    async () => {
        return await Logout();
    },
    {
        action: "asset_reference",
        linkedAssetType: "test-case"
    }
);

// await leapwork.step(
//     "Use test case: Logout",
//     async () => {
//         return await leapwork.asset("14237");
//     },
//     {
//         action: "asset_reference",
//         linkedAssetType: "test-case"
//     }
// );