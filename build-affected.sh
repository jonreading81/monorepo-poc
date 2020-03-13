COMMIT_RANGE_URL=$1
APPS="./apps"

for directory in $(find $APPS -type d -maxdepth 1); 
do
    APP=${directory#$APPS/} 
    AFFECTED=$(sh ./affected.sh $APP $COMMIT_RANGE_URL)
    if [ $AFFECTED = "true" ] ; then $(npm run test $APP)  ; fi;
done
