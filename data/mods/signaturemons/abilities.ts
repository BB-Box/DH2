export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	//Modified so that Procrastinate can be used on natural Truant turns
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
}