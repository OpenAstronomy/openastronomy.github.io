#!/bin/sh
# Makes html/ browsable from the CircleCI artifact viewer, which serves it
# under a path prefix and has no directory index: root-relative links get the
# prefix, and directory links point at index.html.
#
# Usage: sh scripts/circleci-preview.sh "/output/job/$JOB_ID/artifacts/$NODE/html"
set -e
PREFIX="$1"
if [ -z "$PREFIX" ]; then
  echo "Usage: $0 <artifact-base-path>" >&2
  exit 1
fi
export PREFIX
find html -name '*.html' -exec perl -pi -e '
  s{(href="[^":]*/)(["#])}{${1}index.html$2}g;
  s{((?:href|src)=")/(?!/)}{$1$ENV{PREFIX}/}g;
  s{url\("/(?!/)}{url("$ENV{PREFIX}/}g;
' {} +
echo "Patched links for base: $PREFIX"
