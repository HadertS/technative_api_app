
export default async function Page() {
  const data = await fetch("https://api.apis.guru/v2/providers.json");
  const providers = await data.json();
  return (
    <ul>
      {providers.data.map((provider:string) => (
        <ul key={provider}>{provider}</ul>
      ))}
    </ul>
  );
}
