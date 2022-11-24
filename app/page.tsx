import Image from "next/image";
import { wrapper } from "@redux/store";
import { OpenapiDoc } from "@components/OpenapiDoc";

async function getData(params: any) {
	console.log(process.env.kuskAPI);
	console.log(params);
	const res = await fetch(
		"https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v2.0/json/api-with-examples.json"
	);

	return res.json();
}

export default async function Home({
	searchParams,
}: {
	searchParams: { app: string; namespace: string };
}) {
	const data = await getData({ searchParams });
	return (
		<div>
			<OpenapiDoc data={data} />
		</div>
	);
}
