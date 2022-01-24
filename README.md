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


### Building using a Jekyll container

```bash
mkdir -p ../vendor/bundle # so it's available for other projects
export JEKYLL_VERSION=3.8
# only needs to run it once to download the dependencies
docker run --rm -e BUNDLE_APP_CONFIG="/srv/vendor/bundle" -e BUNDLE_HOME="/srv/vendor/bundle" -e BUNDLE_PATH="/srv/vendor/bundle" --volume="$PWD:/srv/jekyll" --volume="$PWD/../vendor:/srv/vendor" -it jekyll/jekyll:$JEKYLL_VERSION  bundle install
# build
docker run --rm -e BUNDLE_APP_CONFIG="/srv/vendor/bundle" -e BUNDLE_HOME="/srv/vendor/bundle" -e BUNDLE_PATH="/srv/vendor/bundle" --volume="$PWD:/srv/jekyll" --volume="$PWD/../vendor:/srv/vendor" -it jekyll/jekyll:$JEKYLL_VERSION  bundle exec jekyll build
# serve from python
python -m http.server -d _site
```

### Submodule

Note that this uses a submodule to complete the build process of the site.  So you may need to do:

```shell
git submodule init
git submodule update
```
in a fresh clone, or just the second line to update the submodule.
