# Build journal: Component State Microscope

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A learner wants to see which component owns selection in a tiny exhibit browser.

The main temptation was to make the project larger than its learning target. The useful boundary is **react components and minimal state**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

The React parent stores an item list, a selected ID and an unrelated rerender counter. Detail content and item count are derived on every render. Child components receive data and callbacks through props. Removing the selected item produces an explicit empty detail without copying a stale selected object. An unrelated parent rerender preserves selection; reset restores the fixture. Data is in memory and reload resets it.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Store the minimum selection identity

The selected object can be obtained from items and selectedId, so storing another object would introduce synchronization work. The deliberate missing-ID state demonstrates this: a removed item cannot remain in the detail simply because an old selected object was copied into state earlier.

**What a learner should challenge:** Which two stored values are enough to derive the selected title?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Keep state in the common parent

The list initiates selection and the detail displays it. Their parent therefore owns selectedId and passes a callback to the list. Neither child maintains a competing selected flag. The unrelated tick counter makes rerender behavior visible without introducing an effect, global store or routing library.

**What a learner should challenge:** What goes wrong if every list button owns its own independent selected boolean?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Use React only after the plain-state exercises

The data helpers remain ordinary JavaScript, so the core contract can be read before JSX. React handles rendering from state and events; esbuild turns JSX and imports into a local browser bundle. The generated bundle is ignored because the authored files and lockfile are the reproducible inputs.

**What a learner should challenge:** Which files would you edit for selection behavior, and which generated file should you leave alone?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `selectedItem`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
