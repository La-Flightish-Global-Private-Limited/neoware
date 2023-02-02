import server from "../components/server";

export class TenantService {
    constructor() {
    }

    getTenants() {
        return server.get('/api/GetTenant')
            .then((res) => res)
            .then((d) => d.data);
    }
}