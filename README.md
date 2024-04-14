# **Black Rose Tattoo**

![Black Rose Tattoo shown on a variety of screen sizes](assets/images/black-rose-tattoo.png)?????????

Visit the deployed website: [Black Rose Tattoo](https://veebee4.github.io/blackrosetattoo/)?????????

## **Project Description**

This website has been built as a fun, easy to play memory card game. The simplicity of this means anyone of any age can play and also come back to see how they and other people compare in time taken to get all of the cards matching.

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
    * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technology Used](#technology-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
  
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Acknowledgments](#acknowledgments)

--- 
![Black Rose Tattoo Banner](assets/images/brt-logo.png)???????????

## User Experience UX

- ### User Stories

- #### First Time Visitor Goals

  1. As a first time visitor, I want to play the game easily, and have instructions on how to play which are quick and easy to get to.
  2. As a first time visitor, I want to be able to restart the game quickly.
  3. As a first time visitor, I want to see some sort of scoring system to see how well I do.

- #### Returning Visitor Goals

  1. As a returning visitor, I want to be able to save my score and be able to come back to it to compete with my own or others score.
  2. As a returning visitor, I want to be able to change the difficulty.

- #### Frequent Visitor Goals

  1. As a frequent visitor, I want to be able to change the pictures on the cards.
  2. As a frequent visitor, I want to be able to gain access to a leaderboard.

---

### Design

- #### Colour Scheme

  I chose a colour scheme of pastel colours and a contrasting colour for the text.
  All colours are displayed within a commented section of my css so that if you need to change anything, you can make the changes in this section and it will apply to the classes, some of which cover repeated elements throughout the website.

| Website Element                   | Colour           |
| --------------------------------- |:----------------:|
| Background of Navigation & Footer | #013636          |
| Background of All Pages           | #006666          |
| Page Titles                       | #011d1d          |
| Body Text & Icons                 | White            |

  Explanation of colours and where you used them
  

![Memory Game Colour Scheme]()

- #### Typography

  Google Fonts was used to import the chosen fonts for use on the site.

  - For the Page Title I have used the google font []() ? is a font that is close to black lettering which is a calligraphy style commonly used by tattoo artists.

  ![Font Example]()

  - I have also chosen []() as my other font, which is clear and easily readable.

  ![Font Example]()

  I have also named the sans-serif font as a fallback font in case the other chosen fonts do not show for any reason.

- #### Imagery

  - Icons for the cards have used a font awesome icon for the back of the card and I have also used icons from [Ghostpixxells](https://ghostpixxells.itch.io/pixelfood)

- #### Wireframes

  - Home Page Wireframes [Desktop]() [Mobile]()
  - How To Play Wireframe []()
  - Leaderboard Wireframe [Desktop]()

  My website design has been slightly changed and tweaked from the original design on the wireframes...........

## Technology Used

This project is written using HTML & CSS in Gitpod. I have also used flex-box and bootstrap to make the site responsive, and it is currently being hosted on GitHub.

## Features

/The website comprises of a homepage, where the main game element is contained, along with a how to play page and a modal pop-up to display the leaderboard.

- Responsive on all devices, using a mobile first approach.
![Mobile, tablet & desktop view](documentation/testing/responsive-features-screenshot.png)

- Interactive Menus and links on all pages.
- Street Map.
![Menu](documentation/testing/interactive-menu-screenshot.png)
![Links](documentation/testing/link-screenshot.png)
![Social Links](documentation/testing/social-screenshot.png)
![Map](documentation/testing/link-map-screenshot.png)

- Small logo's on the header and footer that act as a link back to the home page.
![Small Logo's](documentation/testing/small-logos-screenshot.png)

- User feedback on FAQ page when question is hovered over.
![Hover Over Question](documentation/testing/faq-hover-screenshot.png)

#### Future Implementations

For future implementations I would like to:

1. ??????

### Accessibility

I have been trying to make the project and website as accessible as possible. I have been doing this by:

* Using semantic HTML.
* Using the hover element on all buttons on the site to make it known to the user that they are hovering over a button.
* Making sure all pictures have an alt attribute.
* Ensuring that there is a enough colour contrast throughout the site and the background (and background image) does not distract from the content.
* Displaying appropriate title on page tab, so users can easily see where they are on the site, just by looking at the tab.

### Languages Used

- HTML5
- CSS3
- Javascript

### Frameworks, Libraries & Programs Used

   + [Bootstrap 4.3.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
      - Bootstrap was used to create a responsive navigation menu to allow for a hamburger menu once the screen size reduced from desktop/
   + [Hover.css:](https://ianlunn.github.io/Hover/) ???????????
      - Hover.css was used on buttons and the faq questions to allow feedback for the user.
   + [Google Fonts:](https://fonts.google.com/)
      - Google fonts were used by importing the fonts ????????, into the style.css file which has been used on all pages within the project.
   + [Font Awesome:](https://fontawesome.com/) ?????
      - Font Awesome was used to add icons for aesthetic purposes.
   + [jQuery:](https://jquery.com/) ????
      - jQuery comes with Bootstrap and makes the navbar responsive.
   + [Git](https://git-scm.com/)
      - The git command was used for version control via the terminal in Gitpod, to commit to Git and Push to GitHub.
   + [GitHub:](https://github.com/)
      - GitHub is used to save and store the files and projects code after being pushed from Git.
   + [Balsamiq:](https://balsamiq.com/)
      - Balsamiq was used to create wireframes.
   + [Google Developer Tools](https://developers.google.com/web/tools) 
      - To troubleshoot and test features, solve issues with responsiveness and styling.
   + [Am I Responsive?](http://ami.responsivedesign.is/)
      - To show the website home page image on a range of devices.


## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Memory Game](https://veebee4.github.io/memory-game/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [veebee4/memory-game](https://github.com/veebee4/memory-game).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [veebee4/memory-game](https://github.com/veebee4/memory-game)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [veebee4/memory-game](https://github.com/veebee4/memory-game)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

  Please click [HERE](testing.md) for all testing.

### Solved Bugs

| No   | Bug  | How I solved the issue |
| :--- | :--- | :--- |
| 1 | After reading that Bootstrap was not required for this project on the Slack channels I was trying to work without the bootstrap framework and found it extremely difficult to code a completely HTML and CSS hamburger menu ![CSS hamburger menu not working properly](/documentation/testing/css-hamburger-bug.png)| After speaking with my tutor, she suggested that I could use the bootstrap framework just for the menu and that would be acceptable for the project, I read the documentation on the Bootstrap navigation element and implemented this into my site |
| 2 | For the contact page, I wanted a map to be at the bottom of the content on that page and also for it to be responsive, I had placed an embedded map but it was only one size and did not look good within other device sizes | I typed my query into google and found a good [tutorial](https://www.w3schools.com/howto/howto_css_responsive_iframes.asp) on W3 schools which showed how to style the class for the map|
| 3 | The font for the navigation links would not change to the particular font I wanted | I researched this and managed to find [this article](https://forum.squarespace.com/topic/253132-custom-css-not-overriding-font-styles-site-nav-links/) where I learnt about the !important attribute and fixed this issue. This attribute was then used for other elements |

### Known Bugs

* When testing was carried out on an Iphone 12 mobile, the booking in form does not display correctly; the title is off center, the checkbox is left aligned for some reason and users have to scroll to the right slightly to view the end of the text box. This is all displayed correctly when viewing on a desktop and reducing the screen size either just through the browser or through devtools.

  <img src="documentation/testing/mobile-form-screenshot.png" height="500">

* I noticed the border style that I had applied to the menu links, applies itself to the full width on the hamburger menu but on the full desktop menu, the border is only as long as the navigation link word. This could be rectified just by spending further time on the project.

![Menu bottom border bug](documentation/testing/border-menu-bug.png)

- - -

## Credits

### Code Used



### Content



### Acknowledgments

I would like to acknowledge the following people:

* 