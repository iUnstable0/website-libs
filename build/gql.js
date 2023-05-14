"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class lib_gql {
    static combineQueries(...queries) {
        const combinedQueryVariables = {};
        const rawQueries = [];
        queries.forEach((query) => {
            let queryVariables;
            if (query.includes("$")) {
                queryVariables = query
                    .substring(query.indexOf("(") + 1, query.indexOf(")"))
                    .trim();
            }
            if (queryVariables) {
                queryVariables.split(",").forEach((variable) => {
                    const [key, value] = variable.split(":");
                    combinedQueryVariables[key.trim()] = value.trim();
                });
            }
            const rawQuery = query
                .substring(query.indexOf("{") + 1, query.lastIndexOf("}"))
                .trim();
            rawQueries.push(rawQuery);
        });
        return `
        query${Object.keys(combinedQueryVariables).length
            ? `(${Object.keys(combinedQueryVariables)
                .map((key) => `${key}: ${combinedQueryVariables[key]}`)
                .join(", ")})`
            : ""} {
            ${rawQueries.join("\n")}
        }
    `;
    }
}
exports.default = lib_gql;
