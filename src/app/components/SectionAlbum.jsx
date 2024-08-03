import React, { useContext } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import CardAlbum from './CardAlbum';
import CardGot from './CardGot';
import { DataContext } from '../context/DataContext';

const accordionStyles = {
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '10px',
};

const typographyStyles = {
  color: '#ffb01f',
  fontFamily: 'PT Sans Narrow, sans-serif'
}

export default function SectionAlbum({ data }) {
  const { resultEnvelope } = useContext(DataContext);

  const isInResultEnvelope = (index, category) => {
    return resultEnvelope.some(
      envelope => envelope.index === index && envelope.category === category
    );
  };

  return (
    <Box>
      <Accordion defaultExpanded style={accordionStyles}>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls='SectionAlbum-content'
          id='sectionfilms'>
          <Typography variant='h3' sx={typographyStyles}>Películas</Typography>
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
                <CardGot key={index} data={film} index={index} type={'films'} />
              ) : (
                <CardAlbum key={index} index={index} type={'films'} />
              )
            )
          ) : (
            <Box
              sx={{
                width: '98vw',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 4,
              }}></Box>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={accordionStyles}>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls='SectionAlbum-content'
          id='sectionfilms'>
          <Typography variant='h3' sx={typographyStyles}>Personajes</Typography>
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
                <CardGot
                  key={index}
                  data={people}
                  index={index}
                  type={'people'}
                />
              ) : (
                <CardAlbum key={index} index={index} type={'people'} />
              )
            )
          ) : (
            <Box
              sx={{
                width: '98vw',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 4,
              }}></Box>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={accordionStyles}>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls='SectionAlbum-content'
          id='sectionfilms'>
          <Typography variant='h3' sx={typographyStyles}>Naves</Typography>
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
                  type={'starships'}
                />
              ) : (
                <CardAlbum key={index} index={index} type={'starships'} />
              )
            )
          ) : (
            <Box
              sx={{
                width: '98vw',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 4,
              }}></Box>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
