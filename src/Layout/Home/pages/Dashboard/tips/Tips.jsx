import React from "react";
import Carousel, {
  CarouselItem,
} from "../../../../../components/Carousel/Carousel";
import "./Tips.scss";

const data = [
  {
    id: 1,
    title: "Gold is up 20%",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pellentesque, lacus non congue convallis, dolor elit cursus urna,
              ac feugiat neque elit id risus. Sed dolor eros, ullamcorper nec
              libero vitae, malesuada fringilla eros. Sed ultrices, mauris ut
              porta cursus, mauris dolor vulputate dolor, sed accumsan purus
              eros non sem.`,
  },
  {
    id: 2,
    title: "Diamond is up 10%",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pellentesque, lacus non congue convallis, dolor elit cursus urna,
              ac feugiat neque elit id risus. Sed dolor eros, ullamcorper nec
              libero vitae, malesuada fringilla eros. Sed ultrices, mauris ut
              porta cursus, mauris dolor vulputate dolor, sed accumsan purus
              eros non sem.`,
  },
  {
    id: 3,
    title: "Silver is up 15%",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pellentesque, lacus non congue convallis, dolor elit cursus urna,
              ac feugiat neque elit id risus. Sed dolor eros, ullamcorper nec
              libero vitae, malesuada fringilla eros. Sed ultrices, mauris ut
              porta cursus, mauris dolor vulputate dolor, sed accumsan purus
              eros non sem.`,
  },
  {
    id: 4,
    title: "Stones is up 20%",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pellentesque, lacus non congue convallis, dolor elit cursus urna,
              ac feugiat neque elit id risus. Sed dolor eros, ullamcorper nec
              libero vitae, malesuada fringilla eros. Sed ultrices, mauris ut
              porta cursus, mauris dolor vulputate dolor, sed accumsan purus
              eros non sem.`,
  },
];

export default function Tips() {
  return (
    <div className="Tips">
      <h1 className="TipsHead">Tips</h1>
      <Carousel>
        {data.map((d) => (
          <CarouselItem key={d.id}>
            <div className="TipsCard">
              <h1 className="TipsCardTop">{d.title}</h1>
              <div className="TipsCardBottom">
                <p>{d.text}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
