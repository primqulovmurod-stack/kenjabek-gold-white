const { createClient } = require('@supabase/supabase-js');

const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwNzY3NCwiZXhwIjoyMDkxMzgzNjc0fQ.NeStPJ063yA6PKFXj1ALo6sQ0ZINkWKeqsE6-C9Qht8';

const supabase = createClient(PROD_URL, SERVICE_KEY);

async function investigateStorage() {
  console.log('Investigating Storage...');
  
  // 1. Check buckets
  const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
  if (bucketError) {
    console.error('Error listing buckets:', bucketError);
  } else {
    console.log('Buckets:', buckets.map(b => `${b.name} (Public: ${b.public})`).join(', '));
    
    // 2. If invitations bucket doesn't exist, try to create it
    if (!buckets.find(b => b.name === 'invitations')) {
      console.log('Invitations bucket not found. Creating it...');
      const { data, error } = await supabase.storage.createBucket('invitations', {
        public: true,
        allowedMimeTypes: ['image/*', 'audio/*'],
        fileSizeLimit: 20 * 1024 * 1024 // 20MB
      });
      if (error) console.error('Error creating bucket:', error);
      else console.log('Bucket created successfully.');
    } else {
      console.log('Invitations bucket already exists.');
      // Check if it is public
      const invBucket = buckets.find(b => b.name === 'invitations');
      if (!invBucket.public) {
        console.log('Bucket is PRIVATE. Updating to PUBLIC...');
        const { error } = await supabase.storage.updateBucket('invitations', { public: true });
        if (error) console.error('Error updating bucket:', error);
        else console.log('Bucket updated to public.');
      }
    }
  }

  // 3. Check latest invitations
  const { data, error } = await supabase
    .from('invitations')
    .select('id, slug, content, created_at')
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('Error fetching invitations:', error);
    return;
  }

  console.log('\nLatest 5 invitations:');
  data.forEach(inv => {
    console.log(`- Slug: ${inv.slug}`);
    console.log(`  ImageURL: ${inv.content.imageUrl}`);
    console.log('-------------------');
  });
}

investigateStorage();
