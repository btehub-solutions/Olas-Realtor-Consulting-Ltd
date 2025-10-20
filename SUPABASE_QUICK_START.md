# 🚀 Supabase Quick Start - 3 Simple Steps

## Step 1: Get Your Anon Key (2 minutes)

1. Visit: https://app.supabase.com/project/eawqkogxwlxcginvmbyi/settings/api
2. Copy the **anon/public** key (NOT the service_role key!)
3. Open: `js/supabase-config.js`
4. Replace `YOUR_ANON_KEY_HERE` with your copied key
5. Save the file

## Step 2: Create Database Tables (1 minute)

1. Visit: https://app.supabase.com/project/eawqkogxwlxcginvmbyi/sql/new
2. Open the file: `supabase-schema.sql`
3. Copy ALL the contents
4. Paste into the SQL Editor
5. Click **RUN** button

## Step 3: Test It! (1 minute)

1. Open your website
2. Fill out the contact form
3. Check: https://app.supabase.com/project/eawqkogxwlxcginvmbyi/editor
4. You should see your submission in `contact_submissions` table

---

## ✅ That's It!

Your forms are now connected to Supabase!

**Need more details?** Read the full guide: `SUPABASE_SETUP_GUIDE.md`

---

## 🔑 Your Project Info

- **Project URL**: https://eawqkogxwlxcginvmbyi.supabase.co
- **Project ID**: eawqkogxwlxcginvmbyi
- **Dashboard**: https://app.supabase.com/project/eawqkogxwlxcginvmbyi

---

## ⚠️ Security Reminder

**NEVER use these in your website code:**
- ❌ Account token (sbp_...)
- ❌ Service role key

**ONLY use:**
- ✅ Anon/public key (starts with eyJ...)
