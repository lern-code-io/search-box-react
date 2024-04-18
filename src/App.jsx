import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log(e);
      }
    };

    getPosts();
  }, []);

  function handleSearch(e) {
    // implement this function
  }

  return (
    <>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
