# M024: deeper debugging casebook

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

The incidents below are hypothetical teaching scenarios based on realistic mistakes in this codebase. They are not claims that the shipped reference is broken. Reproduce a proposed defect only on a disposable practice branch. Keep an observed failure separate from a likely explanation; the point of an experiment is to make those two agree or disagree.

## Incident 1: Removed exhibit remains in the detail

**Fictional report:** A learner says, “Removed exhibit remains in the detail.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Store a copied selected object and never clear it after removal.

**Starting experiment:** Select light, remove it, and inspect the detail.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: The React parent stores an item list, a selected ID and an unrelated rerender counter. Detail content and item count are derived on every render. Child components receive data and callbacks through props. Removing the selected item produces an explicit empty detail without copying a stale selected object. An unrelated parent rerender preserves selection; reset restores the fixture. Data is in memory and reload resets it. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `selectedItem` is wrong. Hypothesis B: the rule is correct but `src/App.jsx` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

src/App.jsx: derive selected from current items and selectedId.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Removed exhibit remains in the detail” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 2: Selection disappears on an unrelated rerender

**Fictional report:** A learner says, “Selection disappears on an unrelated rerender.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Reinitialize selection through changing component keys or incidental setup.

**Starting experiment:** Select light and press Rerender parent.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: The React parent stores an item list, a selected ID and an unrelated rerender counter. Detail content and item count are derived on every render. Child components receive data and callbacks through props. Removing the selected item produces an explicit empty detail without copying a stale selected object. An unrelated parent rerender preserves selection; reset restores the fixture. Data is in memory and reload resets it. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `selectedItem` is wrong. Hypothesis B: the rule is correct but `src/App.jsx` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

src/App.jsx: preserve stable component identity and stored selectedId.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Selection disappears on an unrelated rerender” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 3: The wrong item is selected after list order changes

**Fictional report:** A learner says, “The wrong item is selected after list order changes.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Use rendered indices as selection IDs.

**Starting experiment:** Reverse the source list in a practice variation and select by the old index.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: The React parent stores an item list, a selected ID and an unrelated rerender counter. Detail content and item count are derived on every render. Child components receive data and callbacks through props. Removing the selected item produces an explicit empty detail without copying a stale selected object. An unrelated parent rerender preserves selection; reset restores the fixture. Data is in memory and reload resets it. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `selectedItem` is wrong. Hypothesis B: the rule is correct but `src/App.jsx` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js and src/App.jsx: item.id is identity, not position.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “The wrong item is selected after list order changes” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## When a proposed repair fails

Stop adding edits. Compare the new symptom with the old one and inspect the diff. Decide whether the experiment rejected your hypothesis or whether the repair failed to change the intended boundary. Revert only your own experimental change if needed, preserve other work, and try the next discriminating input.

## A useful help request

```text
Project: Component State Microscope; suspected owner: public/core.js / selectedItem.
Expected / observed: [exact difference].
Smallest reproduction: [inputs, actions and environment].
Hypothesis A predicts: [observation].
Hypothesis B predicts: [different observation].
Experiment already run and real output: [fill in].
Suggest one next experiment, not a rewrite. Separate facts from hypotheses.
```
