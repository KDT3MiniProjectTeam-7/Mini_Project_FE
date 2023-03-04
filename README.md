<div align="center">
  <img src="https://user-images.githubusercontent.com/90189513/221166566-c9021592-1c56-4083-98ac-d5c7f36fb535.png" width="320" />
  
  <br>

# 파이낸스 세븐
#### Mini Project 7조 FE : 한수산, 노준영, 이은영, 김효진
</div>

***

# 1. 프로젝트 소개 💁
### 프로젝트 설명
- 설문조사를 기반으로 회원에게 ✅맞춤형✅ 금융 상품 정보를 제공하는 웹사이트입니다.
- 카드, 예/적금 상품은 물론 대출, 청약까지! 다양한 금융 상품을 다루었습니다.
- 텍스트와 태그 기반의 검색 기능으로 나에게 꼭 맞는 금융 상품을 찾아보세요!
- 모바일 디바이스를 기준으로 제작하여 모바일 환경에서 최적의 서비스를 이용하실 수 있습니다. 📱

### 개발 기간
- 2023.2.13 ~ 2023.2.24(총 12일)

### 링크 모음
<a href="https://finance-seven.netlify.app/">
  <img src="https://img.shields.io/badge/배포사이트-0e76ff?style=for-the-badge&logo=netlify&logoColor=white" />
</a>&nbsp;&nbsp;
<a href="https://github.com/KDT3MiniProjectTeam-7/Mini_Project_FE">
  <img src="https://img.shields.io/badge/팀레포-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>&nbsp;&nbsp;
<a href="https://www.notion.so/7-00708e93757c4cbbaf91868a9873c92f">
  <img src="https://img.shields.io/badge/팀노션-fc9847?style=for-the-badge&logo=notion&logoColor=white" />
</a>
    
<br><br>

# 2. 팀원 소개 & 역할 분담 👥

|한수산👑|노준영|이은영|김효진|
|:---:|:---:|:---:|:---:|
|<a href="https://github.com/0nesan"><img src="https://avatars.githubusercontent.com/u/76930602?v=4" width=160/></a>|<a href="https://github.com/ghgt1"><img src="https://avatars.githubusercontent.com/u/35508595?v=4" width=160/></a>|<a href="https://github.com/eun0leee"><img src="https://avatars.githubusercontent.com/u/90189513?v=4" width=160/></a>|<a href="https://github.com/Hyojina"><img src="https://avatars.githubusercontent.com/u/107975281?v=4" width=160/></a>|
|초기세팅<br>설문 페이지<br>마이 페이지<br>메인 페이지|상세 페이지<br>모아보기 페이지<br>장바구니 페이지|검색 페이지<br>검색결과 페이지<br>헤더 & 탭바|로그인 페이지<br>회원가입 페이지<br>회원정보 수정 & 로그아웃|

<br><br>

# 3. 기술 스택 ⚙️

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Reduxtoolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<br><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/reacticons-e91e63?style=for-the-badge&logo=react&logoColor=white">
<br><img src="https://img.shields.io/badge/Axios-671ddf?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">

<br><br>

# 4. 협업 방식 🤝
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-fc9847?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
- **Github**
<br>팀 레포를 생성하고, develop 브랜치와 각자의 이름으로 브랜치를 생성하였습니다.
<br>작업이 끝나면 각자의 브랜치로 push 후 pull request를 남기면 팀장님이 merge 했습니다.
- **Notion**
<br>회의록을 작성할 때 사용했으며 API 명세서와 와이드프레임 등 링크를 모아놓았습니다.
- **Slack**
<br>pr알림/질의/응답/요청 등을 위한 메신저로 사용했습니다.
<br>회의나 화면 공유가 필요할 때에는 허들을 사용했습니다.

<br><br>

# 5. 구현 기능 ⚙️
<details>
<summary>1. 헤더 & 탭바</summary>

![헤더, 탭바](https://user-images.githubusercontent.com/90189513/221530524-01ef1292-6982-4e4a-908b-40179f2b0741.gif)

1. 헤더
   - 로고
     - 클릭 시 메인페이지로 이동
   - 장바구니
     - 클릭 시 장바구니 페이지로 이동
     - 장바구니에 담아놓은 상품이 있다면 아이콘 옆에 상품 개수 노출
2. 탭바
   - 탭별 페이지로 이동하는 네비게이션 역할
<br>
</details>

<details>
<summary>2. 로그인 페이지</summary>

![Login](https://user-images.githubusercontent.com/107975281/222921949-f6956cde-4637-4cce-9747-0a1271f0cc88.gif)

1. 유효성 검사
   - Email: email 형식에 맞는지, 입력 값이 있는지 검사
   - Password: 입력 값이 있는지 검사
2. 로그인
   - 성공: AccessToken 생성 및 쿠키 저장(유효시간 1시간)
   - 실패: 유효성 검사를 통과하지 못했거나 Email-비밀번호가 일치하지 않을 때 안내 문구 출력
3. 로그인 관련 기타 기능

![AutoLogin](https://user-images.githubusercontent.com/107975281/222922404-c813d0af-c223-4716-8a3e-4da989d0c7f7.gif)

   - 자동 로그인
     - 새로고침 혹은 타 사이트에서 재접속 시 자동으로 로그인되며 메인 페이지로 이동
     - 쿠키에 저장된 accessToken이 있는지 확인하는 로직
<br />

![AutoLogout](https://user-images.githubusercontent.com/107975281/222922415-b2d99463-eeca-4eb3-94c3-d42222a2a21c.gif)
     
   - 자동 로그아웃
     - 로그인 후 1시간 경과 시 자동으로 로그아웃 되어 접속 페이지로 이동
     - 쿠키에 accessToken이 없을 때의 로직
<br>
</details>

<details>
<summary>3. 회원가입 페이지</summary>
   
![SignUp1](https://user-images.githubusercontent.com/107975281/222922051-66407e9e-8bb2-4e2d-bd85-e26f1b1958dd.gif)

1. 회원가입 진행률
   - 하단에 회원가입 진행률 표기
   - 약관 동의 > 정보 입력 > 가입 완료 총 3단계로 구성
   - 회원 가입이 진행될수록 진행률 바 색상 선명해짐
2. 약관 동의
   - 회원가입 1단계
   - 약관에 모두 동의해야 하단 버튼이 활성화되며 다음단계 진행 가능
   - 전체 동의 클릭 시 모든 약관에 동의 됨
<br>

![SignUp2](https://user-images.githubusercontent.com/107975281/222922042-9505f2f0-7191-42a3-bfb8-4fe06a8f008f.gif)   

3. 정보 입력
   - 회원가입 2단계
   - 항목: Email / 비밀번호 / 비밀번호 확인 / 이름 / 생년월일
   - 유효성 검사
     - Email: email 형식에 맞는지, 입력 값이 있는지 검사
     - 비밀번호: 8자~20자 사이인지, 입력 값이 있는지 검사
     - 비밀번호 확인: 비밀번호 입력 값과 동일한지, 입력 값이 있는지 검사
     - 이름: 정확히 한글인지(자음모음❌), 2~20자 사이인지, 입력 값이 있는지 검사
     - 생년: 1900~현재년도 사이 / 월: 1~12 사이 / 일 :1~31 사이, 입력 값이 있는지 검사
   - 가입 불가 안내
     - 가입 불가 기준 1: 이미 가입된 email일 경우
     - 가입 불가 기준 2: 불가 기준 1을 통과하고, 모든 항목에서 하나라도 유효성 검사를 통과하지 못했을 때
     - 해당 항목 아래에 안내 문구 표기
<br>

![SignUp3](https://user-images.githubusercontent.com/107975281/222921988-127d14e5-fc4f-4001-9c70-9cc57d7fac02.gif)

4. 가입 완료
   - 회원 가입 3단계
   - 가입과 동시에 자동으로 로그인
   - 시작하기 클릭 시 메인 화면으로 이동
<br>
</details>

<details>
<summary>4. 메인 페이지 & 설문 페이지</summary>

![Test](https://user-images.githubusercontent.com/107975281/222921870-36980f3f-1538-4d6f-b7f1-c9179ee3a727.gif)

1. 메인 페이지
   - 회원 이름과 인사말 출력
   - 추천 상품
     - 설문조사 전: 설문조사 시작 버튼을 클릭하여 설문 가능
     - 설문조사 후: 회원 정보에 저장된 태그를 기반으로 카드/예적금/대출/청약 총 4개 카테고리 상품들을 추천
     - 편의를 위해 각 카테고리마다 상품 리스트 보이기/숨기기 토글 기능 탑재
2. 설문 페이지
   - 상품을 추천받기 위한 설문조사 form
   - 상품 정보들에 담긴 태그를 참고하여 나이/직업/관심혜택 등 항목 개설
   - 사용자가 설문하기 편하도록 객관식 질문에 radio를 사용
   - 체크한 답변들을 모아 회원 정보에 POST
   - 설문 완료 시 메인 페이지로 유도하여 추천상품 보여줌

<br>
</details>

<details>
<summary>5. 금융상품 페이지</summary>

![모아보기](https://user-images.githubusercontent.com/35508595/221366276-b1c22891-804a-4b0d-9c82-7e025ebf6296.gif)

1. 기능
   - 전체 상품을 카테고리 & 태그별로 분류하여 볼 수 있음
   - 내 관심사 태그 외에도, 원하는 태그로 상품 검색 가능
   - 일명 "모아보기 페이지"
2. 태그 선택
   - 최대 3개 까지 선택 가능
   - 선택시: 해당 카테고리 내에서 선택한 태그에 해당하는 모든 상품 노출
   - 미선택시: 해당 카테고리의 전체 상품 노출

![무한스크롤](https://user-images.githubusercontent.com/35508595/221366283-d1263345-3b99-4937-9ade-32f7c87a96ac.gif)

3. 페이징 기능
   - 초기 5개씩 렌더링 되며, 이후 추가적으로 무한스크롤로 불러옴

<br>
</details>

<details>
<summary>6. 검색 페이지</summary>

<img src='https://user-images.githubusercontent.com/90189513/221526964-0fcf46b5-3bce-43b5-831d-fa1118a9a37c.gif' alt='검색페이지 검색바, 최근본상품' width='400px'/>

1. 검색바
   - 상품명으로 검색이 가능한 입력 폼
   - 입력된 글자가 있을 시 우측 삭제(❌) 버튼 등장
   - 검색어 없으면, confirm('검색어를 입력해주세요')
   - Submit 시에 검색결과 페이지로 이동
2. 최근 본 상품
   - 상세정보 눌러봤던 상품 중 최근 것 1개 조회 가능
   - 클릭 시 해당 상품의 상세페이지로 이동
   - 최근 본 상품이 없을시 해당 섹션 전체 숨김

<br/>

<img src='https://user-images.githubusercontent.com/90189513/221526969-51e014e8-d984-4f83-9640-6faa9567c9eb.gif' alt='검색페이지 최근검색어' width='400px'/>

3. 최근 검색어
   - 최대 10개까지 제공
   - 검색 최신순으로 정렬
   - 개별 삭제 가능
   - 전체 삭제 클릭시, confirm 메시지(최근검색어를 모두 삭제하시겠습니까?) 띄우기
   - 전체 삭제 완료시, 삭제 개수 메시지(ex. 00개가 삭제됐어요)
   - 최근 검색어 없을 시, 메시지 제공(최근 찾아봤던 내역이 없습니다.)

<br/>

<img src='https://user-images.githubusercontent.com/90189513/221526953-febbd1d6-9a9e-4bb3-b3f1-ecf3ca162bad.gif' alt='검색페이지 자동저장' width='400px'/>

4. 검색어 자동저장 끄기/켜기
   - 켜져있을 때, 검색한 것이 최근 검색어 목록에 저장됨.
   - 꺼져있을 때, 검색한 것이 최근 검색어에 목록에 저장 안됨. 최근 검색어 영역에는 메시지 제공(검색어 저장 기능이 꺼져있습니다.)
   - 켜기 버튼 클릭시, confirm(최근 검색어 저장 기능을 사용하시겠습니까?)
   - 끄기 버튼 클릭시, confirm(최근 검색어 저장 기능을 사용 중지하시겠습니까?)
<br/>
</details>

<details>
<summary>7. 검색결과 페이지</summary>

<img src='https://user-images.githubusercontent.com/90189513/221529636-b9c5ee69-6053-49ef-9233-58241ce425eb.gif' alt='검색결과 페이지' width='400px'/>

1. 카테고리 탭
   - 검색 시 기본으로 통합 페이지에 결과 제공
   - 결과 중 카드, 대출, 예적금, 청약에 해당하는 것만 볼 수 있는 탭임
2. 통합 탭
   - 카테고리별로 최대 3개까지 결과 제공
   - 모두보기 버튼 클릭 시 해당 카테고리의 결과를 더 제공
3. 카드, 대출, 예적금, 청약
   - 정렬 버튼에 따라 상품 목록 순서 변경
   - 검색결과 없을 시 메시지(ex. '00'의 검색결과가 없어요 등등), 최근 검색어 목록 제공
4. 목록에 있는 상품 클릭시 해당상품 상세페이지로 이동
<br/>
</details>

<details>
<summary>8. 상세 페이지</summary>

![상세페이지](https://user-images.githubusercontent.com/35508595/221366259-6a80d55a-7660-4429-99aa-6cb61842253a.gif)

1. 화면 구성
   - 각 카테고리 별로 상세 페이지의 format이 다름
      - 최대한 데이터에서 뽑아낼 수 있는 것들은 모두 반영
      - 뱅크 샐러드 등 여러 뱅킹 사이트의 사례를 참고
   - 온라인 신청 버튼
      - 앱 내에 신청 기능은 없지만, 실제 신청 페이지로 접근 가능하게 해놓음
2. 장바구니 기능
   - 우측 상단의 하트 아이콘을 클릭하여 장바구니 추가/제거 가능
   - 해당 상품을 장바구니에 넣은 경우, 아이콘을 빨간색으로 변경하여 가시성을 높임
<br/>
</details>

<details>
<summary>9. 장바구니 페이지</summary>

![장바구니](https://user-images.githubusercontent.com/35508595/221366267-21f90447-4849-410c-8bcc-794d38ac681b.gif)

1. 장바구니 리스트
   - 장바구니에 넣어놓은 상품 일괄 확인 가능
   - 하트 아이콘 클릭 시 상품 개별 삭제
   - 헤더의 장바구니 숫자와 연동
2. 일괄 삭제 기능
   - 하단의 장바구니 비우기 버튼 클릭 시 상품 일괄 삭제
   - 상품이 존재할 경우에만 버튼이 렌더링 됨
<br/>
</details>

<details>
<summary>10. 마이 페이지</summary>

![EditUser](https://user-images.githubusercontent.com/107975281/222922301-3f8d843e-f29c-41e5-ab2b-0678659a982d.gif)

1. 회원 정보 
   - 회원 정보를 호출하여 이름, 이메일, 생년월일, 나이 등 표시
   - 설문에 참여하여 회원 정보에 태그를 담고있다면 태그 및 테스트 다시하기 버튼 표시
2. 회원 정보 수정
   - 필수 항목: 현재 비밀번호
   - 선택 항목: 새 비밀번호 & 새 비밀번호 확인 / 이름 / 생년월일
   - 회원가입과 동일한 방식의 유효성 검사
   - 회원정보 수정 완료 시 메인 페이지로 이동 
<br/>

![Logout](https://user-images.githubusercontent.com/107975281/222922291-fa085c2f-8ced-4a14-9b7d-a333ef205280.gif)

3. 로그아웃
   - 로그아웃 버튼 클릭 시 로그아웃을 재차 묻는 모달창 생성
   - 모달창에서 로그아웃을 클릭하면 accessToken이 쿠키에서 사라지며 로그인 페이지로 이동

</details>

<br><br>

# 6. 대표 기능 동작 예시 💻
### 1. 로그인

<img src='https://user-images.githubusercontent.com/107975281/222921949-f6956cde-4637-4cce-9747-0a1271f0cc88.gif' alt='로그인' width='400px'/>
<br>

### 2. 설문조사 및 상품 추천

<img src='https://user-images.githubusercontent.com/107975281/222921870-36980f3f-1538-4d6f-b7f1-c9179ee3a727.gif' alt='설문조사' width='400px'/>
<br>

### 3. 검색

<img src='https://user-images.githubusercontent.com/90189513/221529636-b9c5ee69-6053-49ef-9233-58241ce425eb.gif' alt='검색결과' width='400px'/>
<br>

### 4. 상품 모아보기

<img src='https://user-images.githubusercontent.com/35508595/221366276-b1c22891-804a-4b0d-9c82-7e025ebf6296.gif' alt='모아보기' width='400px'/>
<br>

### 5. 상품 상세

<img src='https://user-images.githubusercontent.com/35508595/221366259-6a80d55a-7660-4429-99aa-6cb61842253a.gif' alt='상품상세' width='400px'/>

<br><br>

# 7. 프로젝트 회고 ✍

### 한수산
- **👍 Good**
  - 사용자 입장에서 어떻게 기능을 구현해야 불편함이 없을지에 대해 많은 고민이 있었고 이 고민이 앞으로의 개발가치관에 좋은 영향을 준 것 같다.
  - 사용해보지 못한 상태관리 라이브러리를 경험할 수 있어서 좋았다. 
  - 어떻게하면 호출 빈도를 줄일 수 있을까에 대해 고민하였으며, 상태관리를 어떻게 해야 효율적일까에 대한 고민을 하면서 많은 성장이 있었다 생각한다.
  - 컴포넌트를 분리하거나 기능을 구현 할 때 어떻게 나눌지 혹은 관리할지에 대한 개인적인 틀이 좀 더 견고해진 것 같다.
  - 팀장으로서 한 것이라고는 초반 세팅과 pr확인후 머지하는 것 뿐이었지만 그 만으로도 많은 도움이 되었던 것 같다.
  - 팀 회의 일정을 조율하고 회의 내용을 고민하면서 회의를 통해 결정해야하는 사항과 개인적인 질문을 통해 결정해야하는 상황을 나눠 고민하게 되면서 협업에 더 익숙해질 수 있었던 것 같다.
  - 팀원 개개인의 성향과 장,단을 더 생각하고 고려하며 작업 했고 아주 적었던 트러블을 빠르게 해결해 나갈 수 있었던 부분에 있어 정말 좋은 경험이었다고 생각한다. 
  - 부족한 부분들을 많이 알 수 있었던 프로젝트였다 그 과정에서 알게되는 것과 발전한 부분들이 있겠지만 공부해 보완해야할 부족한 부분은 많이 알게되어 만족한다.
- **👎 Bad**
  - 활용 할 수 있는 데이터가 더 많았더라면 설문과 추천하는 기능의 더 많은 시도를 해볼 수 있었을 것 같다.
  - redux toolkit을 사용한 것 까지는 좋았지만 제대로 이해하고 사용했는지에 관련해서는 의문이 든다.
  - react query를 사용했더라면 loading상황과 error상황을 좀 더 쉽게 처리 할 수 있었을 거라는 생각이 든다.
react query의 많은 기능들을 활용해 보기위한 좋은 기회라 생각했지만, redux toolkit을 함께 활용하기에는 부적절하다 싶어 배제했다.
  - 디자인을 크게 고려하지 않았다 어떻게하면 편의성에 대한 고민만 중점적으로 하다보니 디자인도 편의성에 많은 기여를 할 수 있다는 점을 간과한 것 같다.
### 노준영
- **👍 Good**
  - redux toolkit을 활용한 전역 상태관리, payload 타입지정과 같이 평소엔 써보지 못했던 기술들을 써봐서 좋았음.
  - typescript도 개인적으론 처음이었고, 타입추론을 자주 사용하여 직접 타입 지정을 많이는 못했으나 좋은 경험이었고 에러 해결하는것도 힘들었으나 많이 성장함을 느낌.
  - axios instance. 평소엔 가볍게 만드느라 사용해본적이 별로없었는데 인스턴스를 한번 만들고 나니 굉장히 편리한것을 느낌. 애용할것 같음.
  - 라이브러리 활용을 많이함. 이건 단점일수도있을것 같지만, 개발속도를 단축시켜준것은 분명함(react select, react intersection observer)
  - 팀원들이 모두 1인분이상 너무 잘해줌. 내 파트에만 집중하고 도움을 많이 못 줬으나 다들 너무 훌륭하게 완성한것 같음(백엔드 포함)
- **👎 Bad**
  - react-query를 못쓴점. 못써서 힘들었다 라기보다는 한번쯤 경험해보고 싶었기에 아쉬움이 남는다.
  - 위와 연계되는 로딩관련 ui 부재.
  - 흔들렸던 기획. 기획은 언제나 어렵다...
### 이은영
- 👍개발 관련
  - redux에 대한 이해도가 낮아 기능을 제대로 구현 못한 것이 아쉬움. 하지만 사용해보며 조금이나마 익숙해졌고, 상태관리에 대해 여러 방면으로 고민해볼 수 있는 아주 좋은 경험이었음.
  - typescript를 사용한 프로젝트는 처음이었는데, 이해도가 낮아 협업에 맞게 더 다양하고 정확하게 사용하지 못한 것이 아쉬움. 여러 에러에 대해 해결하는 법에 대해 알 수 있어 좋았음.
  - 멘토링 시간을 통해 알게 된 비즈니스 로직과 상태관리. 연결지어 생각하는 것에 대해 아직 감은 잘 안오지만, 프로젝트의 큰 틀과 내가 개발하고 있는 것까지 다방면으로 고민해볼 수 있는 경험이 됐음.
  - 프로젝트 기간에 쫓겨 정말 효율적인지, 정말 필요한 기능인지, 모든 것에 대해 정말 그래야하는지 등 고민하는 시간이 적었던 것이 아쉬움.
  - 구글링 능력이 또 한층 올라감. 모르는 것은 알면 된다는 것을 또 느낌.
  - 데이터, UX/UI, 기능, 코드 등 모든 것에 대해 확장성을 고려해서 개발해야한다는 것을 깨달음.
  - 이론 공부 및 기본기의 중요성을 또 깨달음.
- 👍 협업 관련
    - 회의록, 기능명세서, 와이드 프레임 등의 문서나 기타 명시적으로 볼 수 있는 것들로 공통의 생각을 정리하는 것이 필요하고 중요하다는 것을 느낌. 명시적이고 구체적일 수록 더 좋은 결과물이 나올 수 있고, 빈틈이 생길 수 있는 가능성이 줄어들 수 있다는 것을 깨달음. 기획에 필요한 문서들을 처음 접해보아 미숙했던 점이 많았던 것이 아쉬웠음. 
    - 일정조율 과정이 있었다면 좋았을 듯함.
    - 프로젝트로 해결할 수 있는 문제 및 목표를 더 명확히하는 기획 작업을 하는 것이 어려웠음. 이로 인해 디자인이나 기능의 컨셉이 모호한 부분이 있었다고 생각함.
    - 백엔드와 첫 협업 경험이어서 의논할 게 무엇이고, 어떤 역할을 해야하는지 파악하는게 어려웠음. 하지만 프로젝트의 전체 과정까지는 아니지만, 대략적인 흐름에 대해 파악할 수 있는 좋은 경험이었음.
    - 기능 개발 전 백엔드와 논의단계에서 데이터별로 중복처리, 정렬, 데이터 타입에 대해 명확히 하는 것이 중요하다는 것을 알게 됨.
    - 백엔드 서버 배포시, API가 기능대로 구현된 것이 맞는지/데이터 타입/반환 값을 전부 확인하는 것의 중요성을 알게 됨. 꼼꼼히 확인하지 못해서 작업 중간 또는 마지막에 수정 요청한 것들이 있었음.
    - 1일 1회, 3일 1회 등 백엔드와 진행상황을 공유하는 룰이 있었다면, 더 원활한 소통을 통해 프로젝트에 대해서 놓치는 부분이 줄어들 수 있었을 거라고 생각함.

  
### 김효진
- **👍 Good**
  - axios 사용법을 잘 몰라서 fetch로 테스트를 하다가 axios로 리팩토링 했는데, 굉장히 편리한 라이브러리라는 것을 알게되었다. 그리고 instance를 생성하는 코드에서 토큰이 업데이트가 되지 않는 작은 이슈가 있었는데, 이를 발견하고 해결하는 과정에서 instance 사용법을 보다 상세히 이해할 수 있었다. 
  - Typescript를 처음 써보았는데 구글링을 해보고 팀원들의 코드를 참고하며 속성으로 배웠다. 아주 자유자재로 사용한 건 아니지만, 에러를 없애기 위해 이것저것 시도해보며 자연스럽게 공부가 되었고 자신감도 조금 생겨서 더 공부해보고 싶은 의욕이 생겼다.
  - 로그인/회원가입을 구현할 때 여러 사이트를 참고 위화감 없이 자연스럽게 보이려고 했다. 구현하고 나니, 기능적인 면에선 작은 부분일 지 몰라도 디테일 하나 하나가 유저에게 편의를 제공한다고 생각하니 놓쳐선 안되는 부분이라는 생각이 들었다.
  - 멘토링이 많은 도움이 되었다. 초반에 로그인 기능 구현이 막연하게 느껴졌는데, 내가 생각한 로직이 맞는지, 또 현업에서는 어떠한 방식을 다루는지에 대한 피드백이 큰 힘이 되었다. 그리고 모르는 부분을 정확하게 여쭤보기 위해 질문을 준비하는 일련의 과정 또한 많은 공부가 되었다.
  - 백엔드와의 전반적인 협업 과정을 알게 되었다. 기획 단계에서는 기능 명세서와 api를 작성하고, 목 데이터를 이용해 개발을 하다가 서버가 배포된 후에는 api를 사용해 데이터를 요청하는 등, 협업 전에는 이러한 흐름을 잘 몰랐는데, 이제는 알게되어 협업에 어느정도 자신감이 생긴 것 같다.
  - 팀원들이 각자 맡은 작업을 잘 마무리해 주어서 정말 고맙다. 마감 기한에 쫓겨 내가 맡은 작업에만 몰두하고, 팀원들의 작업 결과물은 나중에 확인했는데 정말 기대 이상의 결과물이라 깜짝 놀랐다. 서로 돕고 의논하면서 팀워크가 잘 발휘된 것 같고 팀원들에게 의지가 된다는 게 어떤 느낌인지 느꼈다.
- **👎 Bad**
  - 기획을 조금 더 탄탄하게 해야겠다고 느꼈다. 개발 도중 api 수정이 필요했는데 이는 와이어프레임만 잘 짰더라면 수정이 필요 없는 부분이었다. 수정 요청 중 일부는 받아들여졌으나, 일부는 마감 기한 때문에 수정하기 어렵다는 답변을 받아서 아쉬운 채로 끝내야 했다.
  - 백엔드와의 협업에 있어서 일부 소통이 원활하지 못했다. 서버 상태를 전달받지 못한 일이 종종 있었고, 협업이 익숙치 않아 확실히 조율하지 못한 점이 아쉽다. 기획 초반에 FE/BE 작업 일정표를 만들어 공유하고, 서버 배포를 포함한 필수 사항을 고지를 부탁 했으면 어땠을까 생각한다.
  - 토큰 값을 주고 받는 과정에서 api 명세서를 애매모호하게 작성하여 BE/FE 모두 불필요한 작업이 추가되었다. 앞으로는 작성하기 애매한 부분이 있다면 백엔드 측과 협의하여 작성해야 겠다고 느꼈다.
  - 라우터 사용 관련해서 이슈가 조금 있었는데 이 부분은 거의 팀원들이 나서서 해결해준 것 같다. 기본적인 사용법만 알 뿐, 어떤 상황에 어떻게 활용할 지 고민해보는 시간이 부족했다. 스스로 더 공부해야 한다고 느꼈고, 부족함을 채워준 팀원들에게 고마움을 느낀다.


<br><br>
