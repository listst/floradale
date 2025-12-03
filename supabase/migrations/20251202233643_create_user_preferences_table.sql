/*
  # User Preferences Table for Property Calculator

  1. New Tables
    - `user_preferences`
      - `id` (uuid, primary key) - Unique identifier for each preference record
      - `session_id` (text) - Anonymous session identifier for tracking user preferences
      - `rental_rate` (numeric) - User's custom rental rate per acre (defaults to 3000)
      - `created_at` (timestamptz) - When the preference was first created
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `user_preferences` table
    - Add policy allowing anonymous users to read their own preferences by session_id
    - Add policy allowing anonymous users to insert their preferences
    - Add policy allowing anonymous users to update their own preferences

  3. Indexes
    - Add index on session_id for fast lookups
*/

CREATE TABLE IF NOT EXISTS user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  rental_rate numeric NOT NULL DEFAULT 3000,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own preferences by session"
  ON user_preferences
  FOR SELECT
  TO anon
  USING (session_id = current_setting('request.jwt.claims', true)::json->>'session_id');

CREATE POLICY "Users can insert own preferences"
  ON user_preferences
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can update own preferences by session"
  ON user_preferences
  FOR UPDATE
  TO anon
  USING (session_id = current_setting('request.jwt.claims', true)::json->>'session_id')
  WITH CHECK (session_id = current_setting('request.jwt.claims', true)::json->>'session_id');

CREATE INDEX IF NOT EXISTS idx_user_preferences_session_id ON user_preferences(session_id);
