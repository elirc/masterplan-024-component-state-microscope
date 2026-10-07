# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [src/App.jsx](../src/App.jsx) | React state, components and event handlers. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |
| [src/main.jsx](../src/main.jsx) | Mounts the React component tree. |
| [tools/build.mjs](../tools/build.mjs) | Bundles authored JSX and npm imports for the local browser. |
| [package-lock.json](../package-lock.json) | Pins the installed dependency graph for npm ci. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `selectedItem`. Use this trace as a map: Click an exhibit → child calls onSelect(id) → parent updates selectedId → React renders parent → selectedItem finds current object in current items → Detail receives that object and list buttons derive aria-pressed. Remove filters items; the unchanged selected ID now resolves to null.

The tooling is intentionally separate from the product concept. You can study the local server, build step or CI after the main rule is clear. None of them should become a prerequisite for understanding a small pure function.

## Decision: Store the minimum selection identity

The selected object can be obtained from items and selectedId, so storing another object would introduce synchronization work. The deliberate missing-ID state demonstrates this: a removed item cannot remain in the detail simply because an old selected object was copied into state earlier.

**Review question:** Which two stored values are enough to derive the selected title?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Keep state in the common parent

The list initiates selection and the detail displays it. Their parent therefore owns selectedId and passes a callback to the list. Neither child maintains a competing selected flag. The unrelated tick counter makes rerender behavior visible without introducing an effect, global store or routing library.

**Review question:** What goes wrong if every list button owns its own independent selected boolean?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Use React only after the plain-state exercises

The data helpers remain ordinary JavaScript, so the core contract can be read before JSX. React handles rendering from state and events; esbuild turns JSX and imports into a local browser bundle. The generated bundle is ignored because the authored files and lockfile are the reproducible inputs.

**Review question:** Which files would you edit for selection behavior, and which generated file should you leave alone?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core (`public/core.js`), state, wording and interaction in the components (`src/App.jsx`), and layout in the relevant CSS rule.

If a story crosses two files, say why. A new option may require the core contract, a component and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

Persistence and frameworks are explicit where used: M019 saves a namespaced local draft; M024–M025 introduce React. The remaining builds use plain JavaScript and local data. M025 saved definitions last for the current session only. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
