#!/bin/sh
# Rewrites absolute /_astro/ asset references to be prefixed with the CircleCI
# artifact-viewer base path so the preview renders correctly.
#
# Usage: sh scripts/circleci-preview.sh "/output/job/$JOB_ID/artifacts/$NODE/html"
set -e
PREFIX="$1"
if [ -z "$PREFIX" ]; then
  echo "Usage: $0 <artifact-base-path>" >&2
  exit 1
fi
find html -name '*.html' -exec sed -i \
  -e "s|\"/_astro/|\"$PREFIX/_astro/|g" \
  -e "s|'/_astro/|'$PREFIX/_astro/|g" \
  -e "s|(/_astro/|($PREFIX/_astro/|g" \
  {} +
echo "Patched /_astro/ paths with base: $PREFIX"
