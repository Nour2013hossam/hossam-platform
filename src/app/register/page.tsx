import Link from "next/link";
import {
  GraduationCap, User, Mail, Phone, Lock,
  ArrowLeft, BookOpen, School, MapPin, Users
} from "lucide-react";

const inputStyle = "h-14 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#204bf0] focus:ring-2 focus:ring-blue-50";
const labelStyle = "mb-3 block text-sm font-bold text-gray-700";

export default function RegisterPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f6f7] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-[30px] bg-white p-6 shadow-xl sm:p-10 lg:p-12">

        <Link href="/" className="mb-9 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#204bf0] text-white">
            <GraduationCap size={32}/>
          </div>
          <div>
            <h1 className="text-xl font-black">ثانوية إسكندرية</h1>
            <p className="mt-1 text-sm font-bold text-[#204bf0]">أ/حسام حسني</p>
          </div>
        </Link>

        <div className="mb-10">
          <span className="text-sm font-bold text-[#204bf0]">انضم لعائلتنا التعليمية</span>
          <h2 className="mt-3 text-3xl font-black">أنشئ حسابك الآن</h2>
          <p className="mt-3 text-sm leading-7 text-gray-400">
            سجل بياناتك بشكل صحيح علشان نقدر نوفرلك تجربة تعليمية مناسبة ليك.
          </p>
        </div>

        <form className="space-y-10">

          {/* Account Type */}
          <section>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
               نوع الحساب
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["student", "طالب", ""],
                ["parent", "ولي أمر", ""],
                ["teacher", "مدرس", ""],
              ].map(([value, label, emoji]) => (
                <label key={value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={value}
                    defaultChecked={value === "student"}
                    className="peer sr-only"
                  />
                  <div className="rounded-2xl border-2 border-gray-100 p-4 text-center transition hover:border-blue-200 peer-checked:border-[#204bf0] peer-checked:bg-blue-50">
                    
                    <p className="mt-2 font-bold">{label}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Personal Information */}
          <section>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
               البيانات الشخصية
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>الاسم بالكامل *</label>
                <input required name="fullName" className={inputStyle} placeholder="اكتب اسمك رباعي"/>
              </div>

              <div>
                <label className={labelStyle}>رقم الهاتف *</label>
                <input required name="phone" type="tel" className={inputStyle} placeholder="01xxxxxxxxx"/>
              </div>

              <div>
                <label className={labelStyle}>البريد الإلكتروني *</label>
                <input required name="email" type="email" className={inputStyle} placeholder="example@email.com"/>
              </div>

              <div>
                <label className={labelStyle}>النوع</label>
                <select name="gender" className={inputStyle} defaultValue="">
                  <option value="" disabled>اختر النوع</option>
                  <option>ذكر</option>
                  <option>أنثى</option>
                </select>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
               البيانات الدراسية
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>المرحلة الدراسية *</label>
                <select required name="stage" className={inputStyle} defaultValue="">
                  <option value="" disabled>اختر المرحلة</option>
                  <option>المرحلة الابتدائية</option>
                  <option>المرحلة الإعدادية</option>
                  <option>المرحلة الثانوية</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>الصف الدراسي *</label>
                <select required name="grade" className={inputStyle} defaultValue="">
                  <option value="" disabled>اختر الصف الدراسي</option>
                  <optgroup label="المرحلة الابتدائية">
                    <option>الصف الرابع الابتدائي</option>
                    <option>الصف الخامس الابتدائي</option>
                    <option>الصف السادس الابتدائي</option>
                  </optgroup>
                  <optgroup label="المرحلة الإعدادية">
                    <option>الصف الأول الإعدادي</option>
                    <option>الصف الثاني الإعدادي</option>
                    <option>الصف الثالث الإعدادي</option>
                  </optgroup>
                  <optgroup label="المرحلة الثانوية">
                    <option>الصف الأول الثانوي</option>
                    <option>الصف الثاني الثانوي</option>
                    <option>الصف الثالث الثانوي</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className={labelStyle}>اسم المدرسة</label>
                <div className="relative">
                  
                  <input name="school" className={`${inputStyle} pr-11`} placeholder="اكتب اسم مدرستك"/>
                </div>
              </div>

              <div>
                <label className={labelStyle}>المحافظة</label>
                <div className="relative">
                  
                  <select name="governorate" defaultValue="الإسكندرية" className={`${inputStyle} pr-11`}>
                    <option>الإسكندرية</option>
                    <option>البحيرة</option>
                    <option>مطروح</option>
                    <option>القاهرة</option>
                    <option>الجيزة</option>
                    <option>أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelStyle}>الإدارة التعليمية</label>
                <input name="administration" className={inputStyle} placeholder="مثال: إدارة المنتزه التعليمية"/>
              </div>

              <div>
                <label className={labelStyle}>الشعبة الدراسية</label>
                <select name="section" className={inputStyle} defaultValue="">
                  <option value="" disabled>اختر الشعبة إن وجدت</option>
                  <option>عام</option>
                  <option>علمي علوم</option>
                  <option>علمي رياضة</option>
                  <option>أدبي</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>العام الدراسي</label>
                <select name="academicYear" className={inputStyle} defaultValue="2026-2027">
                  <option value="2026-2027">2026 / 2027</option>
                  <option value="2027-2028">2027 / 2028</option>
                </select>
              </div>
            </div>
          </section>

          {/* Guardian */}
          <section>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
               بيانات ولي الأمر
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>اسم ولي الأمر</label>
                <input name="guardianName" className={inputStyle} placeholder="اسم ولي الأمر"/>
              </div>

              <div>
                <label className={labelStyle}>رقم هاتف ولي الأمر *</label>
                <input required name="guardianPhone" type="tel" className={inputStyle} placeholder="01xxxxxxxxx"/>
              </div>

              <div>
                <label className={labelStyle}>صلة القرابة</label>
                <select name="relationship" className={inputStyle} defaultValue="">
                  <option value="" disabled>اختر صلة القرابة</option>
                  <option>الأب</option>
                  <option>الأم</option>
                  <option>أخرى</option>
                </select>
              </div>
            </div>
          </section>

          {/* Password */}
          <section>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
               تأمين الحساب
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>كلمة المرور *</label>
                <input required minLength={8} name="password" type="password" className={inputStyle} placeholder="8 أحرف على الأقل"/>
              </div>

              <div>
                <label className={labelStyle}>تأكيد كلمة المرور *</label>
                <input required minLength={8} name="confirmPassword" type="password" className={inputStyle} placeholder="أعد كتابة كلمة المرور"/>
              </div>
            </div>
          </section>

          <div className="rounded-2xl bg-blue-50 p-4">
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-gray-600">
              <input required type="checkbox" className="mt-2 accent-[#204bf0]"/>
              أوافق على شروط الاستخدام وسياسة الخصوصية، وأتعهد بأن البيانات المدخلة صحيحة.
            </label>
          </div>

          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#204bf0] py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700">
            إنشاء الحساب <ArrowLeft size={19}/>
          </button>

        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          عندك حساب بالفعل؟
          <Link href="/login" className="mr-2 font-black text-[#204bf0]">سجل دخولك</Link>
        </p>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="font-black">ثانوية إسكندرية</p>
          <p className="mt-1 text-sm font-bold text-[#204bf0]">أ/حسام حسني</p>
        </div>

      </div>
    </main>
  );
}

