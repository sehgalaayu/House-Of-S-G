-- Wholesale enquiry submissions from the public inquiry form.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  shop text,
  email text not null,
  interest text,
  message text,
  -- set true once you've replied to the buyer; lets you filter the dashboard view
  handled boolean not null default false
);

alter table public.enquiries enable row level security;

-- The site uses the public anon key from the browser, so it may only INSERT.
-- No select/update/delete policy is defined for anon, so the public cannot
-- read back other people's enquiries or tamper with existing rows.
create policy "Anyone can submit an enquiry"
  on public.enquiries
  for insert
  to anon
  with check (true);
