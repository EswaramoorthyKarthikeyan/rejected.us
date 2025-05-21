import React from 'react';

const Story = ({ story }) => {
  const { double } = story;

  return (
    <article key={story.handle} className={`story ${double ? 'story-double' : ''}`}>
      <div className="story-header">
        <span className="story-header-image">
          <img
            alt={story.handle}
            className="story-image"
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              story.avatar
            }
          />
        </span>
        <div className="story-header-info">
          <span className="story-fullname">{story.fullName}</span>
          <span className="story-bio-container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={story.website}
            >
              @{story.handle}
            </a>
            <span className="story-bio">{story.bio}</span>
          </span>
        </div>
      </div>
      <blockquote className="story-desc">{story.story}</blockquote>
    </article>
  );
};

export default Story;
