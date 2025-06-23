📝 커밋 컨벤션
모든 커밋 메시지는 통일된 규칙을 따릅니다.

💡 커밋 메시지 규칙
<타입>[적용범위]: <설명>

예시: Feat[FE]: 로그인 기능 추가 (API 연결 필요)

🏷️ 커밋 타입 (Commit Types)
첫 글자는 대문자로 시작하는 Capitalize 방식을 사용합니다.

Feat: 새로운 기능 추가 또는 기존 기능에 대한 추가 구현

Fix: 버그 수정

Remove: 파일 삭제

Docs: 문서(Documentation) 관련 파일 변경

Refactor: 기능 변경 없이 코드 구조만 변경 (리팩토링)

Test: 테스트 코드 수정 또는 추가

Rename: 파일 또는 디렉토리 이름/위치 변경

Comment: 코드 내 주석 추가 및 변경

Ci: CI(Continuous Integration) 관련 설정 수정 (현재는 미정)

Design: 화면 구성 또는 UI 변경

Style: 코딩 컨벤션(스타일) 수정 (예: 코드 포맷팅)

Chore: 분류하기 애매한 기타 변경사항, 패키지 및 빌드 관련 커밋 (주로 프로젝트 설정)


Build: 빌드 시스템 또는 외부 종속성 관련 변경 (예: npm, yarn 설정)

🎯 적용 범위 (Scope) 지정
커밋이 영향을 미치는 범위를 명시합니다.

도메인 + 기능: Feat(navbar): [FE] 네비게이션바 생성
도메인만: Feat: [FE] 네비게이션바 생성
기능만: Feat(navbar): 네비게이션바 생성
