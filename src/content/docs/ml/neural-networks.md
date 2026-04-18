---
title: Neural Networks
description: Core concepts in neural network design, from perceptrons to deep architectures.
sidebar:
  order: 2
---

Neural networks are computational models inspired by the structure of biological nervous systems. Composed of layers of interconnected nodes (neurons), they learn hierarchical representations of data through training, making them remarkably versatile function approximators.

From early perceptrons to today's deep architectures with billions of parameters, neural networks have driven breakthroughs in image recognition, speech processing, game playing, and scientific discovery.

## Architecture Fundamentals

A neural network consists of:

- **Input layer** — Receives raw features from the data.
- **Hidden layers** — Intermediate layers that transform representations. Each neuron computes a weighted sum of its inputs, adds a bias, and applies a non-linear activation function.
- **Output layer** — Produces the final prediction, with structure determined by the task (e.g., softmax for classification, linear for regression).

The **depth** of a network (number of hidden layers) and **width** (neurons per layer) determine its capacity. Deeper networks can represent more complex functions but are harder to train.

## Activation Functions

Non-linear activation functions are critical — without them, a multi-layer network would collapse to a single linear transformation. Common choices include:

- **ReLU** (Rectified Linear Unit) — `max(0, x)`. Simple, computationally efficient, and avoids the vanishing gradient problem for positive values.
- **Sigmoid** — Maps inputs to (0, 1). Historically important but prone to vanishing gradients.
- **Tanh** — Maps inputs to (-1, 1). Zero-centered but shares vanishing gradient issues with sigmoid.
- **GELU / SiLU** — Smooth approximations used in modern architectures like transformers.

## Training with Backpropagation

Neural networks are trained using **gradient descent**: iteratively adjusting weights to minimize a loss function. The key algorithm is **backpropagation**, which efficiently computes the gradient of the loss with respect to each weight by applying the chain rule from the output layer back to the input.

Modern training typically uses **stochastic gradient descent (SGD)** or adaptive optimizers like Adam, processing mini-batches of data at each step rather than the full dataset.

## Common Architectures

- **Feedforward Networks (MLPs)** — Fully connected layers with no cycles. The simplest deep architecture.
- **Convolutional Neural Networks (CNNs)** — Use spatial filters to process grid-structured data like images. Exploit translation invariance through weight sharing.
- **Recurrent Neural Networks (RNNs)** — Process sequential data by maintaining hidden state across time steps. LSTMs and GRUs address the vanishing gradient problem.
- **Transformers** — Attention-based architectures that have largely replaced RNNs. See the [Transformers](/ai/transformers/) article for details.

## Key Concepts

- **Universal Approximation** — A sufficiently wide single-hidden-layer network can approximate any continuous function, though depth improves practical efficiency.
- **Vanishing/Exploding Gradients** — Gradients can shrink or grow exponentially through many layers, making training difficult. Addressed by residual connections, normalization, and careful initialization.
- **Batch Normalization** — Normalizes layer inputs across a mini-batch to stabilize and accelerate training.
- **Dropout** — Randomly deactivates neurons during training as a regularization technique to prevent co-adaptation.

## Further Reading

- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
- LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep Learning." *Nature*, 521(7553), 436-444.
- He, K., et al. (2016). "Deep Residual Learning for Image Recognition." *CVPR*.
