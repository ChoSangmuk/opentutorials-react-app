# opentutorials-react-app

- [인프런(생활코딩 - React)](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/dashboard
)
- [생활코딩 홈페이지](https://www.opentutorials.org/module/4058)
- [Youtube divide](https://www.youtube.com/playlist?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)
- [Youtube long take](https://www.youtube.com/watch?v=mJ64l_iONqw&t=408s)
- [강사 github]()

## 수업 소개
- javascript, class 등의 개념 이해 필요
- react는 페이스북에서 만든 자바스크립트 UI 라이브러리, 사용자 정의 태그(components)를 만들어 주는 여러가지 기술 중 하나
- react의 필요성
  - 가독성 증가
  - 재사용성 증가
  - 유지 보수 용이
- 컴포넌트를 중심으로 현대적 웹 UI 만드는 법 익히기
```
리액트 없이도 html 에서 include 쓰면 1,2,3 이 똑같이 충족되지 않는지요?
```

## 개발 환경
### 공부 전략
- 많은 절차를 필요로 하지만 다 공부하지 않고 중요한 부분만 공부
- coding -> run -> deploy

### 개발환경의 종류
- 강사로부터 독립하기 -> 공식 문서와 친해지기
- [react 홈페이지](https://ko.reactjs.org/) 시작하기
- 개발환경 셋팅
  - 온라인 상에서 리액트 애플리케이션 구현
  - 이미 만든 서비스에 추가(까다로울 수 있음)
  - 툴체인(Create React App)을 사용
- npm 은 nodejs계의 플레이스토어 혹은 앱스토어

### npm을 이용해서 create react app 설치
- npm은 일종의 앱스토어
- npm 설치 : [nodejs 설치](https://nodejs.org/ko/)
- 다운로드 확인 : npm -v
- npm install -g create-react-app <- 직접 다운로드
- npx create-react-app <- 임시 설치

### create react app을 이용해서 개발환경구축
- 리액트를 개발할 폴더를 생성
- 이미 다운로드 받아진 CRA에 해당 폴더에 개발환경 요구
```sh
mkdir opentutorials-react-app
cd opentutorials-react-app
create-react-app . # 각종 파일 및 폴더가 생성됨
```

### 샘플 웹앱 실행
- visual studio Code를 통해 개발
- 실행부터 해보기 -> 최소한으로 구현된 샘플 앱이 실행됨
```sh
npm run start
## 종료 
ctrl + c
```

### JS 코딩하는 법
- 디렉토리 구조 파악
- public에 index.html이 존재 -> 웹브라우저에서 index.html 실행한 결과
- 코딩을 통해 생성되는 컴퍼넌트들은 id = "root" 의 하위에 들어가도록 약속함 (변경가능)
- root안에 들어가는 컴포넌트는 src 디렉토리 안의 내용임
- 진입 파일은 index.js 라는 파일
- index.js중 Document.getElementById('root')는 html에서 특정 태그를 선택자 문법
- <App /> 컴포넌트, 실체는 './App' (.js 생략됨)
- return 시, 1개의 태그만 리턴해야함

## 진행 대기

### CSS 코딩하는 법
```
```
### 배포하는 법

## 컴포넌트 제작
### 리액트가 없다면

### 컴포넌트 만들기 1

### 컴포넌트 만들기 2

### props

### React Developer Tools

### Component 파일로 분리하기

## state
### State 소개

### State 사용

### key

## 이벤트
### 이벤트 state props 그리고 render 함수

### 이벤트 설치

### 이벤트에서 state 변경하기

### 이벤트 bind 함수 이해하기

### 이벤트 setState 함수 이해하기

### 컴포넌트 이벤트 만들기 1

### 컴포넌트 이벤트 만들기 2

### 컴포넌트 이벤트 만들기 3

## Create 기능 구현
### 베이스 캠프

### create 구현 : 소개

### create 구현 : mode 변경 기능

### create 구현 : mode 전환 기능

### create 구현 : form

### create 구현 : onSubmit 이벤트

### create 구현 : contents 변경

### create 구현 : shouldComponentUpdate

### create 구현 : immutable

## Update & Delete 기능 구현
### update 구현

### update 구현 : form

### update 구현 : state 변경

### delete 구현

## 수업을 마치며

## 읽을 거리
- nothing