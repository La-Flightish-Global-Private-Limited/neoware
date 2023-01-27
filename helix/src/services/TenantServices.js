import server from "../components/server";

export class TenantService {
    constructor() {
    }

    getTenants() {
        return server.get('/data/tenants.json')
            .then((res) => res)
            .then((d) => d.data);
    }
}