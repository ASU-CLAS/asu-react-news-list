React component for displaying ASU News articles from the asunow.asu.edu [JSON feed](https://asunow.asu.edu/feeds-json/college-liberal-arts-and-sciences). This React component can be used as a stand alone component and it has also been optimized for working inside of a Drupal environment.

This component started life as a fork of a <a href="https://github.com/ASU-CLAS/asu-react-news-list" target="blank">stand-alone component</a> 
that grabbed the news items from a feed and displayed them as cards. This implementation takes a carousel component availabile in 
the <a href="https://github.com/ASU/asu-unity-stack" target="blank">asu-unity-stack</a> and allows it to be an option here.
I've also slightly changed the API from the component to be more clear now that there are more options.

One thing to note: 
The abstraction of the carousel and the news feed component might seem a little strange, it's done this way because I can
foresee a need to 'drop-in' an updated version of the asu-unity-stack carousel in the future, and I wanted to make that as easy as possible.



## Install (Stand Alone)
* `git clone https://github.com/MarkLambe/asu-react-news-list`
* `yarn` - install all dependencies
* `yarn build` - build project files (Includes React Library- will need to install Bootstrap v4 separately )
* `yarn start` - Run the project locally


## Install (Drupal)
* `git clone https://github.com/ASU-CLAS/asu-react-d8news.git`
* `yarn` - install all dependencies
* `yarn drupal` - build project files (Excludes React Library)

Drupal Folder Structure:

```
my-module/
  css/
  js/
  react-component/
```

Contents of this repository should go inside the `react-component/` folder so that when `yarn drupal` executes the bundled files are copied to the correct `css/` and `js/` folders.


## Rendering the component

This React component will render inside an element with a class name of `clas-news-react-base`. The component requires the following options:

| Parameter     |  Options                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------- |
| data-feed     | from asu now json feed (e.g. https://asunow.asu.edu/feeds-json/college-liberal-arts-and-sciences) |
| data-view     | string of the component to use (Must be 'Carousel', 'Cards', or 'Horizontal')                     |
| data-items    | string of feed items to display (Any integer number, assumes all if not present)                  |

Example:

```html
<div class="clas-news-react-base" data-feed="https://cors-anywhere.herokuapp.com/https://asunow.asu.edu/feeds-json/college-liberal-arts-and-sciences" data-items="3" data-view="Cards" ></div>
```
