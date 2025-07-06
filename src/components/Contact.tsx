import {
  MessagesSquare,
  Ear,
  FileText,
  CheckCircle,
  AlarmClock,
  ListChecks,
  MessageCircle,
  // HelpCircle,
} from 'lucide-react';
import Title from './Title';

const steps = [
  {
    step: '01',
    title: '카카오톡 문의',
    desc: '간단한 인사와 함께 문의를 남겨주세요.',
    icon: <MessagesSquare className="w-8 h-8 text-accent" />,
  },
  {
    step: '02',
    title: '상담 내용 듣기',
    desc: '현재 가입 내역과 상황을 들어봅니다.',
    icon: <Ear className="w-8 h-8 text-accent" />,
  },
  {
    step: '03',
    title: '맞춤 설계안 제안',
    desc: '불필요한 특약 제거, 꼭 필요한 보장만!',
    icon: <FileText className="w-8 h-8 text-accent" />,
  },
  {
    step: '04',
    title: '가입 or 리모델링 완료',
    desc: '설계안에 동의하면 가입까지 도와드립니다.',
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white scroll-mt-10 w-[90%] mx-auto lg:w-3/4"
    >
      <div className="px-4 mx-auto">
        {/* 제목 */}
        <div className="mb-16 text-center">
          <Title title={'문의하기'}></Title>
          <p className="mt-2 text-gray-600">
            상담 전 확인하시면 더 빠른 안내가 가능합니다.
          </p>
        </div>

        {/* 카드 섹션 */}
        <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-2">
          {/* 상담 가능 시간 */}
          <div className="p-6 transition border border-gray-200 shadow-sm bg-gray-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <AlarmClock className="mr-1 w-7 h-7 text-accent" />
              <h4 className="text-xl font-semibold text-primary">
                상담 가능 시간
              </h4>
            </div>
            <p className="leading-loose text-gray-600 ">
              평일 오전 9시 ~ 오후 8시
              <br />
              주말 및 공휴일은 휴무입니다.
            </p>
          </div>

          {/* 체크리스트 */}
          <div className="p-6 transition border border-gray-200 shadow-sm bg-gray-50 rounded-xl hover:shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <ListChecks className="mr-1 w-7 h-7 text-accent " />
              <h4 className="text-xl font-semibold text-primary">
                상담 전 체크리스트
              </h4>
            </div>
            <ul className="pl-5 space-y-1 text-gray-600 list-disc">
              <li>현재 가입 보험사</li>
              <li>최근 병력 여부</li>
              <li>원하는 보장 범위 (예: 실비 / 암 / 치매 등)</li>
            </ul>
            <p className="mt-3 text-primary">
              위 내용이 없다면 편하게 문의만 주셔도 괜찮습니다 🙂
            </p>
          </div>
        </div>

        {/* FAQ는 단독 전체 카드로
        <div className="p-6 mb-24 transition border border-gray-200 shadow-sm bg-gray-50 rounded-xl hover:shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-accent" />
            <h4 className="text-lg font-semibold text-primary">
              자주 묻는 질문
            </h4>
          </div>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-black">
                Q. 기존 보험 유지하면서 가능한가요?
              </p>
              <p className="ml-2">
                A. 일부 특약 정리나 이관 등을 통해 가능합니다.
              </p>
            </div>
            <div>
              <p className="font-semibold text-black">Q. 상담은 무료인가요?</p>
              <p className="ml-2">A. 네, 전액 무료입니다.</p>
            </div>
            <div>
              <p className="font-semibold text-black">Q. 꼭 가입해야 하나요?</p>
              <p className="ml-2">
                A. 아닙니다. 비교하신 후 결정하셔도 됩니다.
              </p>
            </div>
          </div>
        </div> */}

        {/* 절차 안내 */}
        <div className="mt-20 mb-12 text-center">
          <Title title={'문의 절차 안내'}></Title>
          <p className="mt-2 text-gray-600">
            보험 상담은 아래의 간단한 절차로 진행됩니다.
          </p>
        </div>

        {/* 절차 카드 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {steps.map(({ step, title, desc, icon }) => (
            <div
              key={step}
              className="relative flex flex-col items-center p-6 pt-12 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-white -translate-x-1/2 rounded-full shadow -top-5 left-1/2 bg-accent">
                {step}
              </div>
              <div className="mb-4">{icon}</div>
              <h3 className="text-base font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-center text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
        {/* 플로팅 문의하기 버튼 */}
        <div className="fixed z-50 bottom-6 right-6">
          <a
            href="http://pf.kakao.com/_wxefFn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center pl-2 transition rounded-full lg:bg-white lg:shadow-lg hover:shadow-xl"
          >
            {/* 텍스트 */}
            <span className="items-center hidden h-16 pl-4 mr-3 text-lg font-semibold text-gray-800 lg:flex lg:inlien">
              문의하기
            </span>

            {/* 아이콘 부분 */}
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-accent">
              <MessageCircle className="w-8 h-8 text-white"></MessageCircle>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
