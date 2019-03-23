# backend-test

### 실행방법

### REST API

### GraphQL

- readPostList : 모든 Post 불러오기
- readCommentList : 모든 Post 불러오기
- readUserPost : User가 쓴 모든 Post 검색
- readCommentListbyUser : User가 쓴 모든 Comment 검색
- readCommentListbyPost : Post의 모든 Comment 검색

#### 페이지네이션

graphql 쿼리 결과는 모두 페이지 네이션 가능

- n: 출력할 Object 수
- offset (defult=0): 출력 시작할 Object 결정.
  (ex. offset:3이면 Object[3]이 출력 결과의 첫번째항목. 입력안할씨 Object[0]부터 출력)

#### test용 쿼리

1. command

/test의 sh파일 사용.

- readPostList

```
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"query readPostList{\n\treadPostList(n:3,offset:6){\n \t\ttotalCount \n \t\toffset\n \t\tresult{\n \t\t\t_id\n \t\tauthor\n \t\ttitle\n \t\tcontent\n \t\tdate\n \t}\n \t}\n}\n"}' --compressed | json_pp
```

- readCommentList

```

```

- readUserPost

```

```

- readCommentListbyUser

```

```

- readCommentListbyPost

```

```

2. http:localhost:3000/graphql 에서 test

```
query readPostList{
	readPostList(n:3,offset:0){
  		totalCount
  		offset
  		result{
  			_id
    		author
    		title
    		content
    		date
    	}
  	}
}

query readCommentList{
	readCommentList(n:3,offset:0){
  		totalCount
  		offset
  		result{
  			_id
    		author
    		content
    		date
    	}
  	}
}

query readPostListbyUser{
  readUserPost(author:8,n:5,offset:0){
    totalCount
    offset
    result{
      _id
    author
    title
    content
    date
    }
  }
}

query readCommentListbyUser{
  readCommentListbyUser(author:8,n:5,offset:0){
    totalCount
    offset
    result{
      _id
    author
    content
    date
    }
  }
}

query readCommentListbyPost{
  readCommentListbyPost(post:6,n:2,offset:0){
    totalCount
    offset
    result{
      _id
      author
      content
      date
    }
  }
}
```
