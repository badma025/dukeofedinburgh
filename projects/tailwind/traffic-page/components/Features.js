import {
  ChartBarIcon,
  ChipIcon,
  ShoppingBagIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";


function Features() {
  const features = [
    { icon: SpeakerphoneIcon, title: "Digital Marketing" },
    { icon: ShoppingBagIcon, title: "E-Commerce" },
    { icon: ChipIcon, title: "Digital Research" },
    { icon: ChartBarIcon, title: "Digital Analysis" },
  ];
  return (
    <div className="flex gap-x-8 items-start py-16">
      {features.map((feature) => {
        return (
          <div
            className="w-1/4 flex flex-col items-start bg-gray-800 rounded-lg p-6 cursor-pointer group hover:bg-white transition duration-300"
            key={feature.title}>
            <div className="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-teal-200">
              {/* inner div because we can't apply styles directly to the icon */}
              <div className="h-6 w-6 text-white group-hover:text-gray-800 transition duration-300">
                <span className="">{feature.icon()}</span>
              </div>
            </div>
            <span className="inline-block pt-6 text-2xl font-medium tracking-wide text-white group-hover:text-gray-800 transition duration-300">
              {feature.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
