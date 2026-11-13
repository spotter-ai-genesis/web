---
name: "pytorch-image-attn"
repo: "https://github.com/spotter-ai-genesis/pytorch-image-models"
summary: "Patch attention from vision transformers, one provenance record per forward pass."
diagram: timm
order: 3
---

A fork of [timm](https://github.com/huggingface/pytorch-image-models) whose attention blocks expose
their attention maps, and a Flowcept `TimmInterceptor` that records them: which image patches each
prediction relied on. This extends provenance capture from language models to vision models, such
as the vision transformers that extract plant traits from images in OPAL.
