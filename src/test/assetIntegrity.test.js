// @vitest-environment node

import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  c2cProject,
  editingProjects,
  grnComparisons,
} from '../content/portfolio';
import { siteMeta } from '../content/site';

const publicAssetPaths = [
  siteMeta.socialImage,
  editingProjects.developmental.image.src,
  c2cProject.image.src,
  ...grnComparisons.flatMap((comparison) => [
    comparison.redesign,
    comparison.redesignPreview,
    comparison.prototype,
    comparison.prototypePreview,
  ]),
];
const workspaceRoot = fileURLToPath(new URL('../../', import.meta.url));

describe('public asset integrity', () => {
  it.each(publicAssetPaths)('keeps %s available', (assetPath) => {
    expect(existsSync(resolve(workspaceRoot, 'public', assetPath.slice(1)))).toBe(true);
  });
});
