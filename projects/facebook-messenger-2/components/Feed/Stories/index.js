import StoryCard from "./StoryCard";

function Stories() {
  const stories = [
    {
      id: 1,
      name: "Sonny Sangha",
      src: "https://links.papareact.com/z0f",
      profile: "https://links.papareact.com/l4v",
    },
    {
      id: 2,
      name: "Elon Musk",
      src: "https://links.papareact.com/42n",
      profile: "https://links.papareact.com/kxk",
    },
    {
      id: 3,
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      id: 4,
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zxy",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => {
        return (
          <StoryCard
            key={story.id}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
}

export default Stories;
