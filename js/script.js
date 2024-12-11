// Función para obtener los datos de los primeros 20 Pokémon
const fetchPokemonData = async () => {
  try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const pokemons = response.data.results;

      // Para cada Pokémon, obtenemos los detalles adicionales
      const pokemonCards = pokemons.map(async (pokemon) => {
          // Obtener detalles del Pokémon
          const pokemonDetail = await axios.get(pokemon.url);
          const pokemonName = pokemonDetail.data.name;
          const pokemonImage = pokemonDetail.data.sprites.front_default;

          // Crear la estructura de la tarjeta
          const card = document.createElement('div');
          card.classList.add('card');

          // Añadir la imagen del Pokémon
          const img = document.createElement('img');
          img.src = pokemonImage;
          img.classList.add('card__image');
          card.appendChild(img);

          // Añadir el nombre del Pokémon
          const title = document.createElement('h3');
          title.classList.add('card__title');
          title.textContent = pokemonName;
          card.appendChild(title);

          return card;
      });

      // Esperar a que todas las promesas de tarjetas se resuelvan
      const cards = await Promise.all(pokemonCards);
      const cardContainer = document.getElementById('pokemon-cards');

      // Agregar las tarjetas al contenedor
      cards.forEach(card => cardContainer.appendChild(card));

  } catch (error) {
      console.error('Error fetching Pokémon data:', error);
  }
};

// Llamar a la función para obtener los datos
fetchPokemonData();
