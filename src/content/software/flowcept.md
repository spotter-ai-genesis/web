---
name: "Flowcept"
repo: "https://github.com/spotter-ai-genesis/flowcept"
summary: "Consolidates the provenance record behind every round: prompts by sequence, replies, dependencies, metadata, and attention by reference."
diagram: flowcept
order: 2
---

SPOTTER-AI's fork of [Flowcept](https://github.com/ORNL/flowcept) adds vLLM and timm adapters.
Every round of an agentic chain gets two linked records: the **agent task**
(PROV-AGENT, Souza et al., eScience 2025) with what was used and generated, and a
**decode_attention task** from the connector with token counts, timing and a reference to the
attention file (URI, SHA-256, size). Earlier replies are declared sequences of later prompts, which
makes the dependencies between rounds explicit edges the backward search can walk.

Attention is stored by reference: inline, a 128k-token prompt would serialize to hundreds of MB
of JSON, while the task record stays about 1.6 KB. Rounds are matched to their files by prompt
token ids, not by vLLM's request counter (which restarts per engine).
