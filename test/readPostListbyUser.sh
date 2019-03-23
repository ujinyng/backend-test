#!/bin/bash

if [ $2 ] && [ $3 ]
then
query="query readPostListbyUser{readPostListbyUser(author:$1,n:$2,offset:$3){totalCount offset result{_id author title content date}}}"
else 
#default 5 0
query="query readPostListbyUser{readPostListbyUser(author:$1,n:5,offset:0){totalCount offset result{_id author title content date}}}"
fi

query="$(echo $query)"

curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary "{\"query\":\"$query\"}" --compressed | json_pp