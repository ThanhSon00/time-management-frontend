import { expect, test } from '@playwright/test';

// Existing test (simulating an error) – unchanged
test.describe('Sign In Page', () => {
  test('Sign In Page E2E Test', async ({ page }) => {
    // Navigate to the signin page (adjust the URL as needed)
    await page.goto('/sign-in');

    // Verify that the email input is present
    const emailInput = page.locator('input[type="email"]');

    await expect(emailInput).toBeVisible();

    // Verify that the signin button is present
    const signinButton = page.locator('button[type="submit"]');

    await expect(signinButton).toBeVisible();

    // Fill in the email input (for example, “test@example.com”)
    await emailInput.fill('test@example.com');

    // Submit the form (click the signin button)
    await signinButton.click();

    // Wait for the error message (since our handleLogin simulates an error)
    const errorMessage = page.locator('p.text-red-500');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Login failed. Please try again.');
  });

  test('Sign In Page – Successful Login', async ({ page }) => {
    // Mock the fetch call for /api/login so that it returns a 200 (success) response.
    await page.route('/api/login', (route) => {
      route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
    });

    // Navigate to the signin page (adjust the URL as needed)
    await page.goto('/sign-in');

    // Verify that the email input is present
    const emailInput = page.locator('input[type="email"]');

    await expect(emailInput).toBeVisible();

    // Verify that the signin button is present
    const signinButton = page.locator('button[type="submit"]');

    await expect(signinButton).toBeVisible();

    // Fill in the email input (for example, “success@example.com”)
    await emailInput.fill('success@example.com');

    // Submit the form (click the signin button)
    await signinButton.click();

    // Verify that no error message is displayed (i.e. the error message is not visible)
    const errorMessage = page.locator('p.text-red-500');

    await expect(errorMessage).toBeHidden();
  });
});
