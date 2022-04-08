
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('The page should display choices ', async () => {
    await driver.findElement(By.id('draw'))
    const divs = await driver.findElements(By.className('bot-card-outline'));
    const displayed = await divs.includes;
    expect(displayed).toBe(true)
})


test('The page should display choices ', async () => {
    await driver.findElements(By.className('bot-btn'))[0]
    const divs = await driver.findElements(By.className('bot-card-outline'))[0];
    const displayed = await divs.includes;
    expect(displayed).toBe(true)
})