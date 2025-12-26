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
    <section id="contact" className="py-28 bg-white scroll-mt-14">
      <div className="w-[90%] mx-auto lg:w-3/4">
        <Title
          title="문의하기"
          subtitle="편하게 연락주시면 친절히 상담해드리겠습니다"
        />

        {/* 안내 카드 */}
        <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-2">
          {/* 상담 시간 */}
          <div className="group p-8 bg-white rounded-2xl border border-[#eee] hover:border-[#1e3a5f]/20 shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#1e3a5f] group-hover:scale-105 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1a1a1a]">상담 가능 시간</h4>
                <p className="text-sm text-[#888]">편한 시간에 연락주세요</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-[#1e3a5f]/5 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium text-[#333]">평일</span>
                </div>
                <span className="font-bold text-[#1e3a5f]">오전 9시 ~ 오후 8시</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#fafafa] rounded-xl">
                <span className="text-[#888]">주말/공휴일</span>
                <span className="text-[#bbb]">휴무</span>
              </div>
            </div>
          </div>

          {/* 체크리스트 */}
          <div className="group p-8 bg-white rounded-2xl border border-[#eee] hover:border-[#c9a962]/30 shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#c9a962] group-hover:scale-105 transition-transform">
                <ClipboardList className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1a1a1a]">상담 전 체크리스트</h4>
                <p className="text-sm text-[#888]">준비되면 더 빠른 상담 가능</p>
              </div>
            </div>
            <ul className="space-y-3">
              {['현재 가입된 보험사와 상품명', '최근 병력 또는 건강 상태', '원하는 보장 범위 (실비, 암, 치매 등)'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-[#fafafa] rounded-xl hover:bg-[#c9a962]/5 transition-colors">
                  <span className="flex items-center justify-center w-7 h-7 text-sm font-bold text-white bg-[#c9a962] rounded-lg flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[#555] pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#888] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#c9a962]" />
              준비되지 않아도 편하게 문의 주세요
            </p>
          </div>
        </div>

        {/* 절차 안내 */}
        <div ref={ref} className="mt-24">
          <h3 className="mb-12 text-2xl font-bold text-center text-[#1a1a1a]">
            상담은 이렇게 진행됩니다
          </h3>

          {/* 데스크톱 타임라인 */}
          <div className="hidden lg:block relative">
            {/* 연결선 */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e3a5f]/20 via-[#1e3a5f] to-[#c9a962] rounded-full" />

            <div className="grid grid-cols-4 gap-4">
              {steps.map(({ num, title, desc, icon: Icon }, i) => (
                <div
                  key={num}
                  className={`relative pt-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* 단계 원 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-[#1e3a5f] shadow-md">
                      <span className="text-sm font-bold text-[#1e3a5f]">{num}</span>
                    </div>
                  </div>

                  {/* 카드 */}
                  <div className="mt-10 p-6 text-center bg-white rounded-2xl border border-[#eee] hover:border-[#1e3a5f]/20 shadow-elegant hover:shadow-elegant-lg transition-all group">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-[#1e3a5f]/5 group-hover:bg-[#1e3a5f]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#1e3a5f]" />
                    </div>
                    <h4 className="font-bold text-[#1a1a1a]">{title}</h4>
                    <p className="mt-2 text-sm text-[#888]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 모바일 버전 */}
          <div className="lg:hidden space-y-4">
            {steps.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#eee] shadow-elegant ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e3a5f] flex-shrink-0">
                  <span className="text-lg font-bold text-white">{num}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a]">{title}</h4>
                  <p className="mt-1 text-sm text-[#888]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden p-10 lg:p-16 bg-[#1e3a5f] rounded-3xl">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 rounded-full">
                <Phone className="w-4 h-4 text-[#c9a962]" />
                <span className="text-sm font-medium text-white/80">무료 상담</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                지금 바로 상담을 시작하세요
              </h3>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                27년 경력의 전문가가 고객님의 상황에 맞는<br className="hidden sm:block" />
                최적의 보험 설계를 도와드립니다
              </p>

              <a
                href="http://pf.kakao.com/_wxefFn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-[#1e3a5f] bg-[#c9a962] rounded-full hover:bg-[#dfc88a] transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                카카오톡으로 상담하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
