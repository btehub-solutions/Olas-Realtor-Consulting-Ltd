-- Supabase Database Schema for Olas Realtor Website
-- Run this in your Supabase SQL Editor

-- 1. Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies for contact_submissions
-- Allow anyone to insert (submit forms)
CREATE POLICY "Allow public insert" ON contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Only authenticated users can view submissions (for admin dashboard later)
CREATE POLICY "Allow authenticated read" ON contact_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- 5. Create Policies for newsletter_subscribers
-- Allow anyone to insert (subscribe)
CREATE POLICY "Allow public insert" ON newsletter_subscribers
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Only authenticated users can view subscribers
CREATE POLICY "Allow authenticated read" ON newsletter_subscribers
    FOR SELECT
    TO authenticated
    USING (true);

-- 6. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_active ON newsletter_subscribers(is_active);

-- 7. Optional: Create a view for active subscribers
CREATE OR REPLACE VIEW active_subscribers AS
SELECT id, email, subscribed_at
FROM newsletter_subscribers
WHERE is_active = TRUE
ORDER BY subscribed_at DESC;

-- Grant access to the view
GRANT SELECT ON active_subscribers TO anon, authenticated;

-- Success message
SELECT 'Database schema created successfully!' AS message;
