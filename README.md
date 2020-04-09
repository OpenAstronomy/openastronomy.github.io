### About

This is the source for the openastronomy.github.io website

### Building

To build the site locally, you will need [jekyll](https://jekyllrb.com) to be installed.
Clone this repository locally, then inside it, type:

```shell
gem install bundler
bundler install
```
or use:

```shell
bundle install --path vendor/bundle
```

to install the dependencies locally at `vendor/bundle`.

You can then build the website with:

```shell
bundle exec jekyll build
```

To view the site locally, you will then need to run:

```shell
bundle exec jekyll serve
```

this will track the changes and rebuild automatically. However, it won't reflect changes on `_config.yaml` 


### Submodule

Note that this uses a submodule to complete the build process of the site.  So you may need to do:

```shell
git submodule init
git submodule update
```
in a fresh clone, or just the second line to update the submodule.
