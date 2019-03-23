#!/bin/bash

if [ $1 ] && [ $2 ]
then
query="query readCommentList{readCommentList(n:$1,offset:$2){  totalCount   offset  result{  _id    author    content    date    }  }}"
else
#default 5 0
query="query readCommentList{readCommentList(n:5,offset:0){  totalCount   offset  result{  _id    author    content    date    }  }}"
fi
query="$(echo $query)"

curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary "{\"query\":\"$query\"}" --compressed | json_pp
