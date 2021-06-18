import { browser } from '$app/env';
import { createClient } from '@supabase/supabase-js';
import { derived, readable } from 'svelte/store';
import type { AuthSession, AuthUser } from '@supabase/supabase-js';
import type { Readable } from 'svelte/store';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzA1OTI4NSwiZXhwIjoxOTM4NjM1Mjg1fQ.9OiUIjKysUqWz_Y2IToCtMz6Wim2PdM1kq0HalmGsec'
const SUPABASE_URL = "https://zyujhjqnioinakawkpfu.supabase.co"
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const auth = readable<AuthSession>(null, (set) => {
	const session = supabase.auth.session();

	if (session) {
		set(session);
	}

	const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
		set(session);
	});

	return () => {
		authListener.unsubscribe();
	};
});

export const users = derived<Readable<AuthSession>, AuthUser>(auth, ($auth) => $auth?.user);

