
## Typetone Assignment



### Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Setting Up Python 3.x Backend](#setting-up-python-3x-backend)
  - [Installing Node.js 20](#installing-nodejs-16)
  - [Running the Docker Container](#running-the-docker-container)
- [Usage](#usage)
- [License](#license)

### Prerequisites

List any prerequisites the client should have installed on their machine:

- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)
- [Python 3.x](https://www.python.org/downloads/)
- [Node.js 20](https://nodejs.org/en/download/current)

### Getting Started


#### Cloning the Repository

```bash
git clone https://github.com/MaslovRustislav/typetone_app.git
cd typetone_app
```


#### Setting Up Python 3.x Backend

1. Install Python 3.x (if not already installed):

   ```bash
   # On Linux/macOS
   sudo apt-get install python3

   # On Windows, download and install Python 3.x from the official website
   ```

#### Installing Node.js 20

You can install Node.js 20 by downloading it from the official Node.js website: [Node.js](https://nodejs.org/ru/blog/announcements/v20-release-announce). Follow the installation instructions for your specific operating system.

#### Running the Docker Container

1.  Build the Docker container:

   ```bash
   docker-compose build
   ```

2. Start the Docker container:

    ```bash
    export GPT_API_KEY=YOUR_OPEN_AI_API_KEY
    docker-compose up
    ```  

### Usage

Once you have launched the application with your open ai key, you can
1) Go to the "Templates" tab in the navigation panel
2) Drag
PDF file in a block with the inscription "Drag 'n' drop PDF files here, or click to select PDF files"
3) After a while, in the “Document” window you can see a summary of your PDF file


---
