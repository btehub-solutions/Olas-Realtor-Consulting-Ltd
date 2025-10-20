# Supabase Setup Guide for Olas Realtor Website

## 🔐 Security First!

**IMPORTANT**: The credentials you shared contain a **service_role key** which should NEVER be exposed in client-side code. This guide will show you the correct way to integrate Supabase securely.

---

## 📋 Step-by-Step Setup

### Step 1: Get Your Correct API Keys

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project: **eawqkogxwlxcginvmbyi**
3. Navigate to: **Settings** → **API**
4. You'll see two keys:
   - ✅ **anon/public key** - This is SAFE for client-side use
   - ❌ **service_role key** - NEVER use this in your website code

### Step 2: Update the Configuration File

1. Open the file: `js/supabase-config.js`
2. Find this line:
   ```javascript
   const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';
   ```
3. Replace `YOUR_ANON_KEY_HERE` with your **anon/public key** from Step 1
4. Save the file

**Example:**
```javascript
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Your actual anon key
```

### Step 3: Create Database Tables

1. Go to your Supabase Dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `supabase-schema.sql` file
5. Paste it into the SQL Editor
6. Click **Run** or press `Ctrl+Enter`
7. You should see: "Database schema created successfully!"

This creates two tables:
- `contact_submissions` - Stores contact form submissions
- `newsletter_subscribers` - Stores newsletter email subscriptions

### Step 4: Verify Row Level Security (RLS)

The SQL script automatically sets up Row Level Security policies that:
- ✅ Allow anyone to submit forms (insert data)
- ✅ Only allow authenticated users to view submissions
- ✅ Prevent unauthorized access to your data

To verify:
1. Go to **Authentication** → **Policies** in Supabase Dashboard
2. Check that policies exist for both tables

### Step 5: Test Your Integration

1. Open your website locally or deploy it
2. Try submitting the contact form on the Contact page
3. Try subscribing to the newsletter on the Home page
4. Check your Supabase Dashboard:
   - Go to **Table Editor**
   - Select `contact_submissions` or `newsletter_subscribers`
   - You should see your test submissions

---

## 📁 Files Created

| File | Purpose |
|------|---------|
| `js/supabase-config.js` | Supabase client configuration |
| `js/supabase-forms.js` | Form submission handlers |
| `supabase-schema.sql` | Database schema and security policies |
| `SUPABASE_SETUP_GUIDE.md` | This setup guide |

---

## 🔧 What Was Changed

### Contact Page (`contact.html`)
- ✅ Added Supabase JS library
- ✅ Added form submission handler
- ✅ Form now saves to Supabase instead of FormSubmit
- ✅ Shows success/error notifications

### Home Page (`index.html`)
- ✅ Added Supabase JS library
- ✅ Newsletter form now saves to Supabase
- ✅ Shows success/error notifications

---

## 🎯 Features Included

### Contact Form
- Saves all submissions to Supabase database
- Includes: name, email, phone, subject, message
- Timestamps each submission
- Shows user-friendly success/error messages

### Newsletter Subscription
- Saves email addresses to Supabase
- Prevents duplicate subscriptions
- Tracks subscription date
- Shows user-friendly notifications

### Security
- Row Level Security (RLS) enabled
- Only public insert operations allowed
- Admin access requires authentication
- No sensitive keys exposed in client code

---

## 📊 Viewing Your Data

### Option 1: Supabase Dashboard
1. Go to **Table Editor** in Supabase Dashboard
2. Select the table you want to view
3. Browse, filter, and export your data

### Option 2: SQL Queries
1. Go to **SQL Editor**
2. Run queries like:
   ```sql
   -- View all contact submissions
   SELECT * FROM contact_submissions ORDER BY created_at DESC;
   
   -- View all active newsletter subscribers
   SELECT * FROM newsletter_subscribers WHERE is_active = true;
   
   -- Count submissions by subject
   SELECT subject, COUNT(*) as count 
   FROM contact_submissions 
   GROUP BY subject;
   ```

---

## 🚀 Next Steps (Optional)

### 1. Email Notifications
Set up email notifications when someone submits a form:
- Go to **Database** → **Webhooks** in Supabase
- Create a webhook that triggers on INSERT to `contact_submissions`
- Use a service like SendGrid, Mailgun, or Supabase Edge Functions

### 2. Admin Dashboard
Create a simple admin page to view submissions:
- Use Supabase Auth for login
- Query data using authenticated requests
- Display in a table or export to CSV

### 3. Analytics
Track form submissions:
- Add a view counter
- Track conversion rates
- Monitor popular inquiry subjects

---

## ⚠️ Important Security Notes

### DO NOT:
- ❌ Share your service_role key publicly
- ❌ Commit API keys to public GitHub repositories
- ❌ Disable Row Level Security without understanding the risks
- ❌ Use service_role key in client-side code

### DO:
- ✅ Use environment variables for sensitive data
- ✅ Keep Row Level Security enabled
- ✅ Use the anon/public key for client-side code
- ✅ Regularly review your security policies
- ✅ Monitor your Supabase usage dashboard

---

## 🐛 Troubleshooting

### Issue: "Supabase client not initialized"
**Solution**: Make sure you've replaced `YOUR_ANON_KEY_HERE` in `js/supabase-config.js`

### Issue: "Failed to insert data"
**Solution**: 
1. Check that you've run the SQL schema
2. Verify RLS policies are set up correctly
3. Check browser console for detailed error messages

### Issue: "Email already subscribed"
**Solution**: This is expected behavior - the system prevents duplicate subscriptions

### Issue: Forms not submitting
**Solution**:
1. Open browser Developer Tools (F12)
2. Check the Console tab for errors
3. Verify Supabase scripts are loading correctly
4. Check Network tab to see if API calls are being made

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Review the Supabase Dashboard logs
3. Verify all steps in this guide were completed
4. Check Supabase documentation: https://supabase.com/docs

---

## ✅ Checklist

Before going live, ensure:
- [ ] Replaced `YOUR_ANON_KEY_HERE` with your actual anon key
- [ ] Ran the SQL schema in Supabase SQL Editor
- [ ] Tested contact form submission
- [ ] Tested newsletter subscription
- [ ] Verified data appears in Supabase Dashboard
- [ ] Checked that RLS policies are active
- [ ] Tested on different devices/browsers

---

**Your Supabase integration is now complete!** 🎉

Your website now has a professional database backend for storing contact submissions and newsletter subscriptions, with proper security measures in place.
