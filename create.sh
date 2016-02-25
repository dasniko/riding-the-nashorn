#!/usr/bin/env bash
mkdir -p $HOME/pages
mkdir -p $HOME/pages/images
BASEDIR=$(dirname $0)
cd $BASEDIR
cp ./images/*.* $HOME/pages/images/
asciidoctor index.adoc -d book -D $HOME/pages
