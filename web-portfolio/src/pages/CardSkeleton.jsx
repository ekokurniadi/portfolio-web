import React from "react";
import "./styles.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const CardSkeleton = () => {
  return (
    <section className="card-component">
      <div id="cards_landscape_wrap-2">
        <div className="card-flyer">
          <div className="text-box">
            <div className="image-box">
              <div className="tag">
                <Skeleton
                  width={50}
                  height={20}
                  baseColor="white"
                  highlightColor="grey"
                  duration={1}
                  direction="ltr"
                  enableAnimation={true}
                />
              </div>
              <Skeleton
                width={350}
                height={200}
                baseColor="white"
                highlightColor="grey"
                duration={1}
                direction="ltr"
                enableAnimation={true}
              />
            </div>
            <div className="text-container">
              <h6>
                <Skeleton
                  width={300}
                  height={30}
                  baseColor="white"
                  highlightColor="grey"
                  duration={1}
                  direction="ltr"
                  enableAnimation={true}
                />
              </h6>
              <p style={{textAlign:"left"}}>
              <Skeleton
                  width={300}
                  height={15}
                  baseColor="white"
                  highlightColor="grey"
                  duration={1.5}
                  direction="rtl"
                  enableAnimation={true}
                />
              <Skeleton
                  width={250}
                  height={10}
                  baseColor="white"
                  highlightColor="grey"
                  duration={1.5}
                  direction="rtl"
                  enableAnimation={true}
                />
              <Skeleton
                  width={200}
                  height={10}
                  baseColor="white"
                  highlightColor="grey"
                  duration={1.5}
                  direction="rtl"
                  enableAnimation={true}
                />
              <Skeleton
                  width={300}
                  height={10}
                  baseColor="white"
                  highlightColor="grey"
                  duration={1.5}
                  direction="rtl"
                  enableAnimation={true}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
