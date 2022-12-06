import { OpenapiDoc } from "@components/OpenapiDoc";
import { getData } from "./data";

export default async function Home({
	searchParams,
}: {
	searchParams: { name: string; namespace: string };
}) {
	const data = await getData(searchParams);
	return (
		<div>
			<OpenapiDoc data={data} />
		</div>
	);
}
