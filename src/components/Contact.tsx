import { Clock, ClipboardList, MessageCircle, ArrowRight } from 'lucide-react';
import Title from './Title';

const steps = [
  { num: '1', title: '카카오톡 문의', desc: '간단한 인사와 함께 문의를 남겨주세요' },
  { num: '2', title: '상담 내용 파악', desc: '현재 가입 내역과 상황을 들어봅니다' },
  { num: '3', title: '맞춤 설계안 제안', desc: '필요한 보장만 담은 설계안을 제안드립니다' },
  { num: '4', title: '가입 완료', desc: '설계안에 동의하시면 가입을 도와드립니다' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-10">
      <div className="w-[90%] mx-auto lg:w-3/4">
        <Title
          title="문의하기"
          subtitle="편하게 연락주시면 친절히 상담해드리겠습니다"
        />

        {/* 안내 카드 */}
        <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-2">
          {/* 상담 시간 */}
          <div className="p-8 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">상담 가능 시간</h4>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="text-slate-600">평일</span>
                <span className="font-medium text-slate-900">오전 9시 ~ 오후 8시</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">주말/공휴일</span>
                <span className="text-slate-500">휴무</span>
              </div>
            </div>
          </div>

          {/* 체크리스트 */}
          <div className="p-8 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100">
                <ClipboardList className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">상담 전 체크리스트</h4>
            </div>
            <ul className="space-y-3">
              {['현재 가입된 보험사와 상품명', '최근 병력 또는 건강 상태', '원하는 보장 범위 (실비, 암, 치매 등)'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 text-xs font-medium text-blue-600 bg-blue-100 rounded-full flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              * 위 내용이 준비되지 않아도 편하게 문의 주세요
            </p>
          </div>
        </div>

        {/* 절차 안내 */}
        <div className="mt-20">
          <h3 className="mb-10 text-xl font-bold text-center text-slate-900">상담 진행 절차</h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {steps.map(({ num, title, desc }, i) => (
              <div key={num} className="relative">
                <div className="p-6 text-center bg-slate-50 rounded-2xl h-full">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-lg font-bold text-white bg-blue-600 rounded-full">
                    {num}
                  </div>
                  <h4 className="font-semibold text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
                {/* 화살표 (마지막 제외) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="http://pf.kakao.com/_wxefFn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-slate-900 bg-yellow-400 rounded-2xl hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/25"
          >
            <MessageCircle className="w-6 h-6" />
            카카오톡으로 상담하기
          </a>
        </div>
      </div>
    </section>
  );
}
