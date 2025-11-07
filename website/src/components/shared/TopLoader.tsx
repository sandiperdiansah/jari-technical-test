import NextTopLoader from "nextjs-toploader";

const TopLoader = () => {
    return (
        <NextTopLoader
            color="#e17100"
            height={2}
            showSpinner={false}
            shadow={false}
            crawlSpeed={150}
            speed={400}
            easing="ease-in-out"
            crawl={false}
        />
    );
};

export default TopLoader;
