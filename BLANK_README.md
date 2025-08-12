<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->
<!-- PROJECT LOGO AND TITLE -->
<!-- Improved compatibility of back to top link:
See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<div align="center">
  <!-- markdownlint-disable MD013 MD033 -->
  <h1>{{project.title}}</h1>
  <a href="https://github.com/{{repository.github_username}}/{{repository.repo_name}}">
    <img src="{{project.logo_path}}" alt="Logo" width="80" height="80">
  </a>
  <!-- markdownlint-enable MD013 MD033 -->
</div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional,
*** concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">

<!-- BADGES:START -->
{{#badges.contributors}}[![Contributors][contributors-shield]][contributors-url]{{/badges.contributors}}
{{#badges.forks}}[![Forks][forks-shield]][forks-url]{{/badges.forks}}
{{#badges.stars}}[![Stargazers][stars-shield]][stars-url]{{/badges.stars}}
{{#badges.issues}}[![Issues][issues-shield]][issues-url]{{/badges.issues}}
{{#badges.license}}[![{{repository.license}}][license-shield]][license-url]{{/badges.license}}
<!-- BADGES:END -->
</div>
<!-- PROJECT DESCRIPTION -->

<div align="center">
  <!-- markdownlint-disable MD013 -->
  <p align="center">
    {{project.description}}
    <br />
    <a href="https://github.com/{{repository.github_username}}/{{repository.repo_name}}">
      <strong>Explore the docs »</strong>
    </a>
    <br />
    <br />
    <a href="https://github.com/{{repository.github_username}}/{{repository.repo_name}}">
      View Demo
    </a>
    ·
    <a href="https://github.com/{{repository.github_username}}/{{repository.repo_name}}/issues/new?labels=bug&template=bug-report---.md">
      Report Bug
    </a>
    ·
    <a href="https://github.com/{{repository.github_username}}/{{repository.repo_name}}/issues/new?labels=enhancement&template=feature-request---.md">
      Request Feature
    </a>
  </p>
  <!-- markdownlint-enable MD013 -->
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <!-- SECTION:about:START -->
    {{#sections.about.enabled}}
    <li>
      <a href="#about-the-project">About The Project</a>
      <!-- SECTION:built_with:START -->
      {{#sections.built_with.enabled}}
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      {{/sections.built_with.enabled}}
      <!-- SECTION:built_with:END -->
    </li>
    {{/sections.about.enabled}}
    <!-- SECTION:about:END -->
    <!-- SECTION:getting_started:START -->
    {{#sections.getting_started.enabled}}
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    {{/sections.getting_started.enabled}}
    <!-- SECTION:getting_started:END -->
    <!-- SECTION:usage:START -->
    {{#sections.usage.enabled}}
    <li><a href="#usage">Usage</a></li>
    {{/sections.usage.enabled}}
    <!-- SECTION:usage:END -->
    <!-- SECTION:roadmap:START -->
    {{#sections.roadmap.enabled}}
    <li><a href="#roadmap">Roadmap</a></li>
    {{/sections.roadmap.enabled}}
    <!-- SECTION:roadmap:END -->
    <!-- SECTION:contributing:START -->
    {{#sections.contributing.enabled}}
    <li><a href="#contributing">Contributing</a></li>
    {{/sections.contributing.enabled}}
    <!-- SECTION:contributing:END -->
    <!-- SECTION:license:START -->
    {{#sections.license.enabled}}
    <li><a href="#license">License</a></li>
    {{/sections.license.enabled}}
    <!-- SECTION:license:END -->
    <!-- SECTION:contact:START -->
    {{#sections.contact.enabled}}
    <li><a href="#contact">Contact</a></li>
    {{/sections.contact.enabled}}
    <!-- SECTION:contact:END -->
    <!-- SECTION:acknowledgments:START -->
    {{#sections.acknowledgments.enabled}}
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    {{/sections.acknowledgments.enabled}}
    <!-- SECTION:acknowledgments:END -->
    <li><a href="docs/FAQ.md">FAQ</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
<!-- SECTION:about:START -->
{{#sections.about.enabled}}

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

{{sections.about.content}}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- markdownlint-disable MD022 -->
<!-- SECTION:built_with:START -->
{{#sections.built_with.enabled}}
### Built With
<!-- markdownlint-enable MD022 -->

This section should list any major frameworks/libraries used to bootstrap your
project. Leave any add-ons/plugins for the acknowledgements section. Here are a
few examples.

<!-- markdownlint-disable MD052 MD032 -->
{{#sections.built_with.frameworks}}
- [![{{name}}][{{name}}.shield]][{{name}}-url]
{{/sections.built_with.frameworks}}
<!-- markdownlint-enable MD052 MD032 -->
<!-- markdownlint-disable MD022 -->
{{/sections.built_with.enabled}}
<!-- SECTION:built_with:END -->
{{/sections.about.enabled}}
<!-- SECTION:about:END -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
<!-- SECTION:getting_started:START -->
{{#sections.getting_started.enabled}}

## Getting Started

This is an example of how you may give instructions on setting up your project
locally. To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how
to install them.

<!-- markdownlint-disable MD031 MD032 MD040 -->
{{#sections.getting_started.prerequisites}}
- {{name}}

  ```sh
  {{command}}
  ```

{{/sections.getting_started.prerequisites}}
### Installation

_Below is an example of how you can instruct your audience on installing and
setting up your app. This template doesn't rely on any external dependencies
or services._

{{#sections.getting_started.installation_steps}}
{{increment @index}}. {{{text}}}{{#if command}}

   ```{{#if language}}{{language}}{{else}}sh{{/if}}
   {{{command}}}
   ```
{{/if}}

{{/sections.getting_started.installation_steps}}
<!-- markdownlint-enable MD031 MD032 MD040 -->
{{/sections.getting_started.enabled}}
<!-- SECTION:getting_started:END -->
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
<!-- SECTION:usage:START -->
{{#sections.usage.enabled}}

## Usage

{{{sections.usage.content}}}

_For more examples, please refer to the [Documentation](https://example.com)_
{{/sections.usage.enabled}}
<!-- SECTION:usage:END -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
<!-- SECTION:roadmap:START -->
{{#sections.roadmap.enabled}}

## Roadmap

<!-- markdownlint-disable MD007 MD032 -->
{{#sections.roadmap.items}}
- [{{#if completed}}x{{else}} {{/if}}] {{text}}
{{#if subitems}}
{{#subitems}}
  - [{{#if completed}}x{{else}} {{/if}}] {{text}}
{{/subitems}}
{{/if}}
{{/sections.roadmap.items}}
<!-- markdownlint-enable MD007 MD032 -->

See the [open issues](https://github.com/{{repository.github_username}}/{{repository.repo_name}}/issues)
for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

{{/sections.roadmap.enabled}}
<!-- SECTION:roadmap:END -->
<!-- CONTRIBUTING -->
<!-- SECTION:contributing:START -->
{{#sections.contributing.enabled}}

## Contributing

Contributions are what make the open source community such an amazing place to
learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and
create a pull request. You can also simply open an issue with the tag
"enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<!-- SECTION:contributing_contributors:START -->
{{#sections.contributing.show_contributors}}

### Top contributors

<a href="https://github.com/{{repository.github_username}}/{{repository.repo_name}}/graphs/contributors">
  <img
    src="https://contrib.rocks/image?repo={{repository.github_username}}/{{repository.repo_name}}"
    alt="contrib.rocks image"
  />
</a>

{{/sections.contributing.show_contributors}}
<!-- SECTION:contributing_contributors:END -->
{{/sections.contributing.enabled}}
<!-- SECTION:contributing:END -->
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
<!-- SECTION:license:START -->
{{#sections.license.enabled}}

## License

Distributed under the {{repository.license}}. See `{{repository.license_file}}` for more information.

{{/sections.license.enabled}}
<!-- SECTION:license:END -->
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
<!-- SECTION:contact:START -->
{{#sections.contact.enabled}}

## Contact

| | |
|:---:|:---|
| <img src="https://github.com/{{repository.github_username}}.png" alt="{{contact.name}}" width="50" height="50" style="border-radius: 50%;"> | **{{contact.name}}** |
| 📧 | [{{contact.email}}](mailto:{{contact.email}}) |
| 🐙 | [@{{repository.github_username}}](https://github.com/{{repository.github_username}}) |
{{#each contact.socials}}{{#if enabled}}| {{icon}} | [{{platform}}]({{url}}) |
{{/if}}{{/each}}
**Project Link:** [https://github.com/{{repository.github_username}}/{{repository.repo_name}}](https://github.com/{{repository.github_username}}/{{repository.repo_name}})
{{/sections.contact.enabled}}
<!-- SECTION:contact:END -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
<!-- SECTION:acknowledgments:START -->
{{#sections.acknowledgments.enabled}}

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit
to. I've included a few of my favorites to kick things off!

<!-- markdownlint-disable MD032-->
{{#sections.acknowledgments.items}}
- [{{name}}]({{url}})
{{/sections.acknowledgments.items}}
<!-- markdownlint-enable MD032-->
{{/sections.acknowledgments.enabled}}
<!-- SECTION:acknowledgments:END -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/{{repository.github_username}}/{{repository.repo_name}}.svg?style=for-the-badge
[contributors-url]: https://github.com/{{repository.github_username}}/{{repository.repo_name}}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/{{repository.github_username}}/{{repository.repo_name}}.svg?style=for-the-badge
[forks-url]: https://github.com/{{repository.github_username}}/{{repository.repo_name}}/network/members
[stars-shield]: https://img.shields.io/github/stars/{{repository.github_username}}/{{repository.repo_name}}.svg?style=for-the-badge
[stars-url]: https://github.com/{{repository.github_username}}/{{repository.repo_name}}/stargazers
[issues-shield]: https://img.shields.io/github/issues/{{repository.github_username}}/{{repository.repo_name}}.svg?style=for-the-badge
[issues-url]: https://github.com/{{repository.github_username}}/{{repository.repo_name}}/issues
[license-shield]: https://img.shields.io/github/license/{{repository.github_username}}/{{repository.repo_name}}.svg?style=for-the-badge
[license-url]: https://github.com/{{repository.github_username}}/{{repository.repo_name}}/blob/master/{{repository.license_file}}
[product-screenshot]: {{project.screenshot_path}}
{{#sections.built_with.frameworks}}
[{{name}}.shield]: {{badge}}
[{{name}}-url]: {{url}}
{{/sections.built_with.frameworks}}
