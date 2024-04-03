INSERT INTO language (iso_code, name, direction) VALUES
	('en', 'English', 'ltr'),
	('ar', 'العربية', 'rtl')
;

DO $$
<<sample_projects>>
DECLARE
	project1_id UUID = gen_random_uuid();
	project2_id UUID = gen_random_uuid();
BEGIN
	INSERT INTO project (id, github_url, website_url) VALUES 
		(
			project1_id,
			'https://github.com/fadialailan/main-webpage',
			'https://fadialailan.github.io/main-webpage/'
		),
		(
			project2_id,
			'https://github.com/fadialailan/pixel-art-scaler',
			NULL
		)
	;


	INSERT INTO project_text(language_iso_code, project_id, name, description) VALUES
		('en', project1_id, 'main-webpage', 'the main webpage'),
		('en', project2_id, 'pixel-art-scaler', 'a pixel art scaler')
	;
END;
$$

