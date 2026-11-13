---
name: "CLIO (IOWarp)"
repo: "https://github.com/iowarp/clio-agent"
summary: "The agentic workspace where SPOTTER-AI becomes visible: select any part of an answer and see what it relied on."
diagram: clio
order: 5
---

[CLIO](https://github.com/iowarp/clio-agent) is the agentic workspace for scientific data from the
IOWarp project (Gnosis Research Center, Illinois Tech; BSD-3-Clause). It runs tools where the data
lives and is extensible through plugins. SPOTTER-AI connects through provenance: CLIO reads the
Flowcept record and the SafeTensors attention, aggregates it for the selected span, and paints the
heat map over every prompt of the session, text in one color, tool calls in another.
