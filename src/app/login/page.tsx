import Link from "next/link";
import { GraduationCap, Mail, Lock, ArrowLeft, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#f4f6f7] p-5">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-2xl lg:grid-cols-2">
        <section className="flex flex-col justify-center p-8 sm:p-12">
          <Link href="/" className="mb-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#204bf0] text-white">
              <GraduationCap size={28}/>
            </div>
            <div>
              <h1 className="text-xl font-black">ثانوية إسكندرية</h1>
              <p className="text-xs text-gray-400">أ/حسام حسني</p>
            </div>
          </Link>

          <span className="text-sm font-bold text-[#204bf0]">أهلاً بعودتك!</span>
          <h2 className="mt-3 text-3xl font-black">سجل دخولك لحسابك</h2>
          <p className="mt-3 text-sm leading-7 text-gray-400">كمل رحلتك التعليمية وحقق أهدافك مع ثانوية إسكندرية.</p>

          <form className="mt-9 space-y-5">
            <div>
              <label className="mb-3 block text-sm font-bold">البريد الإلكتروني</label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 focus-within:border-[#204bf0]">
                <Mail size={19} className="text-gray-400"/>
                <input type="email" placeholder="example@email.com" className="h-14 w-full bg-transparent text-sm outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold">كلمة المرور</label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 focus-within:border-[#204bf0]">
                <Lock size={19} className="text-gray-400"/>
                <input type="password" placeholder="أدخل كلمة المرور" className="h-14 w-full bg-transparent text-sm outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" className="accent-[#204bf0]"/>
                تذكرني
              </label>
              <Link href="/forgot-password" className="font-bold text-[#204bf0]">نسيت كلمة المرور؟</Link>
            </div>

            <button type="button" className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#204bf0] py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700">
              تسجيل الدخول <ArrowLeft size={18}/>
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            معندكش حساب؟ <Link href="/register" className="font-black text-[#204bf0]">أنشئ حساب جديد</Link>
          </p>
        </section>

        <section className="relative hidden flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#204bf0] to-[#142c9e] p-12 text-center text-white lg:flex">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-white/10"/>
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[35px] border-white/10"/>
          <div className="relative">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[35px] bg-white/15">
              <GraduationCap size={75}/>
            </div>
            <h2 className="mt-10 text-4xl font-black leading-relaxed">مستقبلك يبدأ من هنا!</h2>
            <p className="mt-5 max-w-sm text-sm leading-9 text-blue-100">تعلم، تدرب، اختبر نفسك، وحقق التفوق مع أستاذ حسام.</p>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm font-bold text-blue-100">
              <ShieldCheck size={20}/> بيئة تعليمية آمنة ومنظمة
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

