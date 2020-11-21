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

    delete(id) {
        return fetch(`http://localhost:3000/${this.resource}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    update(inst) {
        return fetch(`http://localhost:3000/${this.resource}/${inst.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inst),
        }).then(resp => resp.json());
    }

    
}