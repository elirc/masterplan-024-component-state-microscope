# M024: architecture decision laboratory

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Architecture at this scale means assigning responsibilities and avoiding unnecessary synchronization. You do not need a distributed system diagram to make a consequential design choice. A small function boundary, a stable identifier or one CSS owner can determine whether a later change stays understandable.

## Decision review 1: Store the minimum selection identity

**Reference rationale:** The selected object can be obtained from items and selectedId, so storing another object would introduce synchronization work. The deliberate missing-ID state demonstrates this: a removed item cannot remain in the detail simply because an old selected object was copied into state earlier.

**Question to resolve:** Which two stored values are enough to derive the selected title?

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `public/core.js` and `src/App.jsx`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## Decision review 2: Keep state in the common parent

**Reference rationale:** The list initiates selection and the detail displays it. Their parent therefore owns selectedId and passes a callback to the list. Neither child maintains a competing selected flag. The unrelated tick counter makes rerender behavior visible without introducing an effect, global store or routing library.

**Question to resolve:** What goes wrong if every list button owns its own independent selected boolean?

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `public/core.js` and `src/App.jsx`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## Decision review 3: Use React only after the plain-state exercises

**Reference rationale:** The data helpers remain ordinary JavaScript, so the core contract can be read before JSX. React handles rendering from state and events; esbuild turns JSX and imports into a local browser bundle. The generated bundle is ignored because the authored files and lockfile are the reproducible inputs.

**Question to resolve:** Which files would you edit for selection behavior, and which generated file should you leave alone?

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `public/core.js` and `src/App.jsx`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## A compact decision record you can copy

```text
Context and user need:
Current invariant:
Proposal A:
Proposal B:
Discriminating example:
Observed or predicted outcomes, clearly labeled:
Decision and reason:
Cost accepted:
Revisit when:
Verification still needed:
```

## Avoid accidental scope expansion

A new abstraction should answer a problem you can name in the current code or selected story. If the main benefit is that it looks more professional, ask what specific change becomes easier and what new concepts a junior now has to learn. Keep the reference small enough to trace.

## Transfer the review habit

Which stored value could be removed because it is already derivable?

Use that question to compare this project with its paired curriculum repository. Cite the actual source or guide you inspected; do not claim the other repository uses a pattern merely because its name sounds related. Your comparison may conclude that the shared learning concept appears in a different implementation.
