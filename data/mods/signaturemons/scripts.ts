export const Scripts: ModdedBattleScriptsData = {
	inherit: 'champions',
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['Uber', 'OU', 'UUBL', 'UU', 'NFE', '(OU)'], //Previously ["Sign", "NoSign"],
	},
	gen: 9,
	init() {
		// This new function comes from the creator of Umbremons! I did NOT make it myself! Explanations below:

		// Hematite note: "I added a new function for this so it would be easier to list movepool additions in Data Mod!
		// You can add multiple moves to the same Pokémon and/or add the same move to multiple Pokémon in one line;
		// if you want that, just put ['brackets'] around the list - see the slate 1 examples below!"
		const addMove = (movelist, pokemonlist) => {
			if (!movelist || !pokemonlist) return;
			const moves = [];
			const pokemon = [];
			if (Array.isArray(movelist)) for (const move of movelist) if (!moves.includes(move)) moves.push(move);
			if (typeof movelist === 'string') moves.push(movelist);
			if (Array.isArray(pokemonlist)) for (const mon of pokemonlist) if (!pokemon.includes(mon)) pokemon.push(mon);
			if (typeof pokemonlist === 'string') pokemon.push(pokemonlist);

			for (const move of moves) {
				for (const mon of pokemon) {
					this.modData('Learnsets', mon).learnset[move] = ['9M'];
					if (this.dataCache.Pokedex[mon] && this.dataCache.Moves[move]) {
						if (!this.dataCache.Pokedex[mon].movepoolAdditions) this.dataCache.Pokedex[mon].movepoolAdditions = [];
						this.dataCache.Pokedex[mon].movepoolAdditions.push(this.dataCache.Moves[move].name);
					}
				}
			}
		}

		//Add signature moves to learnsets (by dex number order)
		//Gen 1
		addMove('greatflower', 'venusaur');
		addMove('greatflame', 'charizard');
		addMove('greatflood', 'blastoise');
		addMove('cursedflames', 'ninetales');
		addMove('palelight', 'ninetalesalola');
		addMove('tripledig', ['dugtrio', 'dugtrioalola']);
		addMove('acidambush', 'victreebel');
		addMove('tentacoil', 'tentacruel');
		addMove('shellreaction', 'slowbro');
		addMove('costlyescape', 'cloyster');
		addMove('shadowcreep', 'gengar');
		addMove('electroblast', 'electrode');
		addMove('bellyflop', 'snorlax');
		addMove('icestorm', 'articuno');
		addMove('thunderstorm', 'zapdos');
		addMove('firestorm', 'moltres');
		addMove('dracoforce', 'dragonite');

		//Gen 2
		addMove('breathoflife', 'meganium');
		addMove('exploruption', 'typhlosion');
		addMove('brutalbite', 'feraligatr');
		addMove('superstarcombo', 'ledian');
		addMove('stunlight', 'lanturn');
		addMove('lightburst', 'ampharos');
		addMove('bubbleball', 'azumarill');
		addMove('fakebranch', 'sudowoodo');
		addMove('sunshinebloom', 'sunflora');
		addMove('respite', 'wobbuffet');
		addMove('airsurf', 'mantine');
		addMove('landslide', 'tyranitar');

		//Gen 3
		addMove('linedash', 'linoone');
		addMove('partytime', 'ludicolo');
		addMove('verdantwind', 'shiftry');
		addMove('procrastinate', 'slaking');
		addMove('carteblanche', 'delcatty');
		addMove('chompchomp', 'mawile');
		addMove('spintowin', 'spinda');
		addMove('scarecrow', 'cacturne');
		addMove('whiteclaw', 'zangoose');
		addMove('blackstab', 'seviper');
		addMove('gyropulse', 'claydol');
		addMove('meteoforce', 'castform');
		addMove('badomen', 'absol');
		addMove('stillwater', 'relicanth');
		addMove('loveadvice', 'luvdisc');

		//Gen 4
		addMove('secretthorns', 'roserade');
		addMove('razzia', 'mothim');
		addMove('stickyslime', 'gastrodon');
		addMove('vileorders', 'honchkrow');
		addMove('belltoll', 'bronzong');
		addMove('deathspiral', 'spiritomb');
		addMove('aurastorm', 'lucario');
		addMove('flytrap', 'carnivine');
		addMove('sinisterclaw', 'weavile');
		addMove('tastetest', 'lickilicky');
		addMove('curseofsnow', 'froslass');

		//Gen 5
		addMove('tailormade', 'leavanny');
		addMove('poisonwheel', 'scolipede');
		addMove('sublimescent', 'lilligant');
		addMove('burningwill', ['darmanitan', 'darmanitangalar']);
		addMove('holdup', 'scrafty');
		addMove('armorlance', 'escavalier');
		addMove('exhaustion', 'eelektross');
		addMove('iceclaw', 'beartic');
		addMove('frontguard', 'durant');
		addMove('triplethreat', 'hydreigon');

		//Gen 6
		addMove('burbash', 'chesnaught');
		addMove('pyromancy', 'delphox');
		addMove('topple', 'diggersby');
		addMove('airstrike', 'talonflame');
		addMove('magicgarden', 'florges');
		addMove('haymaker', 'pangoro');
		addMove('revolution', 'malamar');
		addMove('waterbombshell', 'clawitzer');
		addMove('solarcharge', 'heliolisk');
		addMove('killerwail', 'noivern');

		//Gen 7
		addMove('finaldeduction', 'gumshoos');
		addMove('bighug', 'bewear');
		addMove('touchdown', 'passimian');
		addMove('snuggle', 'mimikyu');

		//Gen 8
		addMove('berrysnack', 'greedent');
		addMove('armorwing', 'corviknight');
		addMove('callingcard', 'thievul');
		addMove('bouncyshield', 'dubwool');
		addMove('siroccoshot', 'sandaconda');
		addMove('ghastlywail', 'cursola');
		addMove('iceblock', 'eiscue');
		addMove('butlerservice', 'indeedee');
		addMove('maidservice', 'indeedeef');
		addMove('abyssalboost', ['basculegion', 'basculegionf']);

		//Gen 9
		addMove('evilkick', 'lokix');
		addMove('breadflavor', 'dachsbun');
		addMove('bellyspot', 'bellibolt');
		addMove('tentacoil', 'toedscruel');
		addMove('pummeling', 'orthworm');
		
		/*
		//Remove reworked signature moves to Pokémon who got them in later generations (by move, then dex order)
		//Hyper Fang (Raticate/Raticate-Alola)
		delete this.modData('Learnsets', 'bidoof').learnset.hyperfang;
		delete this.modData('Learnsets', 'bibarel').learnset.hyperfang;
		delete this.modData('Learnsets', 'pachirisu').learnset.hyperfang;
		delete this.modData('Learnsets', 'patrat').learnset.hyperfang;
		delete this.modData('Learnsets', 'watchog').learnset.hyperfang;
		delete this.modData('Learnsets', 'yungoos').learnset.hyperfang;
		delete this.modData('Learnsets', 'gumshoos').learnset.hyperfang;

		//Water Shuriken (Greninja)
		delete this.modData('Learnsets', 'accelgor').learnset.watershuriken;
		*/
	}
};
