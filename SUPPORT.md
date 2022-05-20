# Support and Servicing

## Support

### How to get help

This project uses GitHub Issues to track bugs and feature requests. Please search the existing issues before filing new issues to avoid duplicates. For new issues, [file your bug](https://github.com/microsoft/AdaptiveCards/issues/new?assignees=&amp;labels=Bug&amp;template=bug_report.md&amp;title=%5BPlatform%5D%5BBroad+Issue+Category+if+applicable+%28eg+Accessibility%29%5D+%5BBug+Title%5D) or [feature request](https://github.com/microsoft/AdaptiveCards/issues/new?assignees=dclaux%2C+matthidinger%2C+shalinijoshi19&amp;labels=Request&amp;template=feature_request.md&amp;title=%5BPlatform%5D%5BBroader+Feature+Request+Category+if+applicable%5D+Title) as a new Issue.

For help and questions about using this project, please use the [Stack Overflow tag adaptive-cards](https://stackoverflow.com/questions/tagged/adaptive-cards).

### Microsoft Support Policy

Technical Support for the use of the software in this repo may be available from Microsoft&#39;s Customer Support Services (CSS). If you are a Premier or Unified Support customer, please reach out to your account manager for further assistance.

## Servicing

Adaptive Cards has a lifecycle. A lifecycle begins when a project/service is released and ends when it's no longer supported. Knowing key dates in this lifecycle helps you make informed decisions about when to upgrade or make other changes to your software. This project/service is governed by the [Microsoft Modern Lifecycle](https://support.microsoft.com/help/30881/modern-lifecycle-policy).

This tables describes the various packages we offer, the support type, latest patch version and end of support date for Adaptive Cards SDKs.

### Serialization

#### `1.x` (Maintenance)

| **Platform** | **Package** | **Latest Patch Version** | **Patch Release Date** | **Support Level** | **End of Support** |
| --- | --- | --- | --- | --- | --- |
| .NET | AdaptiveCards | 1.2.4 | 2019.11.05 | Maintenance | 2020.12.31 |

#### `2.x` (Current)

| **Platform** | **Package** | **Latest Patch Version** | **Patch Release Date** | **Support Level** | **End of Support** |
|  --- | --- | --- | --- | --- | --- |
| .NET | AdaptiveCards | 2.3.0 | 2020.10.29 | Current |


### Rendering

#### `1.x` (Maintenance)

| **Platform** | **Package** | **Latest Patch Version** | **Patch Release Date** | **Support Level** | **End of Support** |
| --- | --- | --- | --- | --- | --- |
| JavaScript | adaptivecards | 1.2.6 | 2020.06.01 | Maintenance | 2020.12.31 |
| .NET WPF | AdaptiveCards.Rendering.Wpf, AdaptiveCards.Rendering.Wpf.Xceed | 1.2.4 | 2019.11.05 | Maintenance | 2020.12.31 |
| .NET HTML | AdaptiveCards.Rendering.Html | 1.2.4 | 2019.11.05 | Maintenance | 2020.12.31 |
| iOS | Adaptivecards | 1.2.13 | 2020.10.30 | Maintenance | 2020.12.31 |
| Android | io.adaptivecards | 1.2.12 | 2020.09.01 | Maintenance | 2020.12.31 |
| UWP | AdaptiveCards.Rendering.Uwp | 1.2.11 | 2020.08.03 | Maintenance | 2020.12.31 |

#### `2.x` (Current)

| **Platform** | **Package** | **Latest Patch Version** | **Patch Release Date** | **Support Level** | **End of Support** |
| --- | --- | --- | --- | --- | --- |
| JavaScript | adaptivecards | 2.5.0 | 2020.10.31 | Current |
| .NET WPF | AdaptiveCards.Rendering.Wpf, AdaptiveCards.Rendering.Wpf.Xceed | 2.3.0 | 2020.10.29 | Current |
| .NET HTML | AdaptiveCards.Rendering.Html | 2.3.0 | 2020.10.29 | Maintenance |
| iOS | Adaptivecards | 2.3.1 | 2020.11.04 | Current |
| Android | io.adaptivecards | 2.3.1 | 2020.11.04 | Current |
| UWP | AdaptiveCards.Rendering.Uwp | 2.3.0 | 2020.10.30 | Current |

### Templating

|  **Platform** | **Latest Patch Version** | **Patch Release Date** | **Support Level** | **End of Support** |
|  --- | --- | --- | --- | --- |
| JavaScript | 1.4.0 | 2020.09.01 | Current |
| .NET | 1.1.0 | 2020.09.01 | Current |

### Tooling

| **Tool** | **Latest Patch Version** | **Patch Release Date** | **Support Level** | **End of Support** |
| --- | --- | --- | --- | --- |
| Card Designer | 1.4.0 | 2020.09.01 | Current |

### Community SDKs and Tools

The following SDKs are not developed or maintained by Microsoft. They are developed and serviced by the Adaptive Cards community, and are not officially supported. In most cases they are in active developments and bugs will be addressed where possible.

| **SDK** | **Maintainer** | **Support Level** |
| --- | --- | --- |
| ReactNative | [BigThinkCode](https://github.com/BigThinkcode) | Community |
| Pic2Card | [BigThinkCode](https://github.com/BigThinkcode) | Community |
| Vue.js | [Tim Cadenbach](https://github.com/DeeJayTC) | Community |

## Release Types

Microsoft produces **Current**, **Maintenance**, and **Community** releases for this project, which are defined as:

- **Current**  releases include new features that may undergo future change based on feedback. These releases are a good choice for applications in active development, giving you access to the latest features and improvements. You need to upgrade to later releases more often to stay in support. Current releases are typically supported for 3 months after a subsequent Current or LTS release.
- **Maintenance** releases are in the last stage of the lifecycle. During Maintenance, a release will receive security updates and critical functionality issues.
- **Community** releases are not officially supported by Microsoft and are actively maintained by the community and third-parties. In most cases they are in active development and bugs are addressed where possible.

Current and Maintenance releases receive critical fixes throughout their lifecycle, for security or reliability. You must stay up to date with the latest patches to qualify for support.

## End of support

End of support refers to the date when Microsoft no longer provides fixes, updates, or online technical assistance. End of support may also be referred to as "end of life" or abbreviated "EOL". This is the time to make sure you have the latest available update installed.

Updates are cumulative, with each update built upon all of the updates that preceded it. A device needs to install the latest update to remain supported. Updates may include new features, fixes (security and/or non-security), or a combination of both. Not all features in an update will work on all devices. Update availability may vary, for example by country, region, network connectivity, or hardware capabilities (including, for example, free disk space).

## Out of support versions

Versions `1.x` of the **Renderer** and **Serialization** libraries are no longer supported. Please upgrade to the `2.x` releases.
