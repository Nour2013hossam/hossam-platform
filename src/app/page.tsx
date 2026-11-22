
"use client";

import { usePathname } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpLeft,
  BookOpen,
  GraduationCap,
  Trophy,
  Users,
  Play,
  CheckCircle2,
  Star,
  Clock3,
  Headphones,
  Sparkles,
  BookMarked,
  Target,
  Menu,
} from "lucide-react";

const courses = [
  {
    title: "اللغة العربية",
    level: "المرحلة الثانوية",
    lessons: "24 درس",
    color: "from-blue-600 to-indigo-700",
    icon: BookOpen,
    tag: "الأكثر طلبًا",
  },
  {
    title: "النحو والتأسيس",
    level: "جميع المراحل",
    lessons: "18 درس",
    color: "from-teal-500 to-emerald-700",
    icon: BookMarked,
    tag: "ابدأ من هنا",
  },
  {
    title: "المراجعة النهائية",
    level: "الثانوية العامة",
    lessons: "12 درس",
    color: "from-amber-400 to-orange-600",
    icon: GraduationCap,
    tag: "مراجعة شاملة",
  },
];

const features = [
  {
    icon: Play,
    title: "شرح تفاعلي",
    description: "دروس فيديو منظمة تساعدك تفهم المعلومة وتثبتها بسهولة.",
  },
  {
    icon: Target,
    title: "اختبارات ذكية",
    description: "اختبر مستواك واكتشف نقاط قوتك والجوانب التي تحتاج تطويرًا.",
  },
  {
    icon: Trophy,
    title: "نظام إنجازات",
    description: "اجمع النقاط وحقق الإنجازات وتحدى نفسك كل يوم.",
  },
  {
    icon: Headphones,
    title: "متابعة مستمرة",
    description: "متابعة تعليمية تساعدك تلتزم وتوصل لهدفك.",
  },
];

export default function Home() {
  const pathname = usePathname();

  // تحديد الصفحة الحالية تلقائيًا
  const activePage = {
    home: pathname === "/",
    courses:
      pathname === "/courses" || pathname.startsWith("/courses/"),
    books: pathname === "/books" || pathname.startsWith("/books/"),
    teacher: pathname === "/teacher",
    contact: pathname === "/contact",
    student:
      pathname === "/student" || pathname.startsWith("/student/"),
    parent:
      pathname === "/parent" || pathname.startsWith("/parent/"),
    admin:
      pathname === "/admin" || pathname.startsWith("/admin/"),
  };

  // تصميم الزر النشط وغير النشط
  const navClass = (active: boolean) =>
    `rounded-xl px-4 py-2.5 text-sm transition-all duration-300 ${
      active
        ? "bg-white/90 font-black text-[#204bf0] shadow-md shadow-blue-900/10"
        : "font-bold text-slate-600 hover:bg-white/60 hover:text-[#204bf0]"
    }`;

  // روابط أقسام الرئيسية
  const sectionLink = (section: string) =>
    pathname === "/" ? `#${section}` : `/#${section}`;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f6f7] text-[#172033]">

      {/* Liquid Glass Navbar */}
      <header className="fixed top-3 inset-x-0 z-50 mx-auto w-[calc(100%-24px)] max-w-[1380px]">

        <div className="relative isolate rounded-[28px] border border-white/60 bg-white/45 shadow-[0_8px_40px_rgba(30,64,175,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500">

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
            <div className="absolute -top-20 right-1/4 h-32 w-72 rounded-full bg-blue-300/15 blur-3xl" />
            <div className="absolute -top-12 left-10 h-28 w-48 rounded-full bg-cyan-200/20 blur-3xl" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          <div className="relative flex min-h-[76px] items-center justify-between gap-3 px-3 sm:px-5 lg:px-7">

            {/* Logo */}
            <a href="/" className="group flex shrink-0 items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[17px] bg-gradient-to-br from-[#4775ff] via-[#2855ed] to-[#1736b7] text-white shadow-[0_7px_20px_rgba(32,75,240,0.3)] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                <GraduationCap size={27} strokeWidth={2.2} />
              </div>

              <div className="leading-tight">
                <h1 className="whitespace-nowrap text-base font-black tracking-tight text-[#142b55] sm:text-xl">
                  ثانوية إسكندرية
                </h1>
                <p className="mt-1 text-[10px] font-bold tracking-wide text-slate-500 sm:text-xs">
                  أ/حسام حسني
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-2xl border border-white/70 bg-white/30 p-1.5 shadow-[inset_0_1px_4px_rgba(255,255,255,0.8)] lg:flex">

              <a
                href="/"
                className={navClass(activePage.home)}
                aria-current={activePage.home ? "page" : undefined}
              >
                الرئيسية
              </a>

              <a
                href={sectionLink("courses")}
                className={navClass(activePage.courses)}
                aria-current={activePage.courses ? "page" : undefined}
              >
                الكورسات
              </a>

              <a
                href="/books"
                className={navClass(activePage.books)}
                aria-current={activePage.books ? "page" : undefined}
              >
                الكتب
              </a>

              <a
                href={sectionLink("features")}
                className={navClass(false)}
              >
                المميزات
              </a>

              <a
                href="/teacher"
                className={navClass(activePage.teacher)}
                aria-current={activePage.teacher ? "page" : undefined}
              >
                عن المدرس
              </a>

              <a
                href="/contact"
                className={navClass(activePage.contact)}
                aria-current={activePage.contact ? "page" : undefined}
              >
                تواصل معنا
              </a>

            </nav>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">

              <a
                href="/login"
                className="hidden rounded-xl px-3 py-3 text-sm font-extrabold text-slate-600 transition hover:bg-white/60 hover:text-[#204bf0] sm:block"
              >
                تسجيل الدخول
              </a>

              <a
                href="/register"
                className="flex items-center gap-2 rounded-[15px] bg-gradient-to-br from-[#3564ff] to-[#173bd0] px-4 py-3 text-xs font-black text-white shadow-[0_6px_20px_rgba(32,75,240,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(32,75,240,0.38)] sm:px-5 sm:text-sm"
              >
                ابدأ الآن <ArrowLeft size={16} />
              </a>

              {/* Mobile Menu */}
              <details className="group relative lg:hidden">

                <summary
                  aria-label="القائمة"
                  className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[14px] border border-white/80 bg-white/50 text-[#142b55] shadow-sm backdrop-blur-xl [&::-webkit-details-marker]:hidden"
                >
                  <Menu size={22} className="group-open:hidden" />
                  <span className="hidden text-2xl leading-none group-open:block">
                    ×
                  </span>
                </summary>

                <div className="absolute left-0 top-[calc(100%+14px)] z-50 w-[min(88vw,320px)] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-2xl backdrop-blur-2xl">

                  <nav className="flex flex-col gap-1">

                    <a
                      href="/"
                      className={navClass(activePage.home)}
                    >
                      الرئيسية
                    </a>

                    <a
                      href={sectionLink("courses")}
                      className={navClass(activePage.courses)}
                    >
                      الكورسات
                    </a>

                    <a
                      href="/books"
                      className={navClass(activePage.books)}
                    >
                      الكتب والمذكرات
                    </a>

                    <a
                      href={sectionLink("features")}
                      className={navClass(false)}
                    >
                      مميزات المنصة
                    </a>

                    <a
                      href="/teacher"
                      className={navClass(activePage.teacher)}
                    >
                      عن المدرس
                    </a>

                    <a
                      href="/contact"
                      className={navClass(activePage.contact)}
                    >
                      تواصل معنا
                    </a>

                    <a
                      href="/login"
                      className="mt-2 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700 sm:hidden"
                    >
                      تسجيل الدخول
                    </a>

                  </nav>
                </div>
              </details>

            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">

        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -left-40 top-32 h-[400px] w-[400px] rounded-full bg-[#97d1cc]/30 blur-3xl" />

        <div className="container relative grid min-h-[640px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-[#204bf0] shadow-sm">
              <Sparkles size={16} />
              مستقبلك يبدأ بخطوة
            </div>

            <h2 className="max-w-2xl text-4xl font-black leading-[1.45] tracking-tight sm:text-5xl lg:text-[58px]">
              اتعلم بذكاء،
              <span className="block text-[#204bf0]">
                واتفوق بثقة!
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-9 text-gray-500 sm:text-lg">
              رحلتك في تعلم اللغة العربية هتكون أسهل وأمتع. شرح مبسط، تدريبات
              تفاعلية، اختبارات ومتابعة مستمرة علشان تحقق أفضل نتيجة.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">

              <a
                href="/register"
                className="flex items-center gap-3 rounded-2xl bg-[#204bf0] px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                ابدأ رحلتك التعليمية <ArrowLeft size={19} />
              </a>

              <a
                href="#courses"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-6 py-4 font-bold text-gray-700 transition hover:border-blue-200 hover:text-[#204bf0]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#204bf0]">
                  <Play size={15} fill="currentColor" />
                </span>
                اكتشف الكورسات
              </a>

            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-gray-200 pt-7">

              <div className="flex -space-x-3 space-x-reverse">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-black text-blue-700">ط</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-sm font-black text-emerald-700">م</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-sm font-black text-amber-700">س</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-sm font-black text-indigo-700">+</div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-bold text-gray-500">
                  رحلة تعليمية تستحق التجربة
                </p>
              </div>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-[530px]">

            <div className="absolute -right-5 top-12 h-28 w-28 rounded-[30px] bg-[#fcb937] opacity-80 blur-[1px]" />
            <div className="absolute -bottom-5 -left-4 h-32 w-32 rounded-full bg-[#97d1cc]" />

            <div className="relative rounded-[36px] border border-white/80 bg-white p-4 shadow-2xl shadow-blue-100/80 sm:p-6">

              <div className="rounded-[28px] bg-gradient-to-br from-[#204bf0] to-[#5277ff] p-7 text-white sm:p-9">

                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
                    رحلتك نحو التفوق
                  </span>
                  <Sparkles size={23} className="text-[#fcb937]" />
                </div>

                <div className="py-12 text-center">

                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[36px] border border-white/20 bg-white/10 shadow-inner">
                    <GraduationCap size={76} strokeWidth={1.3} className="text-white" />
                  </div>

                  <h3 className="mt-7 text-3xl font-black">
                    مستقبلك يستاهل!
                  </h3>

                  <p className="mt-3 text-sm text-blue-100">
                    ابدأ التعلم، وخلّي النجاح هدفك
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="font-bold">خطوة جديدة نحو النجاح</span>
                    <span className="text-[#fcb937]">100%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-3/4 rounded-full bg-[#fcb937]" />
                  </div>

                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">

                <div className="flex items-center gap-3 rounded-2xl bg-[#f4f6f7] p-3">
                  <div className="rounded-xl bg-blue-100 p-2 text-[#204bf0]">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">تعلم مستمر</p>
                    <p className="text-sm font-black">دروس منظمة</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#f4f6f7] p-3">
                  <div className="rounded-xl bg-amber-100 p-2 text-amber-600">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">حقق هدفك</p>
                    <p className="text-sm font-black">إنجازات يومية</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:flex">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
                <Trophy size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-400">هدفك</p>
                <p className="text-sm font-black">النجاح والتفوق</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container relative z-10 -mt-2 pb-16">

        <div className="grid grid-cols-2 gap-4 rounded-[28px] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/40 md:grid-cols-4 md:p-8">

          {[
            { number: "تعلم", label: "في أي وقت ومن أي مكان", icon: BookOpen },
            { number: "تدريب", label: "اختبارات وتقييم مستمر", icon: Target },
            { number: "متابعة", label: "خطواتك التعليمية أولًا بأول", icon: Users },
            { number: "تفوق", label: "إنجازات تحفزك للأفضل", icon: Trophy },
          ].map((stat) => (

            <div
              key={stat.number}
              className="flex items-center gap-4 border-gray-100 px-2 md:border-l md:px-5 last:border-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#204bf0]">
                <stat.icon size={23} />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#204bf0]">
                  {stat.number}
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-400">
                  {stat.label}
                </p>
              </div>
            </div>

          ))}

        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-white py-20">

        <div className="container">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">

            <div>
              <span className="text-sm font-extrabold text-[#204bf0]">
                اختار طريقك
              </span>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                ابدأ بكورساتنا المميزة
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                محتوى تعليمي متكامل معمول علشان يساعدك تتقدم خطوة بخطوة.
              </p>
            </div>

            <a
              href="/courses"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold transition hover:border-[#204bf0] hover:text-[#204bf0]"
            >
              كل الكورسات <ArrowUpLeft size={17} />
            </a>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {courses.map((course) => (

              <article
                key={course.title}
                className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/70"
              >

                <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${course.color}`}>

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[25px] border-white/10" />
                  <div className="absolute -bottom-16 -left-8 h-48 w-48 rounded-full border-[30px] border-white/10" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/15 text-white backdrop-blur-sm transition duration-300 group-hover:scale-110">
                    <course.icon size={48} strokeWidth={1.5} />
                  </div>

                  <span className="absolute right-5 top-5 rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                    {course.tag}
                  </span>

                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                    <span>{course.level}</span>
                    <span className="flex items-center gap-1">
                      <Clock3 size={14} /> {course.lessons}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-black">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    شرح مبسط وتدريبات متنوعة ومتابعة لمستواك التعليمي.
                  </p>

                  <a
                    href="/courses"
                    className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-extrabold text-[#204bf0]"
                  >
                    اكتشف الكورس
                    <ArrowLeft size={18} className="transition group-hover:-translate-x-1" />
                  </a>

                </div>
              </article>

            ))}

          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">

        <div className="container">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-extrabold text-[#204bf0]">
              ليه ثانوية إسكندرية؟
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              مش مجرد شرح.. دي رحلة نجاح متكاملة
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-500">
              كل الأدوات اللي محتاجها علشان تتعلم وتتمرن وتتابع تقدمك في مكان واحد.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (

              <div
                key={feature.title}
                className="group rounded-[25px] border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50"
              >

                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${index === 2 ? "bg-amber-50 text-amber-500" : "bg-blue-50 text-[#204bf0]"} transition group-hover:scale-110`}>
                  <feature.icon size={27} />
                </div>

                <h3 className="mt-6 text-lg font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-8 text-gray-400">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Teacher */}
      <section id="teacher" className="bg-white py-20">

        <div className="container grid items-center gap-12 lg:grid-cols-2">

          <div className="relative mx-auto w-full max-w-[480px]">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[35px] bg-[#97d1cc]/40" />

            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[35px] bg-gradient-to-br from-[#204bf0] to-[#5277ff] p-10 text-center text-white">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[35px] border-white/10" />

              <div className="relative">

                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/30 bg-white/15">
                  <GraduationCap size={68} />
                </div>

                <h3 className="mt-7 text-3xl font-black">
                  أستاذ حسام
                </h3>

                <p className="mt-3 text-sm text-blue-100">
                  مدرس اللغة العربية
                </p>

              </div>
            </div>
          </div>

          <div>

            <span className="text-sm font-extrabold text-[#204bf0]">
              معاك في كل خطوة
            </span>

            <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
              التعلم الصح يبدأ بفهم المعلومة مش حفظها وبس
            </h2>

            <p className="mt-5 text-base leading-9 text-gray-500">
              هدفنا إنك تحب اللغة العربية وتفهمها وتقدر تحقق أفضل مستوى. هنمشي
              معاك خطوة بخطوة من أول الدرس لحد الاختبار والنتيجة.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "شرح مبسط ومنظم لكل درس",
                "تدريبات متنوعة على كل جزئية",
                "متابعة مستواك وتطورك باستمرار",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-gray-700"
                >
                  <CheckCircle2 size={21} className="shrink-0 text-emerald-500" />
                  {item}
                </div>

              ))}

            </div>

            <a
              href="/register"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#204bf0] px-7 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1"
            >
              ابدأ التعلم الآن <ArrowLeft size={18} />
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">

        <div className="relative overflow-hidden rounded-[32px] bg-[#204bf0] px-7 py-14 text-center text-white sm:px-14">

          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full border-[35px] border-white/10" />

          <div className="relative mx-auto max-w-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-[#fcb937]">
              <Sparkles size={32} />
            </div>

            <h2 className="mt-6 text-3xl font-black leading-relaxed sm:text-4xl">
              جاهز تبدأ رحلة التفوق؟
            </h2>

            <p className="mt-4 text-sm leading-8 text-blue-100">
              مكانك مستنيك.. ابدأ النهارده وخلي كل يوم يقربك من هدفك.
            </p>

            <a
              href="/register"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#fcb937] px-8 py-4 font-black text-[#172033] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffd16b]"
            >
              أنشئ حسابك مجانًا <ArrowLeft size={18} />
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-100 bg-white pt-14">

        <div className="container grid gap-10 pb-12 md:grid-cols-3">

          <div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#204bf0] text-white">
                <GraduationCap size={25} />
              </div>
              <span className="text-xl font-black">
                ثانوية إسكندرية
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-8 text-gray-400">
              منصة تعليمية متكاملة هدفها تسهيل تعلم اللغة العربية ومساعدة كل طالب على تحقيق التفوق.
            </p>

          </div>

          <div>

            <h3 className="font-black">روابط سريعة</h3>

            <div className="mt-5 grid grid-cols-2 gap-4 text-sm font-semibold text-gray-400">
              <a href="/" className="hover:text-[#204bf0]">الرئيسية</a>
              <a href="/courses" className="hover:text-[#204bf0]">الكورسات</a>
              <a href="/books" className="hover:text-[#204bf0]">الكتب والمذكرات</a>
              <a href="/#features" className="hover:text-[#204bf0]">مميزات المنصة</a>
              <a href="/teacher" className="hover:text-[#204bf0]">عن المدرس</a>
            </div>

          </div>

          <div>

            <h3 className="font-black">ابدأ رحلتك</h3>

            <p className="mt-5 text-sm leading-8 text-gray-400">
              انضم للمنصة وابدأ التعلم بطريقة مختلفة.
            </p>

            <a
              href="/register"
              className="mt-3 inline-flex items-center gap-2 font-bold text-[#204bf0]"
            >
              إنشاء حساب <ArrowLeft size={16} />
            </a>

          </div>
        </div>

        <div className="border-t border-gray-100 py-6 text-center text-xs font-semibold text-gray-400">
          © {new Date().getFullYear()} ثانوية إسكندرية التعليمية. جميع الحقوق محفوظة.
        </div>

      </footer>

    </main>
  );
}

