const { createClient } = require('@supabase/supabase-js');

const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDc2NzQsImV4cCI6MjA5MTM4MzY3NH0.Fnk9Nnh2yFvvhCGvsBbuN3C2Bo8l2jxcPt3vqwm2zrI';

const supabase = createClient(PROD_URL, ANON_KEY);

async function testAnonUpload() {
  console.log('Testing Anonymous Upload...');
  const testFile = Buffer.from('test content');
  const fileName = `test-${Date.now()}.png`;
  
  const { data, error } = await supabase.storage
    .from('invitations')
    .upload(`images/${fileName}`, testFile, { contentType: 'image/png' });

  if (error) {
    console.error('ANON UPLOAD FAILED:', error);
    console.log('\nThis means RLS policies are blocking the upload.');
  } else {
    console.log('ANON UPLOAD SUCCESSFUL!', data);
    // Cleanup
    await supabase.storage.from('invitations').remove([`images/${fileName}`]);
  }
}

testAnonUpload();
