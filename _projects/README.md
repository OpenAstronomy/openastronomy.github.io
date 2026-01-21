# Project Ideas

This directory contains project ideas for OpenAstronomy's participation in programs like Google Summer of Code (GSoC).

## Directory Structure

Projects are organized by year and sub-organisation:
```
_projects/
├── YYYY/
│   ├── suborg1/
│   │   ├── project1.md
│   │   └── project2.md
│   └── suborg2/
│       └── project3.md
└── _template.md
```

## Creating a New Project Idea

1. Copy `_template.md` to the appropriate year and sub-organisation directory
2. Fill in all the required fields in the YAML front matter
3. Write a clear description of the project
4. **Add contact information** for your sub-organisation (see below)
5. Define clear milestones for the project timeline
6. Submit a pull request

## Adding Sub-Organisation Contact Information

To help students reach your community, add contact information to your project page by including this line right after the project title:

```liquid
{% include suborg_contacts.html suborg="yoursuborg" %}
```

Replace `yoursuborg` with your sub-organisation's key from `_data/members.yaml` (e.g., `sunpy`, `astropy`, `radis`, `stingray`).

This will automatically display:
- Chat channels (Matrix, Slack, Gitter, etc.)
- Mailing lists (users, developers)
- Website link
- A reminder to contact mentors in public channels

### Example

```markdown
---
name: My Awesome Project
collaborating_projects:
 - sunpy
---

# My Awesome Project

{% include suborg_contacts.html suborg="sunpy" %}

## Description
...
```

## Updating Contact Information

Contact information is centrally managed in `_data/members.yaml`. To update your sub-organisation's contact details:

1. Edit `_data/members.yaml`
2. Update the relevant fields under your sub-organisation's entry
3. The changes will automatically appear on all project pages using the include

## Template Fields

See `_template.md` for all available fields and their descriptions. Key fields include:

- `name`: Project title
- `desc`: One-line description
- `requirements`: Student prerequisites
- `difficulty`: low, medium, or high
- `mentors`: GitHub/GitLab handles
- `collaborating_projects`: Sub-organisation(s)
- `project_size`: Expected time commitment
- `tags`: Technologies involved

## Questions?

For questions about creating project ideas, contact the OpenAstronomy admins or refer to the [Sub-Org Guidelines](/gsoc/suborg_guidelines.html).
