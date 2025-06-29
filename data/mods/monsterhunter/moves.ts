export const Moves: {[moveid: string]: MoveData} = {
	/*
	CUSTOM MOVES
	*/
	magnalance: {
		num: 2000,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Magna Lance",
		shortDesc: "Usually goes first. Fails if target is not attacking.",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	eggbarrage: {
		num: 2001,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Egg Barrage",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
	},
	glidebomb: {
		num: 2002,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Glide Bomb",
		shortDesc: "Hits 2-5 times in one turn.",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	dragonator: {
		num: 2003,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Dragonator",
		shortDesc: "Cannot be used on consecutive turns. Super-Effective on Dragon-Types. 10% Flinch.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, cantusetwice: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Dragon') return 1;
		},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	devour: {
		num: 2004,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Devour",
		shortDesc: "Recovers HP and eats held berry. Fails if user isn't holding a berry.",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1, metronome: 1},
		heal: [1, 2],
		onTry(source) {
			return source.getItem().isBerry;
		},
		onHit(pokemon) {
			pokemon.eatItem(true);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Beautiful",
	},
	wretchedwater: {
		num: 2005,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Wretched Water",
		shortDesc: "30% chance to paralyze the target.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cool",
	},
	cutwingbarrage: {
		num: 2006,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Cutwing Barrage",
		shortDesc: "May cause flinching.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, slicing: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	thunderrush: {
		num: 2007,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Thunder Rush",
		shortDesc: "Usually goes first. Always crits.",
		pp: 15,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	frenzyslam: {
		num: 2008,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		name: "Frenzy Slam",
		shortDesc: "Summons Reflect.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			sideCondition: 'reflect',
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	bewitchedbubble: {
		num: 2009,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Bewitched Bubble",
		shortDesc: "User recovers 50% of the damage dealt.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	creepynoise: {
		num: 2010,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Creepy Noise",
		shortDesc: "100% chance to paralyze the foe.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	arcticshriek: {
		num: 2011,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		name: "Arctic Shriek",
		shortDesc: "Eliminates all stat changes.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		onHit() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	cloakingglow: {
		num: 2012,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		name: "Cloaking Glow",
		shortDesc: "Summons Light Screen.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			sideCondition: 'lightscreen',
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	mossbomb: {
		num: 2013,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Moss Bomb",
		shortDesc: "Summons Leech Seed.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source) {
			if (target.hasType('Grass')) return null;
			target.addVolatile('leechseed', source);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	magmasurge: {
		num: 2014,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Magma Surge",
		shortDesc: "100% chance to burn the foe.",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	apexburst: {
		num: 2015,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		name: "Apex Burst",
		shortDesc: "Cures the user's party of all status conditions.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			onHit(pokemon, source, move) {
				this.add('-activate', source, 'move: Aromatherapy');
				for (const ally of source.side.pokemon) {
					if (ally !== source && (ally.volatiles['substitute'] && !move.infiltrates)) {
						continue;
					}
					ally.cureStatus();
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Clever",
	},
	frenzypulse: {
		num: 2016,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Frenzy Pulse",
		shortDesc: "Lowers SpA by 1; Raises Spe by 1.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		selfBoost: {
			boosts: {
				spa: -1,
				spe: +1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
	},
	psychocrush: {
		num: 2017,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Psycho Crush",
		shortDesc: "Summons Gravity.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			pseudoWeather: 'gravity',
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	biocharge: {
		num: 2018,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Biocharge",
		shortDesc: "Raises the user's Sp. Atk by 3. Lowest priority.",
		pp: 5,
		priority: -6,
		flags: {snatch: 1, metronome: 1},
		boosts: {
			spa: 3,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	heatbeam: {
		num: 2019,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		overrideDefensiveStat: 'spd',
		name: "Heat Beam",
		shortDesc: "Damages target based on Sp. Def, not Defense.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	boltbreath: {
		num: 2020,
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Bolt Breath damage boost');
				return move.basePower * 2;
			}
			this.debug('Bolt Breath NOT boosted');
			return move.basePower;
		},
		category: "Special",
		name: "Bolt Breath",
		shortDesc: "Power doubles if the user moves before the target.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	cyclonerend: {
		num: 2021,
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Cyclone Rend damage boost');
				return move.basePower * 2;
			}
			this.debug('Cyclone Rend NOT boosted');
			return move.basePower;
		},
		category: "Special",
		name: "Cyclone Rend",
		shortDesc: "Power doubles if the user moves before the target.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Water",
	},
	coldsnap: {
		num: 2022,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Cold Snap",
		shortDesc: "Freezes the target.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1},
		status: 'frz',
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {boost: {spa: 1}},
		contestType: "Beautiful",
	},
	blazeball: {
		num: 2023,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Blaze Ball",
		shortDesc: "No additional effect.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, bullet: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	crimsondawn: {
		num: 2024,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		name: "Crimson Dawn",
		shortDesc: "C-Fatalis: Cannot be selected the turn after it's used.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, cantusetwice: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		onTry(source) {
			if (source.species.name === 'Crimson-Fatalis') {
				return;
			}
			this.hint("Only a Pokemon whose form is Crimson-Fatalis can use this move.");
			if (source.species.name === 'Crimson-Fatalis') {
				this.attrLastMove('[still]');
				this.add('-fail', source, 'move: Crimson Dawn', '[forme]');
				return null;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Crimson Dawn');
			return null;
		},
	},
	ancestralthunder: {
		num: 2025,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Ancestral Thunder",
		shortDesc: "W-Fatalis: Cannot be selected the turn after it's used.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, cantusetwice: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		onTry(source) {
			if (source.species.name === 'White-Fatalis') {
				return;
			}
			this.hint("Only a Pokemon whose form is White-Fatalis can use this move.");
			if (source.species.name === 'White-Fatalis') {
				this.attrLastMove('[still]');
				this.add('-fail', source, 'move: Ancestral Thunder', '[forme]');
				return null;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Ancestral Thunder');
			return null;
		},
	},
	quicksandbreath: {
		num: 2026,
		accuracy: 75,
		basePower: 100,
		category: "Special",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		name: "Quicksand Breath",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	/*
	Edits
	*/
	swift: {
		inherit: true,
		priority: 1,
	},
	healorder: {
		inherit: true,
		pp: 5,
	},
	hyperspacefury: {
		inherit: true,
		breaksProtect: true,
		onTry(source) {
			if (source.species.name === 'Plesioth') {
				return;
			}
			this.hint("Only a Pokemon whose form is Plesioth can use this move.");
			if (source.species.name === 'Plesioth') {
				this.attrLastMove('[still]');
				this.add('-fail', source, 'move: Hyperspace Fury', '[forme]');
				return null;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Hyperspace Fury');
			return null;
		},
	},
	ivycudgel: {
		inherit: true,
		num: 904,
		onPrepareHit(target, source, move) {
			if (move.type !== "Grass") {
				this.attrLastMove('[anim] Ivy Cudgel ' + move.type);
			}
		},
		onModifyType(move, pokemon) {},
	},
	/*
	TORQUES
	*/
	blazingtorque: {
		num: 896,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Blazing Torque",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1, failencore: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1,
			failcopycat: 1, failmimic: 1, failinstruct: 1, nosketch: 1,
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	combattorque: {
		num: 899,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Combat Torque",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1, failencore: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1,
			failcopycat: 1, failmimic: 1, failinstruct: 1, nosketch: 1,
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Fighting",
	},
	magicaltorque: {
		num: 900,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Magical Torque",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1, failencore: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1,
			failcopycat: 1, failmimic: 1, failinstruct: 1, nosketch: 1,
		},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fairy",
	},
	noxioustorque: {
		num: 898,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Noxious Torque",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1, failencore: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1,
			failcopycat: 1, failmimic: 1, failinstruct: 1, nosketch: 1,
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	wickedtorque: {
		num: 897,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Wicked Torque",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1, failencore: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1,
			failcopycat: 1, failmimic: 1, failinstruct: 1, nosketch: 1,
		},
		secondary: {
			chance: 10,
			status: 'slp',
		},
		target: "normal",
		type: "Dark",
	},
}
