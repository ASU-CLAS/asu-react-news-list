React component for displaying ASU News articles from the asunow.asu.edu [JSON feed](https://asunow.asu.edu/feeds-json/college-liberal-arts-and-sciences). This React component can be used inside of a Drupal environment.

### Demo: <a href="https://codepen.io/rbruce2/pen/KerjBm" target="blank">ASU News Feed</a>

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
