"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UserRound,
} from "lucide-react";

const subjects = [
  { name: "اللغة العربية", score: 86, progress: 72, color: "bg-blue-500" },
  { name: "النحو والتأسيس", score: 91, progress: 84, color: "bg-emerald-500" },
  { name: "البلاغة", score: 78, progress: 61, color: "bg-violet-500" },
];

const activities = [
  { title: "أكمل درس أسلوب الاختصاص", detail: "اللغة العربية", time: "أمس", icon: CheckCircle2 },
  { title: "أدى اختبار النحو", detail: "النتيجة التجريبية: 8 من 10", time: "منذ يومين", icon: BookOpen },
  { title: "بدأ مراجعة البلاغة", detail: "المراجعة النهائية", time: "منذ 3 أيام", icon: Clock3 },
];

export default function ParentDashboard() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f6fb] text-[#172033]">
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-7 lg:px-10 lg:py-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[26px] border border-white/80 bg-white/80 px-5 py-4 shadow-sm shadow-slate-200/50 backdrop-blur-2xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4775ff] to-[#1736b7] text-white shadow-lg shadow-blue-200"><GraduationCap size={27} /></div>
            <div><p className="font-black text-[#142b55]">ثانوية إسكندرية</p><p className="mt-1 text-xs font-bold text-slate-400">بوابة ولي الأمر</p></div>
          </Link>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-bold">
            <Link href="/" className="rounded-xl px-3 py-2 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]">الرئيسية</Link>
            <Link href="/student" className="rounded-xl px-3 py-2 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]">لوحة الطالب</Link>
            <Link href="/books" className="rounded-xl px-3 py-2 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]">الكتب والمذكرات</Link>
          </nav>
        </header>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-sm font-bold text-slate-400">متابعة رحلة ابنك التعليمية</p><h1 className="mt-2 text-2xl font-black sm:text-3xl">أهلاً بيك في حساب ولي الأمر</h1></div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-[11px] font-black text-amber-700"><Bell size={14} /> نسخة تجريبية • بيانات للعرض فقط</span>
        </div>

        <section className="mb-7 grid gap-5 xl:grid-cols-[1.3fr_1fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#173bcf] via-[#2855ed] to-[#6384ff] p-6 text-white shadow-xl shadow-blue-200/60 sm:p-8">
            <div className="absolute -left-12 -top-20 h-64 w-64 rounded-full border-[34px] border-white/10" />
            <div className="relative flex flex-wrap items-center justify-between gap-5">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-blue-50"><ShieldCheck size={14} /> متابعة تعليمية</span>
                <h2 className="mt-5 text-2xl font-black">تابع تقدم ابنك خطوة بخطوة</h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-blue-100">اطّلع على نشاطه الدراسي ونتائج التدريبات والمهام القادمة من مكان واحد.</p>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/10"><UserRound size={48} /></div>
            </div>
          </div>
          <div className="rounded-[28px] border border-white bg-white/85 p-6 shadow-sm shadow-slate-200/40">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#204bf0]"><GraduationCap size={27} /></div>
              <div><p className="text-xs font-bold text-slate-400">الطالب المرتبط بالحساب</p><h2 className="mt-1 text-lg font-black">أحمد محمد</h2><p className="mt-1 text-xs text-slate-400">الصف الثالث الثانوي</p></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3"><p className="text-[10px] font-bold text-slate-400">الكورسات النشطة</p><p className="mt-1 text-2xl font-black text-[#204bf0]">2</p></div>
              <div className="rounded-2xl bg-slate-50 p-3"><p className="text-[10px] font-bold text-slate-400">متوسط التقييم</p><p className="mt-1 text-2xl font-black text-emerald-600">85%</p></div>
            </div>
          </div>
        </section>

        <section className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "نسبة التقدم", value: "72%", note: "في المسار التعليمي", icon: TrendingUp, tone: "bg-blue-50 text-blue-600" },
            { label: "الدروس المكتملة", value: "25", note: "درس مكتمل", icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-600" },
            { label: "الحضور", value: "منتظم", note: "حسب سجل العرض التجريبي", icon: CalendarCheck, tone: "bg-violet-50 text-violet-600" },
            { label: "المهام القادمة", value: "3", note: "تحتاج إلى متابعة", icon: Clock3, tone: "bg-amber-50 text-amber-600" },
          ].map((stat) => (
            <article key={stat.label} className="rounded-[22px] border border-white bg-white/85 p-4 shadow-sm shadow-slate-200/40 sm:p-5">
              <div className="flex items-center justify-between gap-2"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.tone}`}><stat.icon size={20} /></div><span className="text-xl font-black sm:text-2xl">{stat.value}</span></div>
              <p className="mt-4 text-xs font-black sm:text-sm">{stat.label}</p><p className="mt-1 text-[10px] font-semibold text-slate-400">{stat.note}</p>
            </article>
          ))}
        </section>

        <div className="grid items-start gap-6 xl:grid-cols-[1.2fr_1fr]">
          <section className="rounded-[26px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
            <div className="mb-6"><h2 className="text-lg font-black">المستوى الدراسي</h2><p className="mt-1 text-xs text-slate-400">ملخص أداء الطالب في الفروع المختلفة</p></div>
            <div className="space-y-6">
              {subjects.map((subject) => (
                <div key={subject.name}>
                  <div className="mb-2 flex items-center justify-between gap-3"><span className="text-sm font-black">{subject.name}</span><span className="text-xs font-black text-slate-500">التقييم {subject.score}%</span></div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${subject.color}`} style={{ width: subject.progress + "%" }} /></div>
                  <p className="mt-2 text-[10px] text-slate-400">إنجاز المحتوى: {subject.progress}%</p>
                </div>
              ))}
            </div>
            <Link href="/student" className="mt-7 inline-flex items-center gap-2 text-xs font-black text-[#204bf0]">عرض لوحة الطالب <ArrowLeft size={14} /></Link>
          </section>

          <section className="rounded-[26px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
            <div className="mb-6"><h2 className="text-lg font-black">آخر نشاط للطالب</h2><p className="mt-1 text-xs text-slate-400">تابع ما أنجزه مؤخرًا</p></div>
            <div className="space-y-5">
              {activities.map((activity) => (
                <div key={activity.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#204bf0]"><activity.icon size={18} /></div>
                  <div className="min-w-0 flex-1"><p className="text-xs font-black leading-6">{activity.title}</p><p className="mt-1 text-[10px] text-slate-400">{activity.detail}</p></div>
                  <span className="shrink-0 text-[10px] font-bold text-slate-400">{activity.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-black text-[#204bf0]"><MessageCircle size={17} /> تواصل مع المدرس</div>
              <p className="mt-2 text-xs leading-6 text-slate-500">قريبًا: إرسال استفسار ومتابعة الردود من داخل حساب ولي الأمر.</p>
            </div>
          </section>
        </div>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 py-5 text-xs font-semibold text-slate-400">
          <span>© 2026 ثانوية إسكندرية التعليمية</span>
          <Link href="/" className="font-black text-[#204bf0]">العودة للموقع الرئيسي <ArrowLeft className="mr-1 inline" size={14} /></Link>
        </footer>
      </div>
    </main>
  );
}
