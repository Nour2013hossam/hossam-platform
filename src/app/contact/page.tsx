"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, Clock3, GraduationCap, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const whatsapp = "201007058853";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("استفسار عن الكورسات");
  const send = () => {
    const text = "السلام عليكم، أنا " + name.trim() + "\nموضوع التواصل: " + topic + "\n" + message.trim();
    window.open("https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
  };
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fb] text-[#172033]">
      <header className="border-b border-white bg-white/85 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link href="/" className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#204bf0] text-white"><GraduationCap size={25}/></span><span><b className="block">ثانوية إسكندرية</b><small className="text-xs text-slate-400">أ/ حسام حسني</small></span></Link><Link href="/" className="rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-600">الرئيسية</Link></div></header>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20"><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black text-blue-600">إحنا هنا لمساعدتك</span><h1 className="mt-3 text-4xl font-black">تواصل معانا</h1><p className="mt-4 text-sm leading-8 text-slate-500">عندك سؤال عن الكورسات أو الكتب أو الاشتراك؟ ابعتلنا رسالتك وهنساعدك.</p></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <aside className="rounded-[28px] bg-gradient-to-br from-[#1534b4] to-[#5277ff] p-7 text-white sm:p-9"><h2 className="text-xl font-black">طرق التواصل</h2><p className="mt-3 text-sm leading-7 text-blue-100">اختار الطريقة المناسبة، وهنكون سعداء بمساعدتك.</p><div className="mt-8 space-y-5"><a href="https://wa.me/201007058853" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 hover:bg-white/15"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><MessageCircle size={21}/></span><span><b className="block text-sm">واتساب</b><small dir="ltr" className="mt-1 block text-right text-blue-100">01007058853</small></span></a><div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><Clock3 size={21}/></span><span><b className="block text-sm">مواعيد الرد</b><small className="mt-1 block text-blue-100">خلال أوقات العمل المتاحة</small></span></div><div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><MapPin size={21}/></span><span><b className="block text-sm">الموقع</b><small className="mt-1 block text-blue-100">الإسكندرية</small></span></div></div></aside>
          <section className="rounded-[28px] border border-white bg-white p-6 shadow-sm sm:p-9"><h2 className="text-xl font-black">ابعت استفسارك على واتساب</h2><p className="mt-2 text-xs leading-6 text-slate-400">اكتب بياناتك ورسالتك، وهيتفتح واتساب برسالة جاهزة تقدر تراجعها قبل الإرسال.</p><div className="mt-7 space-y-5"><label className="block"><span className="mb-2 block text-xs font-black">اسمك</span><input value={name} onChange={(e) => setName(e.target.value)} placeholder="اكتب اسمك" className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-400"/></label><label className="block"><span className="mb-2 block text-xs font-black">موضوع الرسالة</span><select value={topic} onChange={(e) => setTopic(e.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none"><option>استفسار عن الكورسات</option><option>استفسار عن الكتب والمذكرات</option><option>مشكلة في الحساب</option><option>استفسار عن الدفع والاشتراك</option><option>موضوع آخر</option></select></label><label className="block"><span className="mb-2 block text-xs font-black">رسالتك</span><textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="اكتب تفاصيل استفسارك..." className="w-full resize-y rounded-xl border border-slate-200 p-4 text-sm outline-none focus:border-blue-400"/></label><button onClick={send} disabled={!name.trim() || !message.trim()} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-sm font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"><Send size={17}/> فتح واتساب وإرسال الرسالة <ArrowLeft size={17}/></button><p className="flex items-center gap-2 text-[10px] leading-5 text-slate-400"><CheckCircle2 size={14}/> لن يتم إرسال شيء تلقائيًا؛ راجع الرسالة وأرسلها من واتساب بنفسك.</p></div></section>
        </div>
      </section>
    </main>
  );
}
