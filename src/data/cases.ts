export interface RemodelingCase {
  id: number;
  title: string;
  before: string;
  after: string;
  discount: string;
  summary: string;
}

export interface NewJoinCase {
  id: number;
  title: string;
  plan: string;
  summary: string;
}

export interface SpecialCase {
  id: number;
  title: string;
  issue: string;
  action: string;
  result: string;
  summary: string;
}

export const remodelingCases: RemodelingCase[] = [
  {
    id: 1,
    title: '40대 직장인 A씨',
    before: '월 38만원, 갱신형 다수 포함',
    after: '월 18만원, 비갱신 중심',
    discount: '52% 절감',
    summary: '암·뇌혈관 보장은 유지, 중복 특약 정리',
  },
  {
    id: 2,
    title: '50대 자영업자 B씨',
    before: '월 45만원, 중복 보장 다수',
    after: '월 25만원, 핵심 보장 집중',
    discount: '44% 절감',
    summary: '실손보험 중복 해소, 진단비 보장 강화',
  },
];

export const newJoinCases: NewJoinCase[] = [
  {
    id: 1,
    title: '20대 초년생 D씨',
    plan: '실손 + 3대 질병 중심 / 월 7만원',
    summary: '종신보험 권유 대신 가성비 중심 설계',
  },
  {
    id: 2,
    title: '30대 신혼부부 E씨',
    plan: '실손 + 암 + 뇌/심장 / 월 12만원',
    summary: '맞벌이 부부 상황에 맞춘 균형 있는 설계',
  },
];

export const specialCases: SpecialCase[] = [
  {
    id: 1,
    title: '갱신형 보험료 폭등한 50대 C씨',
    issue: '20만원 → 50만원으로 급증',
    action: '갱신형 정리 + 보장 이관',
    result: '노후 대비 비갱신형 설계 / 보험료 26만원',
    summary: '청구 이력 분석 후 실손+진단비로 최적화',
  },
  {
    id: 2,
    title: '보험금 청구 누락된 60대 F씨',
    issue: '5년간 청구 가능 항목 미청구',
    action: '과거 의료기록 분석 + 소급 청구',
    result: '총 480만원 보험금 수령',
    summary: '놓친 보험금 찾아드리기 서비스',
  },
];
