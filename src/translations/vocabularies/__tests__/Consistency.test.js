// @flow

import fs from 'fs';
import path from 'path';

import OriginalVocabulary from '../en-US';
import { run } from '../../TranslationsTester';

it('is consistent', () => {
  const testFolder = path.join(__dirname, '../');
  const vocabularies = [];

  fs
    .readdirSync(testFolder)
    .filter(filename => /(?<!en-US)\.js$/.test(filename))
    .forEach(filename => {
      // $FlowExpectedError: the parameter passed to require must be a string literal
      const vocabulary = require(path.join(testFolder, filename)).default;
      vocabularies.push(vocabulary);
    });

  run(OriginalVocabulary, vocabularies);
});
