---
slug: ink-analyzer-updates
title: ink! analyzer updates
authors: [david]
tags: [ink!, semantic analyzer, language server, LSP, VS Code]
image: /img/header.svg
---

![ink! analyzer cover image](/img/header.svg 'ink! analyzer cover image')

I am proud to announce the successful completion of another [Web3 Foundation](https://web3.foundation/) grant for
updating [ink! analyzer](https://github.com/ink-analyzer) - a collection of modular and reusable libraries and tools
for semantic analysis of [ink!](https://use.ink/) smart contracts.

If you're new to ink! analyzer (or if you need a refresher 🙂), you can refer to the
[introductory blog post](/blog/introducing-ink-analyzer) for a deep dive into the
[problem](/blog/introducing-ink-analyzer#problem), [solution](/blog/introducing-ink-analyzer#solution)
and technical descriptions of each of the [architectural components](/blog/introducing-ink-analyzer#architecture)
of the project.

- Semantic Analyzer ([source code](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer),
  [crates.io](https://crates.io/crates/ink-analyzer), [docs.rs](https://docs.rs/ink-analyzer/latest/ink_analyzer/)).
- Language Server ([source code](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server),
  [binary/executable releases](https://github.com/ink-analyzer/ink-analyzer/releases),
  [crates.io](https://crates.io/crates/ink-lsp-server), [docs.rs](https://docs.rs/ink-lsp-server/latest/ink_lsp_server/)).
- Visual Studio Code Extension ([source code](https://github.com/ink-analyzer/ink-vscode),
  [VS Code Marketplace listing](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer),
  [VSIX releases](https://github.com/ink-analyzer/ink-vscode/releases)).

## What's new?

This stage of the project has improved ink! language support features across all components by adding:

- Quick fixes for all diagnostic errors and warnings.
- ink! e2e test macro support (i.e diagnostics, quickfixes, completions, code actions and hover content).
- A command for creating an ink! project (with a contract stub/snippet).
- Code/intent actions for inserting code stubs/snippets for contextually relevant ink! entities
  (i.e. full items not just attributes e.g. an `#[ink(event)]` annotated `struct`,
  an `#[ink(message)]` annotated `fn` e.t.c).
- Inlay hints and signature help/parameter hints for ink! attribute arguments
  (e.g. `u32 | _` for ink! selectors, `impl Environment` for `env` arguments e.t.c).
- Code/intent actions for "flattening" ink! attributes.
- Diagnostics that verify that the value of `env` and `environment` arguments for `#[ink::contract]` and
  `#[ink_e2e::test]` respectively `impl Environment` as well as quick fixes to `impl Environment` for
  the target item where necessary.
- Diagnostics that verify chain extension `ErrorCode` types, and other input and output types,
  implement required traits (e.g. `FromStatusCode` for `ErrorCode` types, and
  [SCALE codec](https://docs.substrate.io/reference/scale-codec/) traits - i.e. scale's `Encode` and `Decode` and
  scale-info's `TypeInfo` traits - for `ErrorCode` types, and input and output types of chain extension methods)
  as well as quick fixes to implement the required traits for the target items where necessary.
- Diagnostics and quickfixes for ink! trait definition implementations that don't match the ink! trait definition
  (e.g. implementing missing methods, removing undeclared methods, fixing method signatures,
  updating ink! attributes to match the trait definition e.t.c).

<!-- truncate -->

## Conclusion

You can learn more about all ink! analyzer components in the [introductory blog post](/blog/introducing-ink-analyzer)
(including links to all available project resources in the ["Diving Deeper"](/blog/introducing-ink-analyzer#diving-deeper)
section), and/or checkout the [ink! analyzer organization on GitHub](https://github.com/ink-analyzer) for:
installation, development, usage and testing instructions, library documentation, low-level technical and
architectural descriptions, access to the source code, and distributable releases of the ink! Language Server and
[VSIX packages](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)
for the VS Code extension (if you prefer not to use the VS Code marketplace) for most of the major platforms/architectures.

Issues, bug reports, PRs and feature requests are welcome at the respective GitHub repositories 🙂.

Special thanks to the [Web3 Foundation](https://web3.foundation/) for funding ink! analyzer's development via
two generous grant.
