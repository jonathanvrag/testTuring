import React, { useContext } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Skeleton,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import CardAlbum from './CardAlbum';
import CardGot from './CardGot';
import { DataContext } from '../context/DataContext';

export default function SectionAlbum({ data }) {
  const { resultEnvelope } = useContext(DataContext);

  const isInResultEnvelope = (index, category) => {
    return resultEnvelope.some(
      envelope => envelope.index === index && envelope.category === category
    );
  };

  return (
    <Box>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls='SectionAlbum-content'
          id='sectionfilms'>
          Films
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 4,
          }}>
          {data.films && data.films.length > 0 ? (
            data.films.map((film, index) =>
              isInResultEnvelope(index, 'films') ? (
                <CardGot 
                key={index} 
                data={film}
                index={index}
                type={'films'}/>
              ) : (
                <CardAlbum
                  key={index}
                  index={index}
                  type={'films'}
                />
              )
            )
          ) : (
            <Box
              sx={{
                width: '98vw',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 4,
              }}>
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls='SectionAlbum-content'
          id='sectionfilms'>
          Peoples
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 4,
          }}>
          {data.people && data.people.length > 0 ? (
            data.people.map((people, index) =>
              isInResultEnvelope(index, 'people') ? (
                <CardGot key={index} 
                data={people}
                index={index}
                type={'people'}/>
              ) : (
                <CardAlbum
                  key={index}
                  index={index}
                  type={'people'}
                />
              )
            )
          ) : (
            <Box
              sx={{
                width: '98vw',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 4,
              }}>
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls='SectionAlbum-content'
          id='sectionfilms'>
          Starships
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 4,
          }}>
          {data.starships && data.starships.length > 0 ? (
            data.starships.map((starship, index) =>
              isInResultEnvelope(index, 'starships') ? (
                <CardGot
                key={index}
                data={starship}
                index={index}
                type={'starships'}/>
              ) : (
                <CardAlbum
                  key={index}
                  index={index}
                  type={'starships'}
                />
              )
            )
          ) : (
            <Box
              sx={{
                width: '98vw',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 4,
              }}>
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
              <Skeleton variant='rectangular' width={345} height={80} />
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
