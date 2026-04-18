---
title: Optimization
description: Optimization methods and techniques for training machine learning models.
sidebar:
  order: 3
---

Optimization lies at the heart of machine learning. Every trained model is the result of an optimization process that searches for parameters minimizing a loss function over training data. The choice of optimizer, learning rate schedule, and training strategy can make the difference between a model that converges to a good solution and one that fails entirely.

Modern deep learning has driven the development of sophisticated optimization techniques tailored to the challenges of high-dimensional, non-convex loss landscapes.

## Gradient Descent

The foundational optimization algorithm in ML is **gradient descent**: iteratively updating parameters in the direction that reduces the loss. The update rule is:

**w = w - lr * gradient(L)**

where *lr* is the learning rate and *L* is the loss function. In practice, three variants are commonly used:

- **Batch Gradient Descent** — Computes gradients over the entire dataset. Stable but computationally expensive for large datasets.
- **Stochastic Gradient Descent (SGD)** — Computes gradients on a single example. Noisy but fast, with the noise sometimes helping escape local minima.
- **Mini-Batch SGD** — The standard compromise: computes gradients on small batches (32-512 examples), balancing stability and efficiency.

## Adaptive Optimizers

Modern optimizers adapt the learning rate per-parameter based on gradient history:

- **Adam** — Combines momentum (exponential moving average of gradients) with RMSProp (adaptive per-parameter learning rates). The default choice for many deep learning tasks.
- **AdamW** — A variant that decouples weight decay from the adaptive learning rate, improving generalization.
- **SGD with Momentum** — Adds a velocity term that accumulates gradient direction, accelerating convergence and damping oscillations. Often preferred for CNNs and achieves better final performance with careful tuning.

## Learning Rate Schedules

The learning rate is perhaps the single most important hyperparameter. Common scheduling strategies include:

- **Warmup** — Gradually increasing the learning rate from near-zero during the first few thousand steps, stabilizing early training.
- **Cosine Annealing** — Smoothly decreasing the learning rate following a cosine curve, often with warm restarts.
- **Step Decay** — Reducing the learning rate by a fixed factor at predetermined epochs.
- **One-Cycle Policy** — A single cycle of increasing then decreasing the learning rate, often yielding fast convergence.

## Challenges in Deep Learning Optimization

- **Non-Convexity** — Deep learning loss landscapes have many local minima and saddle points. Fortunately, most local minima in high-dimensional spaces tend to have similar loss values.
- **Gradient Issues** — Vanishing and exploding gradients can stall or destabilize training. Addressed through architectural choices (residual connections, normalization) and gradient clipping.
- **Generalization vs. Optimization** — A lower training loss does not always mean better test performance. Techniques like early stopping, weight decay, and data augmentation help bridge this gap.

## Key Concepts

- **Convergence** — The property of an optimization algorithm reaching a (local) minimum of the loss function.
- **Learning Rate** — Controls the step size of parameter updates. Too large causes divergence; too small causes slow convergence.
- **Momentum** — Incorporates past gradient information to smooth updates and accelerate convergence.
- **Weight Decay** — A regularization term that penalizes large weights, equivalent to L2 regularization.
- **Gradient Clipping** — Capping gradient magnitudes to prevent exploding gradients, especially important for RNNs and large-scale training.

## Further Reading

- Ruder, S. (2016). "An Overview of Gradient Descent Optimization Algorithms." *arXiv preprint*.
- Kingma, D. & Ba, J. (2015). "Adam: A Method for Stochastic Optimization." *ICLR*.
- Smith, L. N. (2019). "Super-Convergence: Very Fast Training of Neural Networks Using Large Learning Rates." *AISTATS*.
