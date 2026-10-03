# M024: practice stories 07–15

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

These nine proposals extend the original six stories. They are intentionally not implemented in the reference. Each plan gives you boundaries and a route, while leaving the actual patch, exact fixtures and a product decision to you. Start with one story; do not bundle all nine into a single difficult-to-review change.

## Story 07: Add a reorder action

**User story:** As a user or learner of Component State Microscope, I want to prove selection follows identity instead of position so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The same exhibit remains selected after reversing.

**Decision you own:** Choose reverse or a documented sort. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The same exhibit remains selected after reversing.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Return a reversed copy of items.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Keep selectedId unchanged.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Derive detail from the reordered collection.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The same exhibit remains selected after reversing.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 07: Add a reorder action in Component State Microscope.
Acceptance requirement: The same exhibit remains selected after reversing.
My unresolved choice: Choose reverse or a documented sort.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 08: Add an explicit clear-selection action

**User story:** As a user or learner of Component State Microscope, I want to distinguish no selection from a removed selection so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Clearing selection leaves the item list intact.

**Decision you own:** Choose null versus a dedicated empty string. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Clearing selection leaves the item list intact.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Choose a sentinel ID representation.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Add a parent handler.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Render a specific empty message.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Clearing selection leaves the item list intact.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 08: Add an explicit clear-selection action in Component State Microscope.
Acceptance requirement: Clearing selection leaves the item list intact.
My unresolved choice: Choose null versus a dedicated empty string.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 09: Add a selection history worksheet

**User story:** As a user or learner of Component State Microscope, I want to inspect events without duplicating selected objects in state so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The history does not become a competing current selected object.

**Decision you own:** Choose snapshot versus live-label semantics. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The history does not become a competing current selected object.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Record IDs or event receipts in a separate bounded log.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Derive display labels carefully.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Explain missing historical items.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The history does not become a competing current selected object.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 09: Add a selection history worksheet in Component State Microscope.
Acceptance requirement: The history does not become a competing current selected object.
My unresolved choice: Choose snapshot versus live-label semantics.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 10: Add a remove-unselected action

**User story:** As a user or learner of Component State Microscope, I want to verify unrelated collection changes preserve detail so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Removing another item changes count but not selected detail.

**Decision you own:** Choose the interaction for selecting a removal target. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Removing another item changes count but not selected detail.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Target a known different ID.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Update items immutably.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Keep selection identity unchanged.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Removing another item changes count but not selected detail.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 10: Add a remove-unselected action in Component State Microscope.
Acceptance requirement: Removing another item changes count but not selected detail.
My unresolved choice: Choose the interaction for selecting a removal target.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 11: Add a component-prop contract

**User story:** As a user or learner of Component State Microscope, I want to make the child interfaces explicit in documentation so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The contract agrees with ExhibitList and Detail source.

**Decision you own:** Choose whether runtime guards are useful at this scale. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The contract agrees with ExhibitList and Detail source.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **List each prop and allowed shape.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Identify who owns callbacks.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Give a tiny usage example.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The contract agrees with ExhibitList and Detail source.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 11: Add a component-prop contract in Component State Microscope.
Acceptance requirement: The contract agrees with ExhibitList and Detail source.
My unresolved choice: Choose whether runtime guards are useful at this scale.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 12: Add a count badge component

**User story:** As a user or learner of Component State Microscope, I want to extract a genuinely derived display so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The badge updates after removal and reset without synchronization effects.

**Decision you own:** Choose singular and plural wording. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The badge updates after removal and reset without synchronization effects.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Pass the current item count as a prop.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Avoid local count state.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Render a readable label.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The badge updates after removal and reset without synchronization effects.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 12: Add a count badge component in Component State Microscope.
Acceptance requirement: The badge updates after removal and reset without synchronization effects.
My unresolved choice: Choose singular and plural wording.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 13: Compare stale-object state on a branch

**User story:** As a user or learner of Component State Microscope, I want to demonstrate the rejected architecture concretely so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The worksheet identifies the duplicated fact and restores the ID-based design.

**Decision you own:** Choose the smallest revealing interaction. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The worksheet identifies the duplicated fact and restores the ID-based design.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Store a copied selected object only in a scratch variant.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Rename or remove its source item.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Observe divergence.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The worksheet identifies the duplicated fact and restores the ID-based design.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 13: Compare stale-object state on a branch in Component State Microscope.
Acceptance requirement: The worksheet identifies the duplicated fact and restores the ID-based design.
My unresolved choice: Choose the smallest revealing interaction.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 14: Add a reset scope choice

**User story:** As a user or learner of Component State Microscope, I want to separate resetting selection from restoring the whole fixture so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Selection-only reset does not silently resurrect removed items.

**Decision you own:** Choose a valid fallback when paper is missing. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Selection-only reset does not silently resurrect removed items.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Offer two explicitly labeled actions.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Define affected state values.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Test each after item removal.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Selection-only reset does not silently resurrect removed items.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 14: Add a reset scope choice in Component State Microscope.
Acceptance requirement: Selection-only reset does not silently resurrect removed items.
My unresolved choice: Choose a valid fallback when paper is missing.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 15: Add a React event trace panel

**User story:** As a user or learner of Component State Microscope, I want to connect user actions to resulting state so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Rerendering alone does not invent a new selection event.

**Decision you own:** Choose which events to record. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `selectedItem` once. Then inspect `src/App.jsx` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Rerendering alone does not invent a new selection event.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Record action name and selected ID in a bounded UI log.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Keep logging outside render calculations.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Inspect an unrelated rerender.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Rerendering alone does not invent a new selection event.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 15: Add a React event trace panel in Component State Microscope.
Acceptance requirement: Rerendering alone does not invent a new selection event.
My unresolved choice: Choose which events to record.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.
