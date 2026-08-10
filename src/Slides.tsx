import TitleSlide from './slides/TitleSlide';
import SectionHeaderSlide from './slides/SectionHeaderSlide';
import ClosingSlide from './slides/ClosingSlide';

export default function Slides() {
  return (
    <>
      <TitleSlide />

      <SectionHeaderSlide number="01" title="Teilabschnitt 1" subtitle="Kurze Beschreibung" />
      <SectionHeaderSlide number="02" title="Teilabschnitt 2" subtitle="Kurze Beschreibung" />
      <SectionHeaderSlide number="03" title="Teilabschnitt 3" subtitle="Kurze Beschreibung" />
      <SectionHeaderSlide number="04" title="Teilabschnitt 4" subtitle="Kurze Beschreibung" />

      <ClosingSlide />
    </>
  );
}