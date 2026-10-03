# M024: expanded learning workshop

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

This second learning edition extends the original companion. The working implementation is unchanged. The original six stories plus nine new stories give you **15 unfinished practice stories**. The new chapters add guided reconstruction, explicit test design, worked debugging routes, decision reviews and repeated recall. None of the proposed features is silently claimed as implemented.

## Choose a route instead of reading everything first

If syntax still feels unfamiliar, begin with the foundations clinic and one ordinary trace. If you can explain the reference, choose one story and consult only the relevant sections. If you already implemented a variation, use the test-design and review workshops to challenge it. The aim is increasing independence, not completing a reading quota.

**Current learning target:** React components and minimal state. Pair this with existing curriculum #38, [recipeweb](https://github.com/elirc/recipeweb). The broader MASTERPLAN checkpoint is #38.

## What to keep saying in your own words

React renders a description from current state. A selection can be represented by one ID while the selected object, detail and count are calculations. Removing an item then naturally changes what the ID resolves to. The tick button provides a controlled unrelated rerender so you can observe preservation without introducing effects or global state.

## Chapter map

- [Foundations clinic: vocabulary, diagrams and small predictions](09-FOUNDATIONS-CLINIC.md)
- [Guided rebuild: reconstruct the contract in small slices](10-GUIDED-REBUILD-SESSIONS.md)
- [Stories 07–15: nine additional implementation workshops](11-NINE-MORE-STORIES.md)
- [Debugging casebook: hypotheses, experiments and recovery](12-DEBUGGING-CASEBOOK.md)
- [Agentic practice: bounded prompts and independent review](13-AGENTIC-PRACTICE-PLAYBOOK.md)
- [Retrieval workbook: repeated recall with changed examples](14-RETRIEVAL-AND-TRANSFER.md)
- [Architecture lab: compare alternatives with evidence](15-ARCHITECTURE-DECISION-LAB.md)
- [Test design: oracles, boundaries and useful failures](16-TEST-DESIGN-WORKSHOP.md)
- [Companion journal: twelve guided learning sessions](17-SESSION-JOURNAL.md)
- [Independent capstone: a variation you own](18-INDEPENDENT-CAPSTONE.md)
- [Review and handoff: explain a trustworthy change](19-REVIEW-AND-HANDOFF.md)
- [Mentor hints: answer directions after your attempt](20-MENTOR-HINTS.md)

## All fifteen stories

Stories 01–06 remain in [the original practice chapter](05-PRACTICE-STORIES.md), now with added planning checkpoints. Stories 07–15 are in [the new implementation workshops](11-NINE-MORE-STORIES.md). Each includes a bounded plan, acceptance evidence, a choice for you to make, a review route and a saved coaching prompt.

| Story | Exercise | Where |
|---|---|---|
| 01 | Add a search field | Original practice chapter |
| 02 | Choose a removal fallback | Original practice chapter |
| 03 | Add an editable exhibit title | Original practice chapter |
| 04 | Show a derived position label | Original practice chapter |
| 05 | Extract a reusable detail component | Original practice chapter |
| 06 | Add a keyboard-friendly empty action | Original practice chapter |
| 07 | Add a reorder action | Nine more stories |
| 08 | Add an explicit clear-selection action | Nine more stories |
| 09 | Add a selection history worksheet | Nine more stories |
| 10 | Add a remove-unselected action | Nine more stories |
| 11 | Add a component-prop contract | Nine more stories |
| 12 | Add a count badge component | Nine more stories |
| 13 | Compare stale-object state on a branch | Nine more stories |
| 14 | Add a reset scope choice | Nine more stories |
| 15 | Add a React event trace panel | Nine more stories |

## How repetition is used

The same important idea reappears as a definition, a concrete prediction, a failure diagnosis, a feature decision and a later recall question. Those are different tasks. Do not count rereading the same sentence five times as five successful retrieval attempts. Close the explanation, change one input or condition, and produce a new answer before checking it.

Work in short sessions and leave a specific next action in your journal. A useful stopping point might be one explained trace, one confirmed hypothesis or one reviewed acceptance example. You do not need to implement every optional extension before progressing to the next project.

## Evidence labels

The existing verification record describes checks actually run against the reference. New casebook incidents are hypothetical training scenarios. Saved prompts are instructions for future use, not records of assistant conversations that already happened. Journal fields are blank on purpose. Distinguish reference evidence, your current observation and a proposed experiment whenever you write about the project.
