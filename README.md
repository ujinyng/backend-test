# backend-test 

### 실행방법


### REST API


### GraphQL

- getAllPosts : 모든 Post 불러오기
- getAllComments : 모든 Post 불러오기 
- getPostsbyUserId : User가 쓴 모든 Post 검색
- getCommentsbyUserId : User가 쓴 모든 Comment 검색
- getCommentsbyPostId : Post의 모든 Comment 검색

#### 페이지네이션
graphql 쿼리 결과는 모두 페이지 네이션 가능
- n: 출력할 Object 수
- offset (defult=0): 출력 시작할 Object 결정.
                    (ex. offset:3이면 Object[3]이 출력 결과의 첫번째항목. 입력안할씨 Object[0]부터 출력)
                    
#### test용 쿼리
```
query getAllPosts{
	getAllPosts(n:3,offset:0){
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

query getAllComments{
	getAllComments(n:3,offset:0){
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

query getPostsbyUserId{
  getPostsbyUserId(author:8,n:5,offset:0){
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

query getCommentsbyUserId{
  getCommentsbyUserId(author:8,n:5,offset:0){
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

query getCommentsbyPostId{
  getCommentsbyPostId(post:6,n:2,offset:0){
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
