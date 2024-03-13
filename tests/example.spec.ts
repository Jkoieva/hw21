import { test, expect } from '@playwright/test';
import { BasePage } from '../index';

test.only("Get BasePage", async() => {
  console.log(await BasePage.getPage())
});