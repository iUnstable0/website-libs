export default class lib_gql {
  public static combineQueries(...queries) {
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
