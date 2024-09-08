// 'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

// Custom hook to detect mobile screen
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

interface ContentItemProps {
  className?: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const ContentItem: React.FC<ContentItemProps> = ({ className = "", quote, imageSrc, imageAlt, imageWidth, imageHeight }) => {
  const formattedText = quote.replace(/\n/g, '<br>');
  const combinedClassName = clsx("flex-shrink-0 px-6 flex flex-col justify-between items-center w-[319px] h-[136px]", className);
  return (
    <div className={combinedClassName}>
      <div className="flex h-[72px]">
        <blockquote className="blockquote text-black text-2xl font-priori"
          dangerouslySetInnerHTML={{ __html: formattedText }}>
        </blockquote>
      </div>
      <div className="grid place-items-center w-[271px]">
        <Image
          className=""
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          src={imageSrc}
        />
      </div>
    </div>
  )
};

const HorizontalScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return; // Only run animation on mobile

    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 1; // Adjust this value to change scroll speed
      if (scrollPosition >= scrollElement.scrollWidth - scrollElement.clientWidth) {
        scrollPosition = 0;
      }
      scrollElement.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  if (!isMobile) return null; // Don't render anything on non-mobile screens

  return (
    <div className="w-full overflow-hidden bg-white p-4">
      <div
        ref={scrollRef}
        className="whitespace-nowrap flex"
        style={{ willChange: 'scroll-position' }}
      >
        <div className="flex animate-marquee divide-x-2 items-center justify-between text-center">
          <ContentItem
            className="border-l-4 border-black"
            quote={`Simple, straightforward, and\nsuper powerful`}
            imageSrc="/images/the-verge.png"
            imageAlt="The Verge logo"
            imageWidth={92}
            imageHeight={16}
          />
          <ContentItem
            quote="Simply a joy to use"
            imageSrc="/images/wirecutter.png"
            imageAlt="wirecutter logo"
            imageWidth={138}
            imageHeight={18}
          />
          <ContentItem
            quote={`The best to-do list app on the\nmarket`}
            imageSrc="/images/pc-mag.png"
            imageAlt="PC mag logo"
            imageWidth={30}
            imageHeight={40}
          />
          <ContentItem
            quote="Nothing short of stellar"
            imageSrc="/images/techradar.png"
            imageAlt="techradar logo"
            imageWidth={120}
            imageHeight={18}
          />
        </div>
        <div className="flex animate-marquee divide-x-2 items-center justify-between text-center">
          <ContentItem
            quote={`Simple, straightforward, and\nsuper powerful`}
            imageSrc="/images/the-verge.png"
            imageAlt="The Verge logo"
            imageWidth={92}
            imageHeight={16}
          />
          <ContentItem
            quote="Simply a joy to use"
            imageSrc="/images/wirecutter.png"
            imageAlt="wirecutter logo"
            imageWidth={138}
            imageHeight={18}
          />
          <ContentItem
            quote={`The best to-do list app on the\nmarket`}
            imageSrc="/images/pc-mag.png"
            imageAlt="PC mag logo"
            imageWidth={30}
            imageHeight={40}
          />
          <ContentItem
            quote="Nothing short of stellar"
            imageSrc="/images/techradar.png"
            imageAlt="techradar logo"
            imageWidth={120}
            imageHeight={18}
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;