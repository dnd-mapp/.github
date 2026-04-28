// src/changelog-manager/changelog-manager.ts
import { readFile, writeFile } from "fs/promises";
var WATERMARK_REGEX = /<!-- prerelease: .+? -->/;
function makeWatermark(version) {
  return `<!-- prerelease: ${version} -->`;
}
function splitChangelog(content) {
  const headerText = "## [Unreleased]";
  const start = content.indexOf(headerText);
  if (start === -1) {
    throw new Error("No [Unreleased] section found in changelog.");
  }
  const afterHeader = start + headerText.length;
  const separatorIdx = content.indexOf("\n---", afterHeader);
  const nextSectionIdx = content.indexOf("\n## [", afterHeader);
  let end;
  if (separatorIdx !== -1 && (nextSectionIdx === -1 || separatorIdx < nextSectionIdx)) {
    end = separatorIdx;
  } else if (nextSectionIdx !== -1) {
    end = nextSectionIdx;
  } else {
    end = content.length;
  }
  return {
    before: content.slice(0, start),
    section: content.slice(start, end),
    after: content.slice(end)
  };
}
function getSectionBody(section) {
  const newlineIdx = section.indexOf("\n");
  return newlineIdx === -1 ? "" : section.slice(newlineIdx + 1);
}
async function insertOrUpdateWatermark(changelogPath, version) {
  const content = await readFile(changelogPath, { encoding: "utf-8" });
  const { before, section, after } = splitChangelog(content);
  const watermark = makeWatermark(version);
  let newSection;
  if (WATERMARK_REGEX.test(section)) {
    newSection = section.replace(WATERMARK_REGEX, watermark);
  } else {
    newSection = section.trimEnd() + "\n\n" + watermark + "\n";
  }
  await writeFile(changelogPath, before + newSection + after, { encoding: "utf-8" });
}
async function stampStableVersion(changelogPath, version) {
  const content = await readFile(changelogPath, { encoding: "utf-8" });
  const { before, section, after } = splitChangelog(content);
  const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let body = getSectionBody(section);
  body = body.replace(/\n?<!-- prerelease: .+? -->\n?/g, "\n");
  body = body.replace(/\n{3,}/g, "\n\n").trimEnd();
  const versionedSection = `## [${version}] - ${date}${body ? "\n" + body : ""}`;
  const freshUnreleased = "## [Unreleased]\n";
  await writeFile(changelogPath, before + freshUnreleased + "\n---\n\n" + versionedSection + after, {
    encoding: "utf-8"
  });
}

// src/scripts/update-changelog.ts
import { fileURLToPath } from "url";
async function run() {
  const isPrerelease = process.env["IS_PRERELEASE"] === "true";
  const version = process.env["CLEAN_VERSION"];
  const changelogPath = process.env["CHANGELOG_PATH"] ?? "CHANGELOG.md";
  if (isPrerelease) {
    await insertOrUpdateWatermark(changelogPath, `v${version}`);
  } else {
    await stampStableVersion(changelogPath, version);
  }
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await run();
}
export {
  run
};
