// ai-studio-step-id: pw1rzmtkq0
await leapwork.step("Click the Products link in the primary navigation", async () => {
    // Click link "Products"
    await page.getByRole('link', { name: 'Products', exact: true }).click();
}, { relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[1]" });

// ai-studio-step-id: pw1hbf2070
await leapwork.step("Click View details for Leap & Leash Chicken Kibble ($28.00) in All Products", async () => {
    // Click button "View details for Leap & Leash Chicken Kibble, $28.00"
    await page.getByRole('button', { name: 'View details for Leap & Leash' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productGrid\"]/article[@aria-label=\"View details for Leap & Leash Chicken Kibble, $28.00\"]" });

// ai-studio-step-id: pw1uph2e60
await leapwork.step("Click the Add to cart button for Leap & Leash Chicken Kibble", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productDialogContent\"]/div/div[2]/button" });

// ai-studio-step-id: pw1bv0a350
await leapwork.step("Click the Close cart button in the Your Cart panel", async () => {
    // Click button "Close cart"
    await page.getByRole('button', { name: 'Close cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"closeCart\"]" });

// ai-studio-step-id: pwsk9me800
await leapwork.step("Click View details for Tough Loop Rope Toy ($14.00) in All Products", async () => {
    // Click button "View details for Tough Loop Rope Toy, $14.00"
    await page.getByRole('button', { name: 'View details for Tough Loop' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productGrid\"]/article[@aria-label=\"View details for Tough Loop Rope Toy, $14.00\"]" });

// ai-studio-step-id: pw1psdf450
await leapwork.step("Click the Close product details button on the Tough Loop Rope Toy dialog", async () => {
    // Click button "Close product details"
    await page.getByRole('button', { name: 'Close product details' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"closeProductModal\"]" });

// ai-studio-step-id: pw13ieb3y0
await leapwork.step("Click View details for Tuna Snap Treats ($9.00)", async () => {
    // Click button "View details for Tuna Snap Treats, $9.00"
    await page.getByRole('button', { name: 'View details for Tuna Snap' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productGrid\"]/article[@aria-label=\"View details for Tuna Snap Treats, $9.00\"]" });

// ai-studio-step-id: pwoev0lx00
await leapwork.step("Click the Add to cart button for Tuna Snap Treats", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productDialogContent\"]/div/div[2]/button" });

// ai-studio-step-id: pw1oe4req0
await leapwork.step("Click the + button for Leap & Leash Chicken Kibble in the shopping cart", async () => {
    // Click button "+"
    await page.getByRole('button', { name: '+' }).nth(2).click();
}, { action: "click", relativeXpath: "//*[@id=\"cartItems\"]/div[1]/div[@aria-label=\"Leap & Leash Chicken Kibble quantity\"]/button[2]" });

// ai-studio-step-id: pwu4b7mj00
await leapwork.step("Click the Checkout button in the cart footer", async () => {
    // Click button "Checkout"
    await page.getByRole('button', { name: 'Checkout' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"checkoutButton\"]" });

// ai-studio-step-id: pwfobb3t00
await leapwork.step("Fill the Recipient name field with \"receipeint\"", async () => {
    // Fill textbox "Recipient name"
    await page.getByRole('textbox', { name: 'Recipient name' }).fill("receipeint");
}, { action: "input", relativeXpath: "//*[@id=\"customerName\"]" });

// ai-studio-step-id: pwpw10r200
await leapwork.step("Click the Email address field in the checkout form", async () => {
    // Click textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"customerEmail\"]" });

// ai-studio-step-id: pwbif7j900
await leapwork.step("Fill the Email address field with \"deihl\"", async () => {
    // Fill textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).fill("deihl");
}, { action: "input", relativeXpath: "//*[@id=\"customerEmail\"]" });

// ai-studio-step-id: pw1006scc0
await leapwork.step("Click the Street address field in the Checkout form", async () => {
    // Click textbox "Street address"
    await page.getByRole('textbox', { name: 'Street address' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"customerStreet\"]" });

// ai-studio-step-id: pw129ksiz0
await leapwork.step("Fill the Street address field with \"dehil\"", async () => {
    // Fill textbox "Street address"
    await page.getByRole('textbox', { name: 'Street address' }).fill("dehil");
}, { action: "input", relativeXpath: "//*[@id=\"customerStreet\"]" });

// ai-studio-step-id: pw1h1t2180
await leapwork.step("Click the Checkout section on the Leap & Leash Pet Market page", async () => {
    // Click div
    await page.locator('div').filter({ hasText: 'Address Payment Review' }).first().click();
}, { action: "click", relativeXpath: "//*[@id=\"checkoutModal\"]/div[2]" });

// ai-studio-step-id: pwlsvn3j00
await leapwork.step("Click the Continue to payment button on the checkout form", async () => {
    const continueToPaymentButton = page.getByRole('button', { name: 'Continue to payment', exact: true });
    await expect(continueToPaymentButton).toHaveCount(1);
    await continueToPaymentButton.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"continueToPayment\"]" });

// ai-studio-step-id: pwevmxqu00
await leapwork.step("Click the ZIP code field in the checkout form", async () => {
    // Click textbox "ZIP code"
    await page.getByRole('textbox', { name: 'ZIP code' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"customerZip\"]" });

// ai-studio-step-id: pw1ig2vzt0
await leapwork.step("Fill the ZIP code field with 110805", async () => {
    // Fill textbox "ZIP code"
    await page.getByRole('textbox', { name: 'ZIP code' }).fill("110805");
}, { action: "input", relativeXpath: "//*[@id=\"customerZip\"]" });

// ai-studio-step-id: pw1mea10y0
await leapwork.step("Click the City field in the checkout form", async () => {
    // Click textbox "City"
    await page.getByRole('textbox', { name: 'City' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"customerCity\"]" });

// ai-studio-step-id: pwr1auis00
await leapwork.step("Click the Continue to payment button in Checkout", async () => {
    // Click button "Continue to payment"
    await page.getByRole('button', { name: 'Continue to payment' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"continueToPayment\"]" });

// ai-studio-step-id: pwbteccf00
await leapwork.step("Click the Review order button in Checkout", async () => {
    // Click button "Review order"
    await page.getByRole('button', { name: 'Review order' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"continueToReview\"]" });

// ai-studio-step-id: pwat59ws00
await leapwork.step("Click the Back button on the checkout Payment step", async () => {
    // Click button "Back"
    await page.getByRole('button', { name: 'Back', exact: true }).click();
}, { action: "click", relativeXpath: "//*[@id=\"backToPayment\"]" });

// ai-studio-step-id: pwrgru0r00
await leapwork.step("Click the Products link in the primary navigation", async () => {
    // Click link "Products"
    await page.getByRole('link', { name: 'Products' }).click();
}, { action: "click", relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[1]" });