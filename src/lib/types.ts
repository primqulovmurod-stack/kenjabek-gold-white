export interface InvitationContent {
  groomName: string;
  brideName: string;
  phone?: string;
  date: string;
  time: string;
  locationName: string;
  locationUrl: string;
  imageUrl: string;
  musicUrl: string;
  theme: string;
  locationAddress?: string;
  cardName?: string;
  cardNumber?: string;
  showGift?: boolean;
  description?: string;
}

export interface Invitation {
  id?: string;
  slug: string;
  is_paid: boolean;
  phone?: string;
  content: InvitationContent;
  user_id?: string;
  created_at?: string;
}
