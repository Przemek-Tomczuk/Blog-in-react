import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Essay() {
  const { id } = useParams();
  const [essay, setEssay] = useState(null);

  useEffect(() => {
    // Replace this with actual fetching logic
    const essayData = {
      id,
      title: `Essay Title ${id}`,
      date: 'January 1, 2025',
      content: 'This is the content of your essay...',
    };
    setEssay(essayData);
  }, [id]);

  if (!essay) return <div>Loading...</div>;

  return (
    <div className="essay">
      <h1>{essay.title}</h1>
      <p className="date">{essay.date}</p>
      <div className="content">{essay.content}</div>
    </div>
  );
}

export default Essay;