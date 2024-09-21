# HacktoSpot

**HacktoSpot** is a website that lists events, projects, and challenges for participants in Hacktoberfest and beyond. The goal is to provide users with an easy way to explore opportunities to contribute to open source and participate in the Hacktoberfest community.

## Project Overview

HacktoSpot is a simple, static website built using HTML, CSS, and JavaScript. It dynamically loads content from three JSON files:

- **`events.json`** – Contains details of Hacktoberfest events.
- **`projects.json`** – Lists open source projects seeking contributions.
- **`challenges.json`** – Features coding challenges and tasks.

The website is hosted at: [HacktoSpot](https://chirag8023.github.io/hacktospot/)

## Features

- **Events**: A list of Hacktoberfest-related events that participants can join.
- **Projects**: Open source projects for users to contribute to during Hacktoberfest.
- **Challenges**: Fun coding challenges that participants can tackle to improve their skills.

## Installation

You can clone the repository and run the project locally by opening the `index.html` file in your browser:

```bash
git clone https://github.com/chirag8023/hacktospot.git
cd hacktospot
```

Then, open `index.html` in your preferred browser.

## Usage

- Open the website to view a table of Hacktoberfest events, projects, and challenges.
- Click the respective tabs to switch between the different categories.
- Scroll through the data, and use the links provided to explore more details.

## Contributions

Feel free to contribute by submitting a pull request with new events, projects, or challenges. Contributions are focused on editing the JSON files:

- **`events.json`**: Add details of Hacktoberfest-related events.
- **`projects.json`**: Add new open-source projects seeking contributors.
- **`challenges.json`**: Add fun coding challenges or tasks.

For detailed instructions on how to contribute, refer to the [contribution guidelines](.github/CONTRIBUTING.md).

### Example JSON Entries:

- **Event Example (`events.json`)**:
  ```json
  {
    "organization": "Organization Name",
    "logo": "URL to the organization's logo",
    "description": "Short description of the event",
    "date": "Event date (e.g. 01/10/24 to 31/10/24)",
    "link": "URL to event details"
  }
  ```

- **Project Example (`projects.json`)**:
  ```json
  {
    "organization": "Organization Name",
    "logo": "URL to the organization's logo",
    "description": "Short description of the project",
    "link": "URL to the project repository or details"
  }
  ```

- **Challenge Example (`challenges.json`)**:
  ```json
  {
    "organization": "Organization Name",
    "logo": "URL to the organization's logo",
    "description": "Short description of the challenge",
    "date": "Challenge date (e.g. 01/10/24 to 31/10/24)",
    "link": "URL to challenge details"
  }
  ```

## License

This project is open-source and available under the MIT License.
