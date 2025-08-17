export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	//Truant modified so that Procrastinate can be used on natural Truant turns
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
	//Damp modified to include new explosive moves
	damp: {
		inherit: true,
		onAnyTryMove(target, source, effect) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct', 'electroblast'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Damp', effect, '[of] ' + target);
				return false;
			}
		},
	},
	//Inner Focus modified to be immune to Scarecrow
	innerfocus: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Inner Focus');
				return null;
			}
		},
	},
	//Oblivious modified to be immune to Scarecrow
	oblivious: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'scarecrow' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[from] ability: Oblivious');
				return null;
			}
		},
	},
	//Own Tempo modified to be immune to Scarecrow
	owntempo: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Own Tempo');
				return null;
			}
		},
	},
	//Rattled modified to trigger itself and be immune to Scarecrow
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
	//Scrappy modified to be immune to Scarecrow
	scrappy: {
		inherit: true,
		onTryHit(pokemon, target, move) {
			if (move.id === 'scarecrow') {
				this.add('-immune', pokemon, '[from] ability: Scrappy');
				return null;
			}
		},
	},
	//Steadfast modified to trigger itself and be immune to Scarecrow
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
}