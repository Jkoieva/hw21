import {Page, chromium} from '@playwright/test'

export class BasePage{
    private static page:Page
    private constructor(){}

    public static async getPage(){
        if (!BasePage.page) {
            const browser = await chromium.launch()
            const context = await browser.newContext()
            const page = await context.newPage()
            BasePage.page = page
        }
        return BasePage.page;
    }
}