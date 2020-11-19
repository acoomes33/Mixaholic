class Adapter {
    constructor(resource){
        this.resource = resource;
    }

    getIndex() {
        return fetch(`http://localhost:3000/${this.resource}`)
        .then(resp => resp.json());
        
    }

    post(inst) {
        return fetch(`http://localhost:3000/${this.resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inst),
        }).then(resp => resp.json());
    }

    delete(inst) {
        return fetch(`http://localhost:3000/${this.resource}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inst),
        }).then(resp => resp.json());
    }
}