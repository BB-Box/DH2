export const Moves: {[k: string]: ModdedMoveData} = {
	//Template
	/*movename: {
		num: 0,
		accuracy: 100,
		basePower: 30,
		category: "Physical""Special""Status",
		name: "MoveName",
		desc: "Full move description.",
		shortDesc: "Move effects.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		[multihit: 3,]
		secondary: null,
		target: "normal",
		type: "Normal",
	},*/

	//New signature moves by implementation order
	//Venusaur
	greatflower: {
		num: 3000,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Great Flower",
		desc: "The user gathers energy from its flower to attack with immense power. This move continues to deal damage to opponents for three turns.",
		shortDesc: "Hits adjacent foes, Damages non-Grass types for 3 turns.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Grass Pledge", target);
		},
		condition: {
			duration: 3,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Great Flower');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Grass')) this.damage(target.baseMaxhp / 8, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Great Flower');
			},
		},
		secondary: {
			chance: 100,
			self: {
				onHit(source) {
					for (const side of source.side.foeSidesWithConditions()) {
						side.addSideCondition('greatflower');
					}
				},
			},
		},
		target: "allAdjacentFoes",
		type: "Grass",
	},
	//Charizard
	greatflame: {
		num: 3001,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Great Flame",
		desc: "The user focuses its power over fire and releases a huge blazing breath. This move continues to deal damage to opponents for three turns.",
		shortDesc: "Hits adjacent foes, Damages non-Fire types for 3 turns.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fire Pledge", target);
		},
		condition: {
			duration: 3,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Great Flame');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Fire')) this.damage(target.baseMaxhp / 8, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Great Flame');
			},
		},
		secondary: {
			chance: 100,
			self: {
				onHit(source) {
					for (const side of source.side.foeSidesWithConditions()) {
						side.addSideCondition('greatflame');
					}
				},
			},
		},
		target: "allAdjacentFoes",
		type: "Fire",
	},
	//Blastoise
	greatflood: {
		num: 3002,
		accuracy: true,
		basePower: 100,
		category: "Special",
		name: "Great Flood",
		desc: "The user launches gallions of water at its foes using its cannons. This move continues to deal damage to opponents for three turns.",
		shortDesc: "Hits adjacent foes, Damages non-Water types for 3 turns.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Pledge", target);
		},
		condition: {
			duration: 3,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Great Flood');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Water')) this.damage(target.baseMaxhp / 8, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Great Flood');
			},
		},
		secondary: {
			chance: 100,
			self: {
				onHit(source) {
					for (const side of source.side.foeSidesWithConditions()) {
						side.addSideCondition('greatflood');
					}
				},
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
	},
	//Dugtrio
	//Dugtrio-Alola
	tripledig: {
		num: 3003,
		accuracy: 95,
		basePower: 30,
		category: "Physical",
		name: "Triple Dig",
		desc: "The user performs a well timed triple attack, hitting the target from below three times in a row.",
		shortDesc: "Hits 3 times.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dig", target);
		},
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Ground",
	},
	//Tentacruel
	//Toedscruel
	tentacoil: {
		num: 3004,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Tentacoil",
		desc: "The user extends its tentacles to catch its target and prevent them from fleeing. This move raises the user's Sp. Attack and lowers the target's Sp. Defense every turn.",
		shortDesc: "Traps foe. SpD -1 on foe and SpA +1 on user each turn",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Octolock", target);
		},
		onTryImmunity(target) {
			return this.dex.getImmunity('trapped', target);
		},
		volatileStatus: 'tentacoil',
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Tentacoil', '[of] ' + source);
			},
			onResidualOrder: 14,
			onResidual(pokemon) {
				const source = this.effectState.source;
				if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns)) {
					delete pokemon.volatiles['tentacoil'];
					this.add('-end', pokemon, 'Tentacoil', '[partiallytrapped]', '[silent]');
					return;
				}
				const debuff = this.boost({spd: -1}, pokemon, source, this.dex.getActiveMove('tentacoil'));
				if (debuff) {
					this.boost({spa: +1}, source, pokemon, this.dex.getActiveMove('tentacoil'));
				}
			},
			onTrapPokemon(pokemon) {
				if (this.effectState.source && this.effectState.source.isActive) pokemon.tryTrap();
			},
		},
		secondary: null,
		target: "normal",
		type: "normal",
	},
	//Spinda
	spintowin: {
		num: 3005,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spin To Win",
		desc: "The user takes a bizarre spinning stance to evade all forms of damage. Any damaging move that attempts to hit the user is reflected back at the attacker.",
		shortDesc: "Protects from all moves. Copies moves that targets user.",
		pp: 10,
		priority: 4,
		flags: {failmefirst: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1},
		stallingMove: true,
		volatileStatus: 'spintowin',
		onPrepareHit(pokemon) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Rapid Spin", target);
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.category !== 'Status' || target.volatiles['mustrecharge']) {
					//This is the part where Spinda copies the move it got hit with
					//Get the base move in case of Z-move or Max move
					if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
					if (!move.flags['mirror'] || move.flags['failcopycat'] || move.isZ || move.isMax) {
						return false;
					}
					this.actions.useMove(move.id, target, source);
				}
				return this.NOT_FAIL;
			},
			//If protection broken, Spinda gets confused - Irrelevent?
			/*onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					const result = target.addVolatile('confusion', source, move);
					if (!result) return result;
				}
			},*/
		},
		//This is the part where the user gets confused if the move fails
		onMoveFail(target, source, move) {
			const result = target.addVolatile('confusion', source, move);
			if (!result) return result;
		},
		callsMove: true,
		secondary: null,
		target: "self",
		type: "Normal",
	},
	//Zangoose
	whiteclaw: {
		num: 3006,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "White Claw",
		desc: "The user lacerates its foe with honed white-hot claws. This move is super effective on Poison types and may burn the target.",
		shortDesc: "10% chance of Burn. Super effective against Poison-types.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Crush Claw", target);
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Poison') return 1;
		},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Normal",
	},
	//Froslass
	curseofsnow: {
		num: 3007,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Curse of Snow",
		desc: "The user casts a freezing curse to deal damage and lower the target's Special Attack. This move has more effects is the target is of the opposite gender to the user.",
		shortDesc: "SpA -1. If target is of opposite gender: also Atk -1, Spe -1.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Powder Snow", target);
		},
		onModifyMove(move, pokemon, target) {
			if ((pokemon.gender === 'M' && target.gender === 'F') || (pokemon.gender === 'F' && target.gender === 'M')) {
				move.secondary = {
					chance: 100,
					boosts: {
						atk: -1,
						spa: -1,
						spe: -1,
					},
				};
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Ice",
	},
	//Roserade
	secretthorns: {
		num: 3008,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Secret Thorns",
		desc: "The user poisons its foe using one of their special flowers. The effects of the move changes depending on the target's remaining HP.",
		shortDesc: "Poison & Atk -1. If target HP < 50%: Bad Poison & Heal Block.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Poison Sting", target);
		},
		onModifyMove(move, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				move.boosts = {};
				move.status = 'tox';
				move.volatileStatus = 'healblock';
			}
		},
		status: 'psn',
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Poison",
	},
	//Hydreigon
	triplethreat: {
		num: 3009,
		accuracy: 90,
		basePower: 30,
		category: "Special",
		name: "Triple Threat",
		desc: "The user fires menacing beams from its heads, hitting the target 3 times in a row. This move may make the target flinch.",
		shortDesc: "Hits 3 times. 20% chance of Flinch.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Night Daze", target);
		},
		multihit: 3,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dark",
	},
	//Gastrodon
	stickyslime: {
		num: 3010,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Sticky Slime",
		desc: "The user shoots a sticky ooze that traps the target during its next turn. After making its attack, the user switches out immediately.",
		shortDesc: "Prevents target from switching out on the next turn. User switches out.",
		pp: 10,
		priority: -6,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Acid", target);
		},
		selfSwitch: true,
		//Trapping : Modified code from Fairy Lock and Anchor Shot
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'move: Sticky Slime');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			onEnd(target) {
				this.add('-end', target, 'move: Sticky Slime', '[silent]');
			},
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('stickyslime');
			},
		},
		target: "normal",
		type: "Water",
	},
	//Snorlax
	bellyflop: {
		num: 3011,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Bellyflop",
		desc: "The user crushes the target under the weight of its belly. This move can be used even if the user is asleep, and can leave the target with paralysis.",
		shortDesc: "20% chance of Paralysis. Can be used in Sleep.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Body Slam", target);
		},
		sleepUsable: true,
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
	},
	//Sudowoodo
	fakebranch: {
		num: 3012,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		name: "Fake Branch",
		desc: "The user charges a hit, then strikes its target at full force with its fake tree branch. The user will try to avoid Water-type attacks during the charge.",
		shortDesc: "Moves last. Avoid Water-type move for the turn.",
		pp: 15,
		priority: -3,
		flags: {contact: 1, protect: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Ivy Cudgel Rock", target);
		},
		priorityChargeCallback(pokemon) {
			pokemon.addVolatile('fakebranch');
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Fake Branch');
			},
			onTryHitPriority: 2,
			onTryHit(target, source, move) {
				//If move is not Water-type, nothing changes
				if (move.type !== 'Water') {
					return;
				}
				//If move is Water-type without accuracy check, user still takes damage
				if (move.type === 'Water' && move.accuracy === true) {
					return;
				}
				//If move is Water-type with accuracy check, user will avoid damage
				this.add('-miss', source, target);
				this.hint("When charging Fake Branch, the user will avoid Water-type moves unless there is no accuracy check.");

				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		// FIXME: onMoveAborted(pokemon) {pokemon.removeVolatile('fakebranch')}, - Irrelevant ? This is from Beak Blast...
		onAfterMove(pokemon) {
			pokemon.removeVolatile('fakebranch');
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	//Scolipede
	poisonwheel: {
		num: 3013,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Poison Wheel",
		desc: "The user rolls into a ball and charges madly at its target. This may also poison upon contact.",
		shortDesc: "30% chance of Poison. Strong against Minimize.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Steamroller", target);
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	//Noivern
	killerwail: {
		num: 3014,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Killer Wail",
		desc: "The user blasts its target with ultrasonic soundwaves. This move has a high chance of landing a critical hit.",
		shortDesc: "Sound move. High critical hit ratio.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Supersonic", target);
		},
		critRatio: 2,
		secondary: null,
		target: "any",
		type: "Dragon",
	},
	//Weavile
	sinisterclaw: {
		num: 3015,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Sinister Claw",
		desc: "The user slashes the target with extra-cold claws. This move may greately reduce the target's Speed stat or leave the target frozen.",
		shortDesc: "40% chance of Spe -2. 10% chance of Freeze.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dire Claw", target);
		},
		secondaries: [
			{
				chance: 10,
				status: 'frz',
			}, {
				chance: 40,
				boosts: {
					spe: -2,
				},
			},
		],
		target: "normal",
		type: "Ice",
	},
	//Luvdisc
	loveadvice: {
		num: 3016,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Love Advice",
		desc: "The user provides counseling on love to its target. This move lowers the target's Attack and Special Attack, and changes their Ability to Cute Charm.",
		shortDesc: "Atk -1 & SpA -1. Target's ability changed to Cute Charm.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Confide", target);
		},
		//Check for immunities : Unremovable abilities, Cute Charm and Truant. In which cases the move fails altogether
		onTryHit(target) {
			if (target.getAbility().flags['cantsuppress'] || target.ability === 'cutecharm' || target.ability === 'truant') {
				return false;
			}
		},
		//Apply debuff and change target's ability
		onHit(target, source, move) {
			const success = this.boost({atk: -1, spa: -1}, target, source);
			//If the debuff did not land, no ability change
			//In case of Mirror Armor : The debuff is reflected at the user but the target's ability is still changed afterwards
			if (!success && !target.hasAbility('mirrorarmor')) {
				return;
			}
			//Ability change to Cute Charm
			const oldAbility = target.setAbility('cutecharm');
			if (oldAbility) {
				this.add('-ability', target, 'Cute Charm', '[from] move: Love Advice');
				return;
			}
			return oldAbility as false | null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	//Azumarill
	bubbleball: {
		num: 3017,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Bubble Ball",
		desc: "The user creates a big water bubble and sends it flying to its target, lowering its Speed stat. If the move targets an ally, it will heal instead.",
		shortDesc: "Spe -1. If target is an ally: heals 50% HP instead.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1, metronome: 1, bullet: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bubble", target);
		},
		onTryHit(target, source, move) {
			if (source.isAlly(target)) {
				move.basePower = 0;
				move.secondary = null;
				move.infiltrates = true;
			}
		},
		onTryMove(source, target, move) {
			if (source.isAlly(target) && source.volatiles['healblock']) {
				this.attrLastMove('[still]');
				this.add('cant', source, 'move: Heal Block', move);
				return false;
			}
		},
		onHit(target, source, move) {
			if (source.isAlly(target)) {
				if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
					if (target.volatiles['healblock'] && target.hp !== target.maxhp) {
						this.attrLastMove('[still]');
						// Wrong error message, correct one not supported yet
						this.add('cant', source, 'move: Heal Block', move);
					} else {
						this.add('-immune', target);
					}
					return this.NOT_FAIL;
				}
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Water",
	},
	//Clawitzer
	waterbombshell: {
		num: 3018,
		accuracy: 90,
		basePower: 110,
		category: "Special",
		name: "Water Bombshell",
		desc: "The user attacks the target with a water missile. The resulting burst damages Pokémon next to the target as well.",
		shortDesc: "Damages Pokemon next to the target as well.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, bullet: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "G-Max Cannonade", target);
		},
		onHit(target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 8, ally, source, this.dex.conditions.get('Water Bombshell'));
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 8, ally, source, this.dex.conditions.get('Water Bombshell'));
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
	},
	//Mimikyu
	snuggle: {
		num: 3019,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Snuggle",
		desc: "The user attacks its foe with tough love. This move lowers the target's Attack and Defense stats.",
		shortDesc: "Lowers the target's Atk and Def by 1.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Return", target);
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
				def: -1,
			},
		},
		target: "normal",
		type: "Fairy",
	},
	//Corviknight
	armorwing: {
		num: 3020,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Armor Wing",
		desc: "The user adjusts its flight for defense. This move raises both the user's Defense and Speed stats.",
		shortDesc: "Raises the user's Def by 2 and its Spe by 1.",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Iron Defense", target);
		},
		boosts: {
			def: 2,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Flying",
	},
	//Bellibolt
	bellyspot: {
		num: 3021,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Belly Spot",
		desc: "The user redirects all opposing attacks to itself using its shining belly. Direct contact with the user will paralyse the attacker.",
		shortDesc: "Draws foes' moves to the user. Paralyzes on contact.",
		pp: 10,
		priority: 2,
		flags: {noassist: 1, failcopycat: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Tail Glow", target);
		},
		volatileStatus: 'bellyspot',
		onTry(source) {
			return this.activePerHalf > 1;
		},
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-singleturn', target, 'move: Belly Spot', '[zeffect]');
				} else {
					this.add('-singleturn', target, 'move: Belly Spot');
				}
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				if (!this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Follow Me redirected target of move");
					return this.effectState.target;
				}
			},
			onDamagingHit(damage, target, source, move) {
				if (this.checkMoveMakesContact(move, source, target)) {
					source.trySetStatus('par', target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Electric",
		//left in for technicality but won't be used without z-moves
		zMove: {effect: 'clearnegativeboost'},
	},
	//Eelektross
	exhaustion: {
		num: 3022,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Exhaustion",
		desc: "The user bites the target to drain its energy, while simultanuously shocking it with electricity. The user's HP is restored by up to half the damage taken by the target.",
		shortDesc: "User recovers 50% of the damage dealt.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1, metronome: 1, bite: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Thunder Fang", target);
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	//Honchkrow
	vileorders: {
		num: 3023,
		accuracy: 95,
		basePower: 0,
		basePowerCallback(pokemon, target, move) {
			const currentSpecies = move.allies!.shift()!.species;
			const bp = 20 + Math.floor(currentSpecies.baseStats.atk / 10);
			this.debug('BP for ' + currentSpecies.name + ' hit: ' + bp);
			//That text works, but it only takes the name of the species instead of the potential nickname
			this.add('-message', `${currentSpecies.name} attacks!`);
			return bp;
		},
		category: "Physical",
		name: "Vile Orders",
		desc: "The user attacks relentlessly alongside its underlings. Both the user and each ally on the field gets to hit the target two times during the move.",
		shortDesc: "Healthy allies on field hit the target.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Beat Up", target);
		},
		onModifyMove(move, pokemon) {
			//Get data on user and its allies on the field for their first hits
			move.allies = pokemon.alliesAndSelf().filter(ally => ally === pokemon || !ally.status);
			//For the second hit of each ally, we duplicate their data at the end of the created array of allies
			move.allies = move.allies.concat(move.allies);

			move.multihit = move.allies.length;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	//Mothim
	razzia: {
		num: 3024,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Razzia",
		desc: "The user charges at its target for a surprise attack. This move deals more damage and has more effects during the first turn the user is on the field.",
		shortDesc: "+1 Prio. Steals boosts and item on first turn.",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, failmefirst: 1, noassist: 1, failcopycat: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "First Impression", target);
		},
		onBasePower(basePower, source) {
			//Move is stronger on the first turn
			if (source.activeMoveActions <= 1) {
				this.debug('first turn buff');
				return this.chainModify(2);
			}
		},
		onModifyMove(move, source, target) {
			//Steals stat boosts on the first turn
			if (source.activeMoveActions <= 1) {
				move.stealsBoosts = true;
			}
		},
		onAfterHit(target, source, move) {
			//Steals held item on the first turn
			if (source.activeMoveActions > 1) {
				return;
			}
			if (source.item || source.volatiles['gem']) {
				return;
			}
			const yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
				!source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Razzia', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Razzia', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Bug",
	},
	//Electrode
	electroblast: {
		num: 3025,
		accuracy: 100,
		basePower: 250,
		category: "Special",
		name: "Electroblast",
		desc: "The user harnesses its amassed electricity to create a powerful explosion that damages everything. The user will faint upon using this move.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, noparentalbond: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Discharge", target);
			this.add('-anim', source, "Explosion", target);
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
	},
	//Cursola
	ghastlywail: {
		num: 3026,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ghastly Wail",
		desc: "The user lets out a soulful cry that shakes the target's spirit. If the target is affected by Perish Song, its countdown will be reduced to zero.",
		shortDesc: "Sound move. Reduces target's Perish Count to zero.",
		pp: 5,
		priority: -1,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Eerie Spell", target);
		},
		secondary: {
			chance: 100,
			onHit(target) {
				if (!target.hp) return;
				let result = false;
				let message = false;
				//Check for existing Perish Count and reduce counter to 1
				if (target.volatiles['perishsong']) {
					target.volatiles['perishsong'].duration = 1;
					this.add('-start', target, 'perish1', '[silent]');
					result = true;
					message = true;
				}
				if (!result) return false;
				if (message) this.add('-message', `${target.name}'s perish count has been reduced!`);
			},
		},
		target: "normal",
		type: "Ghost",
	},
	//Lucario
	aurastorm: {
		num: 3027,
		accuracy: true,
		basePower: 0,
		basePowerCallback(pokemon) {
			const ratio = Math.max(Math.floor(pokemon.hp * 20 / pokemon.maxhp), 1);
			let bp;
			if (ratio <= 1) {
				bp = 130;
			} else if (ratio < 8) {
				bp = 120;
			} else if (ratio < 15) {
				bp = 100;
			} else {
				bp = 70;
			}
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Aura Storm",
		desc: "Calling upon the power of Aura, the user releases a powerful beam of light that always hits its target. This move gains power the less HP the user has. Guaranteed critical hit at 5% HP or below.",
		shortDesc: "Never misses. More power with less HP on user.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, metronome: 1, pulse: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hyper Beam", target);
		},
		onModifyMove(move, source, target) {
			if (source.hp <= (source.maxhp * 5 / 100)) move.willCrit = true;
		},
		secondary: null,
		target: "any",
		type: "Fighting",
	},
	//Slaking
	procrastinate: {
		num: 3028,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Procrastinate",
		desc: "The user is taken by a sudden surge of laziness and activates its Ability Truant to skip this turn, giving it a chance to attack next turn.",
		shortDesc: "Activates Truant. 50% chance of Atk +1.",
		pp: 10,
		priority: 0,
		flags: {noassist: 1, failcopycat: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Slack Off", target);
		},
		onTry(source, target, move) {
			if (source.ability === 'truant' && source.volatiles['truant']) {
				this.add('-message', `${source.name} is skipping this turn with Truant!`);
				return;
			}
			this.add('-fail', source, 'move: Procrastinate');
			this.hint("The ability Truant is required on the user for this move.");
			return null;
		},
		onAfterMove(pokemon) {
			if (pokemon.removeVolatile('truant')) {
				this.add('cant', pokemon, 'ability: Truant');
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				atk: 1,
			},
		},
		target: "self",
		type: "Normal",
	},
	//Carnivine
	flytrap: {
		num: 3029,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Flytrap",
		desc: "The user munches on the target with its giant mouth. This move is super effective on Bug types and may poison the target.",
		shortDesc: "20% chance of Poison. Super effective against Bug-types.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Crunch", target);
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Bug') return 1;
		},
		onBasePower(basePower, attacker, defender, move) {
			if (defender.hasType('Bug')) {
				return this.chainModify(1.5);
			}
		},
		secondary: {
			chance: 20,
			status: 'poison',
		},
		target: "normal",
		type: "Grass",
	},
	//Durant
	frontguard: {
		num: 3030,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Front Guard",
		desc: "The user solidifies its body and endures an attack with at least 1 HP before switching out. This move's chance of failing rises if used in succession.",
		shortDesc: "Endures 1 move then switches out when hit.",
		pp: 10,
		priority: 4,
		flags: {noassist: 1, failcopycat: 1},
		stallingMove: true,
		volatileStatus: 'frontguard',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Endure", target);
			return !!this.queue.willAct() && this.runEvent('StallMove', target);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Front Guard');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect?.effectType === 'Move' && damage >= target.hp) {
					this.add('-activate', target, 'move: Front Guard');
					return target.hp - 1;
				}
			},
			//Switch out process taken from the Eject Button item
			onAfterMoveSecondaryPriority: 2,
			onAfterMoveSecondary(target, source, move) {
				if (source && source !== target && target.hp && move && move.category !== 'Status' && !move.flags['futuremove']) {
					if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.beingCalledBack || target.isSkyDropped()) return;
					if (target.volatiles['commanding'] || target.volatiles['commanded']) return;
					for (const pokemon of this.getAllActive()) {
						if (pokemon.switchFlag === true) return;
					}
					target.switchFlag = true;
					this.add('-end', target, 'move: Front Guard');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
	},
	//Dachsbun
	breadflavor: {
		num: 3031,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bread Flavor",
		desc: "The user makes its foes hungry with a sweet pastry aroma. This move makes all opposing Pokémon take aim only at the user unless their held item is a berry.",
		shortDesc: "Redirects opposing moves to user, except Berry holders.",
		pp: 20,
		priority: 2,
		flags: {noassist: 1, failcopycat: 1},
		volatileStatus: 'breadflavor',
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sweet Scent", target);
		},
		onTry(source) {
			return this.activePerHalf > 1;
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Bread Flavor');
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				const breadFlavorUser = this.effectState.target;
				if (breadFlavorUser.isSkyDropped()) return;

				if (!source.getItem().isBerry && this.validTarget(breadFlavorUser, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Bread Flavor redirected target of move");
					return breadFlavorUser;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Fairy",
	},
	//Lanturn
	stunlight: {
		num: 3032,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Stunlight",
		desc: "The user emits a damaging flash of light that both raises the user's Special Attack stat and lowers opposing Pokémon's Speed stat.",
		shortDesc: "Sp. Atk. +1 to user. Spe -1 to targets.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flash", target);
		},
		secondaries: [
			{
				chance: 100,
				self: {
					boosts: {
						spa: 1,
					},
				},
			}, {
				chance: 100,
				boosts: {
					spe: -1,
				},
			},
		],
		target: "allAdjacentFoes",
		type: "Electric",
	},
	//Orthworm
	pummeling: {
		num: 3033,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pummeling",
		desc: "The user attacks desperately using its tendrils. The less HP the user has, the more times this move hits.",
		shortDesc: "Hits more times with less HP on user (2-5 times).",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bullet Punch", target);
		},
		onModifyMove(move, source, target) {
			if (source.hp <= (source.maxhp * 1 / 4)) move.multihit = 5;
			else if (source.hp <= (source.maxhp * 1 / 2)) move.multihit = 4;
			else if (source.hp <= (source.maxhp * 3 / 4)) move.multihit = 3;
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	//Lokix
	evilkick: {
		num: 3034,
		accuracy: true,
		basePower: 120,
		category: "Physical",
		name: "Evil Kick",
		desc: "A powerful kick that takes the target by surprise and never misses. But if the move is blocked by a move such as Protect, the user takes damage instead.",
		shortDesc: "Never misses. User takes damage if target protects.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "High Jump Kick", target);
		},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	//Absol
	badomen: {
		num: 3035,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Bad Omen",
		desc: "Sensing incoming danger, the user strikes its foes first with a slash attack. This move only hits targets that are readying an attack.",
		shortDesc: "Hits all foes that are planning to attack.",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Night Slash", target);
		},
		//Check every target's planned move to see if they attack. No damage (immune) if no damaging move is planned.
		onTryImmunity(pokemon, source) {
			const action = this.queue.willMove(pokemon);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || pokemon.volatiles['mustrecharge']) {
				return false;
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
	},
	//Dragonite
	dracoforce: {
		num: 3036,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Dracoforce",
		desc: "The user strikes its target with enough power to remove all of the target's stat changes.",
		shortDesc: "Removes target's stat changes.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fire Punch", target);
		},
		onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	//Gumshoos
	finaldeduction: {
		num: 3037,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Final Deduction",
		desc: "If the chosen target has used all of their moves during battle, this move becomes more powerful and cannot be blocked or miss.",
		shortDesc: "If target used all moves: 150 BP, cannot block/miss.",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Crunch", target);
		},
		//BP Modifier
		onBasePower(basePower, attacker, defender, move) {
			for (const moveSlot of defender.moveSlots) {
				if (!moveSlot.used) return this.chainModify(1);
			}
			return this.chainModify(3);
		},
		//Attributes modifications
		onModifyMove(move, source, target) {
			let deduction = true; //Variable used to check if the move should get the new attributes
			for (const moveSlot of target.moveSlots) {
				if (!moveSlot.used) deduction = false;
			}
			//If the target has used all of their moves, modify Final Deduction
			if (deduction)
			{
				move.flags['protect'] = false;
				move.accuracy = true;
			}
		},
		//This is for flavor text
		onBeforeMove(pokemon, target, move) {
			let deduction = true;
			for (const moveSlot of target.moveSlots) {
				if (!moveSlot.used) deduction = false;
			}
			if (deduction) this.add('-message', `${pokemon.name} knows all of ${target.name}'s moves! There is no escape!`);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	//Seviper
	blackstab: {
		num: 3038,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Black Stab",
		desc: "The user stabs its target with its jet-black fangs or tail. This move goes first and may poison the target, but will fail if the target is not preparing an attack.",
		shortDesc: "20% chance of Poison. Goes first. Hits attacking target.",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Poison Tail", target);
		},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
				return false;
			}
		},
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	//Talonflame
	airstrike: {
		num: 3039,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Air Strike",
		desc: "The user delivers an aerial kick using its talons. If the target is in the air, it will be knocked down to the ground.",
		shortDesc: "Makes target grounded.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Aerial Ace", target);
		},
		volatileStatus: 'smackdown',
		secondary: null,
		target: "any",
		type: "Flying",
	},
	//Cacturne
	scarecrow: {
		num: 3040,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Scarecrow",
		desc: "A menacing stance that strikes fear into a foe, forcing it to flee the battlefield. This move goes first but works only on the first turn each time the user enters battle.",
		shortDesc: "Target is forced out. Works only each first active turn.",
		pp: 5,
		priority: 3,
		flags: {reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1, metronome: 1, noassist: 1, failcopycat: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Scary Face", target);
		},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Scarecrow only works on your first turn out.");
				return false;
			}
		},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	//Relicanth (Not working yet)
	stillwater: {
		num: 3041,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Still Water",
		desc: "The user creates a slow water current with special calming effects. This move nullifies the opposing team's stat boosts for five turns.",
		shortDesc: "Ally team ignores opposing stat boosts for 5 turns.",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Safeguard", target);
		},
		sideCondition: 'stillwater',
		condition: {
			duration: 5,
			//Stat boosts nullification (Taken from Unaware ability - Unsure on how to make it work)

			//onAnyModifyBoost?: (this: Battle, boosts: SparseBoostsTable, pokemon: Pokemon) => SparseBoostsTable | void;
			//This checks every boost before every move
			/*onAnyModifyBoost(boosts, pokemon) {
				const unawareUser = this.effectState.target;
				if (unawareUser === pokemon) return;
				//When ally attacks - ignores foe's boosts to Def, SpD & Evasion
				if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
					boosts['def'] = 0;
					boosts['spd'] = 0;
					boosts['evasion'] = 0;
					this.add('-message', `${unawareUser} ignores defensive.`);
				}
				//When ally is getting hit - ignores foe's boosts to Atk, Def, SpA & Accuracy
				if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
					boosts['atk'] = 0;
					boosts['def'] = 0; //Body Press
					boosts['spa'] = 0;
					boosts['accuracy'] = 0;
					this.add('-message', `${unawareUser} ignores offensive.`);
				}
			},*/

			//On a move basis
			/*onModifyMove(move, source, target) {
				//When ally is getting hit - ignores foe's boosts to Atk, Def, SpA & Accuracy
				if (target !== source && this.effectState.target.hasAlly(target)) {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						move.ignoreOffensive = true;
						move.ignoreAccuracy = true;
						this.add('-message', `${target} ignores defensive.`);
					}
				}
			},*/
			onModifyBoost(boosts, pokemon) {
				//this.add('-message', `${pokemon} is the pokemon.`);
				//this.add('-message', `${this.activePokemon} is the active pokemon.`);
				const targetCheck = this.activeTarget;
				const activeCheck = this.activePokemon;
				if (targetCheck && activeCheck)
				{
					this.add('-message', `Target is an ally: ${targetCheck.isAlly(pokemon)}.`);
					this.add('-message', `Active is an ally: ${activeCheck.isAlly(pokemon)}.`);
					//When pokemon attacks a foe - ignores foe's boosts to Def, SpD & Evasion
					if (this.activePokemon === pokemon /*&& !this.activeTarget.isAlly(pokemon)*/) {
						this.debug('defense boosts nullified.');
						if (boosts.def && boosts.def > 0) {
							boosts.def = 0;
						}
						if (boosts.spd && boosts.spd > 0) {
							boosts.spd = 0;
						}
						if (boosts.evasion && boosts.evasion > 0) {
							boosts.evasion = 0;
						}
					}

					//When pokemon is getting hit by a foe - ignores foe's boosts to Atk, Def, SpA & Accuracy
					if (this.activeTarget === pokemon /*&& !this.activePokemon.isAlly(pokemon)*/) {
						this.debug('offense boosts nullified.');
						if (boosts.atk && boosts.atk > 0) {
							boosts.atk = 0;
						}
						if (boosts.def && boosts.def > 0) { //Body Press
							boosts.def = 0;
						}
						if (boosts.spa && boosts.spa > 0) {
							boosts.spa = 0;
						}
						if (boosts.accuracy && boosts.accuracy > 0) {
							boosts.accuracy = 0;
						}
					}
				}
			},
			//This part works but there is no animation for it
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Still Water');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 6,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Still Water');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Water",
	},

	//Signature moves remixed
	//Raticate
	//Raticate-Alola
	hyperfang: {
		inherit: true,
		desc: "The user bites hard on the target with its sharp front fangs. This may also make the target flinch.",
		shortDesc: "30% chance of Flinch on target.",
		accuracy: 100,
		basePower: 100,
		pp: 10,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
	},

	//Old moves remixed (for technicality)
	//[Heal block] status is defined in the 'Heal Block' move, so the duration of the status effect is set inside the move itself
	//For 'Secret Thorns'
	healblock: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (effect?.name === "Psychic Noise" || effect?.name === "Secret Thorns") {
					return 2;
				}
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Heal Block');
					return 7;
				}
				return 5;
			},
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Heal Block');
				source.moveThisTurnResult = true;
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onResidualOrder: 20,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Heal Block');
			},
			onTryHeal(damage, target, source, effect) {
				if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
				return false;
			},
			onRestart(target, source, effect) {
				if (effect?.name === 'Psychic Noise') return;

				this.add('-fail', target, 'move: Heal Block'); // Succeeds to supress downstream messages
				if (!source.moveThisTurnResult) {
					source.moveThisTurnResult = false;
				}
			},
		},
	},
	//Moves boosted against a target that used Minimize are defined inside the move itself
	//For 'Poison Wheel'
	minimize: {
		inherit: true,
		condition: {
			noCopy: true,
			onRestart: () => null,
			onSourceModifyDamage(damage, source, target, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
					'poisonwheel',
				];
				if (boostedMoves.includes(move.id)) {
					return this.chainModify(2);
				}
			},
			onAccuracy(accuracy, target, source, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
					'poisonwheel',
				];
				if (boostedMoves.includes(move.id)) {
					return true;
				}
				return accuracy;
			},
		},
	},
	//Moves that grants aerial invulnerability (Fly, Bounce, Sky Drop) have specific checks that need to be defined within the move itself
	//For 'Air Strike'
	bounce: {
		inherit: true,
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'airstrike'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
	},
	fly: {
		inherit: true,
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'airstrike'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
	},
	skydrop: {
		inherit: true,
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Sky drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'airstrike'].includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					this.debug('BP doubled on midair target');
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
	},
	//Field effects have special interactions with specific moves
	//Court Change - For 'Still Water'
	courtchange: {
		inherit: true,
		onHitField(target, source) {
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire',
				'stillwater',
			];
			let success = false;
			if (this.gameType === "freeforall") {
				// random integer from 1-3 inclusive
				const offset = this.random(3) + 1;
				// the list of all sides in counterclockwise order
				const sides = [this.sides[0], this.sides[2]!, this.sides[1], this.sides[3]!];
				const temp: {[k: number]: typeof source.side.sideConditions} = {0: {}, 1: {}, 2: {}, 3: {}};
				for (const side of sides) {
					for (const id in side.sideConditions) {
						if (!sideConditions.includes(id)) continue;
						temp[side.n][id] = side.sideConditions[id];
						delete side.sideConditions[id];
						const effectName = this.dex.conditions.get(id).name;
						this.add('-sideend', side, effectName, '[silent]');
						success = true;
					}
				}
				for (let i = 0; i < 4; i++) {
					const sourceSideConditions = temp[sides[i].n];
					const targetSide = sides[(i + offset) % 4]; // the next side in rotation
					for (const id in sourceSideConditions) {
						targetSide.sideConditions[id] = sourceSideConditions[id];
						const effectName = this.dex.conditions.get(id).name;
						let layers = sourceSideConditions[id].layers || 1;
						for (; layers > 0; layers--) this.add('-sidestart', targetSide, effectName, '[silent]');
					}
				}
			} else {
				const sourceSideConditions = source.side.sideConditions;
				const targetSideConditions = source.side.foe.sideConditions;
				const sourceTemp: typeof sourceSideConditions = {};
				const targetTemp: typeof targetSideConditions = {};
				for (const id in sourceSideConditions) {
					if (!sideConditions.includes(id)) continue;
					sourceTemp[id] = sourceSideConditions[id];
					delete sourceSideConditions[id];
					success = true;
				}
				for (const id in targetSideConditions) {
					if (!sideConditions.includes(id)) continue;
					targetTemp[id] = targetSideConditions[id];
					delete targetSideConditions[id];
					success = true;
				}
				for (const id in sourceTemp) {
					targetSideConditions[id] = sourceTemp[id];
				}
				for (const id in targetTemp) {
					sourceSideConditions[id] = targetTemp[id];
				}
				this.add('-swapsideconditions');
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
	},
};
