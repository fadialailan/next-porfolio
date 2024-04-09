-- drop constrains
ALTER TABLE IF EXISTS project_text DROP CONSTRAINT IF EXISTS project_text_project_id_fkey;
ALTER TABLE IF EXISTS project_text DROP CONSTRAINT IF EXISTS project_text_language_iso_code_fkey;

-- drop tables
DROP TABLE IF EXISTS project_text;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS language;

-- drop types
DROP TYPE IF EXISTS text_direction;

-- create types
CREATE TYPE text_direction AS ENUM ('rtl', 'ltr');

-- create tables
CREATE TABLE project(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	image_path TEXT,
	github_url TEXT,
	website_url TEXT
);

CREATE TABLE language (
	iso_code CHAR(2) PRIMARY KEY,
	name TEXT NOT NULL,
	direction text_direction NOT NULL,
	text_home TEXT NOT NULL,
  text_title TEXT NOT NULL,
  text_description TEXT NOT NULL
);

CREATE TABLE project_text(
	language_iso_code CHAR(2) NOT NULL,
	project_id UUID NOT NULL,
	name TEXT NOT NULL,
	description TEXT NOT NULL,
	PRIMARY KEY(language_iso_code, project_id),
	FOREIGN KEY(project_id) REFERENCES project(id),
	FOREIGN KEY(language_iso_code) REFERENCES language(iso_code)
);
