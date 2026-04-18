---
title: Brain-Computer Interfaces
description: Technologies and methods for direct communication between the brain and external devices.
sidebar:
  order: 3
---

Brain-computer interfaces (BCIs) establish a direct communication pathway between the brain and an external device, bypassing the body's normal output channels. Originally conceived to restore function to people with paralysis or neurological conditions, BCIs have expanded into a dynamic research field with implications for neuroscience, rehabilitation, and human augmentation.

BCIs represent a unique convergence of neuroscience, engineering, machine learning, and clinical medicine — and their development both depends on and advances our understanding of neural coding.

## Types of BCIs

BCIs are broadly categorized by how they record neural signals:

### Non-Invasive BCIs
- **EEG (Electroencephalography)** — Records electrical activity from the scalp. Low spatial resolution but portable, affordable, and safe. Commonly used for P300 spellers, motor imagery classification, and neurofeedback.
- **fNIRS (Functional Near-Infrared Spectroscopy)** — Measures changes in blood oxygenation through the scalp. Slower than EEG but provides complementary information.

### Invasive BCIs
- **Electrocorticography (ECoG)** — Electrodes placed on the cortical surface beneath the skull. Higher resolution than EEG with lower risk than penetrating electrodes.
- **Intracortical Arrays** — Microelectrode arrays (e.g., Utah array, Neuropixels) inserted into brain tissue, recording from individual neurons. Highest signal quality but involves surgical implantation.

## Signal Processing Pipeline

A typical BCI system follows a pipeline:

1. **Signal Acquisition** — Recording raw neural signals from the chosen modality.
2. **Preprocessing** — Filtering noise, removing artifacts (eye blinks, muscle activity), and extracting relevant frequency bands.
3. **Feature Extraction** — Computing informative features such as band power, event-related potentials, or spike counts.
4. **Decoding** — A machine learning model translates neural features into control commands. Common approaches include linear decoders, Kalman filters, and deep neural networks.
5. **Feedback** — The decoded output controls a device (cursor, robotic arm, speech synthesizer), and the user adapts their neural strategy based on the result.

## Applications

- **Motor Neuroprosthetics** — Restoring movement for paralyzed individuals by decoding intended movements from motor cortex activity to control robotic arms or computer cursors.
- **Communication** — Enabling locked-in patients to spell words or generate speech through neural decoding.
- **Sensory Restoration** — Cochlear implants (auditory BCIs) and retinal prostheses that convert external signals into neural stimulation.
- **Neurorehabilitation** — BCIs combined with physical therapy to promote neural recovery after stroke.

## Key Concepts

- **Degrees of Freedom** — The number of independent control signals a BCI can extract, determining the complexity of tasks a user can perform.
- **Adaptation** — Both the user and the decoder adapt over time, creating a co-learning dynamic. Closed-loop decoder calibration leverages this for improved performance.
- **Biocompatibility** — Invasive BCIs must use materials that the body tolerates long-term without inflammation or signal degradation.
- **Transfer Learning** — Techniques that allow decoder models trained on one session or user to generalize to others, reducing calibration time.
- **Neural Plasticity** — The brain's ability to reorganize in response to BCI use, allowing users to learn new neural strategies for device control.

## Further Reading

- Wolpaw, J. R. & Wolpaw, E. W. (2012). *Brain-Computer Interfaces: Principles and Practice*. Oxford University Press.
- Hochberg, L. R., et al. (2012). "Reach and Grasp by People with Tetraplegia Using a Neurally Controlled Robotic Arm." *Nature*.
- Willett, F. R., et al. (2021). "High-Performance Brain-to-Text Communication via Handwriting." *Nature*.
