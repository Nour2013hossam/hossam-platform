"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity, ArrowDownLeft, ArrowUpLeft, BookOpen, BookText, Check,
  CheckCircle2, CircleDollarSign, Clock3, Eye, FilePlus2, GraduationCap,
  LayoutDashboard, Menu, MoreHorizontal, Package, Pencil, Plus, Search,
  Settings2, ShieldCheck, ShoppingBag, Trash2, TrendingUp, Users, Wallet,
  X, MessageCircle, Ban,
} from "lucide-react";

type ContentKind = "كورس" | "كتاب";
type Item = {
  id: number;
  title: string;
  kind: ContentKind;
  category: string;
  price: number;
  access: "مجاني" | "مدفوع";
  status: "منشور" | "مسودة";
  sales: number;
};
type Order = {
  id: string;
  student: string;
  item: string;
  kind: ContentKind;
  price: number;
  date: string;
  status: "بانتظار التأكيد" | "مكتمل" | "مرفوض";
};

const initialItems: Item[] = [
  { id: 1, title: "كورس اللغة العربية — الصف الثالث الثانوي", kind: "كورس", category: "الثانوية العامة", price: 450, access: "مدفوع", status: "منشور", sales: 32 },
  { id: 2, title: "النحو والتأسيس من الصفر", kind: "كورس", category: "التأسيس", price: 0, access: "مجاني", status: "منشور", sales: 0 },
  { id: 3, title: "مذكرة النحو الشاملة", kind: "كتاب", category: "مذكرات", price: 120, access: "مدفوع", status: "منشور", sales: 18 },
  { id: 4, title: "ملخص الأدب والنصوص", kind: "كتاب", category: "ملخصات", price: 0, access: "مجاني", status: "مسودة", sales: 0 },
];
const initialOrders: Order[] = [
  { id: "ORD-1048", student: "أحمد محمد", item: "مذكرة النحو الشاملة", kind: "كتاب", price: 120, date: "اليوم، 11:30 ص", status: "بانتظار التأكيد" },
  { id: "ORD-1047", student: "سارة محمود", item: "كورس اللغة العربية", kind: "كورس", price: 450, date: "اليوم، 10:15 ص", status: "مكتمل" },
  { id: "ORD-1046", student: "عمر علي", item: "مذكرة النحو الشاملة", kind: "كتاب", price: 120, date: "أمس، 8:20 م", status: "بانتظار التأكيد" },
];

const money = (value: number) => value === 0 ? "مجاني" : value.toLocaleString("ar-EG") + " ج.م";

export default function AdminPage() {
  const [tab, setTab] = useState<"overview" | "content" | "orders" | "students">("overview");
  const [items, setItems] = useState(initialItems);
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [kindFilter, setKindFilter] = useState("الكل");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [kind, setKind] = useState<ContentKind>("كتاب");
  const [category, setCategory] = useState("مذكرات");
  const [price, setPrice] = useState("0");
  const [isFree, setIsFree] = useState(true);
  const [notice, setNotice] = useState("");

  const visibleItems = useMemo(() => items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.trim().toLowerCase());
    const matchesKind = kindFilter === "الكل" || item.kind === kindFilter;
    return matchesSearch && matchesKind;
  }), [items, search, kindFilter]);

  const openNew = (nextKind: ContentKind) => {
    setEditingId(null);
    setTitle("");
    setKind(nextKind);
    setCategory(nextKind === "كتاب" ? "مذكرات" : "الثانوية العامة");
    setPrice("0");
    setIsFree(true);
    setShowForm(true);
  };

  const openEdit = (item: Item) => {
    setEditingId(item.id);
    setTitle(item.title);
    setKind(item.kind);
    setCategory(item.category);
    setPrice(String(item.price));
    setIsFree(item.access === "مجاني");
    setShowForm(true);
  };

  const saveItem = () => {
    if (!title.trim()) return;
    const nextPrice = isFree ? 0 : Math.max(0, Number(price) || 0);
    if (editingId !== null) {
      setItems((current) => current.map((item) => item.id === editingId
        ? { ...item, title: title.trim(), kind, category, price: nextPrice, access: isFree ? "مجاني" : "مدفوع" }
        : item));
    } else {
      setItems((current) => [{ id: Date.now(), title: title.trim(), kind, category, price: nextPrice, access: isFree ? "مجاني" : "مدفوع", status: "مسودة", sales: 0 }, ...current]);
    }
    setShowForm(false);
    setNotice("تم تحديث بيانات المحتوى في المعاينة الحالية.");
  };

  const updateOrder = (id: string, status: Order["status"]) => {
    setOrders((current) => current.map((order) => order.id === id ? { ...order, status } : order));
  };

  const nav = [
    { id: "overview" as const, label: "نظرة عامة", icon: LayoutDashboard },
    { id: "content" as const, label: "الكتب والكورسات", icon: BookOpen },
    { id: "orders" as const, label: "طلبات الشراء", icon: ShoppingBag },
    { id: "students" as const, label: "الطلاب", icon: Users },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f6fb] text-[#172033]">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-[270px] shrink-0 flex-col border-l border-slate-200/80 bg-white px-5 py-7 lg:flex">
          <Link href="/" className="mb-10 flex items-center gap-3 px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-lg shadow-blue-200"><GraduationCap size={27}/></div>
            <div><p className="font-black text-[#142b55]">ثانوية إسكندرية</p><p className="mt-1 text-xs font-bold text-slate-400">إدارة المنصة</p></div>
          </Link>
          <p className="mb-3 px-3 text-[10px] font-black tracking-widest text-slate-400">القائمة الرئيسية</p>
          <nav className="space-y-1">
            {nav.map((entry) => <button key={entry.id} onClick={() => setTab(entry.id)} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-bold transition ${tab === entry.id ? "bg-blue-50 text-[#204bf0]" : "text-slate-500 hover:bg-slate-50"}`}><entry.icon size={19}/>{entry.label}{tab === entry.id && <span className="mr-auto h-2 w-2 rounded-full bg-blue-600"/>}</button>)}
          </nav>
          <div className="mt-auto rounded-[22px] bg-gradient-to-br from-[#173bcf] to-[#5277ff] p-5 text-white">
            <ShieldCheck size={24}/>
            <p className="mt-4 font-black">مساحة الإدارة</p>
            <p className="mt-2 text-xs leading-6 text-blue-100">تحكم في محتوى المنصة وطلبات الطلاب من مكان واحد.</p>
          </div>
        </aside>

        <section className="min-w-0 flex-1 px-4 py-5 sm:px-7 lg:px-9 lg:py-8">
          <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[26px] border border-white bg-white/85 px-5 py-4 shadow-sm shadow-slate-200/50 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#204bf0] lg:hidden"><Menu size={22}/></div>
              <div><p className="text-xs font-bold text-slate-400">لوحة التحكم / {nav.find((entry) => entry.id === tab)?.label}</p><h1 className="mt-1 text-xl font-black sm:text-2xl">أهلاً بيك يا أستاذ حسام 👋</h1></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[10px] font-black text-amber-700">وضع المعاينة التجريبية</span>
              <Link href="/" className="rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-600 hover:bg-slate-200">عرض الموقع</Link>
            </div>
          </header>

          <nav className="mb-6 grid grid-cols-2 gap-2 rounded-2xl bg-white p-2 shadow-sm lg:hidden">
            {nav.map((entry) => <button key={entry.id} onClick={() => setTab(entry.id)} className={`flex items-center justify-center gap-2 rounded-xl px-2 py-3 text-xs font-black ${tab === entry.id ? "bg-blue-600 text-white" : "text-slate-500"}`}><entry.icon size={16}/>{entry.label}</button>)}
          </nav>

          {notice && <div className="mb-5 flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-700"><span className="flex items-center gap-2"><CheckCircle2 size={16}/>{notice}</span><button onClick={() => setNotice("")}><X size={16}/></button></div>}

          {tab === "overview" && <>
            <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "إجمالي الطلاب", value: "248", note: "+12 هذا الشهر", icon: Users, tone: "bg-blue-50 text-blue-600" },
                { label: "الكتب والكورسات", value: String(items.length), note: "محتوى مسجل بالمعاينة", icon: Package, tone: "bg-violet-50 text-violet-600" },
                { label: "طلبات بانتظار التأكيد", value: String(orders.filter((o) => o.status === "بانتظار التأكيد").length), note: "تحتاج مراجعتك", icon: Clock3, tone: "bg-amber-50 text-amber-600" },
                { label: "مبيعات مؤكدة", value: money(orders.filter((o) => o.status === "مكتمل").reduce((sum, o) => sum + o.price, 0)), note: "من الطلبات المعروضة", icon: Wallet, tone: "bg-emerald-50 text-emerald-600" },
              ].map((stat) => <article key={stat.label} className="rounded-[23px] border border-white bg-white p-5 shadow-sm shadow-slate-200/40"><div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-400">{stat.label}</span><span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.tone}`}><stat.icon size={21}/></span></div><p className="mt-5 text-2xl font-black tabular-nums">{stat.value}</p><p className="mt-2 text-[10px] font-bold text-slate-400">{stat.note}</p></article>)}
            </div>
            <div className="grid gap-5 xl:grid-cols-[1.35fr_1fr]">
              <section className="rounded-[25px] border border-white bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 flex items-center justify-between"><div><h2 className="font-black">آخر طلبات الشراء</h2><p className="mt-1 text-xs text-slate-400">راجع التحويلات وفعّل الطلبات بعد التأكد</p></div><button onClick={() => setTab("orders")} className="text-xs font-black text-blue-600">كل الطلبات ←</button></div>
                <div className="space-y-3">{orders.slice(0,3).map((order) => <div key={order.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 p-4"><div><p className="text-sm font-black">{order.student}</p><p className="mt-1 text-xs text-slate-400">{order.item} · {money(order.price)}</p></div><span className={`rounded-lg px-3 py-2 text-[10px] font-black ${order.status === "مكتمل" ? "bg-emerald-50 text-emerald-700" : order.status === "مرفوض" ? "bg-rose-50 text-rose-600" : "bg-amber-50 text-amber-700"}`}>{order.status}</span></div>)}</div>
              </section>
              <section className="rounded-[25px] border border-white bg-white p-5 shadow-sm sm:p-6"><div className="mb-5"><h2 className="font-black">إجراءات سريعة</h2><p className="mt-1 text-xs text-slate-400">أضف محتوى جديد للمنصة</p></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1"><button onClick={() => openNew("كورس")} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-right transition hover:bg-blue-100"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600"><GraduationCap size={21}/></span><span><b className="block text-sm">إضافة كورس</b><small className="mt-1 block text-[10px] text-slate-400">حدد السعر والدروس لاحقًا</small></span><Plus className="mr-auto text-blue-600" size={18}/></button><button onClick={() => openNew("كتاب")} className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-violet-50/70 p-4 text-right transition hover:bg-violet-100"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-violet-600"><BookText size={21}/></span><span><b className="block text-sm">إضافة كتاب أو مذكرة</b><small className="mt-1 block text-[10px] text-slate-400">حدد السعر وبيانات الملف</small></span><Plus className="mr-auto text-violet-600" size={18}/></button></div></section>
            </div>
          </>}

          {tab === "content" && <section className="rounded-[25px] border border-white bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><h2 className="text-xl font-black">إدارة الكتب والكورسات</h2><p className="mt-2 text-xs text-slate-400">أضف المحتوى وحدد إذا كان مجانيًا أو مدفوعًا وسعره.</p></div><div className="flex flex-wrap gap-2"><button onClick={() => openNew("كتاب")} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-xs font-black hover:bg-slate-50"><BookText size={16}/> كتاب جديد</button><button onClick={() => openNew("كورس")} className="inline-flex items-center gap-2 rounded-xl bg-[#204bf0] px-4 py-3 text-xs font-black text-white shadow-lg shadow-blue-200 hover:bg-blue-700"><Plus size={16}/> كورس جديد</button></div></div>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row"><label className="relative flex-1"><Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={17}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ابحث عن محتوى..." className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pr-10 pl-3 text-sm outline-none focus:border-blue-300"/></label><select value={kindFilter} onChange={(e) => setKindFilter(e.target.value)} className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold outline-none"><option>الكل</option><option>كتاب</option><option>كورس</option></select></div>
            <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-right text-xs"><thead><tr className="border-b border-slate-100 text-slate-400"><th className="px-3 py-4 font-bold">المحتوى</th><th className="px-3 py-4 font-bold">النوع</th><th className="px-3 py-4 font-bold">السعر</th><th className="px-3 py-4 font-bold">الحالة</th><th className="px-3 py-4 font-bold">المبيعات</th><th className="px-3 py-4 font-bold">إجراءات</th></tr></thead><tbody>{visibleItems.map((item) => <tr key={item.id} className="border-b border-slate-50 last:border-0"><td className="px-3 py-4"><p className="font-black">{item.title}</p><p className="mt-1 text-[10px] text-slate-400">{item.category}</p></td><td className="px-3 py-4 text-slate-500">{item.kind}</td><td className="px-3 py-4 font-black">{money(item.price)}</td><td className="px-3 py-4"><span className={`rounded-lg px-2.5 py-1.5 text-[10px] font-black ${item.status === "منشور" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{item.status}</span></td><td className="px-3 py-4 text-slate-500">{item.sales}</td><td className="px-3 py-4"><div className="flex items-center gap-1"><button onClick={() => openEdit(item)} title="تعديل" className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"><Pencil size={15}/></button><button onClick={() => { setItems((current) => current.filter((entry) => entry.id !== item.id)); setNotice("تم حذف العنصر من المعاينة الحالية."); }} title="حذف" className="rounded-lg p-2 text-rose-500 hover:bg-rose-50"><Trash2 size={15}/></button></div></td></tr>)}</tbody></table>{visibleItems.length === 0 && <p className="py-12 text-center text-sm font-bold text-slate-400">لا توجد نتائج مطابقة.</p>}</div>
          </section>}

          {tab === "orders" && <section className="rounded-[25px] border border-white bg-white p-5 shadow-sm sm:p-7"><div className="mb-6"><h2 className="text-xl font-black">طلبات الشراء</h2><p className="mt-2 text-xs text-slate-400">تواصل مع الطالب عبر واتساب، وتأكد من الدفع قبل تفعيل المحتوى.</p></div><div className="space-y-3">{orders.map((order) => <article key={order.id} className="rounded-2xl border border-slate-100 p-4 sm:p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[10px] font-black text-slate-400">{order.id} · {order.date}</p><h3 className="mt-2 font-black">{order.student}</h3><p className="mt-1 text-xs text-slate-500">{order.item} · {order.kind}</p></div><div className="text-left"><p className="font-black text-[#204bf0]">{money(order.price)}</p><span className={`mt-2 inline-block rounded-lg px-2.5 py-1.5 text-[10px] font-black ${order.status === "مكتمل" ? "bg-emerald-50 text-emerald-700" : order.status === "مرفوض" ? "bg-rose-50 text-rose-600" : "bg-amber-50 text-amber-700"}`}>{order.status}</span></div></div><div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4"><a target="_blank" rel="noreferrer" href={`https://wa.me/201007058853?text=${encodeURIComponent("مرحبًا " + order.student + "، بخصوص طلب " + order.id + " لشراء " + order.item + " بقيمة " + order.price + " جنيه. برجاء إرسال تأكيد الدفع.")}`} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2.5 text-[10px] font-black text-white hover:bg-emerald-700"><MessageCircle size={14}/> تواصل واتساب</a>{order.status === "بانتظار التأكيد" && <><button onClick={() => { updateOrder(order.id, "مكتمل"); setNotice("تم تغيير حالة الطلب في المعاينة فقط؛ لم يتم تفعيل وصول فعلي."); }} className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-2.5 text-[10px] font-black text-blue-700 hover:bg-blue-100"><Check size={14}/> تأكيد الدفع</button><button onClick={() => updateOrder(order.id, "مرفوض")} className="inline-flex items-center gap-2 rounded-xl bg-rose-50 px-3 py-2.5 text-[10px] font-black text-rose-600 hover:bg-rose-100"><Ban size={14}/> رفض الطلب</button></>}</div></article>)}</div></section>}

          {tab === "students" && <section className="rounded-[25px] border border-white bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><Users className="text-blue-600" size={24}/><div><h2 className="font-black">إدارة الطلاب</h2><p className="mt-1 text-xs text-slate-400">قسم الطلاب سيتم ربطه بقاعدة البيانات في المرحلة القادمة.</p></div></div><div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center"><GraduationCap className="mx-auto text-slate-300" size={38}/><p className="mt-3 font-black">إدارة حسابات الطلاب قيد التجهيز</p><p className="mt-2 text-xs leading-6 text-slate-400">هنضيف البحث عن الطالب، بيانات ولي الأمر، المشتريات، وتفعيل المحتوى بعد إعداد تسجيل الدخول وقاعدة البيانات.</p></div></section>}

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 py-5 text-[10px] font-semibold text-slate-400"><span>© 2026 ثانوية إسكندرية التعليمية</span><span className="flex items-center gap-2"><ShieldCheck size={14}/> لوحة إدارة تجريبية غير مرتبطة بقاعدة بيانات</span></footer>
        </section>
      </div>

      {showForm && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowForm(false); }}><section className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"><div className="mb-6 flex items-center justify-between"><div><p className="text-xs font-bold text-blue-600">{editingId ? "تعديل المحتوى" : "إضافة محتوى جديد"}</p><h2 className="mt-1 text-xl font-black">{editingId ? "تحديث البيانات" : "بيانات الكتاب أو الكورس"}</h2></div><button onClick={() => setShowForm(false)} className="rounded-xl bg-slate-100 p-2 text-slate-500"><X size={19}/></button></div><div className="space-y-4"><label className="block"><span className="mb-2 block text-xs font-black">اسم المحتوى</span><input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="مثال: مذكرة النحو الشاملة" className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-400"/></label><div className="grid gap-4 sm:grid-cols-2"><label className="block"><span className="mb-2 block text-xs font-black">نوع المحتوى</span><select value={kind} onChange={(e) => { setKind(e.target.value as ContentKind); setCategory(e.target.value === "كتاب" ? "مذكرات" : "الثانوية العامة"); }} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm"><option value="كتاب">كتاب / مذكرة</option><option value="كورس">كورس</option></select></label><label className="block"><span className="mb-2 block text-xs font-black">التصنيف</span><select value={category} onChange={(e) => setCategory(e.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm">{(kind === "كتاب" ? ["مذكرات","كتب","ملخصات","مراجعات"] : ["الثانوية العامة","التأسيس","مراجعات","مهارات"]).map((option) => <option key={option}>{option}</option>)}</select></label></div><div className="rounded-2xl border border-slate-100 bg-slate-50 p-4"><p className="mb-3 text-xs font-black">طريقة إتاحة المحتوى</p><div className="grid grid-cols-2 gap-2"><button onClick={() => setIsFree(true)} className={`rounded-xl border p-3 text-xs font-black ${isFree ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-500"}`}>مجاني</button><button onClick={() => setIsFree(false)} className={`rounded-xl border p-3 text-xs font-black ${!isFree ? "border-blue-300 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-500"}`}>مدفوع</button></div>{!isFree && <label className="mt-4 block"><span className="mb-2 block text-xs font-black">السعر بالجنيه المصري</span><input type="number" min="1" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="مثال: 150" className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-blue-400"/></label>}</div><div className="rounded-xl bg-amber-50 p-3 text-[10px] font-bold leading-6 text-amber-800">الملفات وروابط الدروس ورفع الـ PDF والفيديو سيتم توصيلها عند إعداد التخزين وقاعدة البيانات. هذه الإضافة محفوظة داخل المعاينة الحالية فقط.</div><div className="mt-6 flex gap-3"><button onClick={saveItem} disabled={!title.trim() || (!isFree && Number(price) <= 0)} className="flex-1 rounded-xl bg-[#204bf0] py-3.5 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40">{editingId ? "حفظ التعديلات" : "إضافة المحتوى"}</button><button onClick={() => setShowForm(false)} className="rounded-xl bg-slate-100 px-5 py-3.5 text-sm font-black text-slate-600">إلغاء</button></div></div></section></div>}
    </main>
  );
}
