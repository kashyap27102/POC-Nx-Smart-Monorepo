import {
  Badge,
  Button,
  Card,
  PageTitle,
  SearchInput,
} from '@simform/shared-ui';
import logo from '../../public/logo.png';
import { useEffect, useState } from 'react';

export function App() {
  const [course, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_BASE_URL}/courses`
        );
        const result = await res.json();
        setCourses(result.data);
      } catch (error) {
        console.log(error);
        setCourses([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-10">
      <div className="flex gap-4 mb-10 items-center">
        <img src={logo} alt="logo" width={100} />
        <PageTitle title="Simform lms Portal" />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl mb-2 font-semibold">My Course</h2>
            <h4 className="text-xl mb-4">Course Overview</h4>
          </div>
          <div>
            <SearchInput />
          </div>
        </div>
        <hr className="mb-4" />
        <div className="grid grid-cols-4 gap-4">
          {course.map((c: any) => {
            return (
              <Card classname="flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className="text-rose-400 text-xl font-bold mb-4">
                    {c.title}
                  </h3>
                  <Badge>{c.category}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{c.progress}% Progress</span>
                  <span className="text-rose-400 hover:underline cursor-pointer">
                    View
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
