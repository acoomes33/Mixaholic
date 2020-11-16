class Adapter {
    constructor(resource){
        this.resource = resource;
    }

    getIndexFetch() {
        return fetch(`http://localhost:3000/${this.resource}`)
        .then(resp => resp.json());
    }
}