import { useRef } from 'react';
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import { siteConfig } from './siteConfig';
import { Button } from './ui';
import { PremiumImage } from './PremiumImage';
import HeroSlideshow from './HeroSlideshow';
import { ArrowRight, Phone } from 'lucide-react';
import { useIsMobile } from './use-mobile';
