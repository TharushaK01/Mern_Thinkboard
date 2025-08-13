import React, { use } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';

const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(ture);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/notes");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log("Error fetching notes");
      }
    }

    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage