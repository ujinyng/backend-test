# backend-test

### 실행방법

```
git clone https://github.com/ujinyoung/backend-test.git
npm install
npm start
```

### REST API

#### User

| HTTP Verb | Route                | Controller#Action          |
|-----------|---------------------|----------------------------|
| POST      | /api/users          | user#createUser            |
| GET       | /api/users          | user#readUserList          |
| GET       | /api/users/:id      | user#readUserbyId          |
| GET       | /api/users/:id/post | user#readPostListbyUser    |
| GET       | /api/users/comment  | user#readCommentListbyUser |

#### Post

| HTTP Verb | Route | Controller#Action |
|-----------|---------------|-------------------|
| POST      | /api/posts     | post#createPost   |
| GET       | /api/posts     | post#readPostList |
| GET       | /api/posts/:id | post#readPostbyId |
| PATCH     | /api/posts/:id | post#updatePost   |
| DELETE    | /api/posts/:id | post#deletePost   


#### Comment

| HTTP Verb | Route | Controller#Action |
|-----------|-------------------|-------------------------------|
| POST | /api/posts/:id/comments | comment#createComment |
| GET | /api/posts/:id/comments | comment#readCommentListbyPost |
| GET | /api/posts/:id/comments/:cid | comment#readCommentbyId |
| PATCH | /api/posts/:id/comments/:cid | comment#updateComment |
| DELETE | /api/posts/:id/comments/:cid | comment#deleteComment |




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

1. command 이용

/test의 shell script 파일 사용.

- readCommentList.sh 와 readPostList.sh 는 실행시 n과 offset에 해당하는 파라미터 사용. 파라미터 없이 실행할시 `n=5` `offset=0`을 default로 하여 실행됨

ex1) n=10, offset=9으로 실행시

```
sh readCommentList.sh 10 9
```

ex2) default로 실행시

```
sh readCommentList.sh 
```

```

```

- readCommentListbyUser.sh와 readPostsListbyUser.sh 는 실행시 author, n, offset 파라미터를 사용. author는 반드시 사용해야하며 User의 _id에 해당함. 나머지는 `n=5`, `offset=0`을 default로 하여 실행됨.

ex3) author=1 n=10, offset=9로 실행시

```
sh readCommentListbyUser.sh 1 10 9
```

ex4) default로 실행시

```
sh readCommentListbyUser.sh
```

2. Apoll에서 제공하는 Tool 이용

http:localhost:3000/graphql 에서 아래 쿼리 입력 후 실행

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

