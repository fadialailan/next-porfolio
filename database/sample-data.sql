INSERT INTO language (iso_code, name, direction, text_home, text_title, text_description) VALUES
	('en', 'English', 'ltr', 'Home', 'Porfolio Website', 'a porfolio website used to show my porfolio'),
	('ar', 'العربية', 'rtl', 'بيت', 'موقع المشاريع', 'موقع لإظهار المساريع التي عملة عليها')
;

DO $$
<<sample_projects>>
DECLARE
	project1_id UUID = gen_random_uuid();
	project2_id UUID = gen_random_uuid();
	project3_id UUID = gen_random_uuid();
	project4_id UUID = gen_random_uuid();
	project5_id UUID = gen_random_uuid();
BEGIN
	INSERT INTO project (id, image_path, github_url, website_url) VALUES 
		(
			project1_id,
			NULL,
			'https://github.com/fadialailan/main-webpage',
			'https://fadialailan.github.io/main-webpage/'
		),
		(
			project2_id,
			'images/cplusplus.svg',
			'https://github.com/fadialailan/pixel-art-scaler',
			NULL
		),
		(
			project3_id,
			NULL,
			NULL,
			NULL
		),
		(
			project4_id,
			NULL,
			NULL,
			NULL
		),
		(
			project5_id,
			NULL,
			NULL,
			NULL
		)
	;


	INSERT INTO project_text(language_iso_code, project_id, name, description) VALUES
		('en', project1_id, 'main-webpage', 'the main webpage'),
		('en', project2_id, 'pixel-art-scaler', 'a pixel art scaler'),
		('en', project3_id, 'tool 1', 'tool 1'),
		('en', project4_id, 'tool with a very long name that will be croped a bit', 'and this is a very long description for the tool with a very long name'),
		('en', project5_id, 'tool 2', 'tool 2'),
		('ar', project1_id, 'الصفحة-الرأيسية', 'الصفحة الرأيسية'),
		('ar', project2_id, 'مكبر-صور-البكسل', 'مكبر صور البكسل')
	;
END;
$$

