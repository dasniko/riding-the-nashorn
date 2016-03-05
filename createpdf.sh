#!/usr/bin/env bash
asciidoctor-pdf index.adoc -a pdf-stylesdir=./themes -a pdf-style=dasniko -d book -o riding-the-nashorn.pdf
