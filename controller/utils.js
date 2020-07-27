module.exports = {
    dynamicSort(property) {
        let sortOrder = 1;

        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return (a, b) => {
            if (sortOrder == -1) {
                return b[property].localeCompare(a[property]);
            }
            return a[property].localeCompare(b[property]);
        }
    },
    batalhaEntreFilmes(movie1, movie2) {
        if (movie1['nota'] > movie2['nota']) {
            return movie1;
        }
        if (movie1['nota'] < movie2['nota']) {
            return movie2;
        }

        const movies = new Array();
        movies.push(movie1);
        movies.push(movie2);
        movies.sort(this.dynamicSort("titulo"));
        return movies[0];
    },

    eliminatorias(filmes) {
        const finalistas = new Array();
        finalistas[0] = this.batalhaEntreFilmes(filmes[0], filmes[7]);
        finalistas[1] = this.batalhaEntreFilmes(filmes[1], filmes[6]);
        finalistas[2] = this.batalhaEntreFilmes(filmes[2], filmes[5]);
        finalistas[3] = this.batalhaEntreFilmes(filmes[3], filmes[4])
        return finalistas;
    },

    getVencedor(movie1, movie2) {
        const movies = new Array();

        if (movie1['nota'] > movie2['nota']) {
            movies.push(movie1);
            movies.push(movie2);
        } else if (movie1['nota'] < movie2['nota']) {
            movies.push(movie2);
            movies.push(movie1);
        } else {
            movies.push(movie1);
            movies.push(movie2);
            movies.sort(this.dynamicSort("titulo"));
        }

        return movies;
    }
}