---
title: Supervised Learning
description: Fundamentals of supervised learning, including classification, regression, and evaluation.
sidebar:
  order: 1
---

Supervised learning is the most widely used paradigm in machine learning. Given a dataset of input-output pairs, the goal is to learn a function that maps inputs to outputs, enabling the model to make accurate predictions on previously unseen data.

The field encompasses a broad range of methods — from simple linear models to deep neural networks — and underpins applications in image recognition, natural language processing, medical diagnosis, and countless other domains.

## Problem Formulation

In supervised learning, we are given a training set of *n* examples: pairs of inputs **x** and corresponding labels **y**. The task is to learn a function *f* that minimizes some measure of error between predicted and true labels on new, unseen data.

The two primary task types are:

- **Classification** — The output is a discrete category (e.g., spam vs. not spam, digit recognition). The model learns decision boundaries that separate different classes in the input space.
- **Regression** — The output is a continuous value (e.g., house price prediction, temperature forecasting). The model learns a smooth mapping from inputs to real-valued outputs.

## Common Algorithms

- **Linear Regression / Logistic Regression** — Simple, interpretable models that form the foundation of many more complex methods.
- **Decision Trees and Random Forests** — Non-parametric methods that partition the input space using learned rules. Random forests combine multiple trees for improved robustness.
- **Support Vector Machines** — Find the maximum-margin hyperplane separating classes, with kernel methods enabling non-linear decision boundaries.
- **k-Nearest Neighbors** — A simple instance-based method that classifies based on the majority label among the closest training examples.

## Evaluation and Generalization

A central challenge in supervised learning is **generalization**: performing well on data not seen during training. Key concepts include:

- **Training vs. test error** — The gap between these measures indicates overfitting.
- **Cross-validation** — A technique for estimating generalization performance by partitioning data into training and validation folds.
- **Bias-variance tradeoff** — Simple models may underfit (high bias), while complex models may overfit (high variance). The goal is to find the right balance.

## Key Concepts

- **Loss Function** — A measure of prediction error that the learning algorithm seeks to minimize (e.g., mean squared error, cross-entropy).
- **Overfitting** — When a model memorizes training data noise rather than learning the underlying pattern.
- **Regularization** — Techniques (L1, L2, dropout) that penalize model complexity to prevent overfitting.
- **Feature Engineering** — The process of selecting, transforming, or creating input features to improve model performance.
- **Hyperparameters** — Settings that control the learning process itself (learning rate, regularization strength) rather than being learned from data.

## Further Reading

- Bishop, C. M. (2006). *Pattern Recognition and Machine Learning*. Springer.
- Hastie, T., Tibshirani, R., & Friedman, J. (2009). *The Elements of Statistical Learning*. Springer.
- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press. Chapter 5.
