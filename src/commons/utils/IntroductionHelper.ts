import { Chapter, Variant } from 'js-slang/dist/types';

import { styliseSublanguage, sublanguages } from '../application/ApplicationTypes';
import { Links } from './Constants';

const MAIN_INTRODUCTION = `
Welcome to the Source Academy playground!

This is a stripped down version of the Source Academy for the purpose of demonstrating an implementation
of a subset of the _C_ programming language. Made by [Geng Ning](https://github.com/zognin) &
[Ian](https://github.com/ianyong) for CS4215 Programming Language Implementation in AY2022/23 Semester 2.

`;

const HOTKEYS_INTRODUCTION = `

In the editor on the left, you can use the [_Ace keyboard shortcuts_](${Links.aceHotkeys}) 
and also the [_Source Academy keyboard shortcuts_](${Links.sourceHotkeys}).

`;

const generateSourceDocsLink = (sourceChapter: Chapter, sourceVariant: Variant) => {
  if (sourceChapter === Chapter.FULL_JS) {
    return (
      `However, you have chosen full JavaScript; your program will be run directly using JavaScript strict mode [_(ECMAScript 2021)_](${Links.ecmaScript_2021}).` +
      '\n\n<b>Warning:</b> If your program freezes during execution, you can try refreshing the tab. ' +
      'Note that you need to open the browser console (typically by pressing `F12`) before using breakpoints.'
    );
  }

  if (sourceChapter === Chapter.HTML) {
    return (
      'However, you have chosen HTML, the standard markup language for webpages. Your code will be rendered directly as a HTML document.\n\n' +
      'JavaScript code can be added to a HTML document using the `<script>` tag; any script errors will be displayed in the output below.\n\n' +
      '<b>Note:</b> Error messages may differ between browsers, e.g. when using Safari, errors can only be viewed on the browser console itself. ' +
      'Please check the browser console (typically by pressing `F12`) for more detailed errors and warnings.'
    );
  }

  // `.includes` and `.find` are not used here since we are dealing with reference types
  if (
    sublanguages.filter(lang => lang.chapter === sourceChapter && lang.variant === sourceVariant)
      .length === 0
  ) {
    return 'You have chosen an invalid sublanguage. Please pick a sublanguage from the dropdown instead.';
  }
  return `You have chosen the sublanguage _${styliseSublanguage(
    sourceChapter,
    sourceVariant
  )}_ (although you never really had a choice).`;
};

const generateIntroductionText = (sourceChapter: Chapter, sourceVariant: Variant) => {
  return (
    MAIN_INTRODUCTION + generateSourceDocsLink(sourceChapter, sourceVariant) + HOTKEYS_INTRODUCTION
  );
};

export const generateSourceIntroduction = (sourceChapter: Chapter, sourceVariant: Variant) => {
  return generateIntroductionText(sourceChapter, sourceVariant);
};
