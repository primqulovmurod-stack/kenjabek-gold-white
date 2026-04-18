# Dashboard Implementation Plan

## 1. Authentication
- [ ] Create `src/lib/supabase.ts` for Supabase client initialization.
- [ ] Implement `src/app/dashboard/login/page.tsx` with "Google Login" button.

## 2. Dashboard Shell
- [ ] Create `src/app/dashboard/layout.tsx` for navigation (Mening taklifnomalarim, Yangi yaratish, Profil).
- [ ] Update `src/app/dashboard/page.tsx` to show a list of invitations.

## 3. Creating/Editing Invitations
- [ ] Create `src/app/dashboard/new/page.tsx` for template selection.
- [ ] Create `src/app/dashboard/edit/[id]/page.tsx` for the editor (Form + Preview).
- [ ] Implement live preview inside the editor.

## 4. Payment Flow
- [ ] Create a `PaymentModal` component.
- [ ] Integrate it into the export flow.

## 5. Dynamic Links
- [x] Create `src/app/[slug]/page.tsx` to fetch invitation data and render the correct template.

## 6. Premium UI (Shadcn style)
- [x] Use `lucide-react` for icons.
- [x] Use `framer-motion` for smooth transitions.
- [x] Follow the "Taklifnoma.Asia" gold/black/white theme.

## 7. Recent Fixes (2026-04-18)
- [x] Fix `generateSlug` to handle `DD.MM.YYYY` format and dots.
- [x] Update `[slug]/layout.tsx` to fetch the latest invitation record for metadata.
- [x] Added success feedback and automatic link copy to the Editor.

## Next Steps
- [ ] Implement Payment Flow (Checkout / Click / Payme / Uzum).
- [ ] Finalize Admin Dashboard for approving payments.
- [ ] Add visitor statistics for invitations.
