import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flame,
  GraduationCap,
  LayoutDashboard,
  Play,
  Sparkles,
  Target,
  Trophy,
  TrendingUp,
  UserRound,
} from "lucide-react";

const courses = [
  {
    title: "اللغة العربية — الصف الثالث الثانوي",
    teacher: "أ/ حسام حسني",
    progress: 68,
    lessons: "17 من 25 درس",
    color: "from-blue-600 to-indigo-700",
    icon: BookOpen,
  },
  {
    title: "النحو والتأسيس",
    teacher: "أ/ حسام حسني",
    progress: 42,
    lessons: "8 من 19 درس",
    color: "from-teal-500 to-emerald-700",
    icon: GraduationCap,
  },
];

const tasks = [
  { title: "اختبار المفعول المطلق", detail: "النحو • 10 أسئلة", time: "اليوم", done: false },
  { title: "مراجعة درس القراءة", detail: "القراءة والنصوص • 20 دقيقة", time: "غدًا", done: false },
  { title: "حل واجب البلاغة", detail: "البلاغة • 5 أسئلة", time: "تم", done: true },
];

const activity = [
  { title: "أنهيت درس «أسلوب الاختصاص»", time: "أمس • 6:30 مساءً", icon: CheckCircle2 },
  { title: "حصلت على 8 من 10 في اختبار النحو", time: "أمس • 5:10 مساءً", icon: Trophy },
  { title: "بدأت كورس النحو والتأسيس", time: "منذ يومين", icon: Play },
];

export default function StudentDashboard() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f4f6fb] text-[#172033]">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -left-40 top-[38%] h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="sticky top-0 hidden h-screen w-[270px] shrink-0 flex-col border-l border-white/70 bg-white/75 px-5 py-7 backdrop-blur-2xl lg:flex">
          <Link href="/" className="flex items-center gap-3 px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4775ff] to-[#1736b7] text-white shadow-lg shadow-blue-200">
              <GraduationCap size={27} />
            </div>
            <div>
              <p className="font-black text-[#142b55]">ثانوية إسكندرية</p>
              <p className="mt-1 text-xs font-bold text-slate-400">بوابة الطالب</p>
            </div>
          </Link>

          <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#204bf0] to-[#5277ff] p-4 text-white shadow-lg shadow-blue-200/70">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-100">
              <Sparkles size={15} /> أهلاً بيك في رحلتك
            </div>
            <p className="mt-3 text-lg font-black">كل يوم خطوة لقدام</p>
            <p className="mt-1 text-xs leading-6 text-blue-100">استمر في التعلم، وخلّي هدفك دايمًا قدامك.</p>
          </div>

          <nav className="mt-8 space-y-2">
            <p className="mb-3 px-3 text-[11px] font-black tracking-wider text-slate-400">القائمة الرئيسية</p>
            <Link href="/student" className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-black text-[#204bf0]">
              <LayoutDashboard size={19} /> الرئيسية
            </Link>
            <Link href="/courses" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50 hover:text-[#204bf0]">
              <BookOpen size={19} /> كورساتي
            </Link>
            <Link href="/student" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50 hover:text-[#204bf0]">
              <Target size={19} /> الاختبارات والواجبات
            </Link>
            <Link href="/student" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50 hover:text-[#204bf0]">
              <Trophy size={19} /> إنجازاتي
            </Link>
            <Link href="/student" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50 hover:text-[#204bf0]">
              <CalendarDays size={19} /> الجدول الدراسي
            </Link>
          </nav>

          <div className="mt-auto rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
            <div className="flex items-center gap-2 text-sm font-black text-[#204bf0]">
              <UserRound size={17} /> محتاج مساعدة؟
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-500">لو عندك أي استفسار، تواصل مع إدارة المنصة.</p>
            <Link href="/#contact" className="mt-3 inline-flex items-center gap-2 text-xs font-black text-[#204bf0]">
              تواصل معانا <ArrowLeft size={14} />
            </Link>
          </div>
        </aside>

        <section className="min-w-0 flex-1 px-4 py-5 sm:px-7 lg:px-10 lg:py-8">
          <header className="mb-8 flex items-center justify-between gap-3 rounded-[24px] border border-white/80 bg-white/75 px-4 py-3 shadow-sm shadow-slate-200/40 backdrop-blur-xl sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <Link href="/" aria-label="العودة للرئيسية" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#204bf0] lg:hidden">
                <GraduationCap size={23} />
              </Link>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-slate-400">الأحد، 22 نوفمبر 2026</p>\n                <span className="mt-1 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-black text-amber-700">نسخة تجريبية • بيانات للعرض فقط</span>
                <h1 className="mt-1 truncate text-lg font-black sm:text-2xl">صباح التفوق يا بطل 👋</h1>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div aria-label="الإشعارات" className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500">
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>
              <div className="hidden items-center gap-3 border-r border-slate-100 pr-3 sm:flex">
                <div className="text-left">
                  <p className="text-sm font-black">أحمد محمد</p>
                  <p className="mt-1 text-[11px] font-bold text-slate-400">الصف الثالث الثانوي</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 font-black text-white">أ</div>
              </div>
            </div>
          </header>

          <div className="mb-7 grid gap-5 xl:grid-cols-[1.55fr_1fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#173bcf] via-[#2855ed] to-[#6384ff] p-6 text-white shadow-xl shadow-blue-200/60 sm:p-8">
              <div className="absolute -left-12 -top-20 h-64 w-64 rounded-full border-[34px] border-white/10" />
              <div className="absolute -bottom-28 right-1/3 h-64 w-64 rounded-full border-[30px] border-white/10" />
              <div className="relative max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] font-bold text-blue-50">
                  <Flame size={14} className="text-amber-300" /> حافظ على حماسك
                </span>
                <h2 className="mt-5 text-2xl font-black leading-relaxed sm:text-3xl">أنت أقرب لهدفك مما تتخيل!</h2>
                <p className="mt-2 max-w-lg text-sm leading-7 text-blue-100">كمّل دروسك وحل تدريباتك. الاستمرار البسيط كل يوم بيصنع فرق كبير في نتيجتك.</p>
                <Link href="/courses" className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#204bf0] shadow-lg transition hover:-translate-y-0.5">
                  كمّل مذاكرتك <ArrowLeft size={17} />
                </Link>
              </div>
              <div className="absolute bottom-7 left-8 hidden h-28 w-28 items-center justify-center rounded-[30px] border border-white/20 bg-white/10 text-white/90 backdrop-blur sm:flex">
                <GraduationCap size={65} strokeWidth={1.3} />
              </div>
            </div>

            <div className="rounded-[28px] border border-white bg-white/85 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black">هدف الأسبوع</p>
                  <p className="mt-1 text-xs text-slate-400">إنجاز 5 دروس جديدة</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Target size={22} />
                </div>
              </div>
              <div className="mt-7 flex items-end justify-between">
                <p className="text-3xl font-black tabular-nums text-[#204bf0]">3 <span className="text-base font-bold text-slate-400">/ 5</span></p>
                <p className="text-xs font-black text-emerald-600">60% مكتمل</p>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-3/5 rounded-full bg-gradient-to-l from-emerald-400 to-teal-500" />
              </div>
              <p className="mt-4 text-xs leading-6 text-slate-400">فاضلك درسين وتحقق هدف الأسبوع. أنت قدها!</p>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { label: "الكورسات المشترك فيها", value: "2", note: "كورسات نشطة", icon: BookOpen, color: "bg-blue-50 text-blue-600" },
              { label: "الدروس المكتملة", value: "25", note: "درس تم إنجازه", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-600" },
              { label: "متوسط الدرجات", value: "86%", note: "أداء ممتاز", icon: TrendingUp, color: "bg-violet-50 text-violet-600" },
              { label: "أيام الاستمرار", value: "7", note: "أيام مذاكرة متتالية", icon: Flame, color: "bg-amber-50 text-amber-600" },
            ].map((stat) => (
              <article key={stat.label} className="rounded-[22px] border border-white bg-white/85 p-4 shadow-sm shadow-slate-200/40 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                  <span className="text-2xl font-black tabular-nums sm:text-3xl">{stat.value}</span>
                </div>
                <p className="mt-4 text-xs font-black leading-5 sm:text-sm">{stat.label}</p>
                <p className="mt-1 text-[10px] font-semibold text-slate-400 sm:text-xs">{stat.note}</p>
              </article>
            ))}
          </div>

          <div className="grid items-start gap-6 xl:grid-cols-[1.45fr_1fr]">
            <section className="rounded-[26px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-black">كمّل من حيث توقفت</h2>
                  <p className="mt-1 text-xs text-slate-400">كورساتك وتقدمك التعليمي</p>
                </div>
                <Link href="/courses" className="shrink-0 text-xs font-black text-[#204bf0]">كل الكورسات</Link>
              </div>
              <div className="space-y-4">
                {courses.map((course) => (
                  <article key={course.title} className="rounded-2xl border border-slate-100 p-4 transition hover:border-blue-100 hover:shadow-md hover:shadow-blue-50 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-white`}>
                        <course.icon size={23} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-black leading-6">{course.title}</h3>
                        <p className="mt-1 text-xs text-slate-400">{course.teacher} • {course.lessons}</p>
                      </div>
                      <span className="text-sm font-black tabular-nums text-[#204bf0]">{course.progress}%</span>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-gradient-to-l from-blue-500 to-indigo-600" style={{ width: `${course.progress}%` }} />
                    </div>
                    <Link href="/courses" className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#204bf0]">
                      <Play size={14} /> استكمل التعلم
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <div className="space-y-6">
              <section className="rounded-[26px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black">المهام القادمة</h2>
                    <p className="mt-1 text-xs text-slate-400">نظّم وقتك وخلّص المطلوب</p>
                  </div>
                  <CalendarDays size={21} className="text-[#204bf0]" />
                </div>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.title} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${task.done ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
                        {task.done ? <CheckCircle2 size={17} /> : <Clock3 size={17} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`text-xs font-black leading-5 ${task.done ? "text-slate-400 line-through" : "text-slate-700"}`}>{task.title}</p>
                        <p className="mt-1 text-[10px] text-slate-400">{task.detail}</p>
                      </div>
                      <span className="shrink-0 text-[10px] font-bold text-slate-400">{task.time}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[26px] border border-white bg-white/85 p-5 shadow-sm shadow-slate-200/40 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-lg font-black">آخر نشاط</h2>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-600">مستمر</span>
                </div>
                <div className="space-y-4">
                  {activity.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#204bf0]">
                        <item.icon size={17} />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-5">{item.title}</p>
                        <p className="mt-1 text-[10px] text-slate-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 py-5 text-[11px] font-semibold text-slate-400">
            <span>© 2026 ثانوية إسكندرية التعليمية</span>
            <Link href="/" className="transition hover:text-[#204bf0]">العودة للموقع الرئيسي</Link>
          </footer>
        </section>
      </div>
    </main>
  );
}
