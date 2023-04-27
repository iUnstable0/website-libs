export default class lib_gql {
  public static combineQueries(queries: Array<string>): string {
    let combinedQuery = "query {\n";

    queries.forEach((query) => {
      combinedQuery += `${query}\n`;
    });

    combinedQuery += "}";

    return combinedQuery;
  }
}
