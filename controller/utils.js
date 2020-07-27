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