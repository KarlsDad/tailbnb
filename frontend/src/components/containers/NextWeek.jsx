import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PulseLoader from 'react-spinners/PulseLoader';
import withSizes from 'react-sizes';

// Components
import { LocationExperienceCard } from '../functions/LocationExperienceCard';
import { ShowAll } from '../ShowAll';

// Wrapper
import { Section } from '../wrapper/Section';

const GET_LOCATION_EXPERIENCES = gql`
  query LocationExperiences($available: String, $location: String) {
    experiences(
      where: { available: $available, location: $location }
      first: 6
    ) {
      id
      title
      cost
      ratings
      reviews
      location
      img
      available
      category
    }
  }
`;

const renderContent = (data, number) => {
  var content = [];

  for (let i = 0; i < number; i++) {
    content.push(
      <div className='pb-5'>
        <LocationExperienceCard
          key={i}
          id={data?.experiences[i].id}
          img={data?.experiences[i].img}
          title={data?.experiences[i].title}
          cost={data?.experiences[i].cost}
          ratings={data?.experiences[i].ratings}
          reviews={data?.experiences[i].reviews}
          category={data?.experiences[i].category}
        />
      </div>
    );
  }
  return content;
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 767,
  isTablet: width > 767 && width < 1023,
  isLaptop: width > 1023 && width < 1279,
  isDesktop: width > 1279 && width < 1529,
  isLargeDesktop: width > 1529
});

// interface Experience {
//   id: string;
//   title: string;
//   cost: number;
//   ratings: number;
//   reviews: number;
//   category: string;
//   img: string;
// }

// interface ExperienceData {
//   experiences: Experience[];
// }

const NextWeek = ({
  isMobile,
  isTablet,
  isLaptop,
  isDesktop,
  isLargeDesktop
}) => {
  const { loading, error, data } = useQuery(GET_LOCATION_EXPERIENCES, {
    variables: {
      available: 'Next Week',
      location: 'Vancouver'
    }
  });

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Section
        title='Next Week in Vancouver'
        phrase='Book activities led by local hosts on your next trip.'>
        <div className='grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full'>
          {loading ? (
            <div className='flex justify-center items-center w-full py-20'>
              <PulseLoader size={10} color={'#008489'} />
            </div>
          ) : (
            data && (
              <>
                {isMobile ? renderContent(data, 4) : null}
                {isTablet ? renderContent(data, 3) : null}
                {isLaptop ? renderContent(data, 4) : null}
                {isDesktop ? renderContent(data, 5) : null}
                {isLargeDesktop ? renderContent(data, 6) : null}
              </>
            )
          )}
        </div>
        <ShowAll title='Show all experiences' />
      </Section>
    </>
  );
};

export default withSizes(mapSizesToProps)(NextWeek);
