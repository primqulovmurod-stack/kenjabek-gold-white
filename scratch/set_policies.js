const { createClient } = require('@supabase/supabase-js');

const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwNzY3NCwiZXhwIjoyMDkxMzgzNjc0fQ.NeStPJ063yA6PKFXj1ALo6sQ0ZINkWKeqsE6-C9Qht8';

const supabase = createClient(PROD_URL, SERVICE_KEY);

async function setStoragePolicies() {
  console.log('Setting Storage Policies...');
  
  // Supabase storage policies (RLS) are usually set via SQL.
  // Unfortunately, we can't easily set them via the JS client for storage.
  // But we can check if the bucket is public.
  
  const { data: bucket, error } = await supabase.storage.getBucket('invitations');
  if (error) {
     console.error('Error getting bucket:', error);
     return;
  }
  
  console.log('Bucket settings:', bucket);
  
  if (!bucket.public) {
      console.log('Setting bucket to PUBLIC...');
      await supabase.storage.updateBucket('invitations', { public: true });
  }

  console.log('Note: If uploads still fail, RLS policies must be set in Supabase Dashboard.');
  console.log('For PUBLIC buckets, you usually need to allow INSERT/SELECT/UPDATE for "anon".');
}

setStoragePolicies();
