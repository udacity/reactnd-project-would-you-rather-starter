export const computeQueryParameters = (search) => {
  if (search.indexOf("?") !== 0) return null;

  const query = {};
  const splits = search.slice(1).split("&");
  splits.forEach((split) => {
    const [k, v] = split.split("=");
    query[k] = v;
  });

  return query;
};
