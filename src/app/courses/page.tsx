"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  PlayCircle,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const courses = [
  {
    id: "arabic",
    title: "اللغة العربية — الصف الثالث الثانوي",
    category: "الثانوية العامة",
    level: "الصف الثالث الثانوي",
    lessons: 24,
    duration: "18 ساعة",
    description: "شرح فروع اللغة العربية بالكامل مع تدريبات تطبيقية وأسئلة على نظام الامتحان.",
    topics: ["النحو", "الأدب والنصوص", "البلاغة", "القراءة"],
    color: "from-blue-600 to-indigo-700",
    progress: 68,
    featured: true,
  },
  {
    id: "grammar",
    title: "النحو والتأسيس",
    category: "التأسيس",
    level: "جميع المراحل",
    lessons: 18,
    duration: "12 ساعة",
    description: "ابدأ من الأساسيات وافهم قواعد النحو خطوة بخطوة مع أمثلة وتدريبات.",
    topics: ["الكلمة والجملة", "الإعراب", "أنواع الجمل", "التطبيق"],
    color: "from-teal-500 to-emerald-700",
    progress: 42,
    featured: false,
  },
  {
    id: "revision",
    title: "المراجعة النهائية",
    category: "مراجعات",
    level: "الثانوية العامة",
    lessons: 12,
    duration: "9 ساعات",
    description: "مراجعة مركزة لأهم أجزاء المنهج وحل نماذج تدريبية قبل الامتحان.",
    topics: ["مراجعة شاملة", "تدريبات", "نماذج امتحانات"],
    color: "from-amber-500 to-orange-600",
    progress: 0,
    featured: true,
  },
  {
    id: "reading",
    title: "القراءة المتحررة",
    category: "مهارات",
    level: "المرحلة الثانوية",
    lessons: 10,
    duration: "7 ساعات",
    description: "طوّر مهارة الفهم والاستنتاج والتعامل مع النصوص الجديدة بثقة.",
    topics: ["الفهم", "المفردات", "الاستنتاج", "التدريب"],
    color: "from-violet-500 to-purple-700",
    progress: 0,
    featured: false,
  },
];

const categories = ["الكل", "الثانوية العامة", "التأسيس", "مراجعات", "مهارات"];

export default function CoursesPage() {
  const [category, setCategory] = useState("الكل");
  const [search, setSearch] = useState("");

  const visibleCourses = useMemo(() => {
    const query = search.trim().toLowerCase();
    return courses.filter((course) => {
      const categoryMatch = category === "الكل" || course.category === category;
      const text = [course.title, course.description, course.level, ...course.topics].join(" ").toLowerCase();
      return categoryMatch && (!query || text.includes(query));
    });
  }, [category, search]);

  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f6fb] text-[#172033]">
      <div className="mx-auto max-w-[1450px] px-4 py-5 sm:px-7 lg:px-10 lg:py-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[26px] border border-white/80 bg-white/80 px-5 py-4 shadow-sm shadow-slate-200/50 backdrop-blur-2xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4775ff] to-[#1736b7] text-white shadow-lg shadow-blue-200">
              <GraduationCap size={27} />
            </div>
            <div>
              <p className="font-black text-[#142b55]">ثانوية إسكندرية</p>
              <p className="mt-1 text-xs font-bold text-slate-400">الكورسات التعليمية</p>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-bold">
            <Link href="/" className="rounded-xl px-3 py-2 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]">الرئيسية</Link>
            <Link href="/student" className="rounded-xl px-3 py-2 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]">لوحة الطالب</Link>
            <Link href="/books" className="rounded-xl px-3 py-2 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]">الكتب والمذكرات</Link>
          </nav>
        </header>

        <section className="relative mb-8 overflow-hidden rounded-[30px] bg-gradient-to-br from-[#173bcf] via-[#2855ed] to-[#6384ff] p-7 text-white shadow-xl shadow-blue-200/60 sm:p-10">
          <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full border-[38px] border-white/10" />
          <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full border-[34px] border-white/10" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-blue-50">
              <Sparkles size={15} /> تعلم على خطتك وبالسرعة المناسبة ليك
            </span>
            <h1 className="mt-5 text-3xl font-black leading-relaxed sm:text-4xl">الكورسات التعليمية</h1>
            <p className="mt-3 text-sm leading-8 text-blue-100 sm:text-base">
              اختار الكورس المناسب ليك، تابع تقدمك، وارجع لدروسك في أي وقت. كل خطوة صغيرة بتقربك من التفوق.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold">
              <span className="rounded-xl bg-white/15 px-4 py-2">شرح منظم</span>
              <span className="rounded-xl bg-white/15 px-4 py-2">تدريبات عملية</span>
              <span className="rounded-xl bg-white/15 px-4 py-2">متابعة التقدم</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-10 hidden h-28 w-28 items-center justify-center rounded-[30px] border border-white/20 bg-white/10 text-white/90 backdrop-blur sm:flex">
            <BookOpen size={62} strokeWidth={1.3} />
          </div>
        </section>

        <section className="mb-7 grid gap-4 sm:grid-cols-3">
          {[
            { label: "محتوى متدرج", note: "من التأسيس للاحتراف", icon: BookOpen },
            { label: "تقدم واضح", note: "تابع وصلت لفين", icon: Target },
            { label: "تعلم مستمر", note: "ارجع لدروسك وقت ما تحب", icon: Users },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-[22px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#204bf0]"><item.icon size={22} /></div>
              <div><p className="font-black">{item.label}</p><p className="mt-1 text-xs text-slate-400">{item.note}</p></div>
            </div>
          ))}
        </section>

        <section className="rounded-[28px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40 backdrop-blur-xl sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-xl font-black sm:text-2xl">اكتشف الكورسات</h2>
              <p className="mt-2 text-sm text-slate-400">ابحث عن موضوع أو اختار التصنيف المناسب.</p>
            </div>
            <label className="relative block w-full lg:max-w-sm">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ابحث عن كورس أو موضوع..." className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-11 pl-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50" />
            </label>
          </div>

          <div className="mb-7 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-xl px-4 py-2.5 text-xs font-black transition ${category === item ? "bg-[#204bf0] text-white shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]"}`}>
                {item}
              </button>
            ))}
          </div>

          {visibleCourses.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleCourses.map((course) => (
                <article key={course.id} className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50">
                  <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${course.color}`}>
                    <div className="absolute -left-8 -top-12 h-36 w-36 rounded-full border-[20px] border-white/10" />
                    <div className="absolute -bottom-16 right-1/3 h-36 w-36 rounded-full border-[18px] border-white/10" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-[25px] border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur"><BookOpen size={38} strokeWidth={1.6} /></div>
                    {course.featured && <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black text-blue-700">كورس مميز</span>}
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-400"><span>{course.level}</span><span>•</span><span>{course.lessons} درس</span><span>•</span><span>{course.duration}</span></div>
                    <h3 className="mt-3 text-base font-black leading-7">{course.title}</h3>
                    <p className="mt-2 min-h-[72px] text-xs leading-6 text-slate-400">{course.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {course.topics.map((topic) => <span key={topic} className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-500">{topic}</span>)}
                    </div>
                    {course.progress > 0 && (
                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-[10px] font-black"><span className="text-slate-400">تقدمك في الكورس</span><span className="text-blue-600">{course.progress}%</span></div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-l from-blue-500 to-indigo-600" style={{ width: course.progress + "%" }} /></div>
                      </div>
                    )}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-[10px] font-bold text-slate-400">أ/ حسام حسني</span>
                      <Link href="/student" className="inline-flex items-center gap-2 rounded-xl bg-[#204bf0] px-3.5 py-2.5 text-[11px] font-black text-white transition hover:bg-blue-700">
                        <PlayCircle size={15} /> {course.progress > 0 ? "استكمل الكورس" : "عرض الكورس"} <ArrowLeft size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
              <Search className="mx-auto text-slate-300" size={32} />
              <p className="mt-4 font-black">مش لاقيين كورس بالمواصفات دي</p>
              <p className="mt-2 text-xs text-slate-400">جرّب بحث مختلف أو ارجع لكل التصنيفات.</p>
              <button type="button" onClick={() => { setSearch(""); setCategory("الكل"); }} className="mt-5 rounded-xl bg-blue-50 px-4 py-2.5 text-xs font-black text-[#204bf0]">عرض كل الكورسات</button>
            </div>
          )}
        </section>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 py-5 text-xs font-semibold text-slate-400">
          <span>© 2026 ثانوية إسكندرية التعليمية</span>
          <Link href="/student" className="font-black text-[#204bf0]">العودة إلى لوحة الطالب <ArrowLeft className="mr-1 inline" size={14} /></Link>
        </footer>
      </div>
    </main>
  );
}
