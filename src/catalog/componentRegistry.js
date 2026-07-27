import AboutJeff from '../components/AboutJeff';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import PastWork from '../components/PastWork';
import RouteEffects from '../components/RouteEffects';
import Services from '../components/Services';
import VisualPlaceholder from '../components/VisualPlaceholder';
import WorkInProgress from '../components/WorkInProgress';
import CardsGrid from '../components/layouts/CardsGrid';
import CatalogCard from '../components/layouts/CatalogCard';
import FaqAccordion from '../components/layouts/FaqAccordion';
import FeatureList from '../components/layouts/FeatureList';
import HeadingDetail from '../components/layouts/HeadingDetail';
import HeadingDisplay from '../components/layouts/HeadingDisplay';
import HeadingMicro from '../components/layouts/HeadingMicro';
import HeadingSection from '../components/layouts/HeadingSection';
import HeadingSubsection from '../components/layouts/HeadingSubsection';
import HeroBanner from '../components/layouts/HeroBanner';
import HeroFullWidth from '../components/layouts/HeroFullWidth';
import ImageGridFour from '../components/layouts/ImageGridFour';
import ImageSingle from '../components/layouts/ImageSingle';
import ImageText from '../components/layouts/ImageText';
import ImageTextSplit from '../components/layouts/ImageTextSplit';
import ImageTile from '../components/layouts/ImageTile';
import ImageTwoUp from '../components/layouts/ImageTwoUp';
import LayoutOptionHeading from '../components/layouts/LayoutOptionHeading';
import SidebarLeft from '../components/layouts/SidebarLeft';
import SidebarRight from '../components/layouts/SidebarRight';
import SplitColumns from '../components/layouts/SplitColumns';
import Standard from '../components/layouts/Standard';
import StandardCentered from '../components/layouts/StandardCentered';
import TestimonialCards from '../components/layouts/TestimonialCards';
import TextImage from '../components/layouts/TextImage';
import ThreeColumnTable from '../components/layouts/ThreeColumnTable';
import TwoColumnTable from '../components/layouts/TwoColumnTable';
import CareerAccordion from '../components/site/CareerAccordion';
import EditorialPortfolioHero from '../components/site/EditorialPortfolioHero';
import LandscapeMediaImage from '../components/site/LandscapeMediaImage';
import PortfolioComparison from '../components/site/PortfolioComparison';
import ResponsiveImage from '../components/site/ResponsiveImage';
import SiteFooter from '../components/site/SiteFooter';
import SiteHeader from '../components/site/SiteHeader';
import SquareProfileImage from '../components/site/SquareProfileImage';

export const componentRegistry = [
  { name: 'AboutJeff', component: AboutJeff, group: 'legacy-page' },
  { name: 'Contact', component: Contact, group: 'legacy-page' },
  { name: 'Footer', component: Footer, group: 'legacy-shell' },
  { name: 'Header', component: Header, group: 'legacy-shell' },
  { name: 'Home', component: Home, group: 'legacy-page' },
  { name: 'PastWork', component: PastWork, group: 'legacy-page' },
  { name: 'RouteEffects', component: RouteEffects, group: 'legacy-shell' },
  { name: 'Services', component: Services, group: 'legacy-example' },
  { name: 'VisualPlaceholder', component: VisualPlaceholder, group: 'legacy-utility' },
  { name: 'WorkInProgress', component: WorkInProgress, group: 'legacy-catalog' },
  { name: 'CardsGrid', component: CardsGrid, group: 'layout' },
  { name: 'CatalogCard', component: CatalogCard, group: 'layout' },
  { name: 'FaqAccordion', component: FaqAccordion, group: 'layout' },
  { name: 'FeatureList', component: FeatureList, group: 'layout' },
  { name: 'HeadingDetail', component: HeadingDetail, group: 'layout' },
  { name: 'HeadingDisplay', component: HeadingDisplay, group: 'layout' },
  { name: 'HeadingMicro', component: HeadingMicro, group: 'layout' },
  { name: 'HeadingSection', component: HeadingSection, group: 'layout' },
  { name: 'HeadingSubsection', component: HeadingSubsection, group: 'layout' },
  { name: 'HeroBanner', component: HeroBanner, group: 'layout' },
  { name: 'HeroFullWidth', component: HeroFullWidth, group: 'layout' },
  { name: 'ImageGridFour', component: ImageGridFour, group: 'layout' },
  { name: 'ImageSingle', component: ImageSingle, group: 'layout' },
  { name: 'ImageText', component: ImageText, group: 'layout' },
  { name: 'ImageTextSplit', component: ImageTextSplit, group: 'layout' },
  { name: 'ImageTile', component: ImageTile, group: 'layout' },
  { name: 'ImageTwoUp', component: ImageTwoUp, group: 'layout' },
  { name: 'LayoutOptionHeading', component: LayoutOptionHeading, group: 'layout' },
  { name: 'SidebarLeft', component: SidebarLeft, group: 'layout' },
  { name: 'SidebarRight', component: SidebarRight, group: 'layout' },
  { name: 'SplitColumns', component: SplitColumns, group: 'layout' },
  { name: 'Standard', component: Standard, group: 'layout' },
  { name: 'StandardCentered', component: StandardCentered, group: 'layout' },
  { name: 'TestimonialCards', component: TestimonialCards, group: 'layout' },
  { name: 'TextImage', component: TextImage, group: 'layout' },
  { name: 'ThreeColumnTable', component: ThreeColumnTable, group: 'layout' },
  { name: 'TwoColumnTable', component: TwoColumnTable, group: 'layout' },
  { name: 'CareerAccordion', component: CareerAccordion, group: 'site-variant' },
  { name: 'EditorialPortfolioHero', component: EditorialPortfolioHero, group: 'site-variant' },
  { name: 'LandscapeMediaImage', component: LandscapeMediaImage, group: 'site-variant' },
  { name: 'PortfolioComparison', component: PortfolioComparison, group: 'site-variant' },
  { name: 'ResponsiveImage', component: ResponsiveImage, group: 'site-variant' },
  { name: 'SiteFooter', component: SiteFooter, group: 'site-variant' },
  { name: 'SiteHeader', component: SiteHeader, group: 'site-variant' },
  { name: 'SquareProfileImage', component: SquareProfileImage, group: 'site-variant' },
];
