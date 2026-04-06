export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	//Abilities have no fundamental changes on their effects, but some new moves interact with some abilities in unique ways.
	
	//Truant: modified so that Procrastinate can be used on natural Truant turns
	truant: {
		inherit: true,
		onBeforeMove(pokemon, target, move) {
			//Procrastinate exception: On turns where Truant should proc and Procrastinate is used, ignore the turn skip and reapply the volatile status
			if (move.id === 'procrastinate' && pokemon.removeVolatile('truant')) {
				pokemon.addVolatile('truant');
				return true;
			}
			//Turn skip if the volatile status is removed
			if (pokemon.removeVolatile('truant')) {
				this.add('cant', pokemon, 'ability: Truant');
				return false;
			}
			//No turn skip - Add volatile if not present
			pokemon.addVolatile('truant');
		},
	},
	//Damp: includes new explosive moves (Burning Will, Electroblast)
	damp: {
		inherit: true,
		onAnyTryMove(target, source, effect) {
			if (['burningwill', 'electroblast', 'explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Damp', effect, '[of] ' + target);
				return false;
			}
		},
	},
	//Inner Focus: immune to Scarecrow
	innerfocus: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Inner Focus');
				return null;
			}
		},
	},
	//Oblivious: immune to Scarecrow and Party Time
	oblivious: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'partytime' || move.id === 'scarecrow' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[from] ability: Oblivious');
				return null;
			}
		},
	},
	//Own Tempo: immune to Scarecrow and Party Time
	owntempo: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'partytime' || move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Own Tempo');
				return null;
			}
		},
	},
	//Rattled: triggers itself and is immune to Scarecrow
	rattled: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Rattled');
				this.boost({spe: 1});
				return null;
			}
		},
	},
	//Scrappy: immune to Scarecrow
	scrappy: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Scrappy');
				return null;
			}
		},
	},
	//Steadfast: triggers itself and be immune to Scarecrow
	steadfast: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Steadfast');
				this.boost({spe: 1});
				return null;
			}
		},
	},
	//Dancer: immune to Party Time
	dancer: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'partytime') {
				this.add('-immune', pokemon, '[from] ability: Dancer');
				return null;
			}
		},
	},
	//Aroma Veil: protects from Party Time effects
	aromaveil: {
		inherit: true,
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'partytime', 'taunt', 'torment'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Aroma Veil', '[of] ' + effectHolder);
				}
				return null;
			}
		},
	},
}