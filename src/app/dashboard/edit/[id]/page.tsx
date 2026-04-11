import React from 'react';
import EditClient from './EditClient';

/**
 * Next.js 15 Server Component for the Edit Page.
 * This component handles the async params from the dynamic route
 * and passes them down to the Client Component (EditClient).
 */
export default async function EditInvitationPage(props: { params: Promise<{ id: string }> }) {
  // 1. Await params as required by Next.js 15
  const params = await props.params;
  const id = params.id;

  // 2. Return the Client Component
  return (
    <div className="min-h-screen bg-black">
      <EditClient id={id} />
    </div>
  );
}

// Next.js can pre-render this segment dynamically
export const dynamic = 'force-dynamic';
