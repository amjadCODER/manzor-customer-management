# نظام إدارة العملاء — منظور تقني

نظام مستقل مبني بـ React + TypeScript + Vite ومجهز للربط مع Supabase والنشر على Vercel.

## التشغيل المحلي

```bash
npm install
cp .env.example .env
npm run dev
```

## إعداد Supabase

نفذ الملفات بالترتيب داخل SQL Editor:

1. `supabase/schema.sql`
2. `supabase/rls-policies.sql`
3. `supabase/storage.sql`

ثم ضع القيم في `.env`:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

## النشر على Vercel

- اربط المستودع في Vercel
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- أضف متغيرات البيئة نفسها

## المزايا الموجودة

- واجهة عربية RTL ومتجاوبة للجوال
- مكتبة قوالب عقود تقنية
- معالج إنشاء عقد متعدد الخطوات
- معاينة عقد رسمية بهوية منظور تقني
- توليد PDF محليا
- تصدير العملاء إلى Excel
- مخطط قاعدة بيانات Supabase
- RLS وسياسات التخزين
- أرقام تلقائية للعملاء والعقود
- حالات العملاء والعقود
