-- This file creates and adds the rows to the files
-- here is the psql url to the database ----> postgres://fbhhtjnu:7nX6UUwB6gHXtEweTcwOjYXX2bm4ZtEW@fanny.db.elephantsql.com/fbhhtjnu
-- User and Default database -----> fbhhtjnu
-- Password ----> 7nX6UUwB6gHXtEweTcwOjYXX2bm4ZtEW
-- Server -----> fanny.db.elephantsql.com


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.pokemon (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "link" varchar NOT NULL,
  CONSTRAINT "pokemon_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.instruments (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "link" varchar NOT NULL,
  CONSTRAINT "instruments_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.gaffes (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "link" varchar NOT NULL,
  CONSTRAINT "gaffes_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.presets (
  "name" serial NOT NULL,
  
)

CREATE TABLE public.presets (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  CONSTRAINT "presets_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);
INSERT INTO public.presets(name) VALUES ('pokemon');
INSERT INTO public.presets(name) VALUES ('instruments');
INSERT INTO public.presets(name) VALUES ('gaffes');

CREATE TABLE public.presetSongs (
 	"presetName" varchar NOT NULL,
	"sound" varchar NOT NULL
)

CREATE TABLE public.presetSongs (
 	presetName varchar NOT NULL,
	sound varchar NOT NULL
)


CREATE TABLE public.soundlinks (
 	sound varchar NOT NULL,
	link varchar NOT NULL
)

-- INSERT INTO public.pokemon Values (1, 'pikachu', 'https://www.pokezorworld.com/anime/wav/pikach.wav');
-- INSERT INTO public.pokemon Values (2, 'machoke', 'https://www.pokezorworld.com/anime/wav/machoke.wav');
-- INSERT INTO public.pokemon Values (3, 'charmander', 'https://www.pokezorworld.com/anime/wav/charmander.wav');
-- INSERT INTO public.pokemon Values (4, 'brock', 'https://www.pokezorworld.com/anime/wav/brock.wav');
-- INSERT INTO public.pokemon Values (5, 'bulbasaur', 'https://www.pokezorworld.com/anime/wav/bulbasaur.wav');
-- INSERT INTO public.pokemon Values (6, 'vulpix', 'https://www.pokezorworld.com/anime/wav/vulpix.wav');
-- INSERT INTO public.pokemon Values (7, 'raichu', 'https://www.pokezorworld.com/anime/wav/raiiiiiichu.wav');
-- INSERT INTO public.pokemon Values (8, 'who_is_that_pokemon', 'https://www.pokezorworld.com/anime/wav/whosthatpokemon.wav');
-- INSERT INTO public.pokemon Values (9, 'ash_boogy', 'https://www.pokezorworld.com/anime/wav/ash.wav');
-- INSERT INTO public.pokemon Values (10, 'meowth', 'https://www.pokezorworld.com/anime/wav/meowth.wav');



-- INSERT INTO public.instruments Values (1, 'angklung', 'https://www.imit.org.uk/sound-clips/Angklung.mp3');
-- INSERT INTO public.instruments Values (2, 'japanese_flute', 'https://www.imit.org.uk/sound-clips/JapaneseBambooFlute.mp3');
-- INSERT INTO public.instruments Values (3, 'marimba', 'https://www.imit.org.uk/sound-clips/Marimba.mp3');
-- INSERT INTO public.instruments Values (4, 'organ', 'https://www.imit.org.uk/sound-clips/Organ.mp3');
-- INSERT INTO public.instruments Values (5, 'ratchet', 'https://www.imit.org.uk/sound-clips/Ratchet.mp3');
-- INSERT INTO public.instruments Values (6, 'recorder', 'https://www.imit.org.uk/sound-clips/DescantRecorder.mp3');
-- INSERT INTO public.instruments Values (7, 'triangle', 'https://www.imit.org.uk/sound-clips/Triangle.mp3');
-- INSERT INTO public.instruments Values (8, 'vibraphone', 'https://www.imit.org.uk/sound-clips/Vibes.mp3');
-- INSERT INTO public.instruments Values (9, 'whip', 'https://www.imit.org.uk/sound-clips/Whip.mp3');
-- INSERT INTO public.instruments Values (10, 'xylophone', 'https://www.imit.org.uk/sound-clips/Xylophone.mp3');
-- INSERT INTO public.instruments Values (11, 'zither', 'https://www.imit.org.uk/sound-clips/Zither.mp3');

-- INSERT INTO public.gaffes Values (1, 'windows_shutdown', 'https://quicksounds.com/uploads/tracks/1935579566_1507815204_1880832073.mp3');
-- INSERT INTO public.gaffes Values (2, 'two_hours_later', 'https://quicksounds.com/uploads/tracks/1337744745_187053440_1138467095.mp3');
-- INSERT INTO public.gaffes Values (3, 'why_are_you_running', 'https://quicksounds.com/uploads/tracks/155995082_386652093_1130616536.mp3');
-- INSERT INTO public.gaffes Values (4, 'wow', 'https://quicksounds.com/uploads/tracks/1580685735_973697727_1735567408.mp3');
-- INSERT INTO public.gaffes Values (5, 'wahwahwah', 'https://quicksounds.com/uploads/tracks/684591523_732065353_968365190.mp3');
-- INSERT INTO public.gaffes Values (6, 'gta', 'https://quicksounds.com/uploads/tracks/1275579653_21868556_1281691815.mp3');
-- INSERT INTO public.gaffes Values (7, 'fbi', 'https://quicksounds.com/uploads/tracks/698531217_377041138_806871204.mp3');
-- INSERT INTO public.gaffes Values (8, 'you_what', 'https://quicksounds.com/uploads/tracks/18341354_1319759950_1949056387.mp3');
-- INSERT INTO public.gaffes Values (9, 'csgo', 'https://quicksounds.com/uploads/tracks/2032906189_423862276_1845274770.mp3');
-- INSERT INTO public.gaffes Values (10, 'hellno', 'https://quicksounds.com/uploads/tracks/1276474019_2059256748_1376796276.mp3');
-- INSERT INTO public.gaffes Values (11, 'what_are_those', 'https://quicksounds.com/uploads/tracks/171945261_1770635891_1009927640.mp3');
-- INSERT INTO public.gaffes Values (12, 'minecraft', 'https://quicksounds.com/uploads/tracks/790215121_1967163684_1652412828.mp3');

INSERT INTO public.soundLinks Values ('pikachu', 'https://www.pokezorworld.com/anime/wav/pikach.wav');
INSERT INTO public.soundLinks Values ('machoke', 'https://www.pokezorworld.com/anime/wav/machoke.wav');
INSERT INTO public.soundLinks Values ('charmander', 'https://www.pokezorworld.com/anime/wav/charmander.wav');
INSERT INTO public.soundLinks Values ('brock', 'https://www.pokezorworld.com/anime/wav/brock.wav');
INSERT INTO public.soundLinks Values ('bulbasaur', 'https://www.pokezorworld.com/anime/wav/bulbasaur.wav');
INSERT INTO public.soundLinks Values ('vulpix', 'https://www.pokezorworld.com/anime/wav/vulpix.wav');
INSERT INTO public.soundLinks Values ('raichu', 'https://www.pokezorworld.com/anime/wav/raiiiiiichu.wav');
INSERT INTO public.soundLinks Values ('who_is_that_pokemon', 'https://www.pokezorworld.com/anime/wav/whosthatpokemon.wav');
INSERT INTO public.soundLinks Values ('ash_boogy', 'https://www.pokezorworld.com/anime/wav/ash.wav');
INSERT INTO public.soundLinks Values ('meowth', 'https://www.pokezorworld.com/anime/wav/meowth.wav');



INSERT INTO public.soundLinks Values ('angklung', 'https://www.imit.org.uk/sound-clips/Angklung.mp3');
INSERT INTO public.soundLinks Values ('japanese_flute', 'https://www.imit.org.uk/sound-clips/JapaneseBambooFlute.mp3');
INSERT INTO public.soundLinks Values ('marimba', 'https://www.imit.org.uk/sound-clips/Marimba.mp3');
INSERT INTO public.soundLinks Values ('organ', 'https://www.imit.org.uk/sound-clips/Organ.mp3');
INSERT INTO public.soundLinks Values ('ratchet', 'https://www.imit.org.uk/sound-clips/Ratchet.mp3');
INSERT INTO public.soundLinks Values ('recorder', 'https://www.imit.org.uk/sound-clips/DescantRecorder.mp3');
INSERT INTO public.soundLinks Values ('triangle', 'https://www.imit.org.uk/sound-clips/Triangle.mp3');
INSERT INTO public.soundLinks Values ('vibraphone', 'https://www.imit.org.uk/sound-clips/Vibes.mp3');
INSERT INTO public.soundLinks Values ('whip', 'https://www.imit.org.uk/sound-clips/Whip.mp3');
INSERT INTO public.soundLinks Values ('xylophone', 'https://www.imit.org.uk/sound-clips/Xylophone.mp3');
INSERT INTO public.soundLinks Values ('zither', 'https://www.imit.org.uk/sound-clips/Zither.mp3');

INSERT INTO public.soundLinks Values ('windows_shutdown', 'https://quicksounds.com/uploads/tracks/1935579566_1507815204_1880832073.mp3');
INSERT INTO public.soundLinks Values ('two_hours_later', 'https://quicksounds.com/uploads/tracks/1337744745_187053440_1138467095.mp3');
INSERT INTO public.soundLinks Values ('why_are_you_running', 'https://quicksounds.com/uploads/tracks/155995082_386652093_1130616536.mp3');
INSERT INTO public.soundLinks Values ('wow', 'https://quicksounds.com/uploads/tracks/1580685735_973697727_1735567408.mp3');
INSERT INTO public.soundLinks Values ('wahwahwah', 'https://quicksounds.com/uploads/tracks/684591523_732065353_968365190.mp3');
INSERT INTO public.soundLinks Values ('gta', 'https://quicksounds.com/uploads/tracks/1275579653_21868556_1281691815.mp3');
INSERT INTO public.soundLinks Values ('fbi', 'https://quicksounds.com/uploads/tracks/698531217_377041138_806871204.mp3');
INSERT INTO public.soundLinks Values ('you_what', 'https://quicksounds.com/uploads/tracks/18341354_1319759950_1949056387.mp3');
INSERT INTO public.soundLinks Values ('csgo', 'https://quicksounds.com/uploads/tracks/2032906189_423862276_1845274770.mp3');
INSERT INTO public.soundLinks Values ('hellno', 'https://quicksounds.com/uploads/tracks/1276474019_2059256748_1376796276.mp3');
INSERT INTO public.soundLinks Values ('what_are_those', 'https://quicksounds.com/uploads/tracks/171945261_1770635891_1009927640.mp3');
INSERT INTO public.soundLinks Values ('minecraft', 'https://quicksounds.com/uploads/tracks/790215121_1967163684_1652412828.mp3');


Insert INTO public.presetSongs Values ('pokemon', 'pikachu');
INSERT INTO public.presetSongs Values ('pokemon', 'machoke');
INSERT INTO public.presetSongs Values ('pokemon', 'charmander');
INSERT INTO public.presetSongs Values ('pokemon', 'brock');
INSERT INTO public.presetSongs Values ('pokemon', 'bulbasaur');
INSERT INTO public.presetSongs Values ('pokemon', 'vulpix');
INSERT INTO public.presetSongs Values ('pokemon', 'raichu');
INSERT INTO public.presetSongs Values ('pokemon', 'who_is_that_pokemon');
INSERT INTO public.presetSongs Values ('pokemon', 'ash_boogy');
INSERT INTO public.presetSongs Values ('pokemon', 'meowth');



INSERT INTO public.presetSongs Values ('instruments', 'angklung');
INSERT INTO public.presetSongs Values ('instruments', 'japanese_flute');
INSERT INTO public.presetSongs Values ('instruments', 'marimba');
INSERT INTO public.presetSongs Values ('instruments', 'organ');
INSERT INTO public.presetSongs Values ('instruments', 'ratchet');
INSERT INTO public.presetSongs Values ('instruments', 'recorder');
INSERT INTO public.presetSongs Values ('instruments', 'triangle');
INSERT INTO public.presetSongs Values ('instruments', 'vibraphone');
INSERT INTO public.presetSongs Values ('instruments', 'whip');
INSERT INTO public.presetSongs Values ('instruments', 'xylophone');
INSERT INTO public.presetSongs Values ('instruments', 'zither');

INSERT INTO public.presetSongs Values ('gaffes', 'windows_shutdown');
INSERT INTO public.presetSongs Values ('gaffes', 'two_hours_later');
INSERT INTO public.presetSongs Values ('gaffes', 'why_are_you_running');
INSERT INTO public.presetSongs Values ('gaffes', 'wow');
INSERT INTO public.presetSongs Values ('gaffes', 'wahwahwah');
INSERT INTO public.presetSongs Values ('gaffes', 'gta');
INSERT INTO public.presetSongs Values ('gaffes', 'fbi');
INSERT INTO public.presetSongs Values ('gaffes', 'you_what');
INSERT INTO public.presetSongs Values ('gaffes', 'csgo');
INSERT INTO public.presetSongs Values ('gaffes', 'hellno');
INSERT INTO public.presetSongs Values ('gaffes', 'what_are_those');
INSERT INTO public.presetSongs Values ('gaffes', 'minecraft');


-- select * from presets
-- Join presetsongs
-- ON presets.name = presetsongs."presetName"
-- Join soundlinks
-- ON presetsongs."sound" = soundLinks.sound


--testing out the creating different presets
Insert INTO public.presetSongs Values ('custom1', 'pikachu');
Insert INTO public.presetSongs Values ('custom1', 'minecraft');
Insert INTO public.presetSongs Values ('custom1', 'angklung');
Insert INTO public.presetSongs Values ('custom1', 'wow');
Insert INTO public.presetSongs Values ('custom1', 'vulpix');
Insert INTO public.presetSongs Values ('custom1', 'recorder');
Insert INTO public.presetSongs Values ('custom1', 'brock');
Insert INTO public.presetSongs Values ('custom1', 'you_what');
Insert INTO public.presetSongs Values ('custom1', 'fbi');
Insert INTO public.presetSongs Values ('custom1', 'triangle');
Insert INTO public.presetSongs Values ('custom1', 'machoke');








ALTER TABLE presetsongs
ADD username varchar;

ALTER TABLE presetsongs
ADD index bigint;

ALTER TABLE presets
ADD username varchar;

CREATE TABLE public.users (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "password" varchar NOT NULL,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

