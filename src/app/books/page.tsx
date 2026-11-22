"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Bookmark,
  FileText,
  GraduationCap,
  Library,
  Search,
  Sparkles,
  Download,
  Filter,
  Home,
  NotebookPen,
} from "lucide-react";

type LibraryItem = {
  id: number;
  title: string;
  subject: string;
  type: "مذكرة" | "ملخص" | "مراجعة" | "كتاب";
  grade: string;
  description: string;
  color: string;
  icon: typeof BookOpen;
};

const libraryItems: LibraryItem[] = [
  {
    id: 1,
    title: "مذكرة النحو الشاملة",
    subject: "النحو",
    type: "مذكرة",
    grade: "الثالث الثانوي",
    description: "شرح القواعد النحوية مع أمثلة وتدريبات متنوعة",
    color: "from-blue-600 to-indigo-700",
    icon: NotebookPen,
  },
  {
    id: 2,
    title: "ملخص الأدب والنصوص",
    subject: "الأدب والنصوص",
    type: "ملخص",
    grade: "الثالث الثانوي",
    description: "أهم النقاط والأفكار في ورقات منظمة للمراجعة",
    color: "from-violet-500 to-purple-700",
    icon: BookMarked,
  },
  {
    id: 3,
    title: "مراجعة البلاغة النهائية",
    subject: "البلاغة",
    type: "مراجعة",
    grade: "الثالث الثانوي",
    description: "مراجعة مركزة لأهم أبواب البلاغة والتطبيق عليها",
    color: "from-amber-500 to-orange-600",
    icon: FileText,
  },
  {
    id: 4,
    title: "كتاب القراءة المتحررة",
    subject: "القراءة",
    type: "كتاب",
    grade: "الثالث الثانوي",
    description: "تدريبات على الفهم والتحليل واستخراج الأفكار",
    color: "from-teal-500 to-emerald-700",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "تأسيس النحو من الصفر",
    subject: "النحو",
    type: "مذكرة",
    grade: "جميع المراحل",
    description: "مراجعة الأساسيات خطوة بخطوة قبل دراسة المنهج",
    color: "from-cyan-500 to-blue-700",
    icon: NotebookPen,
  },
  {
    id: 6,
    title: "مراجعة ليلة الامتحان",
    subject: "اللغة العربية",
    type: "مراجعة",
    grade: "الثالث الثانوي",
    description: "خريطة سريعة لأهم فروع المادة قبل الامتحان",
    color: "from-rose-500 to-pink-700",
    icon: FileText,
  },
];

const filters = ["الكل", "مذكرات", "كتب", "ملخصات", "مراجعات"];

export default function BooksPage() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return libraryItems.filter((item) => {
      const matchesFilter =
        activeFilter === "الكل" ||
        (activeFilter === "مذكرات" && item.type === "مذكرة") ||
        (activeFilter === "كتب" && item.type === "كتاب") ||
        (activeFilter === "ملخصات" && item.type === "ملخص") ||
        (activeFilter === "مراجعات" && item.type === "مراجعة");
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        [item.title, item.subject, item.type, item.grade, item.description]
          .join(" ")
          .toLowerCase()
          .includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f4f6fb] text-[#172033]">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -left-40 top-[45%] h-96 w-96 rounded-full bg-teal-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-[1500px] px-4 py-5 sm:px-7 lg:px-10 lg:py-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[26px] border border-white/80 bg-white/75 px-5 py-4 shadow-sm shadow-slate-200/50 backdrop-blur-2xl">
          <Link href="/student" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4775ff] to-[#1736b7] text-white shadow-lg shadow-blue-200">
              <GraduationCap size={27} />
            </div>
            <div>
              <p className="font-black text-[#142b55]">ثانوية إسكندرية</p>
              <p className="mt-1 text-xs font-bold text-slate-400">المكتبة التعليمية</p>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-bold">
            <Link href="/" className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-blue-50 hover:text-[#204bf0]">
              <Home className="ml-1 inline" size={16} /> الرئيسية
            </Link>
            <Link href="/student" className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-blue-50 hover:text-[#204bf0]">
              لوحة الطالب
            </Link>
            <Link href="/books" className="rounded-xl bg-blue-50 px-3 py-2 font-black text-[#204bf0]">
              الكتب والمذكرات
            </Link>
          </nav>
        </header>

        <section className="relative mb-8 overflow-hidden rounded-[30px] bg-gradient-to-br from-[#173bcf] via-[#2855ed] to-[#6384ff] p-6 text-white shadow-xl shadow-blue-200/60 sm:p-9">
          <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full border-[38px] border-white/10" />
          <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full border-[34px] border-white/10" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-blue-50">
              <Sparkles size={15} /> كل مصادر مذاكرتك في مكان واحد
            </span>
            <h1 className="mt-5 text-3xl font-black leading-relaxed sm:text-4xl">مكتبة الكتب والمذكرات</h1>
            <p className="mt-3 max-w-xl text-sm leading-8 text-blue-100 sm:text-base">
              هتلاقي هنا المذكرات والملخصات والكتب والمراجعات اللي تساعدك تذاكر وتنظم وقتك.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold">
              <span className="rounded-xl bg-white/15 px-4 py-2">مذكرات منظمة</span>
              <span className="rounded-xl bg-white/15 px-4 py-2">ملخصات سريعة</span>
              <span className="rounded-xl bg-white/15 px-4 py-2">مراجعات شاملة</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-10 hidden h-28 w-28 items-center justify-center rounded-[30px] border border-white/20 bg-white/10 text-white/90 backdrop-blur sm:flex">
            <Library size={62} strokeWidth={1.3} />
          </div>
        </section>

        <section className="mb-7 grid gap-4 sm:grid-cols-3">
          {[
            { label: "المذكرات", value: "شرح وتدريبات", icon: NotebookPen, tone: "bg-blue-50 text-blue-600" },
            { label: "الكتب", value: "مصادر إضافية", icon: BookOpen, tone: "bg-violet-50 text-violet-600" },
            { label: "المراجعات", value: "استعد لامتحانك", icon: Bookmark, tone: "bg-amber-50 text-amber-600" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-[22px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}>
                <item.icon size={22} />
              </div>
              <div>
                <p className="font-black">{item.label}</p>
                <p className="mt-1 text-xs text-slate-400">{item.value}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-[28px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40 backdrop-blur-xl sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-xl font-black sm:text-2xl">تصفح المكتبة</h2>
              <p className="mt-2 text-sm text-slate-400">ابحث باسم الكتاب أو المادة، واختار نوع المحتوى.</p>
            </div>
            <label className="relative block w-full lg:max-w-sm">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ابحث عن كتاب أو مذكرة..."
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-11 pl-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />
            </label>
          </div>

          <div className="mb-7 flex flex-wrap items-center gap-2">
            <span className="ml-1 inline-flex items-center gap-2 text-xs font-black text-slate-400">
              <Filter size={15} /> تصنيف:
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-4 py-2.5 text-xs font-black transition ${activeFilter === filter ? "bg-[#204bf0] text-white shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-[#204bf0]"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <article key={item.id} className="group overflow-hidden rounded-[23px] border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50">
                  <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${item.color}`}>
                    <div className="absolute -left-8 -top-12 h-36 w-36 rounded-full border-[20px] border-white/10" />
                    <div className="absolute -bottom-16 right-1/3 h-36 w-36 rounded-full border-[18px] border-white/10" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-[25px] border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur">
                      <item.icon size={38} strokeWidth={1.6} />
                    </div>
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black text-slate-700">{item.type}</span>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-400">
                      <span>{item.subject}</span><span>•</span><span>{item.grade}</span>
                    </div>
                    <h3 className="text-base font-black leading-7">{item.title}</h3>
                    <p className="mt-2 min-h-12 text-xs leading-6 text-slate-400">{item.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <span className="text-[10px] font-bold text-amber-600">الملف سيُضاف قريبًا</span>
                      <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-[11px] font-black text-slate-400" title="سيتم تفعيل التحميل عند إضافة ملفات الكتب">
                        <Download size={14} /> تحميل
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
              <Search className="mx-auto text-slate-300" size={32} />
              <p className="mt-4 font-black">مش لاقيين نتيجة للبحث ده</p>
              <p className="mt-2 text-xs text-slate-400">جرّب كلمة تانية أو اختار تصنيف مختلف.</p>
              <button type="button" onClick={() => { setSearch(""); setActiveFilter("الكل"); }} className="mt-5 rounded-xl bg-blue-50 px-4 py-2.5 text-xs font-black text-[#204bf0]">
                عرض كل المكتبة
              </button>
            </div>
          )}
        </section>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 py-5 text-xs font-semibold text-slate-400">
          <span>© 2026 ثانوية إسكندرية التعليمية</span>
          <Link href="/student" className="font-black text-[#204bf0]">العودة إلى لوحة الطالب <ArrowRight className="mr-1 inline" size={14} /></Link>
        </footer>
      </div>
    </main>
  );
}
