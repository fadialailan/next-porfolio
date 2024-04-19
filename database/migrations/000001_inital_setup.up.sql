
-- create types
CREATE TYPE text_direction AS ENUM ('rtl', 'ltr');

-- create tables
CREATE TABLE IF NOT EXISTS project(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	image_path TEXT,
	github_url TEXT,
	website_url TEXT
);

CREATE TABLE IF NOT EXISTS language (
	iso_code CHAR(2) PRIMARY KEY,
	name TEXT NOT NULL,
	direction text_direction NOT NULL,
	text_home TEXT NOT NULL,
	text_title TEXT NOT NULL,
	text_description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS project_text(
	language_iso_code CHAR(2) NOT NULL,
	project_id UUID NOT NULL,
	name TEXT NOT NULL,
	description TEXT NOT NULL,
	PRIMARY KEY(language_iso_code, project_id),
	FOREIGN KEY(project_id) REFERENCES project(id),
	FOREIGN KEY(language_iso_code) REFERENCES language(iso_code)
);
