-- drop constrains
ALTER TABLE IF EXISTS project_text DROP CONSTRAINT IF EXISTS project_text_project_id_fkey;
ALTER TABLE IF EXISTS project_text DROP CONSTRAINT IF EXISTS project_text_language_iso_code_fkey;

-- drop tables
DROP TABLE IF EXISTS project_text;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS language;

-- drop types
DROP TYPE IF EXISTS text_direction;
