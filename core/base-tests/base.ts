import { chromium, test as base } from "@playwright/test";
import path from "path";

import {
  PAGE FILES
  } from "../pages";
import { TestFixtures}  from "./types";

const baseTest = base.extend<TestFixtures>
  const page = await conte.newPage();
  await page.goto("/", {
    timeout:0,
    waitUntil: "domcontentloaded",
  });

context: async ({}, use) => {}