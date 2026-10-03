# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add a search field

**Hint 1 — ownership:** Begin from `selectedItem`. Store the query in the parent and derive a visible list; decide whether filtering hides or clears the selected detail.

**Hint 2 — reasoning:** Revisit the decision “Store the minimum selection identity”. Ask yourself: Which two stored values are enough to derive the selected title?

**Answer direction:** A defensible solution demonstrates this observable result: The documented policy is tested when the selected item no longer matches the query. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Choose a removal fallback

**Hint 1 — ownership:** Begin from `selectedItem`. Change the missing-selection policy to select the next available exhibit, with an explicit empty-list rule.

**Hint 2 — reasoning:** Revisit the decision “Keep state in the common parent”. Ask yourself: What goes wrong if every list button owns its own independent selected boolean?

**Answer direction:** A defensible solution demonstrates this observable result: Removing first, last and only items yields the documented selected ID and detail. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Add an editable exhibit title

**Hint 1 — ownership:** Begin from `selectedItem`. Update one item immutably by ID and let the detail derive the new title.

**Hint 2 — reasoning:** Revisit the decision “Use React only after the plain-state exercises”. Ask yourself: Which files would you edit for selection behavior, and which generated file should you leave alone?

**Answer direction:** A defensible solution demonstrates this observable result: Renaming a selected item updates both list and detail without storing a second selected object. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Show a derived position label

**Hint 1 — ownership:** Begin from `selectedItem`. Display selected position out of current item count without adding state for either number.

**Hint 2 — reasoning:** Revisit the decision “Store the minimum selection identity”. Ask yourself: Which two stored values are enough to derive the selected title?

**Answer direction:** A defensible solution demonstrates this observable result: Removing or reordering items updates the label and handles a missing selection explicitly. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Extract a reusable detail component

**Hint 1 — ownership:** Begin from `selectedItem`. Move Detail into its own source file without changing its prop contract or behavior.

**Hint 2 — reasoning:** Revisit the decision “Keep state in the common parent”. Ask yourself: What goes wrong if every list button owns its own independent selected boolean?

**Answer direction:** A defensible solution demonstrates this observable result: The build and browser interaction still work; the extraction has one clear ownership reason. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Add a keyboard-friendly empty action

**Hint 1 — ownership:** Begin from `selectedItem`. Offer a clear route to select the first available item from the empty-detail state.

**Hint 2 — reasoning:** Revisit the decision “Use React only after the plain-state exercises”. Ask yourself: Which files would you edit for selection behavior, and which generated file should you leave alone?

**Answer direction:** A defensible solution demonstrates this observable result: The action is disabled or replaced by an explanation when no items remain and selection stays ID-based. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Click an exhibit → child calls onSelect(id) → parent updates selectedId → React renders parent → selectedItem finds current object in current items → Detail receives that object and list buttons derive aria-pressed. Remove filters items; the unchanged selected ID now resolves to null.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
