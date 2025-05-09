import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const faqs = [
  {
    question: 'Lorem Ipsum is simply dummy text',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    question: 'Lorem Ipsum is simply dummy text',
    answer: 'Answer content for second question.',
  },
  {
    question: 'Lorem Ipsum is simply dummy text',
    answer: 'Answer content for third question.',
  },
  {
    question: 'Lorem Ipsum is simply dummy text',
    answer: 'Answer content for fourth question.',
  },
  {
    question: 'Lorem Ipsum is simply dummy text',
    answer: 'Answer content for fifth question.',
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (index) => (_event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <Box sx={{ py: 10, }}>
      <Container maxWidth="lg">
        <Typography variant='h4'
          align='center'
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", my: "30px" }}>
          Câu hỏi thường gặp
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={4}>
          Tìm câu trả lời cho những thắc mắc phổ biến EcBoost
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              mb: 2,
              borderRadius: 2,
              boxShadow: expanded === index ? 2 : 0,
              '&:before': { display: 'none' },
              backgroundColor: '#f9f9f9',
              border:"1.5px solid #ccc"
            }}
          >
            <AccordionSummary
              expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
