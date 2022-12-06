import "server-only";

import { cookies } from "next/headers";

import YAML from "yaml";

export async function getData({
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
