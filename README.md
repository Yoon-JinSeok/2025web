# CODAP World Bank 데이터 분석 수업 자료

이 저장소는 고등학교 1학년 학생을 대상으로 **CODAP**를 활용한 **World Bank** 데이터를 분석하고 시각화하여 발표하는 수업 자료를 포함합니다.

## 📂 파일 구조

- `index.html`\
  인터랙티브 HTML 인포그래픽 (단일 페이지)
- `styles.css`\
  인포그래픽 스타일 정의
- `script.js`\
  섹션 토글 기능을 담당하는 JavaScript
- `codap_practice_step_by_step.md`\
  CODAP 실습 단계별 가이드 (Markdown)
- `session2_codap_data_analysis.md`\
  제2차시: CODAP 데이터 분석 기초 지도안
- `session3_worldbank_data_analysis.md`\
  두 차시 지도안: World Bank 데이터 분석 및 발표
- `session4_worldbank_two_sessions_lesson_plan.md`\
  두 차시 수업기획안: World Bank 데이터 분석 및 발표 (통합)
- `generate_interactive_infographic.py`\
  Python 스크립트: HTML 인포그래픽 생성용
- `generate_interactive_infographic.js`\
  Node.js 스크립트: HTML 인포그래픽 생성용
- `README.md`\
  프로젝트 소개 및 사용법

## 🚀 시작하기

1. 저장소를 클론합니다:

   ```bash
   git clone https://github.com/<your-username>/codap-worldbank-lesson.git
   cd codap-worldbank-lesson
   ```

2. **인터랙티브 인포그래픽** 실행

   - 브라우저로 `index.html`을 열어 섹션별 내용 토글 기능을 확인합니다.

3. **Python 스크립트**로 생성하기

   ```bash
   python generate_interactive_infographic.py
   # -> interactive_infographic.html 생성
   ```

4. **Node.js 스크립트**로 생성하기

   ```bash
   node generate_interactive_infographic.js
   # -> interactive_infographic.html 생성
   ```

5. **CODAP 실습 가이드** 보기

   - `codap_practice_step_by_step.md` 파일을 열어 각 단계별 설명을 확인하세요.

6. **통합 수업기획안** 확인

   - `session4_worldbank_two_sessions_lesson_plan.md`를 열어 2차시 통합 수업기획안을 확인하세요.

## 📝 수업 활용법

1. **1차시**: `session2_codap_data_analysis.md` 참고
   - CODAP 인터페이스 익히기
   - 분포도·산점도 생성 실습
2. **2차시**: `session3_worldbank_data_analysis.md` 참고
   - World Bank 데이터 전처리 및 시각화
   - 인사이트 도출 및 발표
3. **통합 수업**: `session4_worldbank_two_sessions_lesson_plan.md` 참고
   - 2차시에 걸친 분석 및 발표 활동을 통합한 종합 계획
4. **파인만 기법**을 적용하여 학생들이 또래에게 설명하도록 유도하세요.

## 💡 기술 스택

- HTML / CSS / JavaScript
- Python (스크립트 자동 생성)
- CODAP ([https://codap.concord.org](https://codap.concord.org))

## 📄 라이선스

MIT © 2025 교사팀

