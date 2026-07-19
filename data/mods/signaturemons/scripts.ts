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
		//Gen 1
		this.modData('Learnsets', 'venusaur').learnset.greatflower = ['9L1'];
		this.modData('Learnsets', 'charizard').learnset.greatflame = ['9L1'];
		this.modData('Learnsets', 'blastoise').learnset.greatflood = ['9L1'];
		this.modData('Learnsets', 'ninetales').learnset.cursedflames = ['9L1'];
		this.modData('Learnsets', 'ninetalesalola').learnset.palelight = ['9L1'];
		this.modData('Learnsets', 'dugtrio').learnset.tripledig = ['9L1'];
		this.modData('Learnsets', 'dugtrioalola').learnset.tripledig = ['9L1'];
		this.modData('Learnsets', 'victreebel').learnset.acidambush = ['9L1'];
		this.modData('Learnsets', 'tentacruel').learnset.tentacoil = ['9L1'];
		this.modData('Learnsets', 'slowbro').learnset.shellreaction = ['9L1'];
		this.modData('Learnsets', 'cloyster').learnset.costlyescape = ['9L1'];
		this.modData('Learnsets', 'gengar').learnset.shadowcreep = ['9L1'];
		this.modData('Learnsets', 'electrode').learnset.electroblast = ['9L1'];
		this.modData('Learnsets', 'snorlax').learnset.bellyflop = ['9L1'];
		this.modData('Learnsets', 'articuno').learnset.icestorm = ['9L1'];
		this.modData('Learnsets', 'zapdos').learnset.thunderstorm = ['9L1'];
		this.modData('Learnsets', 'moltres').learnset.firestorm = ['9L1'];
		this.modData('Learnsets', 'dragonite').learnset.dracoforce = ['9L1'];

		//Gen 2
		this.modData('Learnsets', 'ledian').learnset.superstarcombo = ['9L1'];
		this.modData('Learnsets', 'lanturn').learnset.stunlight = ['9L1'];
		this.modData('Learnsets', 'ampharos').learnset.lightburst = ['9L1'];
		this.modData('Learnsets', 'azumarill').learnset.bubbleball = ['9L1'];
		this.modData('Learnsets', 'sudowoodo').learnset.fakebranch = ['9L1'];
		this.modData('Learnsets', 'sunflora').learnset.sunshinebloom = ['9L1'];
		this.modData('Learnsets', 'wobbuffet').learnset.respite = ['9L1'];
		this.modData('Learnsets', 'mantine').learnset.airsurf = ['9L1'];
		this.modData('Learnsets', 'tyranitar').learnset.landslide = ['9L1'];

		//Gen 3
		this.modData('Learnsets', 'linoone').learnset.linedash = ['9L1'];
		this.modData('Learnsets', 'ludicolo').learnset.partytime = ['9L1'];
		this.modData('Learnsets', 'shiftry').learnset.verdantwind = ['9L1'];
		this.modData('Learnsets', 'slaking').learnset.procrastinate = ['9L1'];
		this.modData('Learnsets', 'delcatty').learnset.carteblanche = ['9L1'];
		this.modData('Learnsets', 'mawile').learnset.chompchomp = ['9L1'];
		this.modData('Learnsets', 'spinda').learnset.spintowin = ['9L1'];
		this.modData('Learnsets', 'cacturne').learnset.scarecrow = ['9L1'];
		this.modData('Learnsets', 'zangoose').learnset.whiteclaw = ['9L1'];
		this.modData('Learnsets', 'seviper').learnset.blackstab = ['9L1'];
		this.modData('Learnsets', 'claydol').learnset.gyropulse = ['9L1'];
		this.modData('Learnsets', 'castform').learnset.meteoforce = ['9L1'];
		this.modData('Learnsets', 'absol').learnset.badomen = ['9L1'];
		this.modData('Learnsets', 'relicanth').learnset.stillwater = ['9L1'];
		this.modData('Learnsets', 'luvdisc').learnset.loveadvice = ['9L1'];

		//Gen 4
		this.modData('Learnsets', 'roserade').learnset.secretthorns = ['9L1'];
		this.modData('Learnsets', 'mothim').learnset.razzia = ['9L1'];
		this.modData('Learnsets', 'gastrodon').learnset.stickyslime = ['9L1'];
		this.modData('Learnsets', 'honchkrow').learnset.vileorders = ['9L1'];
		this.modData('Learnsets', 'bronzong').learnset.belltoll = ['9L1'];
		this.modData('Learnsets', 'spiritomb').learnset.deathspiral = ['9L1'];
		this.modData('Learnsets', 'lucario').learnset.aurastorm = ['9L1'];
		this.modData('Learnsets', 'carnivine').learnset.flytrap = ['9L1'];
		this.modData('Learnsets', 'weavile').learnset.sinisterclaw = ['9L1'];
		this.modData('Learnsets', 'lickilicky').learnset.tastetest = ['9L1'];
		this.modData('Learnsets', 'froslass').learnset.curseofsnow = ['9L1'];

		//Gen 5
		this.modData('Learnsets', 'leavanny').learnset.tailormade = ['9L1'];
		this.modData('Learnsets', 'scolipede').learnset.poisonwheel = ['9L1'];
		this.modData('Learnsets', 'lilligant').learnset.sublimescent = ['9L1'];
		this.modData('Learnsets', 'darmanitan').learnset.burningwill = ['9L1'];
		this.modData('Learnsets', 'darmanitangalar').learnset.burningwill = ['9L1'];
		this.modData('Learnsets', 'scrafty').learnset.holdup = ['9L1'];
		this.modData('Learnsets', 'escavalier').learnset.armorlance = ['9L1'];
		this.modData('Learnsets', 'eelektross').learnset.exhaustion = ['9L1'];
		this.modData('Learnsets', 'beartic').learnset.iceclaw = ['9L1'];
		this.modData('Learnsets', 'durant').learnset.frontguard = ['9L1'];
		this.modData('Learnsets', 'hydreigon').learnset.triplethreat = ['9L1'];

		//Gen 6
		this.modData('Learnsets', 'chesnaught').learnset.burbash = ['9L1'];
		this.modData('Learnsets', 'delphox').learnset.pyromancy = ['9L1'];
		this.modData('Learnsets', 'diggersby').learnset.topple = ['9L1'];
		this.modData('Learnsets', 'talonflame').learnset.airstrike = ['9L1'];
		this.modData('Learnsets', 'florges').learnset.magicgarden = ['9L1'];
		this.modData('Learnsets', 'pangoro').learnset.haymaker = ['9L1'];
		this.modData('Learnsets', 'malamar').learnset.revolution = ['9L1'];
		this.modData('Learnsets', 'clawitzer').learnset.waterbombshell = ['9L1'];
		this.modData('Learnsets', 'heliolisk').learnset.solarcharge = ['9L1'];
		this.modData('Learnsets', 'noivern').learnset.killerwail = ['9L1'];

		//Gen 7
		this.modData('Learnsets', 'gumshoos').learnset.finaldeduction = ['9L1'];
		this.modData('Learnsets', 'bewear').learnset.bighug = ['9L1'];
		this.modData('Learnsets', 'passimian').learnset.touchdown = ['9L1'];
		this.modData('Learnsets', 'mimikyu').learnset.snuggle = ['9L1'];

		//Gen 8
		this.modData('Learnsets', 'greedent').learnset.berrysnack = ['9L1'];
		this.modData('Learnsets', 'corviknight').learnset.armorwing = ['9L1'];
		this.modData('Learnsets', 'thievul').learnset.callingcard = ['9L1'];
		this.modData('Learnsets', 'dubwool').learnset.bouncyshield = ['9L1'];
		this.modData('Learnsets', 'sandaconda').learnset.siroccoshot = ['9L1'];
		this.modData('Learnsets', 'cursola').learnset.ghastlywail = ['9L1'];
		this.modData('Learnsets', 'eiscue').learnset.iceblock = ['9L1'];
		this.modData('Learnsets', 'indeedee').learnset.butlerservice = ['9L1'];
		this.modData('Learnsets', 'indeedeef').learnset.maidservice = ['9L1'];
		this.modData('Learnsets', 'basculegion').learnset.abyssalboost = ['9L1'];
		this.modData('Learnsets', 'basculegionf').learnset.abyssalboost = ['9L1'];

		//Gen 9
		this.modData('Learnsets', 'lokix').learnset.evilkick = ['9L1'];
		this.modData('Learnsets', 'dachsbun').learnset.breadflavor = ['9L1'];
		this.modData('Learnsets', 'bellibolt').learnset.bellyspot = ['9L1'];
		this.modData('Learnsets', 'toedscruel').learnset.tentacoil = ['9L1'];
		this.modData('Learnsets', 'orthworm').learnset.pummeling = ['9L1'];

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
