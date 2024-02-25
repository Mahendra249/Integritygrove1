import  { Suspense ,lazy} from "react";

const Header = lazy(() => import("../components/ourTeamPage/Header"));
const TeamCrews = lazy(() => import("@/components/ourTeamPage/TeamCrews"));
const Parallex = lazy(() => import("@/components/ourTeamPage/Parallex"));

function OurTeamPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <TeamCrews />
        <Parallex />
      </Suspense>
    </>
  );
}

export default OurTeamPage;
