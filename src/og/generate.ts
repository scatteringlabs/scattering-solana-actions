import { Hono } from 'hono';
import puppeteer from 'puppeteer';

const og = new Hono();

og.post('/', async (c) => {
  const { htmlContent } = await c.req.json();

  if (!htmlContent) {
    return c.json({ error: 'HTML content is required' }, 400);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);

  const screenshot = await page.screenshot({ type: 'jpeg' });
  await browser.close();

  return c.body(screenshot, 200, { 'Content-Type': 'image/jpeg' });
});

export default og;
