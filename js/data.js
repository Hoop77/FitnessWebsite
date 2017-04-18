var xmlData = "\
<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\
<Daten>\
\
	<Körperbereiche>\
		<Körperbereich Name=\"Schultern\" />\
		<Körperbereich Name=\"Oberkörper\" />\
		<Körperbereich Name=\"Rücken\" />\
	</Körperbereiche>\
\
	<Übungskategorien>\
		<Übungskategorie Name=\"Erwärmung\" />\
		<Übungskategorie Name=\"Kräftigung\" />\
	</Übungskategorien>\
\
	<Schwierigkeitsgrade>\
		<Schwierigkeitsgrad Name=\"leicht\" />\
		<Schwierigkeitsgrad Name=\"mittel\" />\
		<Schwierigkeitsgrad Name=\"schwer\" />\
	</Schwierigkeitsgrade>\
\
    <Übungen>\
        <Übung  Name=\"Liegestütze\"\
                Übungskategorie=\"Kräftigung\"\
				Schwierigkeitsgrad=\"leicht\"\
				BeschreibungStartposition=\"Beschreibung für Startposition\"\
				BeschreibungEndposition=\"Beschreibung für Endposition\">\
            \
			<Körperbereich>Oberkörper</Körperbereich>\
			<Körperbereich>Rücken</Körperbereich>\
\
			<Stichpunkt>Stichpunkt 1</Stichpunkt>\
			<Stichpunkt>Stichpunkt 2</Stichpunkt>\
			<Stichpunkt>Stichpunkt 3</Stichpunkt>\
        </Übung>\
\
		<Übung  Name=\"Rumpfbeugen\"\
                Übungskategorie=\"Erwärmung\"\
				Schwierigkeitsgrad=\"mittel\"\
				BeschreibungStartposition=\"Beschreibung für Startposition\"\
				BeschreibungEndposition=\"Beschreibung für Endposition\">\
            \
			<Körperbereich>Rücken</Körperbereich>\
\
			<Stichpunkt>Stichpunkt 1</Stichpunkt>\
			<Stichpunkt>Stichpunkt 2</Stichpunkt>\
			<Stichpunkt>Stichpunkt 3</Stichpunkt>\
        </Übung>\
\
		<Übung  Name=\"Situps\"\
                Übungskategorie=\"Kräftigung\"\
				Schwierigkeitsgrad=\"schwer\"\
				BeschreibungStartposition=\"Beschreibung für Startposition\"\
				BeschreibungEndposition=\"Beschreibung für Endposition\">\
            \
			<Körperbereich>Rücken</Körperbereich>\
\
			<Stichpunkt>Stichpunkt 1</Stichpunkt>\
			<Stichpunkt>Stichpunkt 2</Stichpunkt>\
			<Stichpunkt>Stichpunkt 3</Stichpunkt>\
        </Übung>\
    </Übungen>\
\
    <Krankheitsbilder>\
\
		<Krankheitsbild Name=\"Arthrose - Hüftgelenksprothese\">\
			<Übung>Liegestütze</Übung>\
		</Krankheitsbild>\
		<Krankheitsbild Name=\"Arthrose - Kniegelenksprothese\">\
			<Übung>Rumpfbeugen</Übung>\
			<Übung>Liegestütze</Übung>\
			<Übung>Situps</Übung>\
		</Krankheitsbild>\
		<Krankheitsbild Name=\"Asthma und COPD (Chronische obstruktive Lungenerkrankungen)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Bandscheibenvorfall\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Beinachsendeformitäten\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Bluthochdruck (Arterielle Hypertonie)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Diabetes melitus\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Fettleibigkeit (Adipositas)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Fußdeformitäten\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Gefäßverkalkung (Arteriosklerose)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Gelenksentzündungen (Arthritis)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Golferellenbogen (Epicindylitis ulnaris humeri)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Haltungsstörungen an der Wirblsäule (Hyperkyphose und Hyperlordose)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Herzinfarkt (Myocardinfarkt) \"></Krankheitsbild>\
		<Krankheitsbild Name=\"Hüftdysplasie\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Impingement (Schulter)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Karpaltunnelsyndrom\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Kreuzbandriss\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Lungeninfarkt (Embolie)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Meniskusschäden\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Morbus Bechterew (Spondylitis ankylosans) \"></Krankheitsbild>\
		<Krankheitsbild Name=\"Rheuma (Polyarthritis)\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Rotatorenmanschettenriss\"></Krankheitsbild>\
		<Krankheitsbild Name=\"Schlaganfall (Apoplex)\"></Krankheitsbild>\
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
		<Nebendiagnose Name=\"Herzinfarkt\">\
			<Übungsverbot>Liegestütze</Übungsverbot>\
		</Nebendiagnose>\
		<Nebendiagnose Name=\"Kreislaufstörung\">\
			<Übungsverbot>Liegestütze</Übungsverbot>\
		</Nebendiagnose>\
	</Nebendiagnosen>\
\
	<Trainingshinweise>\
		<Trainingshinweis Name=\"Trainingshinweis 1\"></Trainingshinweis>\
		<Trainingshinweis Name=\"Trainingshinweis 2\"></Trainingshinweis>\
		<Trainingshinweis Name=\"Trainingshinweis 3\"></Trainingshinweis>\
	</Trainingshinweise>\
\
</Daten>\
";

function getXmlData() { return xmlData; }
