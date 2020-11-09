<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AL-SparkGeo/Templates">
    <img src="/images/sparkgeo-logo.png" width="120" height="120">
  </a>
  <h3 align="center">Spatial-on-Demand Health Checker</h3>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Health Checker](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)


<!-- ABOUT THE PROJECT -->
## About The Health Checker

This program is the health checker for the Spatial-On-Demand Service Provided by SparkGeo Consulting and MAXAR Techologies. This program allows for intuitive tracking of outages, the ability to add and remove services as necessary, automatic e-mail updates regarding outages all wrapped up in a clean UI that is intuitive to use.

```markdown
Features
-Application that checks the “health” of Spatial-On-Demand Services
-Can be run on the internet, or locally through Docker
-Features user accounts for various levels of access, security, and restrictions
-Features a tagging system for specific items, enabling users to group up various services together and also enable access restrictions on certain tags.
-Intuitive GUI built in HTML enables ease of navigation throughout the website 
-Allows for control over various different services, that can be routinely pinged to check that they are active
```

```markdown
Support for the following layers types:

Web Map Service
Web Map Tile Service
Tile Map Service
Web Feature Service
Web Coverage Service
WPS
CSW
SOS
STA
WFS3
FS
WAF
URL
FTP
Geonode Instance
GHC-R
```

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.
-Install Docker
-Run this command WIP WIP WIP

### Prerequisites


### EC2 Version

Run in Postgis in same EC2 instance as GHC - Used because of SSL errors occasionally with remote copy of postGIS. 
Create ghc.env file based on ghc.env.example, runs on port 8

### Docker-compose

Run the following to run docker images for the GHC runner and GHC web
Create GHC.env based on the ghc.env.example
Enter location for postgis database in aws:
```
SQLALCHEMY_DATABASE_URI
```


### Installation

## EC2

1. Run in Postgis in same EC2 instance as GHC - Used because of SSL errors occasionally with remote copy of postGIS. 
2. Create ghc.env file based on ghc.env.example, runs on port 8

## Docker-compose

1. Run the following to run docker images for the GHC runner and GHC web
2. Create GHC.env based on the ghc.env.example
3. Enter location for postgis database in aws:
```
This runs both ghc web and ghc runner - used to run an online instance of postgis   
$ docker build -t sparkgeo/geohealthcheck .  
$ docker run --name spkghc --env-file ghc.env -p 8089:80 -v ghc_postgis:/GeoHealthCheck/DB sparkgeo/geohealthcheck:latest
```

<!-- USAGE EXAMPLES -->
# Usage

Front Page
1. Front page contains uptime information in clearly viewable form: period of health-checking, uptime percentage, and number of services checked
2. A resource list of all of the differing services is then shown, along with their name, tags, current status, and reliability.
3. There is also a leaflet map, which displays the location of where the service is hosted (?)
4. As users add more and more services, the list will begin to populate and more services will be pinged.

### Adding a Service

1. The add a service button allows the addition of new services.
2. Resource type is selected from a list, and the URL of the service is input into the field, without query fields
3. Optional tags can be input to allow for organization and further control, as outlined above.
4. Upon submission, the user is brought to an edit page.

### Service Maintenance & Further Edits


1. Edit page allows for further changes to how the service is displayed on the website.
2. Users can change authentication to require more or less for certain users through either basic authentication, or a bearer token. 
3. Users can be notified of any changes by entering email addresses. 
4. Webhooks are also enabled allowing for changes to how the data is received from the internet (?)
5. The name, owner, and tags given prior are also displayed. Recommended that the name matches the tags or is at least very similar.
6. The check can be configured to run in increments of minutes, minimum being 10 minutes however this can be changed.


<!-- CONTRIBUTING -->
## Contributing

For further contribution requests

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project is based off Geo Health Check by Tom Kralidis [@GeoHealthCheck]()


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
