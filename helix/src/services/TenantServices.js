import server from "../components/server";

export class TenantService {
    constructor() {
    }

    getTenants() {
        return server.get('/api/GetTenant')
            .then((res) => res)
            .then((d) => d.data);
    }

    getTenantsByID(id) {
        return server.get('/api/GetTenantID?id='+id)
            .then((res) => res)
            .then((d) => d.data);
    }

    editTenant(data){
        return server.put('/api/EditTenant',data)
            .then((res) => res)
            .then((d) => d.data);
    }

    searchTenant(name) {
        return server.get('/api/SearchTenant?name='+name)
            .then((res) => res)
            .then((d) => d.data);
    }

    suspendTenant(id) {
        return server.get('/api/SuspendTenant?id='+id)
            .then((res) => res)
            .then((d) => d.data);
    }

}