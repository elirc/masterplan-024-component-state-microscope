# M024: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain state owner through this project

The component responsible for storing and changing a value.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain derived value through this project

A calculation from existing state and props.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain callback prop through this project

A function passed so a child can request a parent-owned change.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain component identity through this project

The continuity React uses to preserve component state.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: Select light then rerender parent

light remains selected; only tick count increases

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Remove selected light

Two items remain and detail says No selected exhibit

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Change the title of the selected record

Derived detail reflects the current item rather than a copied snapshot

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Which two stored values are enough to derive the selected title?

The selected object can be obtained from items and selectedId, so storing another object would introduce synchronization work. The deliberate missing-ID state demonstrates this: a removed item cannot remain in the detail simply because an old selected object was copied into state earlier.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** What goes wrong if every list button owns its own independent selected boolean?

The list initiates selection and the detail displays it. Their parent therefore owns selectedId and passes a callback to the list. Neither child maintains a competing selected flag. The unrelated tick counter makes rerender behavior visible without introducing an effect, global store or routing library.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Which files would you edit for selection behavior, and which generated file should you leave alone?

The data helpers remain ordinary JavaScript, so the core contract can be read before JSX. React handles rendering from state and events; esbuild turns JSX and imports into a local browser bundle. The generated bundle is ignored because the authored files and lockfile are the reproducible inputs.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** Which stored value could be removed because it is already derivable?

React renders a description from current state. A selection can be represented by one ID while the selected object, detail and count are calculations. Removing an item then naturally changes what the ID resolves to. The tick button provides a controlled unrelated rerender so you can observe preservation without introducing effects or global state.

Look for a concrete connection to `public/core.js` or `src/App.jsx`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a reorder action

**First hint:** The desired improvement is “Prove selection follows identity instead of position.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Return a reversed copy of items; keep selectedId unchanged; derive detail from the reordered collection.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The same exhibit remains selected after reversing.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose reverse or a documented sort. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add an explicit clear-selection action

**First hint:** The desired improvement is “Distinguish no selection from a removed selection.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Choose a sentinel ID representation; add a parent handler; render a specific empty message.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Clearing selection leaves the item list intact.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose null versus a dedicated empty string. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a selection history worksheet

**First hint:** The desired improvement is “Inspect events without duplicating selected objects in state.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Record IDs or event receipts in a separate bounded log; derive display labels carefully; explain missing historical items.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The history does not become a competing current selected object.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose snapshot versus live-label semantics. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a remove-unselected action

**First hint:** The desired improvement is “Verify unrelated collection changes preserve detail.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Target a known different ID; update items immutably; keep selection identity unchanged.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Removing another item changes count but not selected detail.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the interaction for selecting a removal target. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a component-prop contract

**First hint:** The desired improvement is “Make the child interfaces explicit in documentation.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: List each prop and allowed shape; identify who owns callbacks; give a tiny usage example.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The contract agrees with ExhibitList and Detail source.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether runtime guards are useful at this scale. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a count badge component

**First hint:** The desired improvement is “Extract a genuinely derived display.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Pass the current item count as a prop; avoid local count state; render a readable label.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The badge updates after removal and reset without synchronization effects.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose singular and plural wording. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Compare stale-object state on a branch

**First hint:** The desired improvement is “Demonstrate the rejected architecture concretely.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Store a copied selected object only in a scratch variant; rename or remove its source item; observe divergence.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The worksheet identifies the duplicated fact and restores the ID-based design.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the smallest revealing interaction. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add a reset scope choice

**First hint:** The desired improvement is “Separate resetting selection from restoring the whole fixture.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Offer two explicitly labeled actions; define affected state values; test each after item removal.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Selection-only reset does not silently resurrect removed items.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a valid fallback when paper is missing. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a React event trace panel

**First hint:** The desired improvement is “Connect user actions to resulting state.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Record action name and selected ID in a bounded UI log; keep logging outside render calculations; inspect an unrelated rerender.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Rerendering alone does not invent a new selection event.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose which events to record. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
