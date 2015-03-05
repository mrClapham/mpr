# Mr Porter Web Dev Test

## Task

I went for Angular as the framework. 

I've avoided boilerplate and JQuery (althought I did use some lodash).

The base css is Bootstrap. I imported the 'bootstrap.less' into the 'main.less' file (installed as a node module), from there I added my own styles and set up a Gulp task to compile the less to css as it was changed.

I've gone for an infinite scroll, it's written from scratch as a pure JavaScript function. Given more time it could have been a bit more sophisticated - it adds a cloned array as the scroll nears the height of the main content div. It would have been best to debounce the scroll function, to avoid adding too many additional arrays and remove excess arrays as you scroll up. 



## Setup

To run the app:

```
$ npm install

$ bower install

$ gulp

$ gulp watch (if you intend to change any less files)

$ node app

```


