---
title: Computational Neuroscience
description: Mathematical and computational approaches to understanding the brain and neural systems.
sidebar:
  order: 1
---

Computational neuroscience seeks to understand the brain through mathematical models and computer simulations. By building formal descriptions of how neurons, circuits, and systems process information, researchers can test hypotheses about brain function, make predictions about neural behavior, and bridge the gap between biological observation and theoretical understanding.

This field sits at the intersection of neuroscience, physics, mathematics, and computer science, drawing tools from dynamical systems theory, information theory, and statistical mechanics.

## Levels of Analysis

Following David Marr's influential framework, computational neuroscience operates at three levels:

1. **Computational level** — What problem is the neural system solving? What is the goal of a particular brain process?
2. **Algorithmic level** — What representations and procedures does the brain use to solve the problem?
3. **Implementation level** — How are these algorithms realized in biological neural hardware?

This multi-level approach helps organize research across scales, from single-neuron biophysics to systems-level cognition.

## Neuron Models

At the cellular level, computational neuroscientists develop models of individual neurons:

- **Hodgkin-Huxley Model** — A biophysically detailed model describing how action potentials are generated through voltage-gated ion channels. Derived from Nobel Prize-winning experiments on the squid giant axon.
- **Integrate-and-Fire Models** — Simplified neuron models that track membrane voltage and fire a spike when a threshold is reached. Computationally efficient for large network simulations.
- **Izhikevich Model** — A two-variable model that captures a rich repertoire of spiking behaviors while remaining computationally tractable.

## Network Models

Beyond single neurons, computational neuroscience models circuits and populations:

- **Recurrent Networks** — Models of local cortical circuits with excitatory and inhibitory populations, exhibiting phenomena like persistent activity, oscillations, and pattern formation.
- **Attractor Networks** — Networks whose dynamics converge to stable states, used to model memory, decision-making, and spatial navigation.
- **Spiking Neural Networks** — Networks of biologically plausible neuron models that communicate through discrete spikes, capturing temporal dynamics that rate-based models miss.

## Key Concepts

- **Neural Coding** — How information is represented in patterns of neural activity (see the [Neural Coding](/neuroscience/neural-coding/) article).
- **Synaptic Plasticity** — Activity-dependent changes in synaptic strength, forming the biological basis of learning. Hebbian learning ("neurons that fire together wire together") is the foundational principle.
- **Population Dynamics** — The collective behavior of large groups of neurons, often analyzed through mean-field approaches and dimensionality reduction.
- **Information Theory** — Quantitative measures (entropy, mutual information) used to assess how efficiently neural systems encode and transmit information.

## Further Reading

- Dayan, P. & Abbott, L. F. (2001). *Theoretical Neuroscience: Computational and Mathematical Modeling of Neural Systems*. MIT Press.
- Gerstner, W., et al. (2014). *Neuronal Dynamics: From Single Neurons to Networks and Models of Cognition*. Cambridge University Press.
- Marr, D. (1982). *Vision: A Computational Investigation*. MIT Press.
