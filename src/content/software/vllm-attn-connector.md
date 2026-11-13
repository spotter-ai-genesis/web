---
name: "vllm-attn-connector"
repo: "https://github.com/spotter-ai-genesis/vllm-attn-connector"
summary: "Captures the exact attention of every generated token over the prompt, inside a running vLLM engine."
diagram: connector
order: 1
---

A small probe inside each decode step copies the query of the token being generated (about 16 KB
per layer); the keys are already in the KV cache. On a background CUDA stream, the connector
recomputes that token's attention to every prompt token (q·Kᵀ, softmax, reduced over layers and
heads) and keeps the strongest positions within each prompt sequence. The next decode step waits
for the snapshot, so snapshots line up exactly with generated tokens; the scheduling step in
between hides most of the cost. When the request finishes, everything is written once: a
SafeTensors file plus a Flowcept task that points to it.

No vLLM source is patched and no kernel is modified; it works with `torch.compile` and CUDA graphs.
