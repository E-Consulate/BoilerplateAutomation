import { expect, Locator, Page } from '@playwright/test';
import logger from '../Logger/logger';

export class AssertionUtilsPage {
  private errors: string[] = [];

  async assertPageURL(page: Page, expectedURL: string, message: string): Promise<void> {
    try {
      await expect(page).toHaveURL(expectedURL);
      logger.info(`URL assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertPageTitle(page: Page, expectedTitle: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(page).toHaveTitle(expectedTitle, { timeout });
      logger.info(`Page title assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertTrue(condition: boolean, message: string): Promise<void> {
    try {
      expect.soft(condition, message).toBeTruthy();
      logger.info(`Condition assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertFalse(condition: boolean, message: string): Promise<void> {
    try {
      expect.soft(condition, message).toBeFalsy();
      logger.info(`Condition assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertElementTextEquals(element: Locator, expectedText: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(element).toHaveText(expectedText, { timeout });
      logger.info(`Element text assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertElementTextNotEquals(element: Locator, unexpectedText: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(element).not.toHaveText(unexpectedText, { timeout });
      logger.info(`Element text not equals assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertContainsText(locator: Locator, expectedSubstring: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).toContainText(expectedSubstring, { timeout });
      logger.info(`Text contains assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertNotContainsText(locator: Locator, unexpectedSubstring: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).not.toContainText(unexpectedSubstring, { timeout });
      logger.info(`Text not contains assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeVisible(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).toBeVisible({ timeout });
      logger.info(`Visibility assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeNotVisible(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).not.toBeVisible({ timeout });
      logger.info(`Not visible assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeChecked(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).toBeChecked({ timeout });
      logger.info(`Checked assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeNotChecked(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).not.toBeChecked({ timeout });
      logger.info(`Not checked assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeDisabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).toBeDisabled({ timeout });
      logger.info(`Disabled assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeNotDisabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).not.toBeDisabled({ timeout });
      logger.info(`Not disabled assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeEmpty(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).toBeEmpty({ timeout });
      logger.info(`Empty assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeNotEmpty(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).not.toBeEmpty({ timeout });
      logger.info(`Not empty assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeEnabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).toBeEnabled({ timeout });
      logger.info(`Enabled assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBeNotEnabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect.soft(locator).not.toBeEnabled({ timeout });
      logger.info(`Not enabled assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async softAssertToBe(actual: any, expected: any, message: string): Promise<void> {
    try {
      expect.soft(actual).toBe(expected);
      logger.info(`Assertion successful: ${message}`);
    } catch (error) {
      this.errors.push(message);
    }
  }

  async assertPageTitle(page: Page, expectedTitle: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(page, message).toHaveTitle(expectedTitle, { timeout });
      logger.info(`Page title assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Page title assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertTrue(condition: boolean, message: string): Promise<void> {
    try {
      expect(condition, message).toBeTruthy();
      logger.info(`Condition assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Condition assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertFalse(condition: boolean, message: string): Promise<void> {
    try {
      expect(condition, message).toBeFalsy();
      logger.info(`Condition assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Condition assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertElementTextEquals(element: Locator, expectedText: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(element, message).toHaveText(expectedText, { timeout });
      logger.info(`Element text assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Element text assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertElementTextNotEquals(element: Locator, unexpectedText: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(element, message).not.toHaveText(unexpectedText, { timeout });
      logger.info(`Element text not equals assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Element text not equals assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertContainsText(locator: Locator, expectedSubstring: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).toContainText(expectedSubstring, { timeout });
      logger.info(`Text contains assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Text contains assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertNotContainsText(locator: Locator, unexpectedSubstring: string, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).not.toContainText(unexpectedSubstring, { timeout });
      logger.info(`Text not contains assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Text not contains assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeVisible(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).toBeVisible({ timeout });
      logger.info(`Visibility assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Visibility assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeNotVisible(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).not.toBeVisible({ timeout });
      logger.info(`Not visible assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Not visible assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeChecked(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).toBeChecked({ timeout });
      logger.info(`Checked assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Checked assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeNotChecked(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).not.toBeChecked({ timeout });
      logger.info(`Not checked assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Not checked assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeDisabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).toBeDisabled({ timeout });
      logger.info(`Disabled assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Disabled assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeNotDisabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).not.toBeDisabled({ timeout });
      logger.info(`Not disabled assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Not disabled assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeEmpty(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).toBeEmpty({ timeout });
      logger.info(`Empty assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Empty assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeNotEmpty(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).not.toBeEmpty({ timeout });
      logger.info(`Not empty assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Not empty assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeEnabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).toBeEnabled({ timeout });
      logger.info(`Enabled assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Enabled assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBeNotEnabled(locator: Locator, message: string, timeout: number = 10000): Promise<void> {
    try {
      await expect(locator, message).not.toBeEnabled({ timeout });
      logger.info(`Not enabled assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Not enabled assertion failed: ${message}. Error: ${error}`);
    }
  }

  async assertToBe(actual: any, expected: any, message: string): Promise<void> {
    try {
      expect(actual).toBe(expected);
      logger.info(`Assertion successful: ${message}`);
    } catch (error) {
      logger.error(`Assertion failed: ${message}. Error: ${error}`);
    }
  }
}
