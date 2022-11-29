import { cookies } from "next/headers";

import YAML from "yaml";
import { OpenapiDoc } from "@components/OpenapiDoc";

async function getData({
	name,
	namespace,
}: {
	name: string;
	namespace: string;
}) {
	const nextCookies = cookies();

	if (!name || !namespace) {
		throw Error("Cannot fetch data without name and namespace");
	}
	const res = await fetch(
		`${process.env.kuskAPI}/apis/${namespace}/${name}/crd`
	);

	const data = await res.json();
	return YAML.parse(data?.spec?.spec);
}

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
