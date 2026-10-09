import { leapwork } from "./leapwork";

leapwork.configuration({ enableSelfHeal: false });
leapwork.variables.set("roleid", 0);


// ======================================================
// Get dynamically created team name
// ======================================================

const createdTeamName = leapwork.variables.get(
    "createdTeamName",
    leapwork.storage.LOCAL
) as string;


// ======================================================
// Validate team exists
// ======================================================

// ai-studio-step-id: pw10pghvj0
await leapwork.step(
    "Validate the dynamically created team exists",
    async () => {

        await expect(
            page.getByText(createdTeamName, {
                exact: true
            }).first()
        ).toBeVisible();

    },
    {
        action: "validate"
    }
);




// ======================================================
// Delete ONLY the dynamically created team
// ======================================================

// ai-studio-step-id: pw1obie730
await leapwork.step(
    "Delete the dynamically created team",
    async () => {

        const teamItem = page
            .getByText(createdTeamName, {
                exact: true
            })
            .first();

        await expect(teamItem).toBeVisible();

        // Hover over the exact team
        await teamItem.hover();

        // Click More Actions for this exact team
        const moreActionsButton = page.getByRole(
            "button",
            {
                name: `More actions for ${createdTeamName}`
            }
        ).first();

        await expect(
            moreActionsButton
        ).toBeVisible();

        await moreActionsButton.click();

        // Click Delete
        await page.getByText(
            "Delete",
            {
                exact: true
            }
        ).click();

        // Confirm Delete
        await page.getByRole(
            "button",
            {
                name: /^Delete$/
            }
        ).last().click();

    },
    {
        action: "click"
    }
);


// ======================================================
// Validate team has been deleted
// ======================================================

// ai-studio-step-id: pw19mk1c80
await leapwork.step(
    "Validate the dynamically created team is deleted",
    async () => {

        await expect(
            page.getByText(
                createdTeamName,
                {
                    exact: true
                }
            )
        ).toBeHidden();

    },
    {
        action: "validate"
    }
);