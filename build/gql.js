"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class lib_gql {
    static combineQueries(queries) {
        let combinedQuery = "query {\n";
        queries.forEach((query) => {
            combinedQuery += `${query}\n`;
        });
        combinedQuery += "}";
        return combinedQuery;
    }
}
exports.default = lib_gql;
