import { useState, useEffect } from "react";

const ImageGrid = ({ src, title, description, index }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsInfoVisible(!isInfoVisible);
    }
  };

  return (
    <div className="relative w-full h-auto">
      <div
        className="relative cursor-pointer w-full aspect-video"
        onClick={handleInteraction}
        onMouseEnter={() => !isMobile && setIsInfoVisible(true)}
        onMouseLeave={() => !isMobile && setIsInfoVisible(false)}
      >
        <img
          src={src}
          alt={title}
          className="object-cover rounded-xl  aspect-square"
        />
        
        {isInfoVisible && (
          <div className="absolute -top-16 left-0 w-full bg-[#08090A] text-neutral-300 p-4 rounded-lg shadow-lg md:transition-opacity md:duration-200">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;