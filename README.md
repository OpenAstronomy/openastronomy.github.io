### About

This is the source for the openastronomy.github.io website

### Building

To build the site locally, you will need [jekyll](https://jekyllrb.com) to be installed.
Clone this repository locally, then inside it, type:

    gem install bundler
    bundler install

You can then build the website with:

    jekyll build

To view the site locally, you will then need to run:

    jekyll serve

Note that you can watch for changes and automatically rebuild using

    jekyll serve --incremental


### Submodule

Note that this uses a submodule to complete the build process of the site.  So you may need to do:

    git submodule init
    git submodule update

in a fresh clone, or just the second line to update the submodule.