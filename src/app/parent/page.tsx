"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Bell,
  BookMarked,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UserRound,
  WalletCards,
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

const purchases = [
  { title: "مذكرة النحو الشاملة", type: "كتاب PDF", price: "120 جنيه", status: "مفعّل", statusTone: "bg-emerald-50 text-emerald-700", icon: FileText },
  { title: "كورس مراجعة النحو", type: "كورس تعليمي", price: "350 جنيه", status: "بانتظار التأكيد", statusTone: "bg-amber-50 text-amber-700", icon: GraduationCap },
];

const stats = [
  { label: "نسبة التقدم", value: "72%", note: "في المسار التعليمي", icon: TrendingUp, tone: "bg-blue-50 text-blue-600" },
  { label: "الدروس المكتملة", value: "25", note: "درس مكتمل", icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-600" },
  { label: "الحضور", value: "منتظم", note: "حسب سجل العرض التجريبي", icon: CalendarCheck, tone: "bg-violet-50 text-violet-600" },
  { label: "المهام القادمة", value: "3", note: "تحتاج إلى متابعة", icon: Clock3, tone: "bg-amber-50 text-amber-600" },
];

const whatsappLink = "https://wa.me/201007058853?text=" + encodeURIComponent("مرحبًا أستاذ حسام، أنا ولي أمر وأريد الاستفسار عن حساب ابني والمحتوى التعليمي.");

export default function ParentDashboard() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f6fb] text-[#172033]">
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-7 lg:px-10 lg:py-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[26px] border border-white/80 bg-white/85 px-5 py-4 shadow-sm shadow-slate-200/50 backdrop-blur-2xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4775ff] to-[#1736b7] text-white shadow-lg shadow-blue-200"><GraduationCap size={27} /></div>
            <div><p className="font-black text-[#142b55]">ثانوية إسكندرية</p><p className="mt-1 text-xs font-bold text-slate-400">بوابة ولي الأمر</p></div>
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm font-bold">
            <Link href="/" className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-blue-50 hover:text-[#204bf0]">الرئيسية</Link>
            <Link href="/student" className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-blue-50 hover:text-[#204bf0]">لوحة الطالب</Link>
            <Link href="/courses" className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-blue-50 hover:text-[#204bf0]">الكورسات</Link>
            <Link href="/books" className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-blue-50 hover:text-[#204bf0]">المكتبة</Link>
          </nav>
        </header>

        <section className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold text-slate-400">مساحة المتابعة الأسرية</p>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">أهلاً بيك في حساب ولي الأمر</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">كل ما يخص تقدم ابنك ومشترياته التعليمية في مكان واحد.</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-[11px] font-black text-amber-700"><Bell size={14} /> نسخة تجريبية • بيانات للعرض فقط</span>
        </section>

        <section className="mb-7 grid gap-5 xl:grid-cols-[1.35fr_1fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#173bcf] via-[#2855ed] to-[#6384ff] p-6 text-white shadow-xl shadow-blue-200/60 sm:p-8">
            <div className="absolute -left-12 -top-20 h-64 w-64 rounded-full border-[34px] border-white/10" />
            <div className="relative flex flex-wrap items-center justify-between gap-5">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-blue-50"><ShieldCheck size={14} /> متابعة تعليمية</span>
                <h2 className="mt-5 text-2xl font-black sm:text-3xl">تابع رحلة ابنك التعليمية بثقة</h2>
                <p className="mt-3 text-sm leading-7 text-blue-100">راجع مستوى الطالب، وتابع الدروس والمهام، واعرف الكتب والكورسات التي تم تفعيلها أو ما زالت قيد التأكيد.</p>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/10"><UserRound size={48} /></div>
            </div>
          </div>

          <article className="rounded-[28px] border border-white bg-white/90 p-6 shadow-sm shadow-slate-200/40">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#204bf0]"><GraduationCap size={27} /></div>
                <div><p className="text-xs font-bold text-slate-400">الطالب المرتبط بالحساب</p><h2 className="mt-1 text-lg font-black">أحمد محمد</h2><p className="mt-1 text-xs text-slate-400">الصف الثالث الثانوي</p></div>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black text-emerald-700">نشط</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3"><p className="text-[10px] font-bold text-slate-400">الكورسات النشطة</p><p className="mt-1 text-2xl font-black text-[#204bf0]">2</p></div>
              <div className="rounded-2xl bg-slate-50 p-3"><p className="text-[10px] font-bold text-slate-400">متوسط التقييم</p><p className="mt-1 text-2xl font-black text-emerald-600">85%</p></div>
            </div>
            <Link href="/student" className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#204bf0]">فتح لوحة الطالب <ArrowLeft size={14} /></Link>
          </article>
        </section>

        <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-[22px] border border-white bg-white/90 p-4 shadow-sm shadow-slate-200/40 sm:p-5">
              <div className="flex items-center justify-between gap-2"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.tone}`}><stat.icon size={20} /></div><span className="text-xl font-black sm:text-2xl">{stat.value}</span></div>
              <p className="mt-4 text-xs font-black sm:text-sm">{stat.label}</p><p className="mt-1 text-[10px] font-semibold text-slate-400">{stat.note}</p>
            </article>
          ))}
        </section>

        <section className="mb-8 grid items-start gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[26px] border border-white bg-white/90 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div><h2 className="text-lg font-black">المستوى الدراسي</h2><p className="mt-1 text-xs text-slate-400">نظرة سريعة على أداء الطالب في الفروع المختلفة</p></div>
              <span className="rounded-xl bg-blue-50 px-3 py-2 text-[10px] font-black text-blue-700">هذا الأسبوع</span>
            </div>
            <div className="space-y-6">
              {subjects.map((subject) => (
                <div key={subject.name}>
                  <div className="mb-2 flex items-center justify-between gap-3"><span className="text-sm font-black">{subject.name}</span><span className="text-xs font-black text-slate-500">التقييم {subject.score}%</span></div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${subject.color}`} style={{ width: subject.progress + "%" }} /></div>
                  <p className="mt-2 text-[10px] text-slate-400">إنجاز المحتوى: {subject.progress}%</p>
                </div>
              ))}
            </div>
            <Link href="/student" className="mt-7 inline-flex items-center gap-2 text-xs font-black text-[#204bf0]">تفاصيل أداء الطالب <ArrowLeft size={14} /></Link>
          </article>

          <article className="rounded-[26px] border border-white bg-white/90 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
            <div className="mb-6"><h2 className="text-lg font-black">آخر نشاط للطالب</h2><p className="mt-1 text-xs text-slate-400">أحدث ما أنجزه داخل المنصة</p></div>
            <div className="space-y-5">
              {activities.map((activity) => (
                <div key={activity.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#204bf0]"><activity.icon size={18} /></div>
                  <div className="min-w-0 flex-1"><p className="text-xs font-black leading-6">{activity.title}</p><p className="mt-1 text-[10px] text-slate-400">{activity.detail}</p></div>
                  <span className="shrink-0 pt-1 text-[10px] font-bold text-slate-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mb-8 rounded-[26px] border border-white bg-white/90 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div><div className="flex items-center gap-2"><WalletCards className="text-[#204bf0]" size={20} /><h2 className="text-lg font-black">مشتريات الطالب والمحتوى المدفوع</h2></div><p className="mt-1 text-xs text-slate-400">تابع حالة الكتب والكورسات وطلبات التفعيل</p></div>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-500">سجل تجريبي</span>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            {purchases.map((purchase) => (
              <article key={purchase.title} className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:flex-row sm:items-center">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#204bf0] shadow-sm"><purchase.icon size={20} /></div>
                  <div className="min-w-0"><h3 className="text-sm font-black">{purchase.title}</h3><p className="mt-1 text-[11px] text-slate-400">{purchase.type} • {purchase.price}</p></div>
                </div>
                <span className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-black ${purchase.statusTone}`}>{purchase.status === "مفعّل" ? <CheckCircle2 size={13} /> : <Clock3 size={13} />}{purchase.status}</span>
              </article>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
            <div className="flex items-start gap-3"><BookMarked className="mt-0.5 shrink-0 text-[#204bf0]" size={19} /><div><p className="text-sm font-black text-[#173baf]">تصفح الكتب والكورسات المتاحة</p><p className="mt-1 text-xs leading-5 text-slate-500">يمكنك الاطلاع على المحتوى المتاح ومعرفة تفاصيل الشراء.</p></div></div>
            <div className="flex flex-wrap gap-2">
              <Link href="/books" className="rounded-xl bg-white px-4 py-2.5 text-xs font-black text-[#204bf0] shadow-sm">المكتبة</Link>
              <Link href="/courses" className="rounded-xl bg-[#204bf0] px-4 py-2.5 text-xs font-black text-white">الكورسات</Link>
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-2">
          <article className="flex items-start gap-4 rounded-[24px] border border-white bg-white/90 p-5 shadow-sm shadow-slate-200/40">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><MessageCircle size={21} /></div>
            <div className="min-w-0 flex-1"><h2 className="font-black">تواصل مباشر مع المدرس</h2><p className="mt-2 text-xs leading-6 text-slate-500">للاستفسارات عن مستوى الطالب أو المشتريات وتفعيل الكتب والكورسات، تواصل معنا عبر واتساب.</p><a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700">مراسلة واتساب <ExternalLink size={13} /></a></div>
          </article>
          <article className="flex items-start gap-4 rounded-[24px] border border-white bg-white/90 p-5 shadow-sm shadow-slate-200/40">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600"><ShieldCheck size={21} /></div>
            <div><h2 className="font-black">خصوصية حساب الطالب</h2><p className="mt-2 text-xs leading-6 text-slate-500">تظهر تفاصيل الحساب والمشتريات لولي الأمر المرتبط بالطالب فقط بعد تفعيل نظام الحسابات والصلاحيات.</p><span className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold text-violet-700"><ShieldCheck size={14} /> ربط الحسابات قيد التجهيز</span></div>
          </article>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 py-5 text-xs font-semibold text-slate-400">
          <span>© 2026 ثانوية إسكندرية التعليمية</span>
          <Link href="/" className="font-black text-[#204bf0]">العودة للموقع الرئيسي <ArrowLeft className="mr-1 inline" size={14} /></Link>
        </footer>
      </div>
    </main>
  );
}
