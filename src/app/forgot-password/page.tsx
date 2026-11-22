"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, GraduationCap, MessageCircle, ShieldCheck, KeyRound, Phone } from "lucide-react";

export default function ForgotPasswordPage() {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");

  const message = encodeURIComponent(
    "السلام عليكم يا أستاذ حسام، محتاج مساعدة في استعادة الدخول إلى حسابي على منصة ثانوية إسكندرية.\nالاسم: " +
      (name.trim() || "لم يتم تحديده") +
      "\nالبريد الإلكتروني أو رقم الهاتف: " +
      contact.trim()
  );
  const whatsappUrl = `https://wa.me/201007058853?text=${message}`;

  return (
    <main dir="rtl" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f6fb] px-4 py-10 text-[#172033]">
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-[0_28px_90px_rgba(25,48,100,0.12)] lg:grid-cols-[1fr_0.85fr]">
        <div className="p-7 sm:p-10 lg:p-14">
          <Link href="/" className="mb-12 inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-lg shadow-blue-200"><GraduationCap size={27} /></span>
            <span><strong className="block text-base font-black">ثانوية إسكندرية</strong><small className="mt-1 block text-xs text-slate-400">أ/ حسام حسني</small></span>
          </Link>

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><KeyRound size={26} /></div>
          <p className="text-sm font-black text-blue-600">استعادة الوصول للحساب</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">نسيت كلمة المرور؟</h1>
          <p className="mt-4 max-w-lg text-sm leading-8 text-slate-500">ولا يهمك. ابعت بيانات حسابك للأستاذ حسام على واتساب، وهنساعدك تستعيد الوصول لحسابك بعد التأكد من بياناتك.</p>

          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 block text-xs font-black text-slate-700">اسم الطالب</span>
              <input value={name} onChange={(event) => setName(event.target.value)} placeholder="اكتب اسمك" className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-black text-slate-700">البريد الإلكتروني أو رقم الهاتف المسجل</span>
              <span className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 transition focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
                <Phone size={18} className="shrink-0 text-slate-400" />
                <input value={contact} onChange={(event) => setContact(event.target.value)} placeholder="بيانات التواصل المسجلة في الحساب" className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none" />
              </span>
            </label>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-disabled={!contact.trim()} onClick={(event) => { if (!contact.trim()) event.preventDefault(); }} className={`flex h-14 w-full items-center justify-center gap-3 rounded-2xl font-black text-white shadow-lg transition ${contact.trim() ? "bg-emerald-600 shadow-emerald-200 hover:-translate-y-0.5 hover:bg-emerald-700" : "cursor-not-allowed bg-slate-300 shadow-none"}`}>
              <MessageCircle size={20} /> إرسال طلب المساعدة عبر واتساب
            </a>
            <p className="text-center text-[11px] leading-6 text-slate-400">لن يتم تغيير كلمة المرور تلقائيًا من هذه الصفحة. سيتم التواصل معك للتحقق من الحساب أولًا.</p>
          </div>

          <Link href="/login" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-blue-600 transition hover:gap-3"><ArrowRight size={17} /> الرجوع لتسجيل الدخول</Link>
        </div>

        <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#173bcf] via-[#204bf0] to-[#10246f] p-10 text-white lg:flex">
          <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full border-[38px] border-white/10" />
          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full border-[42px] border-white/10" />
          <div className="relative">
            <span className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-white/15"><ShieldCheck size={32} /></span>
            <h2 className="mt-9 text-3xl font-black leading-relaxed">حسابك في أمان</h2>
            <p className="mt-4 max-w-sm text-sm leading-8 text-blue-100">بنراجع بيانات صاحب الحساب قبل أي إجراء، علشان نحافظ على حسابك ومحتواك التعليمي.</p>
          </div>
          <div className="relative rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-xs font-bold text-blue-100">الدعم الفني</p>
            <p dir="ltr" className="mt-2 text-xl font-black tracking-wide">01007058853</p>
            <p className="mt-2 text-[11px] text-blue-100">واتساب الأستاذ حسام حسني</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
