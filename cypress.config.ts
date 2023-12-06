import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );

  on(
    "before:browser:launch",
    (
      browser = {
        name: "chrome",
        family: "chromium",
        channel: "stable",
        displayName: "Chrome",
        version: "111.0.5563.65",
        path: "C:Program FilesGoogleChromeApplicationchrome.exe",
        minSupportedVersion: 64,
        majorVersion: "111",
        isHeaded: false,
        isHeadless: false,
      },
      launchOptions
    ) => {
      launchOptions.extensions.push(
        "C:/Program Files/Google/Chrome/Application/111.0.5563.65/Extensions"
      );
      // whatever you return here becomes the launchOptions
      return launchOptions;
    }
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  projectId: "ia5cct",
  e2e: {
    setupNodeEvents,
    specPattern: ["cypress/integration/BDD/*.feature"],
    defaultCommandTimeout: 30000,
  },
});
