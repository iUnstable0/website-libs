"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class lib_gql {
    static combineQueries(...queries) {
        const combinedQueryContent = queries
            .map((query) => {
            const lines = query.trim().split("\n");
            const contentLines = lines.slice(1, -1);
            return contentLines.map((line) => line.trim()).join("\n");
        })
            .join("\n");
        return `
        query {
            ${combinedQueryContent}
        }
    `;
    }
}
exports.default = lib_gql;
