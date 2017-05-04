var xmlData = "\
<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\
<Daten>\
\
	<Körperbereiche>\
		<Körperbereich Name=\"Oberer Rücken (HWS + BWS)\" />\
		<Körperbereich Name=\"Unterer Rücken (LWS + Becken)\" />\
		<Körperbereich Name=\"Schulter\" />\
		<Körperbereich Name=\"Ellenbogen\" />\
		<Körperbereich Name=\"Hand und Finger\" />\
		<Körperbereich Name=\"Arm\" />\
		<Körperbereich Name=\"Bauch\" />\
		<Körperbereich Name=\"Hüfte\" />\
		<Körperbereich Name=\"Knie\" />\
		<Körperbereich Name=\"Fuß und Zehen\" />\
		<Körperbereich Name=\"Bein\" />\
		<Körperbereich Name=\"Gesamter Körper\" />\
	</Körperbereiche>\
\
	<Übungskategorien>\
		<Übungskategorie Name=\"Allgemeine Erwärmung\" />\
		<Übungskategorie Name=\"Spezielle Erwärmung\" />\
		<Übungskategorie Name=\"Mobilisation\" />\
		<Übungskategorie Name=\"Dehnung\" />\
		<Übungskategorie Name=\"Kräftigung\" />\
		<Übungskategorie Name=\"Stabilisation\" />\
	</Übungskategorien>\
\
	<Schwierigkeitsgrade>\
		<Schwierigkeitsgrad Name=\"leicht\" Farbe=\"#00FF00\" />\
		<Schwierigkeitsgrad Name=\"mittel\" Farbe=\"#FFFF00\" />\
		<Schwierigkeitsgrad Name=\"schwer\" Farbe=\"#FF0000\" />\
	</Schwierigkeitsgrade>\
\
	<Praxis>\
		<Übungen>\
			<Übung  Name=\"Liegestütze\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"schwer\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Arm</Körperbereich>\
				<Körperbereich>Gesamter Körper</Körperbereich>\
\
				<Stichpunkt>Das ist der erste Stichpunkt.</Stichpunkt>\
				<Stichpunkt>Beine ausgestreckt lassen.</Stichpunkt>\
				<Stichpunkt>Arme im 90° Winkel zum Boden angewinkelt.</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Situps\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"schwer\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Bauch</Körperbereich>\
\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Kreisende Handgelenksmobilisation beidseitig\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Hand und Finger</Körperbereich>\
			\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
			\
			<Übung  Name=\"Fingertippen\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Hand und Finger</Körperbereich>\
			\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Pumpübung\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Hand und Finger</Körperbereich>\
			\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Unterarmdrehen\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Hand und Finger</Körperbereich>\
				<Körperbereich>Ellenbogen</Körperbereich>\
			\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"U-Haltung (Außen- und Innenrotation)\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"mittel\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Achterkreisen\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"schwer\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
				\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Schulter- und Armkreisen\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Arme und Schultern sind locker und entspannt\"\
					BeschreibungEndposition=\"Arme in einer entspannten Haltung nach hinten oben kreisen lassen\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
				\
				<Stichpunkt>aufrechte Körperhaltung</Stichpunkt>\
				<Stichpunkt>Schultern verstärkt nach hinten und unten bewegen</Stichpunkt>\
				<Stichpunkt>mit kleinen Kreisen beginnen, schließlich so groß wie möglich kreisen</Stichpunkt>\
			</Übung>\
			\
			<Übung  Name=\"Armpendel ohne Gewicht\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
\
\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Schulteröffnung an der Wand\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Engel an der Wand\"\
					Übungskategorie=\"Spezielle Erwärmung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
		\
			<Übung  Name=\"Armpendel mit Gewicht\"\
					Übungskategorie=\"Mobilisation\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
		\
			<Übung  Name=\"Schürzengriff\"\
					Übungskategorie=\"Mobilisation\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
				<Körperbereich>Ellenbogen</Körperbereich>\
			\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Über den Tisch wischen\"\
					Übungskategorie=\"Mobilisation\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
				<Körperbereich>Ellenbogen</Körperbereich>\
			\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Außenrotation in Nullstellung\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"mittel\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
			\
			<Übung  Name=\"Außenrotation in 90°-Stellung\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"schwer\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Ballgreifen\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Hand und Finger</Körperbereich>\
				<Körperbereich>Ellenbogen</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Bicepscurls mit der Hantel\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"schwer\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Ellenbogen</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Diagonale Armbewegung mit der Hantel\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"schwer\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
				<Körperbereich>Ellenbogen</Körperbereich>\
				<Körperbereich>Hand und Finger</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Nachlassendes Handgelenk (exzentrisch)\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"mittel\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Ellenbogen</Körperbereich>\
				<Körperbereich>Hand und Finger</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Frontheben\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"mittel\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
									\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Handgelenksbeugung\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Ellenbogen</Körperbereich>\
				<Körperbereich>Hand und Finger</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Handgelenksstreckung\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"leicht\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Ellenbogen</Körperbereich>\
				<Körperbereich>Hand und Finger</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Handrückenstand\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"mittel\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Ellenbogen</Körperbereich>\
				<Körperbereich>Hand und Finger</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Heranziehen des Armes mit Theraband\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"schwer\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Schulter</Körperbereich>\
								\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
			<Übung  Name=\"Klimmzug an der Tür(klinke)\"\
					Übungskategorie=\"Kräftigung\"\
					Schwierigkeitsgrad=\"mittel\"\
					BeschreibungStartposition=\"Beschreibung für Startposition\"\
					BeschreibungEndposition=\"Beschreibung für Endposition\">\
				\
				<Körperbereich>Ellenbogen</Körperbereich>\
				<Körperbereich>Schulter</Körperbereich>\
						\
				<Stichpunkt>Stichpunkt 1</Stichpunkt>\
				<Stichpunkt>Stichpunkt 2</Stichpunkt>\
				<Stichpunkt>Stichpunkt 3</Stichpunkt>\
			</Übung>\
\
		</Übungen>\
\
		<Krankheitsbilder>\
\
			<Krankheitsbild Name=\"Arthrose - Hüftgelenksprothese\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Arthrose - Kniegelenksprothese\">\
				<Übung>Liegestütze</Übung>\
				<Übung>Situps</Übung>\
			</Krankheitsbild>\
			<Krankheitsbild Name=\"Bandscheibenvorfall\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Beinachsendeformitäten\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Fußdeformitäten\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Gelenksentzündungen (Arthritis)\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Golferellenbogen (Epicindylitis ulnaris humeri)\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Haltungsabweichungen der Wirbelsäule (Rundrücken, Hohlrücken, Hohlrundrücken)\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Hüftdysplasie\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Impingement (Schulter)\">\
				<Übung>Liegestütze</Übung></Krankheitsbild>\
			<Krankheitsbild Name=\"Karpaltunnelsyndrom\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Kreuzbandriss\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Meniskusschäden\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Morbus Bechterew (Spondylitis ankylosans) \"></Krankheitsbild>\
			<Krankheitsbild Name=\"Rheuma (Polyarthritis)\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Rotatorenmanschettenriss\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Schleimbeutelentzündung (Bursitis)\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Schultergelenksluxation\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Schulter-Nacken-Beschwerden (Oberes gekreuztes Syndrom)\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Skoliose\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Spinalkanalstenose\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Tennisellenbogen (Epicindylitis radialis humeri)\"></Krankheitsbild>\
			<Krankheitsbild Name=\"Zehendeformitäten\"></Krankheitsbild>\
\
		</Krankheitsbilder>\
\
		<Nebendiagnosen>\
			<Nebendiagnose Name=\"Asthma und COPD (Chronische obstruktive Lungenerkrankungen)\"></Nebendiagnose>\
			<Nebendiagnose Name=\"Bluthochdruck (Arterielle Hypertonie)\"></Nebendiagnose>\
			<Nebendiagnose Name=\"Diabetes melitus\"></Nebendiagnose>\
			<Nebendiagnose Name=\"Fettleibigkeit (Adipositas)\"></Nebendiagnose>\
			<Nebendiagnose Name=\"Gefäßverkalkung (Arteriosklerose)\"></Nebendiagnose>\
			<Nebendiagnose Name=\"Herzinfarkt\">\
				<Übungsverbot>Liegestütze</Übungsverbot>\
			</Nebendiagnose>\
			<Nebendiagnose Name=\"Rheuma\"></Nebendiagnose>\
			<Nebendiagnose Name=\"Schlaganfall (Apoplex)\"></Nebendiagnose>\
		</Nebendiagnosen>\
	</Praxis>\
\
	<Theorie>\
		<Krankheitsbilder>\
			<Krankheitsbild Name=\"Bandscheibenvorfall\"></Krankheitsbild>\
		</Krankheitsbilder>\
\
		<Trainingshinweise>\
			<Trainingshinweis Name=\"Trainingshinweis 1\"></Trainingshinweis>\
			<Trainingshinweis Name=\"Trainingshinweis 2\"></Trainingshinweis>\
			<Trainingshinweis Name=\"Trainingshinweis 3\"></Trainingshinweis>\
		</Trainingshinweise>\
	</Theorie>\
\
	<FAQ>\
		<Thema Name=\"Allgemeine Fragen\">\
			<Eintrag>\
				<Frage>Allgemein: Das ist die Frage zum 1. Eintrag</Frage>\
				<Antwort>Allgemein: Das ist die Antwort zum 1. Eintrag</Antwort>\
			</Eintrag>\
\
			<Eintrag>\
				<Frage>Allgemein: Das ist die Frage zum 2. Eintrag</Frage>\
				<Antwort>Allgemein: Das ist die Antwort zum 2. Eintrag</Antwort>\
			</Eintrag>\
		</Thema>\
\
		<Thema Name=\"Technische Fragen\">\
			<Eintrag>\
				<Frage>Technik: Das ist die Frage zum 1. Eintrag</Frage>\
				<Antwort>Technik: Das ist die Antwort zum 1. Eintrag</Antwort>\
			</Eintrag>\
\
			<Eintrag>\
				<Frage>Technik: Das ist die Frage zum 2. Eintrag</Frage>\
				<Antwort>Technik: Das ist die Antwort zum 2. Eintrag</Antwort>\
			</Eintrag>\
		</Thema>\
	</FAQ>\
\
</Daten>\
";

function getXmlData() { return xmlData; }
