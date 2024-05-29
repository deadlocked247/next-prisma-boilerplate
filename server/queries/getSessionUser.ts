import { getServerSession as getServerSessionNext } from "next-auth";
import { authOptions } from "../auth";

type SessionUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id: string;
};

export async function getSessionUser(): Promise<SessionUser | null> {
  const session = await getServerSessionNext(authOptions);
  return session?.user as SessionUser | null;
}
