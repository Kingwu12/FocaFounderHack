# Foca.ai

Foca.ai is a Artificial Intelligence tool created for Foca that analyzes user's screen while they are working on the task at hand.

## Features

- Captures the screen every ~5 seconds
- Analyzes the screen content using OpenAI's API
- Compares the analysis result with the user's goal
- Generates a boolean result to indicate productivity

## Installation

Follow these steps to set up the project on your local machine.

### Prerequisites

- Python 3.6 or higher
- pip (Python package installer)

### Install Required Packages

1. Clone the repository:

   ```sh
   python -m pip install mss
   python3 -m pip install --upgrade Pillow
   pip install --upgrade openai
   pip install python-dotenv
   ```
