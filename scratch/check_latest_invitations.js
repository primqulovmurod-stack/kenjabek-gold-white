const { createClient } = require('@supabase/supabase-js');

const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const PROD_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDc2NzQsImV4cCI6MjA5MTM4MzY3NH0.Fnk9Nnh2yFvvhCGvsBbuN3C2Bo8l2jxcPt3vqwm2zrI';

const supabase = createClient(PROD_URL, PROD_ANON_KEY);

async function checkLatestInvitations() {
  const { data, error } = await supabase
    .from('invitations')
    .select('id, slug, content, created_at')
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('Error fetching invitations:', error);
    return;
  }

  const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
  if (bucketError) {
    console.error('Error listing buckets:', bucketError);
  } else {
    console.log('Buckets:', buckets.map(b => b.name).join(', '));
  }

  const { data: files, error: storageError } = await supabase.storage
    .from('invitations')
    .list('images', { limit: 10 });

  if (storageError) {
    console.error('Error listing storage files:', storageError);
  } else {
    console.log('Files in storage (images/):');
    files.forEach(f => console.log(`- ${f.name}`));
  }

  console.log('Latest 5 invitations:');
  data.forEach(inv => {
    console.log(`- Slug: ${inv.slug}`);
    console.log(`  Created: ${inv.created_at}`);
    console.log(`  ImageURL: ${inv.content.imageUrl}`);
    console.log(`  ImageURL2: ${inv.content.imageUrl2}`);
    console.log(`  ImageURL3: ${inv.content.imageUrl3}`);
    console.log(`  Theme: ${inv.content.theme}`);
    console.log('-------------------');
  });
}

checkLatestInvitations();
