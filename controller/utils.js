module.exports = {
    dynamicSort(property) {
        var sortOrder = 1;

        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a, b) {
            if (sortOrder == -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        }
    },
    challengeBetweenTwo(movie1, movie2) {
        if (movie1['nota'] > movie2['nota']) {
            return movie1;
        } else if (movie1['nota'] < movie2['nota']) {
            return movie2;
        }
        var movies = new Array();
        movies.push(movie1);
        movies.push(movie2);
        movies.sort(this.dynamicSort("titulo"));
        return movies[0];
    }
}