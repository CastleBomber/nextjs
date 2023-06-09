import Repo from "@/app/components/Repo";
import Link from "next/Link";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">Back to Repositories</Link>
      <Repo name={name} />
    </div>
  );
};

export default RepoPage;
