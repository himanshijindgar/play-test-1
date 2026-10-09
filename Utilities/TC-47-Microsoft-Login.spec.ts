import { leapwork } from "./leapwork";

import { RandomTeam, password, passwords, microsoftUsers } from "@assets/Utilities/random-team";
import { SkipOnboardingTour, SkipOnboardingTour2 } from "@assets/Utilities/SkipOnboardingTour";
import { AddCompany } from "@assets/Utilities/Add company";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

//Microsoft login sub flow
//Picks random users for login from utility called @assets/random-team

const userId = leapwork.variables.get("userId") as string;
const effectivePassword = passwords[leapwork.variables.get("passwordId") as string] || password;

leapwork.variables.set("emailOrPhoneNumber", microsoftUsers[userId], leapwork.storage.LOCAL);
const lw__emailOrPhoneNumber = leapwork.variables.get("emailOrPhoneNumber", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw1f4xe7u0
await leapwork.step("Click the Microsoft sign-in button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Sign in with Microsoft' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1yf2pt30
await leapwork.step("Fill the Email or phone number field with ${lw__emailOrPhoneNumber}", async () => {
    // Fill textbox "Email or phone number"
        await page.getByRole('textbox', { name: 'Email or phone number' }).fill(String(lw__emailOrPhoneNumber));
}, { action: "input" });

// ai-studio-step-id: pw1asp4u40
await leapwork.step("Click the Next button on the Microsoft Sign in page", async () => {
    // Click button "Next"
    await page.getByTestId('primaryButton').click();
}, { action: "click" });

// ai-studio-step-id: pw112jp8f0
await leapwork.step("Click the Other ways to sign in button on the Verify your email page", async () => {
    if(userId.startsWith("aistudio_user_") || userId.startsWith("reg_2")){
        const otherWaysToSignIn = page.getByRole('button', { name: 'Other ways to sign in', exact: true });
        await otherWaysToSignIn.click({ force: true });   
    }
}, { action: "click" });

// ai-studio-step-id: pw70sarc00
await leapwork.step("Click the Use your password button on the Verify your email page", async () => {
    // Click button "Use your password"
    await page.getByRole('button', { name: 'Use your password' }).click();
}, { action: "click" });

// ai-studio-step-id: pwtjeo4900
await leapwork.step("Fill the Password field with ${password}", async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).fill(String(effectivePassword));
}, { action: "input" });

// ai-studio-step-id: pw1yfnzus0
await leapwork.step("Click the Next button on the Microsoft password page", async () => {
    // Click button "Next"
    await page.getByTestId('primaryButton').click();
}, { action: "click" });

// ai-studio-step-id: pwa8ws1j00
await leapwork.step("Click the Yes button on the Microsoft sign-in prompt", async () => {
    // Click button "Yes"
    await page.getByTestId('primaryButton').click();
}, { action: "click", continueOnFailure:true });

// //conditional step for new user
// ai-studio-step-id: pw1l00zx40
await leapwork.step("Use test case: Add company", async () => {
    return await AddCompany();
}, { action: "asset_reference", linkedAssetType: "test-case", continueOnFailure: true });

// ai-studio-step-id: pw191tyyf0
await leapwork.step("Use test case: SkipOnboardingTour", async () => {
    return await SkipOnboardingTour2();
}, { action: "asset_reference", linkedAssetType: "test-case", continueOnFailure:true });