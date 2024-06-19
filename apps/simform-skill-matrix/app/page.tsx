import { Badge, PageTitle, Card } from '@simform/shared-ui';
import Image from 'next/image';
import logo from '../public/logo.png';
import { getSkills, getSoftSkills } from '../data';

export default async function Index() {
  const skills = await getSkills();
  const softSkills = await getSoftSkills();
  return (
    <div className="p-10 space-y-4">
      <div className="flex gap-4 mb-10 items-center">
        <Image src={logo} alt="logo" width={100} />
        <PageTitle title="Simform skill-matrix " />
      </div>
      <h1 className="text-2xl font-bold mb-6">Skills Overview</h1>

      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-500">
            Technical Skills
          </h3>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-2">
          {skills.map((s: any) => {
            return (
              <Card key={s.id} classname="flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-rose-400 font-semibold text-xl">
                    {s.name}
                  </p>
                  <p className="text-gray-400">{s.category}</p>
                </div>
                <div className="flex gap-2 items-center">
                  {s.status === 'In Progress' && (
                    <p className="text-green-500">{s.status}</p>
                  )}
                  <Badge>{s.level}</Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-500">Soft Skills</h3>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-2">
          {softSkills.map((s: any) => {
            return (
              <Card key={s.id} classname="flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-rose-400 font-semibold text-xl">
                    {s.name}
                  </p>
                  <p className="text-gray-400">{s.category}</p>
                </div>
                <div className="flex gap-2 items-center">
                  {s.status === 'In Progress' && (
                    <p className="text-green-500">{s.status}</p>
                  )}
                  <Badge>{s.level}</Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
