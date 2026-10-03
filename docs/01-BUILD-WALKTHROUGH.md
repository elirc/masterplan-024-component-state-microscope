# Building Component State Microscope, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

The React parent stores an item list, a selected ID and an unrelated rerender counter. Detail content and item count are derived on every render. Child components receive data and callbacks through props. Removing the selected item produces an explicit empty detail without copying a stale selected object. An unrelated parent rerender preserves selection; reset restores the fixture. Data is in memory and reload resets it.

The smallest useful result answers this user need: A learner wants to see which component owns selection in a tiny exhibit browser. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Locate the component tree

Open src/main.jsx and follow App into ExhibitList and Detail in src/App.jsx. Draw the props flowing down and the onSelect callback flowing up. These are local functions and values, not a separate message bus. package.json documents the build step needed before the preview can serve the bundle.

**Pause and produce evidence:** Select light then rerender parent. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Distinguish state from calculations

Find all three useState calls and then the selected constant. items, selectedId and ticks are stored. selected and items.length are calculations. Ask what user event can change each stored value; if a value can be recomputed from those sources, explain why it does not need its own setter.

**Pause and produce evidence:** Remove selected light. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Remove the selected object

Click Moving light and remove it. selectedId still says light in the diagnostic output, but selectedItem returns null. This is a deliberate policy that exposes the missing reference rather than silently selecting another item. A learner may choose a fallback policy in an exercise after documenting the change.

**Pause and produce evidence:** Change the title of the selected record. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Connect core and browser evidence

Node tests prove identity lookup and immutable removal for explicit arrays. The browser checks prove the actual React bundle wires buttons and props correctly. A passing core test alone cannot prove the UI called the helper with the right ID, and a screenshot alone cannot prove rerender preservation.

**Pause and produce evidence:** Change the title of the selected record. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose the closest common owner of selection.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
