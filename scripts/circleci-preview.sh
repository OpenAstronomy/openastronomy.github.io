#!/bin/sh
# Makes html/ browsable from the CircleCI artifact viewer, which serves it
# under a path prefix and has no directory index: root-relative links (and
# redirect-stub targets) get the prefix, and directory links point at
# index.html. `sed -i.bak -E` behaves the same with GNU and BSD sed.
#
# Usage: sh scripts/circleci-preview.sh "/output/job/$JOB_ID/artifacts/$NODE/html"
set -e
PREFIX="$1"
if [ -z "$PREFIX" ]; then
  echo "Usage: $0 <artifact-base-path>" >&2
  exit 1
fi
find html -name '*.html' -exec sed -i.bak -E \
  -e 's@((href="|content="0;url=)[^":]*/)(["#])@\1index.html\3@g' \
  -e "s@((href|src)=\"|content=\"0;url=)/([^/])@\1$PREFIX/\3@g" \
  -e "s@url\(\"/([^/])@url(\"$PREFIX/\1@g" \
  {} +
find html -name '*.html.bak' -delete
echo "Patched links for base: $PREFIX"
