import { ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import React from 'react';
import CardAlbum from './CardAlbum';

export default function SectionAlbum({ data }) {
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
          display: 'flex',
          gap: 4,
        }}>
        {data.films && data.films.results && data.films.results.length > 0 ? (
          data.films.results.map((film, index) => (
            <CardAlbum key={index} data={film} index={index}/>
          ))
        ) : (
          <p>No films available</p>
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
          {data.people && data.people && data.people.length > 0 ? (
            data.people.map((people, index) => (
              <CardAlbum key={index} data={people} index={index} />
            ))
          ) : (
            <p>No peoples available</p>
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
          {data.starships && data.starships && data.starships.length > 0 ? (
            data.starships.map((starships, index) => (
              <CardAlbum key={index} data={starships} index={index} />
            ))
          ) : (
            <p>No starships available</p>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
