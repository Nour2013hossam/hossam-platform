import Link from "next/link";
import { ArrowLeft, BookOpen, GraduationCap, Heart, Star, Target, Users } from "lucide-react";

const values = [
  { icon: BookOpen, title: "تبسيط اللغة العربية", text: "شرح القواعد والأفكار بأسلوب واضح وخطوات عملية تناسب كل مستوى." },
  { icon: Target, title: "التركيز على الفهم", text: "مش هدفنا حفظ الإجابة؛ هدفنا إن الطالب يفهم ويعرف يوصل للحل بنفسه." },
  { icon: Users, title: "متابعة مستمرة", text: "محتوى منظم وتدريبات تساعد الطالب يعرف مستواه ويحدد الخطوة الجاية." },
];

export default function TeacherPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f7f9fc] text-[#172033]">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#204bf0] text-white"><GraduationCap size={25}/></span><span><b className="block">ثانوية إسكندرية</b><small className="text-xs text-slate-400">أ/ حسام حسني</small></span></Link>
          <Link href="/" className="rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-600 hover:bg-slate-200">العودة للرئيسية</Link>
        </div>
      </header>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#102b86] via-[#204bf0] to-[#6384ff] px-5 py-20 text-white sm:py-28">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/10"/>
        <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full border-[55px] border-white/10"/>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div><span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold"><Star size={14}/> رحلتك في اللغة العربية تبدأ من هنا</span><h1 className="mt-7 text-4xl font-black leading-tight sm:text-6xl">أ/ حسام حسني</h1><p className="mt-5 max-w-2xl text-base leading-9 text-blue-100 sm:text-lg">تعليم اللغة العربية بطريقة تجمع بين الفهم والتدريب والمتابعة، في تجربة تعليمية منظمة تساعدك تتقدم بثقة.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/courses" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#204bf0] hover:bg-blue-50">اكتشف الكورسات <ArrowLeft size={17}/></Link><Link href="/contact" className="rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-black text-white hover:bg-white/15">تواصل معنا</Link></div></div>
          <div className="mx-auto flex aspect-square w-full max-w-[330px] items-center justify-center rounded-[48px] border border-white/20 bg-white/10 shadow-2xl shadow-blue-950/20 backdrop-blur-xl"><div className="flex h-52 w-52 items-center justify-center rounded-[42px] bg-white/15"><GraduationCap size={112} strokeWidth={1.3}/></div></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20"><div className="max-w-2xl"><span className="text-xs font-black text-blue-600">فلسفتنا في التعليم</span><h2 className="mt-3 text-3xl font-black">التعلم مش مجرد درس.. دي رحلة</h2><p className="mt-4 text-sm leading-8 text-slate-500">بنشتغل على إن الطالب يكون عنده أساس قوي، وخطة واضحة، ومصادر يرجعلها وقت ما يحتاج.</p></div><div className="mt-9 grid gap-4 md:grid-cols-3">{values.map((value) => <article key={value.title} className="rounded-[26px] border border-white bg-white p-7 shadow-sm shadow-slate-200/50"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><value.icon size={23}/></span><h3 className="mt-6 font-black">{value.title}</h3><p className="mt-3 text-sm leading-8 text-slate-500">{value.text}</p></article>)}</div></section>
      <section className="mx-auto max-w-6xl px-5 pb-20"><div className="flex flex-col items-start justify-between gap-5 rounded-[30px] bg-[#172b67] p-8 text-white sm:flex-row sm:items-center sm:p-10"><div className="flex items-center gap-4"><Heart className="shrink-0 text-blue-300" size={30}/><div><h2 className="text-xl font-black">جاهز تبدأ؟</h2><p className="mt-2 text-sm text-blue-100">اختار المحتوى المناسب ليك وابدأ رحلتك التعليمية.</p></div></div><Link href="/register" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-[#204bf0]">ابدأ الآن <ArrowLeft size={16}/></Link></div></section>
    </main>
  );
}
