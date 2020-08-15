export default async function fetcher(path) {
  return fetch(path).then((res) => res.json());
}
