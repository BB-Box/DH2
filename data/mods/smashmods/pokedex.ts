export const BattlePokedex: {[k: string]: ModdedSpeciesData} = {
	baloon: {
		num: 1026,
		species: "Baloon",
		types: ["Fairy"],
		baseStats: {hp: 137, atk: 124, def: 142, spa: 102, spd: 12, spe: 83},
		abilities: {0: "Refrigerate", 1: "Contrary", H: "Symbiosis"},
		heightm: 1,
		weightkg: 35,
		color: "Pink",
		eggGroups: ["Undiscovered"],
	},
	gengaralola: {
		num: 1025,
		species: "Gengar-Alola",
		types: ["Dark", "Water"],
		baseStats: {hp: 70, atk: 45, def: 70, spa: 120, spd: 100, spe: 95},
		abilities: {0: "Fluffy"},
		heightm: 1.5,
		weightkg: 40.5,
		color: "Black",
		eggGroups: ["Amorphous"],
		otherFormes: ["gengaralolamega"],
	},
	gengaralolamega: {
		num: 1025,
		species: "Gengar-Alola-Mega",
		baseSpecies: "Gengar",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dark", "Water"],
		baseStats: {hp: 70, atk: 45, def: 90, spa: 160, spd: 120, spe: 115},
		abilities: {0: "Galvanize"},
		heightm: 1.4,
		weightkg: 40.5,
		color: "Black",
		eggGroups: ["Amorphous"],
	},
	nihilego: {
		num: 1024,
		inherit: true,
		baseStats: {hp: 101, atk: 82, def: 67, spa: 89, spd: 121, spe: 101},
		abilities: {0: "Levitate", H: "Unaware"},
	},
	flygon: {
		num: 1023,
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Levitate", 1: "Tinted Lens", H: "Sand Stream"},
	},
	lopunny: {
		num: 1022,
		species: "Lopunny",
		types: ["Fairy"],
		baseStats: {hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105},
		abilities: {0: "Cute Charm", 1: "Klutz", H: "Limber"},
		heightm: 1.2,
		weightkg: 33.3,
		color: "Brown",
		prevo: "buneary",
		evoLevel: 2,
		eggGroups: ["Field", "Human-Like"],
		otherFormes: ["lopunnymega"],
	},
	lopunnymega: {
		num: 1021,
		species: "Lopunny-Mega",
		baseSpecies: "Lopunny",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 65, atk: 136, def: 94, spa: 54, spd: 96, spe: 135},
		abilities: {0: "Scrappy"},
		heightm: 1.3,
		weightkg: 28.3,
		color: "Brown",
		eggGroups: ["Field", "Human-Like"],
	},
	doubladealola: {
		num: 1020,
		species: "Doublade-Alola",
		forme: "Alola",
		formeLetter: "A",
		types: ["Steel", "Water"],
		baseStats: {hp: 59, atk: 110, def: 130, spa: 35, spd: 79, spe: 35},
		abilities: {0: "Levitate"},
		heightm: 0.8,
		weightkg: 4.5,
		color: "Brown",
		evos: ["aegislash"],
		eggGroups: ["Mineral"],
	},
	banette: {
		num: 1019,
		species: "Banette",
		types: ["Ghost"],
		baseStats: {hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Cursed Body"},
		heightm: 1.1,
		weightkg: 12.5,
		color: "Black",
		prevo: "shuppet",
		evoLevel: 37,
		eggGroups: ["Amorphous"],
		otherFormes: ["banettemegax", "banettemegay"],
	},
	banettemegax: {
		num: 1019,
		species: "Banette-Mega-X",
		baseSpecies: "Banette",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 64, atk: 155, def: 85, spa: 83, spd: 103, spe: 65},
		abilities: {0: "Prankster"},
		heightm: 1.2,
		weightkg: 13,
		color: "Black",
		eggGroups: ["Amorphous"],
	},
	banettemegay: {
		num: 1019,
		species: "Banette-Mega-Y",
		baseSpecies: "Banette",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ghost", "Normal"],
		baseStats: {hp: 64, atk: 135, def: 85, spa: 83, spd: 93, spe: 95},
		abilities: {0: "Fluffy"},
		heightm: 1.2,
		weightkg: 13,
		color: "Black",
		eggGroups: ["Amorphous"],
	},
	trapinch: {
		num: 1018,
		inherit: true,
		types: ["Ground", "Dark"],
		baseStats: {hp: 65, atk: 100, def: 65, spa: 45, spd: 65, spe: 50},
		abilities: {0: "Hyper Cutter", 1: "Arena Trap", H: "Mold Breaker"},
	},
	camerupt: {
		num: 1017,
		species: "Camerupt",
		types: ["Fire", "Ground"],
		baseStats: {hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40},
		abilities: {0: "Magma Armor", 1: "Solid Rock", H: "Anger Point"},
		heightm: 1.9,
		weightkg: 220,
		color: "Red",
		evoLevel: 33,
		eggGroups: ["Field"],
		otherFormes: ["cameruptmega"],
	},
	cameruptmegay: {
		num: 1017,
		species: "Camerupt-Mega-y",
		baseSpecies: "Camerupt",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Ground"],
		baseStats: {hp: 70, atk: 120, def: 100, spa: 145, spd: 105, spe: 20},
		abilities: {0: "Sheer Force"},
		heightm: 2.5,
		weightkg: 320.5,
		color: "Red",
		eggGroups: ["Field"],
	},
	cameruptmegax: {
		num: 1017,
		species: "Camerupt-Mega-X",
		baseSpecies: "Camerupt",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Poison"],
		baseStats: {hp: 70, atk: 150, def: 90, spa: 105, spd: 75, spe: 70},
		abilities: {0: "Regenerator"},
		heightm: 2.5,
		weightkg: 320.5,
		color: "Red",
		eggGroups: ["Field"],
	},
	sillyputty: {
		num: 1016,
		species: "Silly Putty",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 110, atk: 60, def: 60, spa: 70, spd: 50, spe: 50},
		abilities: {0: "Ultimate Scout"},
		heightm: 0,
		weightkg: 0,
		color: "Purple",
		prevo: "wigglytuff",
		eggGroups: ["Undiscovered"],
	},
	steve: {
		num: 1015,
		species: "Steve",
		types: ["Normal"],
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Battle Armor", 1: "Hunger", H: "Miner"},
		heightm: 0,
		weightkg: 0,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	porygon2: {
		num: 1014,
		species: "Porygon2",
		types: ["Normal", "Electric"],
		gender: "N",
		baseStats: {hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60},
		abilities: {0: "Trace", 1: "Download", H: "Analytic", S: "Levitate"},
		heightm: 0.6,
		weightkg: 32.5,
		color: "Red",
		evos: ["porygonz"],
		evoLevel: 1,
		eggGroups: ["Mineral"],
	},
	lileepeternal: {
		num: 1013,
		species: "Lileep-Eternal",
		baseSpecies: "Lileep",
		forme: "Eternal",
		formeLetter: "E",
		types: ["Grass", "Water"],
		baseStats: {hp: 104, atk: 39, def: 104, spa: 104, spd: 104, spe: 39},
		abilities: {0: "Suction Cups", H: "Storm Drain"},
		heightm: 0.2,
		weightkg: 0.9,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	florges: {
		num: 1012,
		species: "Florges",
		types: ["Grass"],
		gender: "F",
		baseStats: {hp: 85, atk: 60, def: 75, spa: 145, spd: 130, spe: 75},
		abilities: {0: "Flower Veil"},
		heightm: 1.1,
		weightkg: 10,
		color: "White",
		prevo: "floette",
		evoLevel: 19,
		eggGroups: ["Fairy"],
	},
	goodra: {
		num: 1011,
		species: "Goodra",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80},
		abilities: {0: "Sap Sipper", 1: "Thick Fat-Sylvemons", H: "Gooey"},
		heightm: 2,
		weightkg: 150.5,
		color: "Purple",
		prevo: "sliggoo",
		evoLevel: 50,
		eggGroups: ["Dragon"],
	},
	wishiwashi: {
		num: 1010,
		species: "Wishiwashi",
		baseForme: "Solo",
		types: ["Water"],
		baseStats: {hp: 45, atk: 20, def: 20, spa: 25, spd: 25, spe: 40},
		abilities: {0: "Schooling"},
		heightm: 0.2,
		weightkg: 0.3,
		color: "Blue",
		eggGroups: ["Water 2"],
		otherFormes: ["wishiwashischool"],
	},
	wishiwashischool: {
		num: 1010,
		species: "Wishiwashi-School",
		baseSpecies: "Wishiwashi",
		forme: "School",
		formeLetter: "S",
		types: ["Water"],
		baseStats: {hp: 45, atk: 140, def: 120, spa: 140, spd: 125, spe: 50},
		abilities: {0: "Schooling"},
		heightm: 8.2,
		weightkg: 78.6,
		color: "Blue",
		eggGroups: ["Water 2"],
	},
	deoxys: {
		num: 1009,
		species: "Deoxys",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 50, atk: 100, def: 120, spa: 100, spd: 120, spe: 110},
		abilities: {0: "Pressure", H: "Trace"},
		heightm: 1.7,
		weightkg: 60.8,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	nailsagesly: {
		num: 1008,
		species: "Nailsage Sly",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 80, atk: 120, def: 85, spa: 60, spd: 70, spe: 130},
		abilities: {0: "Steelworker"},
		heightm: 0,
		weightkg: 0,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	gliscorharmo: {
		num: 1007,
		species: "Gliscor-Harmo",
		types: ["Electric", "Flying"],
		baseStats: {hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95},
		abilities: {0: "Dragon Slayer", 1: "Unaware", H: "Dew Drink"},
		heightm: 2,
		weightkg: 42.5,
		color: "Purple",
		evoLevel: 2,
		eggGroups: ["Bug"],
	},
	kirbyrock: {
		num: 1006,
		species: "Kirby-Rock",
		types: ["Flying", "Rock"],
		baseStats: {hp: 130, atk: 120, def: 80, spa: 120, spd: 80, spe: 70},
		abilities: {0: "Gluttony", H: "Dancer"},
		heightm: 0,
		weightkg: 0,
		color: "Pink",
		eggGroups: ["Undiscovered"],
	},
	latiasdelta: {
		num: 1005,
		species: "Latias-Delta",
		types: ["Electric", "Steel"],
		gender: "F",
		baseStats: {hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110},
		abilities: {0: "Levitate"},
		heightm: 1.4,
		weightkg: 40,
		color: "Red",
		eggGroups: ["Undiscovered"],
		otherFormes: ["latiasmega"],
	},
	latiasdeltamega: {
		num: 1005,
		species: "Latias-Delta-Mega",
		baseSpecies: "Latias-Delta",
		forme: "Mega",
		formeLetter: "M",
		types: ["Electric", "Steel"],
		gender: "F",
		baseStats: {hp: 80, atk: 100, def: 120, spa: 140, spd: 150, spe: 110},
		abilities: {0: "Levitate"},
		heightm: 1.8,
		weightkg: 52,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	abomasnow: {
		num: 1004,
		species: "Abomasnow",
		types: ["Grass", "Ice"],
		baseStats: {hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60},
		abilities: {0: "Snow Warning", H: "Soundproof"},
		heightm: 2.2,
		weightkg: 135.5,
		color: "White",
		prevo: "snover",
		evoLevel: 40,
		eggGroups: ["Monster", "Grass"],
		otherFormes: ["abomasnowmegax", "abomasnowmegay"],
	},
	abomasnowmegax: {
		num: 1004,
		species: "Abomasnow-Mega-X",
		baseSpecies: "Abomasnow",
		forme: "Mega-X",
		formeLetter: "M",
		types: ["Grass", "Water"],
		baseStats: {hp: 90, atk: 112, def: 95, spa: 102, spd: 135, spe: 60},
		abilities: {0: "Regenerator"},
		heightm: 2.7,
		weightkg: 185,
		color: "White",
		eggGroups: ["Monster", "Grass"],
	},
	abomasnowmegay: {
		num: 1004,
		species: "Abomasnow-Mega-Y",
		baseSpecies: "Abomasnow",
		forme: "Mega-Y",
		formeLetter: "M",
		types: ["Grass", "Ice"],
		baseStats: {hp: 90, atk: 92, def: 105, spa: 132, spd: 105, spe: 70},
		abilities: {0: "Slush Rush"},
		heightm: 2.7,
		weightkg: 185,
		color: "White",
		eggGroups: ["Monster", "Grass"],
	},
	decidueyealola: {
		num: 1003,
		species: "Decidueye-Alola",
		types: ["Ice", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 117, def: 75, spa: 80, spd: 70, spe: 110},
		abilities: {0: "Sniper", H: "Slush Rush"},
		heightm: 1.6,
		weightkg: 36.6,
		color: "White",
		prevo: "dartrix-alola",
		evoLevel: 34,
		eggGroups: ["Flying"],
	},
	aurorus: {
		num: 1002,
		species: "Aurorus",
		types: ["Rock", "Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 123, atk: 77, def: 72, spa: 99, spd: 92, spe: 58},
		abilities: {0: "Refrigerate", H: "Snow Warning"},
		heightm: 2.7,
		weightkg: 225,
		color: "Blue",
		prevo: "amaura",
		evoLevel: 39,
		eggGroups: ["Monster"],
	},
	cargolure: {
		num: 1000,
		species: "Cargolure",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 70, atk: 77, def: 120, spa: 125, spd: 100, spe: 70},
		abilities: {0: "Flame Body"},
		heightm: 1,
		weightkg: 1,
		color: "Black",
		eggGroups: ["Monster"],
	},
	scarix: {
		num: 1001,
		species: "Scarix",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 70, atk: 120, def: 110, spa: 30, spd: 70, spe: 110},
		abilities: {0: "No Guard", 1: "Rough Skin", H: "Moxie"},
		heightm: 9.2,
		weightkg: 400,
		color: "Gray",
		prevo: "onix",
		evoLevel: 1,
		eggGroups: ["Mineral"],
		otherFormes: ["scarixmega"],
	},
	scarixmega: {
		num: 1001,
		species: "Scarix-Mega",
		baseSpecies: "Steelix",
		forme: "Mega",
		formeLetter: "M",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 70, atk: 160, def: 110, spa: 30, spd: 110, spe: 130},
		abilities: {0: "Unbreakable"},
		heightm: 10.5,
		weightkg: 740,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	bastiodon: {
		num: 411,
		species: "Bastiodon",
		types: ["Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 50, def: 120, spa: 135, spd: 100, spe: 105},
		abilities: {0: "Sand Force", 1: "Sand Rush", H: "Sand Stream"},
		heightm: 1.3,
		weightkg: 149.5,
		color: "Gray",
		prevo: "shieldon",
		evoLevel: 30,
		eggGroups: ["Monster"],
	},
	vivillon: {
		num: 666,
		species: "Vivillon",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 93, atk: 71, def: 90, spa: 127, spd: 100, spe: 109},
		abilities: {0: "Shield Dust", 1: "Compound Eyes", H: "Magic Guard"},
		heightm: 1.2,
		weightkg: 17,
		color: "White",
		prevo: "spewpa",
		evoLevel: 12,
		eggGroups: ["Bug"],
		otherForms: ["vivillonarchipelago", "vivilloncontinental", "vivillonelegant", "vivillongarden", "vivillonhighplains", "vivillonicysnow", "vivillonjungle", "vivillonmarine", "vivillonmodern", "vivillonmonsoon", "vivillonocean", "vivillonpolar", "vivillonriver", "vivillonsandstorm", "vivillonsavanna", "vivillonsun", "vivillontundra"],
		otherFormes: ["vivillonfancy", "vivillonpokeball"],
	},
	absol: {
		num: 359,
		species: "Absol",
		types: ["Dark"],
		baseStats: {hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 90},
		abilities: {0: "Pressure", 1: "Super Luck", H: "Justified-CFM"},
		heightm: 1.2,
		weightkg: 47,
		color: "White",
		eggGroups: ["Field"],
		otherFormes: ["absolmega"],
	},
	absolmega: {
		num: 359,
		species: "Absol-Mega",
		baseSpecies: "Absol",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 65, atk: 165, def: 60, spa: 115, spd: 60, spe: 115},
		abilities: {0: "Magic Bounce"},
		heightm: 1.2,
		weightkg: 49,
		color: "White",
		eggGroups: ["Field"],
	},
	dragon: {
		num: 1030,
		species: "Dragon",
		types: ["Poison", "Dark"],
		baseStats: {hp: 88, atk: 100, def: 100, spa: 121, spd: 116, spe: 81},
		abilities: {0: "Levipoison",},
		heightm: 1.2,
		weightkg: 47,
		color: "Black",
		prevo: "hydreigon",
		eggGroups: ["Dragon"],
	},
	necroltres: {
		num: 1031,
		species: "Necroltres",
		types: ["Psychic", "Fire"],
		baseStats: {hp: 113, atk: 103, def: 100, spa: 126, spd: 95, spe: 91},
		abilities: {0: "Diamond Armor",},
		heightm: 1.2,
		weightkg: 47,
		color: "Black",
		prevo: "necrozma",
		eggGroups: ["Undiscovered"],
	},
	unfezant: {
		num: 521,
		species: "Unfezant",
		types: ["Flying"],
		baseStats: {hp: 80, atk: 115, def: 80, spa: 82, spd: 80, spe: 133},
		abilities: {0: "Big Pecks", 1: "Technician", H: "Aerilate"},
		heightm: 1.2,
		weightkg: 29,
		color: "Gray",
		prevo: "tranquill",
		evoLevel: 32,
		eggGroups: ["Flying"],
	},
	komodith: {
		num: 1032,
		species: "Komodith",
		types: ["Steel", "Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 134, def: 101, spa: 123, spd: 103, spe: 69},
		abilities: {0: "Liquid Voice", 1: "Beast Boost", H: "Dancer"},
		heightm: 1,
		weightkg: 35,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	kangaskhan: {
		num: 115,
		species: "Kangaskhan",
		types: ["Ground"],
		gender: "F",
		baseStats: {hp: 115, atk: 120, def: 95, spa: 40, spd: 95, spe: 105},
		abilities: {0: "Mold Breaker", 1: "Defiant", H: "Friend Guard"},
		heightm: 2.2,
		weightkg: 80,
		color: "Brown",
		eggGroups: ["Monster"],
	},
	enticineon: {
		num: 1245,
		species: "Enticineon",
		types: ["Water", "Dragon"],
		baseStats: {hp: 105, atk: 70, def: 80, spa: 125, spd: 80, spe: 110},
		abilities: {0: "Swift Swim", 1: "Lightning Rod", H: "Sharkbait"},
		heightm: 1.2,
		weightkg: 24,
		color: "Blue",
		prevo: "lumineon",
		evoLevel: 31,
		eggGroups: ["Water 2"],
	},
	archeops: {
		num: 567,
		species: "Archeops",
		types: ["Ground", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 99, atk: 121, def: 71, spa: 133, spd: 123, spe: 113},
		abilities: {0: "Defeatist"},
		heightm: 1.4,
		weightkg: 32,
		color: "Yellow",
		prevo: "archen",
		evoLevel: 37,
		eggGroups: ["Flying", "Water 3"],
	},
	muk: {
		num: 89,
		species: "Muk",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50},
		abilities: {0: "Stench", 1: "Sticky Hold", H: "Poison Touch", S: "Liquid Ooze"},
		heightm: 1.2,
		weightkg: 30,
		color: "Purple",
		prevo: "grimer",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
		otherFormes: ["mukalola"],
	},
	chimecho: {
		num: 358,
		species: "Chimecho",
		types: ["Psychic"],
		baseStats: {hp: 75, atk: 50, def: 80, spa: 95, spd: 90, spe: 65},
		abilities: {0: "Levitate", S: "Battle Bond"},
		heightm: 0.6,
		weightkg: 1,
		color: "Blue",
		prevo: "chingling",
		evoLevel: 1,
		eggGroups: ["Amorphous"],
		otherFormes: ["chimechojames"],
	},
	chimechojames: {
		num: 658,
		species: "Chimecho-James",
		baseSpecies: "Chimecho",
		forme: "James",
		formeLetter: "J",
		types: ["Psychic"],
		baseStats: {hp: 125, atk: 50, def: 90, spa: 95, spd: 140, spe: 65},
		abilities: {0: "Battle Bond"},
		heightm: 0.6,
		weightkg: 1,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	serperior: {
		num: 497,
		species: "Serperior",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 75, def: 95, spa: 75, spd: 95, spe: 113},
		abilities: {0: "Overgrow", H: "Contrary"},
		heightm: 3.3,
		weightkg: 63,
		color: "Green",
		prevo: "servine",
		evoLevel: 36,
		eggGroups: ["Field", "Grass"],
		otherFormes: ["serperiormega"],
	},
	serperiormega: {
		num: 497,
		species: "Serperior-Mega",
		baseSpecies: "Serperior",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass"],
		baseStats: {hp: 75, atk: 125, def: 105, spa: 105, spd: 105, spe: 113},
		abilities: {0: "Regal Reversal"},
		heightm: 3.3,
		weightkg: 63,
		color: "Green",
		eggGroups: ["Field"],
	},
	poliwreck: {
		num: 10002,
		species: "Poliwreck",
		types: ["Water", "Fighting"],
		baseStats: {hp: 110, atk: 115, def: 115, spa: 70, spd: 100, spe: 70},
		abilities: {0: "Water Absorb", 1: "Moxie", H: "Swift Swim"},
		heightm: 1.3,
		weightkg: 54,
		color: "Blue",
		prevo: "poliwrath",
		evoLevel: 25,
		eggGroups: ["Water 1"],
	},
	mothim: {
		num: 414,
		species: "Mothim",
		types: ["Bug"],
		gender: "M",
		baseStats: {hp: 70, atk: 114, def: 60, spa: 114, spd: 70, spe: 112},
		abilities: {0: "Prankster", H: "Protean"},
		heightm: 0.9,
		weightkg: 23.3,
		color: "Yellow",
		prevo: "burmy",
		evoLevel: 20,
		eggGroups: ["Bug"],
	},
	talondrake: {
		num: 10000,
		species: "Talondrake",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 78, atk: 81, def: 74, spa: 126, spd: 69, spe: 71},
		abilities: {0: "Tough Claws", H: "Gale Wings"},
		heightm: 1.2,
		weightkg: 24.5,
		color: "Red",
		prevo: "fletchinder",
		evoLevel: 35,
		eggGroups: ["Flying"],
	},
	buzzwole: {
		num: 794,
		species: "Buzzwole",
		types: ["Bug", "Fighting"],
		gender: "N",
		baseStats: {hp: 107, atk: 139, def: 139, spa: 53, spd: 53, spe: 79},
		abilities: {0: "Beast Boost", H: "Bloodsucker"},
		heightm: 2.4,
		weightkg: 333.6,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	psychoglyph: {
		num: 10006,
		species: "Psychoglyph",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 82, atk: 58, def: 90, spa: 115, spd: 90, spe: 120},
		abilities: {0: "Wonder Skin", 1: "Magic Guard", H: "Tinted Lens"},
		heightm: 1.4,
		weightkg: 14,
		prevo: "sigilyph",
		color: "Black",
		eggGroups: ["Flying"],
	},
	magcargo: {
		num: 219,
		species: "Magcargo",
		types: ["Fire", "Bug"],
		baseStats: {hp: 60, atk: 70, def: 140, spa: 130, spd: 140, spe: 30},
		abilities: {0: "Magma Armor", 1: "Drought", H: "Weak Armor"},
		heightm: 0.8,
		weightkg: 55,
		color: "Red",
		prevo: "slugma",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
	},
	spirox: {
		num: 100000,
		species: "Spirox",
		types: ["Ghost", "Steel"],
		baseStats: {hp: 76, atk: 96, def: 126, spa: 96, spd: 126, spe: 80},
		abilities: {0: "Battle Armor", 1: "Cursed Body", H: "Box In"},
		heightm: 0.8,
		weightkg: 55,
		color: "Red",
		prevo: "slugma",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
	},
	magnetoneternal: {
		num: 1000002,
		species: "Magneton-Eternal",
		types: ["Electric", "Steel"],
		gender: "N",
		baseStats: {hp: 60, atk: 60, def: 95, spa: 145, spd: 80, spe: 94},
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Analytic"},
		heightm: 1,
		weightkg: 60,
		color: "Gray",
		evoLevel: 30,
		eggGroups: ["Mineral"],
	},
	rhyperior: {
		num: 464,
		species: "Rhyperior",
		types: ["Ground", "Rock"],
		baseStats: {hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40},
		abilities: {0: "Lightning Rod", 1: "Solid Rock", H: "Reckless"},
		heightm: 2.4,
		weightkg: 282.8,
		color: "Gray",
		prevo: "rhydon",
		evoLevel: 42,
		eggGroups: ["Monster", "Field"],
		otherFormes: ["rhyperiormahem"]
	},
	rhyperiormahem: {
		num: 464,
		species: "Rhyperior-MAHEM",
		baseSpecies: "Rhyperior",
		forme: "MAHEM",
		formeLetter: "M",
		types: ["Fire", "Steel"],
		baseStats: {hp: 95, atk: 55, def: 130, spa: 140, spd: 95, spe: 40},
		abilities: {0: "Sheer Force", 1: "No Guard", H: "Mega Launcher"},
		heightm: 2.4,
		weightkg: 282.8,
		color: "Gray",
		prevo: "rhydon",
		evoLevel: 42,
		eggGroups: ["Monster", "Field"],
	},
	combusken: {
		num: 256,
		species: "Combusken",
		types: ["Fire", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 85, def: 60, spa: 85, spd: 60, spe: 55},
		abilities: {0: "Blaze-Sylvemons", H: "Speed Boost"},
		heightm: 0.9,
		weightkg: 19.5,
		color: "Red",
		prevo: "torchic",
		evos: ["blaziken"],
		evoLevel: 16,
		eggGroups: ["Field"],
	},
	komodreigon: {
		num: 1030,
		species: "Komodreigon",
		types: ["Fighting", "Dragon"],
		baseStats: {hp: 93, atk: 117, def: 117, spa: 125, spd: 107, spe: 101},
		abilities: {0: "S.O.N.A.R",},
		heightm: 1.2,
		weightkg: 47,
		color: "Black",
		prevo: "hydreigon",
		eggGroups: ["Dragon"],
	},
	vespiquen: {
		num: 416,
		species: "Vespiquen",
		types: ["Bug", "Flying"],
		gender: "F",
		baseStats: {hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 40},
		abilities: {0: "Pressure", H: "Unnerve"},
		heightm: 1.2,
		weightkg: 38.5,
		color: "Yellow",
		prevo: "combee",
		evoLevel: 21,
		otherFormes: ["rhyperiormahem"]
	},
	vespiquenempress: {
		num: 464,
		species: "Vespiquen-Empress",
		baseSpecies: "Vespiquen",
		forme: "Empress",
		formeLetter: "M",
		types: ["Steel", "Flying"],
		baseStats: {hp: 90, atk: 70, def: 102, spa: 70, spd: 102, spe: 60},
		abilities: {0: "Delta Stream", H: "Queenly Majesty"},
		heightm: 2.4,
		weightkg: 282.8,
		color: "Gray",
		prevo: "rhydon",
		evoLevel: 42,
		eggGroups: ["Monster", "Field"],
	},
	hippowdon: {
		num: 450,
		species: "Hippowdon",
		types: ["Ground", "Fighting"],
		baseStats: {hp: 108, atk: 132, def: 118, spa: 68, spd: 102, spe: 47},
		abilities: {0: "Internal Aura"},
		heightm: 2,
		weightkg: 300,
		color: "Brown",
		prevo: "hippopotas",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
	frankenstrike: {
		num: 450,
		species: "Frankenstrike",
		types: ["Ghost", "Electric"],
		baseStats: {hp: 110, atk: 105, def: 105, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Volt Absorb", 1: "Stamina", H: "Technician"},
		heightm: 2,
		weightkg: 300,
		color: "Brown",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
};
