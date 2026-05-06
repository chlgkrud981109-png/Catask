# NaroTask - Next Generation Productivity Workspace

NaroTask는 노션(Notion)의 체계적인 관리와 자유로운 화이트보드 배치의 장점을 결합한 차세대 생산성 플랫폼입니다.

## 🚀 주요 기능 (Key Features)

### 1. 멀티 보드 & 커스터마이징 (Multi-Board System)
- **Excel 스타일 탭**: 상단 탭을 통해 여러 보드를 생성하고 관리하며, 더블 클릭이나 우클릭 메뉴로 이름을 쉽게 바꿀 수 있습니다.
- **보드별 독립 테마**: 각 보드마다 배경색과 타공판 점(Pegboard Dot)의 컬러를 다르게 설정하여 목적에 맞는 분위기를 조성할 수 있습니다.
- **즐겨찾기**: 중요 보드는 우클릭 메뉴를 통해 즐겨찾기(Star)하여 좌측으로 자동 정렬할 수 있습니다.

### 2. Notion 스타일 계층형 구조 (Hierarchy System)
- **3단계 계층**: 폴더(Folder) > 문서(Memo/Document) > 태스크(Task)로 이어지는 체계적인 데이터 구조를 제공합니다.
- **드래그 앤 드롭 이동**: 사이드바에서 메모를 드래그하여 다른 폴더로 즉시 이동할 수 있으며, 드래그 시 대상 폴더가 하이라이트되는 시각적 피드백을 제공합니다.

### 3. 고도화된 위젯 시스템 (Advanced Widgets)
- **메모 동기화 (Memo/Task Sync)**: 문서 전체 또는 개별 태스크를 선택하여 보드에 위젯으로 동기화할 수 있습니다.
- **루틴(Routine)**: 체크 가능한 항목들을 칩 형태로 관리하며 보드에서 즉시 추가가 가능합니다.
- **캘린더(Calendar)**: 오늘 날짜 하이라이트 및 현재 월 정보를 제공하는 미니멀한 달력입니다.
- **사진(Photo)**: 배치 후에도 자유롭게 URL을 수정할 수 있는 액자 위젯입니다.

### 4. 통합 뮤직 플레이어 (YouTube Music Integration)
- **사이드바 뮤직 플레이어**: 유튜브 API를 연동하여 Lofi 등 공부/업무용 음악을 재생할 수 있습니다.
- **실시간 비주얼라이저**: 음악 비트에 맞춰 움직이는 애니메이션 바를 통해 생동감 있는 작업 환경을 제공합니다.
- **플레이리스트 커스텀**: 유튜브 비디오 ID를 입력하여 자신만의 플레이리스트를 즉시 반영할 수 있습니다.

### 5. 프리미엄 UI/UX 디자인
- **중앙 배치 모달**: 모든 입력 및 상세 관리 창이 화면 중앙에 배치되며, 외부 영역 클릭 시 자동으로 닫혀 조작이 편리합니다.
- **아이콘 기반 사이드바**: 하단 위젯 생성 바를 아이콘화하여 깔끔함을 유지하고, 상단 배치 툴팁을 통해 가독성을 확보했습니다.
- **나로(Naro) 캐릭터**: 마스코트가 워크스페이스 우측 하단에서 사용자에게 말을 걸며 정서적 안정을 제공합니다.

## 🛠 기술 스택 (Tech Stack)

- **Frontend**: HTML5, Vanilla JavaScript, TailwindCSS (Styling)
- **Library**: YouTube IFrame Player API
- **Icons**: Google Material Symbols Outlined
- **Storage**: 브라우저 `localStorage` (naro_v7_state 키 사용)
- **Font**: Plus Jakarta Sans (Premium Typography)

## 📁 파일 구조 (File Structure)

- `index.html`: 애플리케이션의 모든 로직과 스타일, 구조가 포함된 단일 파일
- `1final.png`: 나로(Naro) 기본 캐릭터 이미지
- `naro_basic.png`, `naro_texting.png`: 나로 캐릭터 변형 이미지
- `PROJECT_SUMMARY.md`: 프로젝트 개요 및 기능 설명서 (본 파일)

## 🌐 배포 가이드 (Deployment)

본 프로젝트는 정적 파일로 구성되어 있어 **Cloudflare Pages**, **GitHub Pages**, **Vercel** 등을 통해 무료로 배포 가능합니다.
- `index.html`과 이미지 파일들을 동일 경로에 업로드하여 즉시 서비스할 수 있습니다.

---

**마지막 업데이트**: 2026-05-06

### 📝 향후 로드맵 (Roadmap)
- [ ] **나로 AI 어시스턴트**: AI API(Gemini/Claude) 연동을 통한 태스크 기획 및 실행 도움 기능
- [ ] **나로 모드 설정**: 유저의 사용 목적에 따른 나로의 성격 및 말투 커스터마이징 모달 추가
- [ ] **데이터 내보내기/불러오기**: JSON 파일 기반의 설정 백업 기능