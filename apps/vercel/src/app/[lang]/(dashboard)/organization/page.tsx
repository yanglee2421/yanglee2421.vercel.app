import { postgres } from "@/shared/instances/postgres";

export default async function Page() {
  const organizations = await postgres.query.users.findMany({
    with: {
      organizations: true,
    },
  });

  return <></>;
}
