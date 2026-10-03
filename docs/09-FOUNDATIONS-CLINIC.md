# M024: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

React renders a description from current state. A selection can be represented by one ID while the selected object, detail and count are calculations. Removing an item then naturally changes what the ID resolves to. The tick button provides a controlled unrelated rerender so you can observe preservation without introducing effects or global state.

## Start from one visible behavior

Read this contract slowly: The React parent stores an item list, a selected ID and an unrelated rerender counter. Detail content and item count are derived on every render. Child components receive data and callbacks through props. Removing the selected item produces an explicit empty detail without copying a stale selected object. An unrelated parent rerender preserves selection; reset restores the fixture. Data is in memory and reload resets it.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: State owner

The component responsible for storing and changing a value.

**Small experiment:** Locate the common parent of list and detail.

Find the part of `selectedItem` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **state owner** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Locate the common parent of list and detail.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Derived value

A calculation from existing state and props.

**Small experiment:** Explain why selected does not need another setter.

Find the part of `selectedItem` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **derived value** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Explain why selected does not need another setter.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Callback prop

A function passed so a child can request a parent-owned change.

**Small experiment:** Trace onSelect from child click to selectedId update.

Find the part of `selectedItem` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **callback prop** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Trace onSelect from child click to selectedId update.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Component identity

The continuity React uses to preserve component state.

**Small experiment:** Compare ordinary rerendering with intentionally replacing a component identity.

Find the part of `selectedItem` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **component identity** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Compare ordinary rerendering with intentionally replacing a component identity.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
export const initialItems = [
  { id: 'paper', title: 'Paper landscape', detail: 'Folded maps and tiny hills.' },
  { id: 'light', title: 'Moving light', detail: 'Colored panels change a familiar scene.' },
  { id: 'sound', title: 'Quiet sound', detail: 'Written transcripts sit beside each recording.' },
];
export function selectedItem(items, selectedId) {
  return items.find(item => item.id === selectedId) ?? null;
}
export function removeItem(items, id) {
  return items.filter(item => item.id !== id);
}
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `selectedItem`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
