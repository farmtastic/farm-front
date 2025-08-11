# 팜타스틱 - 스마트팜 원격 제어 시스템

## 📌 개요

스마트 정보기술을 활용해 작물 재배 시설의 데이터를 측정·분석하고, 제어 장치 자동 조절을 통해 효율적인 관리 방안을 마련하기 위해 스마트 원격 제어 시스템 구축 프로젝트가 필요하다는 회사측의 제안서를 바탕으로 프로젝트를 진행하였습니다.

- **목표**: 스마트팜 센서 데이터 모니터링 및 제어 기능 제공
- **기간**: 2025.06 ~ 2025.08 (약 8주)
- **팀 구성**: 프론트엔드 1, 백엔드 3

## ⭐ 주요 기능

- **메인 페이지**

- **임계값 설정 모달창** : 사용자가 직접 임계값을 설정하여 원하는 자동 제어 수치를 입력함

<!-- ![임계값 설정](https://github.com/user-attachments/assets/db296fbf-ef1f-4570-9fed-702b38aaca81) -->

- **알림창**

- **센서 데이터 기록 조회 모달창**

## 🛠 기술 스택

### Frontend (담당)

- **Language** : JavaScript, TypeScript
- **Library & Framework**: React, Vite, Tailwind CSS, Axios, Recharts

### Backend

- **Language** : Java
- **Library & Framework**: Spring Boot
- **Database** : PostgreSQL
- **ORM**: JPA

### Hardware & Embedded

- **Language** : C++
- **Hardware** : Raspberry Pi 3, 수위 센서, 조도 센서, pH 센서

## 💻 담당 업무

- UI 설계 및 구현
- 백엔드 API 연동 및 테스트
- 실시간 데이터 처리(polling 방식 적용)
- 센서 데이터 시각화
