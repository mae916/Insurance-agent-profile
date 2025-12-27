import { Clock, ClipboardList, MessageCircle, ArrowRight, CheckCircle, Phone, Sparkles } from 'lucide-react';
import Title from './Title';
import { useInView } from '../hooks/useInView';

const steps = [
  { num: '1', title: '카카오톡 문의', desc: '간단한 인사와 함께 문의를 남겨주세요', icon: MessageCircle },
  { num: '2', title: '상담 내용 파악', desc: '현재 가입 내역과 상황을 들어봅니다', icon: ClipboardList },
  { num: '3', title: '맞춤 설계안 제안', desc: '필요한 보장만 담은 설계안을 제안드립니다', icon: Sparkles },
  { num: '4', title: '가입 완료', desc: '설계안에 동의하시면 가입을 도와드립니다', icon: CheckCircle },
];

export default function Contact() {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-28 bg-[#F8FAFC] scroll-mt-14 overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#0033A0]/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-[90%] mx-auto lg:w-4/5">
        <Title
          title="문의하기"
          subtitle="편하게 연락주시면 친절히 상담해드리겠습니다"
        />

        {/* 안내 카드 */}
        <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-2">
          {/* 상담 시간 */}
          <div className="group p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#0033A0]/20 shadow-soft hover:shadow-large transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#1E56B3] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0F172A]">상담 가능 시간</h4>
                <p className="text-sm text-[#94A3B8]">편한 시간에 연락주세요</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#EEF4FF] to-white rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-[#0F172A]">평일</span>
                </div>
                <span className="font-bold text-[#0033A0]">오전 9시 ~ 오후 8시</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#F8FAFC] rounded-xl">
                <span className="text-[#94A3B8]">주말/공휴일</span>
                <span className="text-[#94A3B8]">휴무</span>
              </div>
            </div>
          </div>

          {/* 체크리스트 */}
          <div className="group p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#C9A227]/30 shadow-soft hover:shadow-gold transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#D4B94E] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ClipboardList className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0F172A]">상담 전 체크리스트</h4>
                <p className="text-sm text-[#94A3B8]">준비되면 더 빠른 상담 가능</p>
              </div>
            </div>
            <ul className="space-y-3">
              {['현재 가입된 보험사와 상품명', '최근 병력 또는 건강 상태', '원하는 보장 범위 (실비, 암, 치매 등)'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-[#FFFDF7] rounded-xl border border-[#C9A227]/10 hover:border-[#C9A227]/30 transition-colors">
                  <span className="flex items-center justify-center w-7 h-7 text-sm font-bold text-white bg-gradient-to-br from-[#C9A227] to-[#D4B94E] rounded-lg flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[#475569] pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#94A3B8] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#C9A227]" />
              준비되지 않아도 편하게 문의 주세요
            </p>
          </div>
        </div>

        {/* 절차 안내 */}
        <div ref={ref} className="mt-24">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0033A0] bg-[#EEF4FF] rounded-full">
              Simple Process
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              상담은 이렇게 진행됩니다
            </h3>
          </div>

          {/* 데스크톱 타임라인 */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-6">
              {steps.map(({ num, title, desc, icon: Icon }, i) => (
                <div
                  key={num}
                  className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* 카드 */}
                  <div className={`relative p-8 text-center bg-white rounded-3xl border-2 ${i === 3 ? 'border-[#C9A227]/30' : 'border-[#E2E8F0]'} hover:border-[#0033A0]/30 shadow-soft hover:shadow-large transition-all duration-300 group`}>
                    {/* 단계 번호 */}
                    <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${i === 3 ? 'bg-gradient-to-br from-[#C9A227] to-[#D4B94E]' : 'bg-gradient-to-br from-[#0033A0] to-[#1E56B3]'} shadow-medium`}>
                      {num}
                    </div>

                    {/* 아이콘 */}
                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mt-4 mb-5 rounded-2xl ${i === 3 ? 'bg-[#FFFDF7]' : 'bg-[#EEF4FF]'} group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${i === 3 ? 'text-[#C9A227]' : 'text-[#0033A0]'}`} />
                    </div>

                    <h4 className="text-lg font-bold text-[#0F172A] mb-2">{title}</h4>
                    <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
                  </div>

                  {/* 화살표 (마지막 제외) */}
                  {i < 3 && (
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-soft z-10">
                      <ArrowRight className="w-4 h-4 text-[#0033A0]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 모바일 버전 */}
          <div className="lg:hidden space-y-4">
            {steps.map(({ num, title, desc, icon: Icon }, i) => (
              <div
                key={num}
                className={`relative flex items-center gap-5 p-6 bg-white rounded-2xl border-2 ${i === 3 ? 'border-[#C9A227]/30' : 'border-[#E2E8F0]'} shadow-soft ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* 단계 번호 + 아이콘 */}
                <div className="relative flex-shrink-0">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${i === 3 ? 'bg-[#FFFDF7]' : 'bg-[#EEF4FF]'}`}>
                    <Icon className={`w-8 h-8 ${i === 3 ? 'text-[#C9A227]' : 'text-[#0033A0]'}`} />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold text-white ${i === 3 ? 'bg-gradient-to-br from-[#C9A227] to-[#D4B94E]' : 'bg-gradient-to-br from-[#0033A0] to-[#1E56B3]'}`}>
                    {num}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#0F172A]">{title}</h4>
                  <p className="mt-1 text-sm text-[#64748B]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden p-10 lg:p-16 bg-gradient-to-br from-[#0033A0] via-[#1E56B3] to-[#0033A0] rounded-3xl">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A227]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-bounce-gentle">
                <Phone className="w-4 h-4 text-[#C9A227]" />
                <span className="text-sm font-medium text-white">무료 상담</span>
              </div>

              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                지금 바로 상담을 시작하세요
              </h3>
              <p className="text-white/70 mb-10 max-w-lg mx-auto text-lg">
                27년 경력의 전문가가 고객님의 상황에 맞는
                <br className="hidden sm:block" />
                최적의 보험 설계를 도와드립니다
              </p>

              <a
                href="http://pf.kakao.com/_wxefFn"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold text-[#0033A0] bg-white rounded-full hover:bg-[#F8FAFC] transition-all hover:scale-105 shadow-elevated"
              >
                <MessageCircle className="w-6 h-6" />
                카카오톡으로 상담하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
