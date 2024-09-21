# Contribution Guidelines

Thank you for your interest in contributing to **HacktoSpot**! Contributions to this project are simple and focused on adding or updating information in three JSON files: `events.json`, `projects.json`, and `challenges.json`.

## How to Contribute

### Adding Events, Projects, or Challenges
You can contribute by adding new events, projects, or challenges to the appropriate JSON file. Below are the steps to guide you through the process:

1. **Fork the repository**: Start by forking [this repository](https://github.com/chirag8023/hacktospot).
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hacktospot.git
   cd hacktospot
   ```
3. **Edit the appropriate JSON file**:
   - **`events.json`**: Add details of Hacktoberfest-related events.
   - **`projects.json`**: Add open-source projects seeking contributions.
   - **`challenges.json`**: Add new coding challenges.

   The format for each entry is as follows:
   
   **For Events (`events.json`)**:
   ```json
   {
     "organization": "Organization Name",
     "logo": "URL to the organization's logo",
     "description": "Short description of the event",
     "date": "Event date (e.g. 01/10/24 to 31/10/24)",
     "link": "URL to event details"
   }
   ```
   
   **For Projects (`projects.json`)**:
   ```json
   {
     "organization": "Organization Name",
     "logo": "URL to the organization's logo",
     "description": "Short description of the project",
     "link": "URL to the project repository or details"
   }
   ```

   **For Challenges (`challenges.json`)**:
   ```json
   {
     "organization": "Organization Name",
     "logo": "URL to the organization's logo",
     "description": "Short description of the challenge",
     "date": "Challenge date (e.g. 01/10/24 to 31/10/24)",
     "link": "URL to challenge details"
   }
   ```

4. **Submit a Pull Request**: After making your changes, submit a pull request with a short description of what you added or updated.

## Example Contributions

- **Adding a new event**: If you're aware of a Hacktoberfest-related event, include the event's name, description, dates, and a link to the event details.
- **Adding a new project**: Found an open-source project that’s welcoming contributions? Add its name, a short description, and a link to the project repository.
- **Adding a new challenge**: Share a coding challenge that others can tackle! Provide details such as the name, description, and link to the challenge.

## General Guidelines

- Ensure the data you submit is accurate and follows the formatting described above.
- Do not modify existing entries unless they are outdated or incorrect.
- Contributions should be respectful and in the spirit of open-source collaboration.

Thank you for contributing and helping the Hacktoberfest community grow!

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.
