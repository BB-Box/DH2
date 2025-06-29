export const Abilities: { [abilityid: string]: ModdedAbilityData } = {
	//placeholder
	thickfat: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Thick Fat');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Thick Fat');
			}
			return false;
		},
		shortDesc: "Fire-/Ice-type moves against this Pokemon deal 1/2 damage. Burn immune.",
	},
	callvolbeat: {
		//Placeholder for when ability is implemented
		/*onSourceDamagingHit(damage, target, source, move) {
			if (this.hasVolHealed) return;
			this.hasVolHealed = true;
			this.heal(1 / 4);
		},*/
		flags: {breakable: 1},
		name: "Call Volbeat",
		rating: 5,
		num: -100,
		shortDesc: "Does nothing right now!",
		//shortDesc: "After getting hit for the first time in a battle, heal 25% HP.",
	},
	callillumise: {
		//Placeholder for when ability is implemented
		/*onSourceDamagingHit(damage, target, source, move) {
			if (this.hasIllHealed) return;
			this.hasIllHealed = true;
			this.heal(1 / 4);
		},*/
		flags: {breakable: 1},
		name: "Call Illumise",
		rating: 5,
		num: -101,
		shortDesc: "Does nothing right now!",
		//shortDesc: "After getting hit for the first time in a battle, heal 25% HP.",
	},
	shortfuse: {
		onDamagePriority: -30, 
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Short Fuse');
		
				// Keep the Pokémon at 1 HP instead of fainting immediately
				const finalHp = target.hp - 1;
				this.damage(target.hp - 1, target, source, effect);
		
				// Force the Pokémon to use Explosion
				const explosion = this.dex.getActiveMove('explosion');
				this.actions.useMove(explosion, target);
					
				// Ensure the Pokémon properly faints afterward
				target.faint();
			}
		},
		flags: {breakable: 1},
		name: "Short Fuse",
		rating: 5,
		num: -102,
		//shortDesc: "Does nothing right now!",
		shortDesc: "When this Pokemon would be KOed, it instead uses Explosion.",
	},
	hydroelectricdam: {
		//Copied from the code for Sand Spit
		onDamagingHit(damage, target, source, move) {
			this.field.setWeather('raindance');
			this.add('-ability', pokemon, 'Hydroelectric Dam');
			this.add('-message', `Archaludon releases a deluge!`);
		},
		flags: {},
		name: "Hydroelectric Dam",
		rating: 5,
		num: -103,
		shortDesc: "When this Pokemon is hit by an attack, the effect of Rain Dance begins.",
	},
	frozenarmor: {
		//Code stolen from Shields Down
		onTryHit(target, source, move) {
			if(move.category != 'Status') {
				this.add('-ability', target, 'Frozen Armor');
				move.basePower = Math.max(move.basePower - 20, 0);
			}
		},
		onSwitchInPriority: -1,
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Glastrier' || pokemon.transformed) return;
			if (pokemon.hp < pokemon.maxhp / 2) {
				if (pokemon.species !== 'Calyrex-Ice') {
					pokemon.formeChange('Calyrex-Ice');
				}
			} else {
				if (pokemon.species.forme === 'Calyrex-Ice') {
					pokemon.formeChange(pokemon.set.species);
					this.add('-ability', pokemon, 'As One (Glastrier)');
				}
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Glastrier' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.hp < pokemon.maxhp / 2) {
				if (pokemon.species !== 'Calyrex-Ice') {
					pokemon.formeChange('Calyrex-Ice');
					this.add('-ability', pokemon, 'Frozen Armor');
					pokemon.setAbility('As One (Glastrier)');
					this.add('-ability', pokemon, 'As One');
					return;
				}
			} else {
				if (pokemon.species.forme === 'Calyrex-Ice') {
					pokemon.formeChange(pokemon.set.species);
					this.add('-ability', pokemon, 'Frozen Armor');
					pokemon.setAbility('As One (Glastrier)');
					this.add('-ability', pokemon, 'As One');
				}
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1},
		name: "Frozen Armor",
		rating: 5,
		num: -105,
		shortDesc: "Incoming attacks have their BP reduced by 20. This Pokemon transforms into Calyrex-Ice below 50% HP.",
	},
	flipflop: {
		onDamagingHitOrder: 1,
		onTryHit(target, source, move) {
			if (move.flags['contact']) {
				let invertedBoosts: SparseBoostsTable = {};
				for (const stat in source.boosts) {
					if (source.boosts[stat] > 0) {
						invertedBoosts[stat] = -2 * source.boosts[stat]; 
						this.boost(invertedBoosts, source);
						this.add('-ability', target, 'Flip Flop');
					}
				}
			}
		},
		flags: {},
		name: "Flip Flop",
		rating: 5,
		num: -104,
		shortDesc: "When hit by a contact move, the attacker’s stat changes are inverted.",
	},

	grasspelt: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			this.field.setTerrain('grassyterrain');
		},
		shortDesc: "Starts Grassy Terrain on hit. 1.5x Def in Grassy Terrain.",
	},
	aquaveil: {
		onSwitchInPriority: -1,
		onStart(pokemon) {
			this.add('-start', pokemon, 'Aqua Ring');
		},
		onResidualOrder: 6,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 16);
		},
		onSourceModifyAtkPriority: 5,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		name: "Aqua Veil",
		rating: 5,
		num: -106,
		shortDesc: "Starts Aqua Ring on switch in.",
	},
	stillwater: {
		onAnyModifyBoost(boosts, pokemon) {
			const unawareUser = this.effectState.target;
			if (unawareUser === pokemon) return;
			if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['def'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Still Water');
				}
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Still Water",
		rating: 5,
		num: -107,
		shortDesc: "This ability provides the effects of Unaware and Water Absorb.",
	},
	kingofthehill: {
		//sharpness + mountaineer, still working on the custom part
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock') {
				return false;
			}
		},
		onTryHit(target, source, move) {
			if (move.type === 'Rock' && !target.activeTurns) {
				this.add('-immune', target, '[from] ability: King of the Hill');
				return null;
			}
		},
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['slicing']) {
				this.debug('Sharpness boost');
				return this.chainModify(1.5);
			}
		},
		onStart(pokemon) {
			this.add('-ability', pokemon, 'King of the Hill');
			for (const side of pokemon.side.foeSidesWithConditions()) {
					side.addSideCondition('kingofthehill');
			}
		},
		onEnd(pokemon) {
			for (const side of pokemon.side.foeSidesWithConditions()) {
				if (side.getSideCondition('kingofthehill')) {
					side.removeSideCondition('kingofthehill');
				}
			}
		},
		condition: {},
		flags: {breakable: 1},
		name: "King of the Hill",
		rating: 5,
		num: -108,
		shortDesc: "Provides the effects of Mountaineer and Sharpness. Additionally, opposing Pokemon cannot avoid entry hazards by any means, including Boots, Flying-type, or Magic Guard.",
	},
	omnivore: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			target.addVolatile('stockpile');
			this.add('-message', `Swalot swallows down the move!`);
			this.add('-activate', target, 'ability: Omnivore');
		},
		flags: {},
		name: "Omnivore",
		rating: 5,
		num: -109,
		shortDesc: "This Pokemon gains a Stockpile charge upon being hit by a damaging attack.",
	},
	pseudowoodo: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect?.effectType === 'Move' && ['sudowoodo'].includes(target.species.id)) {
				this.add('-activate', target, 'ability: Pseudowoodo');
				this.effectState.rock = true;
				return 0;
			}
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (!['sudowoodo'].includes(target.species.id)) {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (!['sudowoodo'].includes(target.species.id)) {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['sudowoodo'].includes(pokemon.species.id) && this.effectState.rock) {
				const speciesid = 'Sudowoodo-Rock';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1,
			breakable: 1, notransform: 1,
		},
		name: "Pseudowoodo",
		rating: 5,
		num: -110,
		shortDesc: "The first hit it takes is blocked, and it takes 1/8 HP damage instead. It then switches from a Grass type to a Rock type.",
	},
	magicguard: {
		onDamage(damage, target, source, effect) {
			if (target.side.getSideCondition('kingofthehill')) {
            const hazards = ['stealthrock', 'spikes', 'toxicspikes', 'stickyweb'];
            if (effect && hazards.includes(effect.id)) {
                return;
           	}
        	}
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		flags: {},
		name: "Magic Guard",
		rating: 4,
		num: 98,
	}
};
