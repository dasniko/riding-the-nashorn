mkdir -p $HOME/pages
BASEDIR=$(dirname $0)
cd $BASEDIR
cp ./images/*.* $HOME/pages/images
asciidoctor index.adoc -d book -D $HOME/pages
