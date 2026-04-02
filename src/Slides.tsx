import TitleSlide from './slides/TitleSlide';
import AgendaSlide from './slides/AgendaSlide';
import SectionHeaderSlide from './slides/SectionHeaderSlide';
import ContentSlide from './slides/ContentSlide';
import CardsSlide from './slides/CardsSlide';
import DefinitionSlide from './slides/DefinitionSlide';
import VisualSlide from './slides/VisualSlide';
import ComparisonSlide from './slides/ComparisonSlide';
import TableSlide from './slides/TableSlide';
import TakeawaysSlide from './slides/TakeawaysSlide';
import ClosingSlide from './slides/ClosingSlide';

export default function Slides() {
  return (
    <>
      {/* ====================================================
           TITLE SLIDE
      ===================================================== */}
      <TitleSlide />

      {/* ====================================================
           TABLE OF CONTENTS
      ===================================================== */}
      <AgendaSlide />

      {/* ====================================================
           SECTION 1: INTRODUCTION
      ===================================================== */}
      <SectionHeaderSlide
        number="01"
        title="Section One"
        subtitle="Subtitle or description"
      />

      <ContentSlide />

      <CardsSlide />

      {/* ====================================================
           SECTION 2: FOUNDATIONS
      ===================================================== */}
      <SectionHeaderSlide
        number="02"
        title="Section Two"
        subtitle="Foundations"
      />

      <DefinitionSlide />

      <VisualSlide />

      {/* ====================================================
           SECTION 3: CORE CONTENT
      ===================================================== */}
      <SectionHeaderSlide
        number="03"
        title="Section Three"
        subtitle="Core concepts"
      />

      <ComparisonSlide />

      <TableSlide />

      {/* ====================================================
           SECTION 4: SUMMARY & CLOSE
      ===================================================== */}
      <SectionHeaderSlide
        number="04"
        title="Summary & Conclusion"
      />

      <TakeawaysSlide />

      <ClosingSlide />
    </>
  );
}