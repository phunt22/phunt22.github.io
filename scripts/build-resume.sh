#!/usr/bin/env bash

set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_file="$repo_dir/resume/Resume.tex"
output_file="$repo_dir/src/assets/Resume.pdf"
build_dir="$(mktemp -d "${TMPDIR:-/tmp}/portfolio-resume.XXXXXX")"

cleanup() {
  rm -rf "$build_dir"
}
trap cleanup EXIT

if command -v tectonic >/dev/null 2>&1; then
  tectonic --outdir "$build_dir" "$source_file"
elif command -v latexmk >/dev/null 2>&1; then
  latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir="$build_dir" "$source_file"
elif command -v pdflatex >/dev/null 2>&1; then
  pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$build_dir" "$source_file"
else
  echo "A LaTeX compiler is required to build the resume." >&2
  echo "Install Tectonic (macOS: brew install tectonic), then try again." >&2
  exit 127
fi

cp "$build_dir/Resume.pdf" "$output_file"
echo "Built $output_file"
